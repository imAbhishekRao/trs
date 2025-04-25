// PDFViewer.js
import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Set worker for pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.js`;

const PDFViewer = ({ pdfs }) => {
  return (
    <div style={{ marginTop: "40px", textAlign: "center" }}>
      {pdfs.length === 0 ? (
        <p>Select a category to view its catalog.</p>
      ) : (
        pdfs.map((pdf, idx) => (
          <div key={idx} style={{ marginBottom: "20px" }}>
            <Document file={pdf} onLoadError={console.error}>
              <Page pageNumber={1} />
            </Document>
          </div>
        ))
      )}
    </div>
  );
};

export default PDFViewer;
