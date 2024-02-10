# Pincode Merchant Trie

This is a simple web application that allows users to store and search for merchant IDs associated with pin codes using a trie data structure.

## Features

- **Insert Data**: Users can input pin codes and corresponding merchant IDs, which are then stored in the trie.
- **Search**: Users can search for a specific pin code and merchant ID pair to check if the service is available.
- **Display Saved Info**: Provides an option to display all the saved pin code and merchant ID pairs.

## Usage

1. **Insert Data**:
   - Enter a valid pin code (6 digits) and a merchant ID (alphanumeric).
   - Click on the "Submit" button to store the data in the trie.

2. **Search**:
   - Enter a pin code and a merchant ID to check if the service is available for that pin code and merchant ID pair.
   - Click on the "Search" button to see the result.

3. **Display Saved Info**:
   - Click on the "Display Saved Info" button to see all the saved pin code and merchant ID pairs.

## Installation and Setup

1. Clone the repository or download the project files.
2. Open the `index.html` file in a web browser.

## Trie Data Structure

The application uses a trie data structure to efficiently store and search for pin code and merchant ID pairs. Each node in the trie represents a digit in the pin code, and the merchant IDs are stored at the leaf nodes.

## Validation

- Input validation is performed to ensure that the entered pin codes and merchant IDs adhere to the required formats.
- Duplicate pairs are not allowed to be stored in the trie.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

