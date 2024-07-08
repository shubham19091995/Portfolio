import React, { useState, useRef } from 'react';
import { Document, Page, pdfjsLib } from 'react-pdf';

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const PdfViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const [file, setFile] = useState(null); // State to hold downloaded PDF Blob

  const pdfDocument = useRef(null); // Ref to store PDFDocument instance

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    pdfDocument.current = this; // Store reference after successful loading
  }

  function handleDownload() {
    if (!pdfDocument.current) {
      return; // Handle case where PDF hasn't loaded yet
    }

    pdfDocument.current.getBase64Url().then(base64Url => {
      const link = document.createElement('a');
      link.href = base64Url;
      link.download = 'document.pdf'; // Customize filename if needed
      link.click();
    });
  }

  function handlePrint() {
    if (!pdfDocument.current) {
      return; // Handle case where PDF hasn't loaded yet
    }

    window.print(); // Trigger browser's default print functionality
  }

  function onPrevPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  function onNextPage() {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  }

  return (
    <div>
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            pageNumber={index + 1}
            key={`page_${index + 1}`}
            scale={1.5} // Adjust zoom level as needed
            width={800} // Adjust width as needed
          />
        ))}
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button onClick={handleDownload}>Download</button>
      <button onClick={handlePrint}>Print</button>
      <button disabled={pageNumber === 1} onClick={onPrevPage}>
        Previous Page
      </button>
      <button disabled={pageNumber === numPages} onClick={onNextPage}>
        Next Page
      </button>
    </div>
  );
};

export default PdfViewer;
