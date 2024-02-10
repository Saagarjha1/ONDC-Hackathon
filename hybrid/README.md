# Hybrid Sparse Matrix Pincode Serviceability

This is a simple web application that allows users to manage and verify serviceability of merchants for different pin codes using a hybrid sparse matrix data structure.

## Features

- **Add/Delete Data Tab**: Allows users to add new merchant serviceability data by providing a merchant ID and the corresponding pin codes served. Users can also delete existing serviceability data by specifying the merchant ID and pin code.
- **Verify Serviceability Tab**: Users can check whether a given merchant serves a specific pin code.
- **Display All Data**: Provides an option to display all the stored serviceability data.

## Installation and Setup

1. Clone the repository or download the project files.
2. Open the `index.html` file in a web browser.

## Usage

1. **Add/Delete Data Tab**:
   - Enter the merchant ID and the pin codes served (comma-separated) in the input fields.
   - Click on the "Add Merchant Serviceability" button to add the data.
   - To delete serviceability data, enter the merchant ID and the pin code to be deleted and click the "Delete Serviceability Data" button.
   - Click on the "Display All Data" button to see all stored serviceability data.

2. **Verify Serviceability Tab**:
   - Enter the merchant ID and the pin code to be checked for serviceability.
   - Click on the "Check Serviceability" button to see if the merchant serves the provided pin code.

## Customization

- You can modify the styling of the web application by editing the CSS in the `styles.css` file.
- For more complex applications, additional features and functionalities can be implemented within the provided JavaScript code.

## Security

- The application implements basic validation and sanitization techniques to prevent injection attacks and XSS vulnerabilities.
- However, for production use, it is recommended to implement more robust security measures and input validation mechanisms.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
