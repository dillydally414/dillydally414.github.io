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
  height: 100%;
`;

export const Resume = styled.iframe`
  border-color: transparent;
  margin: 1rem 0;
  width: 650px;
  height: 100%;

  @media screen and (max-width: 480px) {
    width: 300px;
  }
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
      <Resume
        src={`https://docs.google.com/gview?url=${cvLink}&embedded=true`}
        title="Dillon Scott CV"
      />
    </ResumeDiv>
  );
};

export default CV;
