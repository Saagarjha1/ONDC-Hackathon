function toggleTab(tab) {
    if (tab === 'addDelete') {
        document.getElementById('addDeleteTab').style.display = 'block';
        document.getElementById('verifyTab').style.display = 'none';
    } else if (tab === 'verify') {
        document.getElementById('addDeleteTab').style.display = 'none';
        document.getElementById('verifyTab').style.display = 'block';
    }
}

class HybridSparseMatrix {
    constructor() {
        this.dokMatrix = {};
    }

    addMerchantServiceability(merchantId, pincodesServed) {
        // Check if any of the pincodes served by the merchant already exist
        for (const pincode of pincodesServed) {
            if (this.dokMatrix[`${merchantId}_${pincode}`]) {
                alert(`Merchant ${merchantId} already serves pincode ${pincode}`);
                return; // Exit the method if a duplicate pair is found
            }
        }

        // Update DOK matrix
        pincodesServed.forEach(pincode => {
            this.dokMatrix[`${merchantId}_${pincode}`] = true;
        });
    }

    verifyServiceability(merchantId, pincode) {
        // Check DOK matrix for serviceability
        return this.dokMatrix[`${merchantId}_${pincode}`] === true;
    }

    deleteMerchantServiceability(merchantId, pincode) {
        // Delete serviceability data
        if (this.dokMatrix[`${merchantId}_${pincode}`]) {
            delete this.dokMatrix[`${merchantId}_${pincode}`];
            alert(`Serviceability data for Merchant ${merchantId} and Pincode ${pincode} deleted successfully.`);
        } else {
            alert(`Serviceability data for Merchant ${merchantId} and Pincode ${pincode} does not exist.`);
        }
    }

    displayData() {
        const allDataDiv = document.getElementById('allData');
        allDataDiv.innerHTML = '<div class="data-box">'; // Start box

        let merchants = {};
        for (const key in this.dokMatrix) {
            const [merchantId, pincode] = key.split('_');
            if (!merchants[merchantId]) {
                merchants[merchantId] = [];
            }
            merchants[merchantId].push(pincode);
        }

        for (const merchantId in merchants) {
            const pincodeList = merchants[merchantId].join(', ');
            allDataDiv.innerHTML += `Merchant ${merchantId} delivers to pincode: ${pincodeList}<br>`;
        }

        allDataDiv.innerHTML += '</div>'; // End box
    }
}

// Validate user inputs to prevent injection attacks
function validateInput(input) {
    // Implement your validation logic here
    return true; // Return true if input is valid, false otherwise
}

// Sanitize user inputs to prevent XSS attacks
function sanitizeInput(input) {
    // Implement your sanitization logic here
    return input; // For now, just returning the input as is
}

// Function to handle form submission
document.getElementById('inputForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const form = event.target;
    const merchantIdInput = form.querySelector('input[name="merchantId"]');
    const pincodesServedInput = form.querySelector('input[name="pincodesServed"]');
    const merchantId = sanitizeInput(merchantIdInput.value);
    const pincodesServed = sanitizeInput(pincodesServedInput.value).split(',').map(pincode => pincode.trim());

    if (validateInput(merchantId) && validateInput(pincodesServed)) {
        hybridMatrix.addMerchantServiceability(merchantId, pincodesServed);
        form.reset();
    } else {
        // Handle invalid input
        alert('Invalid input detected.');
    }
});

// Function to check serviceability
function checkServiceability() {
    const merchantId = document.getElementById('merchantIdInput').value;
    const pincode = document.getElementById('pincodeInput').value;
    const isServiceable = hybridMatrix.verifyServiceability(merchantId, pincode);
    const detailsDiv = document.getElementById('details');
    detailsDiv.innerHTML = '';
    if (isServiceable) {
        detailsDiv.textContent = `Merchant ${merchantId} serves pincode ${pincode}`;
    } else {
        detailsDiv.textContent = `Merchant ${merchantId} does not serve pincode ${pincode}`;
    }
}

// Function to delete serviceability data
function deleteServiceability() {
    const merchantId = document.getElementById('deleteMerchantId').value;
    const pincode = document.getElementById('deletePincode').value;
    hybridMatrix.deleteMerchantServiceability(merchantId, pincode);
}

// Function to display all data
function displayData() {
    hybridMatrix.displayData();
}

// Create an instance of the hybrid matrix
const hybridMatrix = new HybridSparseMatrix();

