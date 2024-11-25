const { GoogleGenerativeAI } = require("@google/generative-ai");
const { GoogleAIFileManager } = require("@google/generative-ai/server");
const fs = require("fs");
const pdfParse = require("pdf-parse");
const dotenv = require("dotenv");

dotenv.config();

// Initialize GoogleGenerativeAI with your API_KEY.
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// Initialize GoogleAIFileManager with your API_KEY.
const fileManager = new GoogleAIFileManager(process.env.API_KEY);

// Initialize the generative model (Gemini 1.5 model).
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

// Function to process the invoice
const processInvoice = async (filePath) => {
  try {
    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${'filePath'}`);
    }

    // Read and parse the PDF
    const dataBuffer = fs.readFileSync(filePath);
    const pdfData = await pdfParse(dataBuffer);

    // Extract text from the PDF
    const invoiceText = pdfData.text;

    // Upload the file and specify a display name.
    const uploadResponse = await fileManager.uploadFile(filePath, {
      mimeType: "application/pdf",
      displayName: "Invoice PDF", // Optional display name
    });

    console.log(
      `Uploaded file ${uploadResponse.file.displayName} as: ${uploadResponse.file.uri}`
    );

    // Generate content using the uploaded file URI and a custom prompt to analyze the invoice
    const result = await model.generateContent([
      {
        fileData: {
          mimeType: uploadResponse.file.mimeType,
          fileUri: uploadResponse.file.uri,
        },
      },
      {
        text: `Analyze the following invoice and extract the details:
        - Invoice number
        - Date
        - Total amount
        - Customer name
        - Customer address
        - List of items with their quantities and prices
      `,
      },
    ]);

    // Extracted text from the AI response
    const responseText = result.response.text();
    console.log(responseText)
    // Process and structure the response
    const invoiceData = extractInvoiceData(responseText);
    console.log("Extracted Invoice Data:", invoiceData);

    // Return the structured data
    return invoiceData;
  } catch (error) {
    console.error("Error processing invoice:", error);
  }
};

const extractInvoiceData = (responseText) => {
  const lines = responseText.split("\n");

  // Utility function to extract the value after a specific label
  const extractValue = (label) => {
    const line = lines.find((line) => line.includes(label));
    return line ? line.split(":")[1]?.trim() : ""; // Safely split and trim
  };

  // Extract basic details
  const invoiceNumber = extractValue("Invoice Number");
  const date = extractValue("Date");
  const totalAmount = extractValue("Total Amount");

  // Extract customer details
  const customerName = extractValue("Customer Name");
  const customerAddress = extractValue("Customer Address");

  // Extract item details
  const items = [];
  const itemsStartIndex = lines.findIndex((line) => line.includes("List of Items:")) + 1;

  if (itemsStartIndex > 0) {
    for (let i = itemsStartIndex; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith("*")) {
        const match = line.match(
          /\*\*(.+)\*\*:\sQuantity:\s(\d+),\sPrice:\s₹([\d,.]+),\sTotal:\s₹([\d,.]+)/
        );

        if (match) {
          items.push({
            description: match[1].trim(),
            quantity: parseInt(match[2], 10),
            unitPrice: match[3].replace(/,/g, ""), // Remove commas
            totalPrice: match[4].replace(/,/g, ""), // Remove commas
          });
        }
      }
    }
  }

  return {
    invoiceNumber,
    date,
    totalAmount: totalAmount.replace(/₹|,/g, ""), // Remove ₹ and commas
    customer: {
      name: customerName,
      address: customerAddress,
    },
    items,
  };
};






// Example usage
// const invoicePath = "simple_invoice_2.pdf"; // Replace with your invoice file path
// console.log(`Processing invoice from: ${invoicePath}`);
// processInvoice(invoicePath);

module.exports = { processInvoice };
