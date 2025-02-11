import { Injectable } from '@angular/core';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

@Injectable({
  providedIn: 'root'
})
export class PdfdataService {
  basePdf: any;

  constructor() { }

  async replaceTextInPdf(
    existingPdfBytes: Uint8Array,
    pageIndex: number, 
    forntSize:number,
    originalTextPosition: { x: number; y: number; width: number; height: number; },
    newText: string
  ): Promise<Uint8Array> {
    // Load the existing PDF
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Get the page where the text is located
    const pages = pdfDoc.getPages();
    const page = pages[pageIndex];

    // Erase the original text by drawing a white rectangle over it
    page.drawRectangle({
      x: originalTextPosition.x,
      y: originalTextPosition.y,
      width: originalTextPosition.width,
      height: originalTextPosition.height,
      color: rgb(1, 1, 1), // White color
    });

    // Write the replacement text at the same position
    page.drawText(newText, {
      x: originalTextPosition.x,
      y: originalTextPosition.y,
      size: forntSize, // Adjust font size as needed
      color: rgb(0, 0, 0), // Black color
    });

    // Save the modified PDF
    const modifiedPdfBytes = await pdfDoc.save();
    return modifiedPdfBytes;
  }
}
