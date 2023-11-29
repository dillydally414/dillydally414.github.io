import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";
import { EntryType } from "../types";
import { Link, ProjectImage, SubHeader } from "../styles";
import styled, { useTheme } from "styled-components";

const ScrollbarContainer = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: scroll;
  position: sticky;
  top: 0;
`;

const InnerScrollbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-right: 4rem;
  max-height: 100%;
  width: 75%;
  overflow: scroll;
`;

const ImageLink = styled(Link)`
  border: unset;
  padding: unset;
  margin: 0;
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
    anchorRefs[selected]?.attributeStyleMap.set(
      "text-decoration-color",
      theme.accent
    );
    anchorRefs.map(
      (element, index) =>
        index !== selected &&
        element?.attributeStyleMap.set("text-decoration-color", theme.accent2)
    );
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
              (element) => element === entry.target
            );
            if (entryIndex !== -1) {
              newVisible[entryIndex] = entry.isIntersecting;
            }
            const scrollParent = anchorContainerRef?.parentElement;
            if (entryIndex === 0 && scrollParent) {
              const newFirst = scrollParent.scrollTop <= 5;
              newVisible[entryIndex] = newFirst;
            }
            if (entryIndex === newVisible.length - 1 && scrollParent) {
              const newLast =
                Math.abs(
                  scrollParent.scrollTop +
                    scrollParent.offsetHeight -
                    scrollParent.scrollHeight
                ) <= 5;
              newVisible[entryIndex] = newLast;
            }
          });
          return newVisible;
        }),
      {
        rootMargin: "-150px 0px -300px",
      }
    );

    anchorRefs.map((element) => element && observer.observe(element));

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
    <ScrollbarContainer>
      <InnerScrollbarContainer>
        {elements.map((e, index) => (
          <ImageLink
            onClick={() => {
              setSelected(index);
            }}
            as="button"
            ref={(current) => (imageRefs[index] = current)}
          >
            <ProjectImage
              src={e.image_url}
              alt={e.alt_text}
              $active={index === selected}
            />
          </ImageLink>
        ))}
      </InnerScrollbarContainer>
    </ScrollbarContainer>
  );
};

export default Scrollbar;
