import React, { ReactElement, useEffect, useRef, useState } from "react";
import { EntryType } from "../types";
import { FadeColumn, FadeDiv, Link } from "../styles";
import styled, { useTheme } from "styled-components";
import { Fade } from "react-awesome-reveal";

const LeftSideContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 0 1 fit-content;
  flex-direction: row;
  justify-content: center;
  margin-right: 1rem;
  height: 100%;
  max-height: 100%;
  position: sticky;
  top: 0;
`;

const ScrollbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 2rem;
  width: 1rem;
  min-width: 1rem;
  height: 100%;
  max-height: 100%;
`;

const InnerScrollbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 100%;
  justify-content: start;
  height: 100%;
  object-fit: contain;
`;

const ImageLink = styled(Link)<{
  $active?: boolean;
  $name: string;
}>`
  ${(props) => props.theme.defaultProps}
  background-color: ${(props) =>
    props.$active ? props.theme.accent : props.theme.accent2};

  flex-direction: column;
  width: 100%;
  height: 100%;
  border: unset;
  padding: unset;
  margin: 1px;
  border-radius: 5px;
  transition-property: background-color;
  justify-content: center;

  &:after {
    ${(props) => props.theme.defaultProps};
    background-color: ${(props) =>
      props.$active ? props.theme.accent : props.theme.accent2};
    color: ${(props) => props.theme.background};
    content: "${(props) => props.$name}";
    align-self: baseline;
    position: relative;
    border-radius: 5px;
    left: 150%;
    text-align: start;
    opacity: 0;
    transition-property: opacity background-color;
    max-width: 5.5rem;
    width: max-content;
    overflow: hidden;
    overflow-wrap: break-word;
    pointer-events: none;
    cursor: default;
    padding: 0.25rem;
    z-index: 10;
  }

  &:hover {
    text-decoration: none;
    &:after {
      content: "${(props) => props.$name}";
      opacity: 1;
      overflow: visible;
    }
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 4rem;
`;

const ProjectImage = styled.img<{ $selected: boolean }>`
  align-self: start;
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  height: fit-content;
  max-width: 4rem;
  object-fit: contain;
  position: absolute;
  ${(props) => props.theme.defaultProps};
  opacity: ${(props) => (props.$selected ? "100%" : "50%")};
  transition-property: opacity;
`;

const useScrollTo = (
  anchorRefs: Array<HTMLElement | null>,
  buttonRefs: Array<HTMLElement | null>,
  anchorContainerRef: HTMLElement | null
): [number, (newValue: number) => void] => {
  const [selected, setSelected] = useState(0);
  const [visible, setVisible] = useState(anchorRefs.map((_element) => false));
  const [scrolling, setScrolling] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    if (anchorContainerRef && anchorContainerRef.parentElement) {
      anchorContainerRef.parentElement.scrollTop = 0;
    }
  }, [anchorContainerRef]);

  const scrollButton = (newSelected: number) => {
    if (!buttonRefs[newSelected]) return;
    const buttonOffset =
      buttonRefs[newSelected]!.offsetTop -
      0.5 *
        (buttonRefs[newSelected]!.parentElement!.offsetHeight -
          buttonRefs[newSelected]!.offsetHeight);
    buttonRefs[newSelected]?.parentElement?.scrollTo({
      behavior: "smooth",
      top: buttonOffset,
    });
  };

  const scrollAnchor = (newSelected: number) => {
    if (!anchorRefs[newSelected]) return;
    const anchorOffset =
      anchorRefs[newSelected]!.parentElement!.parentElement!.offsetTop -
      anchorContainerRef!.parentElement?.offsetTop! -
      0.3 * anchorContainerRef!.parentElement!.offsetHeight;
    anchorContainerRef?.parentElement?.scrollTo({
      behavior: "smooth",
      top: anchorOffset,
    });
    if (
      anchorRefs[newSelected]?.parentElement?.parentElement?.offsetTop ===
      anchorContainerRef?.parentElement?.offsetTop
    ) {
      setScrolling(false);
    }
    anchorContainerRef?.parentElement?.addEventListener(
      "scrollend",
      () => setScrolling(false),
      {
        once: true,
      }
    );
  };

  const newSetSelected = (newSelected: number) => {
    setScrolling(true);
    scrollButton(newSelected);
    scrollAnchor(newSelected);
    setSelected(newSelected);
  };

  useEffect(() => {
    if (anchorRefs[selected]) {
      anchorRefs[selected]!.style.textDecorationColor = theme.accent;
    }
    anchorRefs.map((element, index) => {
      if (index !== selected && element) {
        element.style.textDecorationColor = theme.accent2;
      }
    });
  }, [theme, anchorRefs, selected]);

  useEffect(() => {
    if (
      anchorContainerRef &&
      anchorContainerRef.parentElement !== null &&
      anchorRefs.length > 0 &&
      anchorRefs.every((element) => element !== null)
    ) {
      const scrollParent = anchorContainerRef.parentElement;
      const callback = () =>
        setVisible((prevVisible) => {
          const newFirst = scrollParent.scrollTop <= 5;
          const newLast =
            Math.abs(
              scrollParent.scrollTop +
                scrollParent.offsetHeight -
                scrollParent.scrollHeight
            ) <= 5;
          return [newFirst, ...prevVisible.slice(1, -1), newLast];
        });
      anchorContainerRef?.parentElement?.addEventListener("scroll", callback);
      return () =>
        anchorContainerRef?.parentElement?.removeEventListener(
          "scroll",
          callback
        );
    }
  }, [anchorContainerRef, anchorRefs, setVisible]);

  useEffect(() => {
    if (!scrolling) {
      let newSelected = undefined;
      if (!visible[selected]) {
        newSelected = visible[selected + 1]
          ? visible.indexOf(true)
          : visible.lastIndexOf(true);
      }
      if (visible[0]) {
        newSelected = 0;
      }
      if (visible[visible.length - 1]) {
        newSelected = visible.length - 1;
      }
      if (newSelected !== undefined) {
        scrollButton(newSelected);
        setSelected(newSelected);
      }
    }
  }, [setSelected, scrollButton, selected, visible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        setVisible((prevVisible) => {
          const newVisible = [...prevVisible];
          entries.map((entry) => {
            const entryIndex = anchorRefs.findIndex(
              (element) => element?.parentElement === entry.target
            );
            if (entryIndex !== -1) {
              newVisible[entryIndex] = entry.isIntersecting;
            }
            const scrollParent = anchorContainerRef?.parentElement;
            if (scrollParent) {
              const newFirst = scrollParent.scrollTop <= 5;
              const newLast =
                Math.abs(
                  scrollParent.scrollTop +
                    scrollParent.offsetHeight -
                    scrollParent.scrollHeight
                ) <= 5;
              newVisible[0] = newFirst;
              newVisible[newVisible.length - 1] = newLast;
            }
          });
          return newVisible;
        }),
      {
        rootMargin: "-300px 0px",
      }
    );

    anchorRefs.map(
      (element) =>
        element?.parentElement && observer.observe(element.parentElement)
    );

    return () => observer.disconnect();
  }, [anchorRefs, anchorContainerRef, setSelected, setVisible]);

  return [selected, newSetSelected];
};

const Scrollbar = ({
  elements,
  scrollRefs,
  containerRef,
}: {
  elements: EntryType[];
  scrollRefs: Array<HTMLElement | null>;
  containerRef: HTMLElement | null;
}): ReactElement => {
  const imageRefs = useRef<Array<HTMLElement | null>>([]).current;
  const [selected, setSelected] = useScrollTo(
    scrollRefs,
    imageRefs,
    containerRef
  );

  return (
    <LeftSideContainer>
      <ScrollbarContainer>
        <InnerScrollbarContainer>
          {elements.map((e, index) => (
            <ImageLink
              onClick={() => {
                setSelected(index);
              }}
              aria-label={`scroll to ${
                e.type === "PROJECT" ? e.name : e.place_of_work
              }`}
              $active={index === selected}
              $name={e.type === "PROJECT" ? e.name : e.place_of_work}
              as="button"
              ref={(current) => (imageRefs[index] = current)}
            />
          ))}
        </InnerScrollbarContainer>
      </ScrollbarContainer>
      <ImageColumn>
        {elements.map((e, index) => (
          <ProjectImage
            $selected={index === selected}
            src={elements[index].image_url}
            alt={elements[index].alt_text}
            style={{
              top:
                (scrollRefs[index]?.parentElement?.parentElement?.offsetTop ||
                  0) -
                (containerRef?.parentElement?.scrollTop || 0) -
                (containerRef?.offsetTop || 0),
            }}
          />
        ))}
      </ImageColumn>
    </LeftSideContainer>
  );
};

export default Scrollbar;
