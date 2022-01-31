import React, { ReactElement } from 'react';
import { Document, Page } from 'react-pdf';

const resume = '%PUBLIC_URL%/resume.pdf';

const Resume = (): ReactElement => {
  return (
    <>
      <p>{resume}</p>
      <Document file={resume}>
        <Page />
      </Document>
    </>
  );
};

export default Resume;