import requests

from img2table.document import PDF

from img2table.ocr import TesseractOCR
from img2table.document import Image


doc = Image("photos/malaria report.png", detect_rotation= False)


pdf = PDF(src="table.pdf")

# Instantiation of the OCR, Tesseract, which requires prior installation
ocr = TesseractOCR(lang="eng")


extracted_tables = doc.extract_tables(ocr=ocr,
                                      implicit_rows=False,
                                      borderless_tables=False,
                                      min_confidence=50)
#print(type(extracted_tables[0]))
# for id_row, row in enumerate(extracted_tables[0].content.values()):
#     for id_col, cell in enumerate(row):
#         x1 = cell.bbox.x1
#         y1 = cell.bbox.y1
#         x2 = cell.bbox.x2
#         y2 = cell.bbox.y2
#         value = cell.value
#         print(value)

table_values = []

for row in extracted_tables[0].content.values():
    row_values = []  # Inner list to store values of cells in a row
    for cell in row:
        value = cell.value
        row_values.append(value)  # Append cell value to the row
    table_values.append(row_values)  # Append row to the table

# Print the list of lists representing the table

for row in table_values[1:len(table_values)]:
    ls= row
    if(ls[1]<=ls[2] or ls[1]>=ls[3]):
        print(ls[0],ls[1])




# Table identification and extraction
# pdf_tables = pdf.extract_tables(ocr=ocr)
# print(pdf_tables)
# # Assuming extracted_tables is your dictionary
# # Assuming extracted_tables is your dictionary
# for row in pdf_tables.values():
#     print(type(row))
#     print(len(row))

