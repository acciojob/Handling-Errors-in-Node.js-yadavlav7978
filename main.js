// Import the required modules
const fs = require("fs").promises;
const readline = require("readline");

// Create an interface for reading input from 'stdin'
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to read and print the file contents
async function readFileAndPrint(filePath) {
  try {
    // Read the file asynchronously
    const data = await fs.readFile(filePath, "utf8");
    // Print the file contents
    console.log(data);
  } catch (error) {
    // Handle errors, such as file not found or permission issues
    console.error(`Error reading file: ${filePath}. ${error.message}`);
  }
}

// Prompt the user for the file path
rl.question("Please enter the file path: ", (filePath) => {
  // Validate the file path
  if (!filePath) {
    console.error("No file path provided. Please provide a file path.");
    rl.close(); // Close the readline interface
    return;
  }

  // Call the function to read and print the file
  readFileAndPrint(filePath)
    .then(() => {
      rl.close(); // Close the readline interface
    })
    .catch((error) => {
      console.error(error);
      rl.close(); // Close the readline interface
    });
});
