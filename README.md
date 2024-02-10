# Pincode Serviceability Management

This repository contains two simple web applications for managing and verifying serviceability of merchants for different pin codes. One utilizes a hybrid sparse matrix data structure, while the other uses a trie data structure.

## Methods Used

### Hybrid Sparse Matrix

The Hybrid Sparse Matrix method is employed in one of the applications for managing serviceability data. It offers an efficient way to store and retrieve information about which merchants serve which pin codes.

### Trie

The Trie data structure is used in another application for storing and searching pin code and merchant ID pairs. This method provides fast retrieval of data and is well-suited for scenarios where prefix-based searches are common.

## Hybrid Sparse Matrix Pincode Serviceability

### Features

- **Add/Delete Data Tab:** Add or delete serviceability data by providing a merchant ID and the corresponding pin codes served.
- **Verify Serviceability Tab:** Check whether a given merchant serves a specific pin code.
- **Display All Data:** Option to display all stored serviceability data.

### Installation and Setup

1. **Clone or Download:** Clone the repository or download the project files.
2. **Open in Browser:** Open the `index.html` file in a web browser.

### Usage

#### Add/Delete Data Tab:

1. Enter merchant ID and pin codes served.
2. Click "Add Merchant Serviceability" to add data.
3. To delete data, specify merchant ID and pin code, then click "Delete Serviceability Data".
4. Click "Display All Data" to view stored serviceability data.

#### Verify Serviceability Tab:

1. Enter merchant ID and pin code to be checked.
2. Click "Check Serviceability" to see if the merchant serves the provided pin code.

### Validation

- Input validation is performed to ensure entered pin codes and merchant IDs adhere to required formats.
- Duplicate pairs are not allowed in the matrix.

## Pincode Merchant Trie

### Features

- **Insert Data:** Input pin codes and corresponding merchant IDs for storage in the trie.
- **Search:** Search for a specific pin code and merchant ID pair to check service availability.
- **Display Saved Info:** View all saved pin code and merchant ID pairs.

### Installation and Setup

1. **Clone or Download:** Clone the repository or download the project files.
2. **Open in Browser:** Open the `index.html` file in a web browser.

### Usage

#### Insert Data:

1. Enter valid pin code (6 digits) and alphanumeric merchant ID.
2. Click "Submit" to store the data in the trie.

#### Search:

1. Enter pin code and merchant ID to check service availability.
2. Click "Search" to see the result.

#### Display Saved Info:

1. Click "Display Saved Info" to see all saved pin code and merchant ID pairs.

### Validation

- Input validation is performed to ensure entered pin codes and merchant IDs adhere to required formats.
- Duplicate pairs are not allowed in the trie.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
