# import streamlit as st
#
# # Create a file uploader
# uploaded_file = st.file_uploader("Choose a file")
#
# # Display the uploaded file
# if uploaded_file is not None:
#     # You can access the file attributes such as name, type, and size
#     file_details = {"Filename": uploaded_file.name, "FileType": uploaded_file.type, "FileSize": uploaded_file.size}
#     st.write(file_details)
#     # You can also display the file content
#     file_content = uploaded_file.read()
#     st.write(file_content)

import streamlit as st
from img2table.document import Image
from img2table.ocr import TesseractOCR

# Title and file uploader for image
st.title('Image Processing')
uploaded_file = st.file_uploader("Upload an image", type=["jpg", "jpeg", "png"])

if uploaded_file is not None:
    # Save the uploaded image to a temporary file
    with open("photos/temp_image.png", "wb") as f:
        f.write(uploaded_file.getvalue())

    # Load the uploaded image for processing
    doc = Image("photos/temp_image.png", detect_rotation=False)

    # Instantiation of the OCR, Tesseract, which requires prior installation
    ocr = TesseractOCR(lang="eng")

    # Extract tables from the uploaded image
    extracted_tables = doc.extract_tables(ocr=ocr,
                                          implicit_rows=False,
                                          borderless_tables=False,
                                          min_confidence=50)

    # Process the extracted tables
    table_values = []
    for row in extracted_tables[0].content.values():
        row_values = []
        for cell in row:
            value = cell.value
            row_values.append(value)
        table_values.append(row_values)

    # Display the processed table values
    for row in table_values[1:]:
        if row[1] <= row[2] or row[1] >= row[3]:
            st.write(row[0], row[1])
st.markdown("[Click here to chat with our chatbot](https://mediafiles.botpress.cloud/327c4ddd-4e1d-4f76-ab42-5e2819af8e00/webchat/bot.html)")
