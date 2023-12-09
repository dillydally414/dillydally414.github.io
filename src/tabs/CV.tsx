import { ReactElement, useContext, useRef, useState } from "react";
import styled from "styled-components";
import { Link, SubHeader } from "../styles";
import NewTabIcon from "../assets/newtab.svg?react";
import { SupabaseContext } from "../data/supabase";

const cvLink =
  "https://yfaqmlswjffrcahnqlms.supabase.co/storage/v1/object/public/assets/cv.pdf";

const CenteredLink = styled(Link)`
  align-items: flex-end;
  height: 2.5rem;
  justify-content: center;
  width: fit-content;

  svg {
    align-self: flex-end;
    fill: ${(props) => props.theme.text};
    height: 1.5rem;
    width: fit-content;
    aspect-ratio: 1;
  }

  :hover {
    color: ${(props) => props.theme.accent};
    svg {
      fill: ${(props) => props.theme.accent};
    }
  }
`;

const ResumeDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`;

export const Resume = styled.iframe`
  border-color: transparent;
  margin: 1rem 0;
`;

const CV = (): ReactElement => {
  const { editing, uploadFile } = useContext(SupabaseContext);
  const filesRef = useRef<HTMLInputElement | null>(null);

  return (
    <ResumeDiv>
      {editing && (
        <>
          <input type="file" accept=".pdf" ref={filesRef} />
          <button
            onClick={() => {
              const file = filesRef.current?.files?.item(0);
              if (file) {
                uploadFile("cv.pdf", file);
              }
            }}
          >
            save
          </button>
        </>
      )}
      <CenteredLink href={cvLink} target="_blank">
        <NewTabIcon height="100%" />
        <SubHeader $align="center">open in new tab</SubHeader>
      </CenteredLink>
      <Resume
        src={cvLink}
        width="650rem"
        height="900rem"
        title="Dillon Scott CV"
        allowFullScreen={true}
      />
    </ResumeDiv>
  );
};

export default CV;
