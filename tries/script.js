// Trie Node class
class TrieNode {
  constructor() {
    this.children = {};
    this.merchantIds = new Set(); // Use a Set to store multiple merchant IDs
  }
}

// Trie class
class PincodeTrie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert function
  insert(pincode, merchantId) {
    let node = this.root;
    for (let digit of pincode) {
      if (!node.children[digit]) {
        node.children[digit] = new TrieNode();
      }
      node = node.children[digit];
    }
    node.merchantIds.add(merchantId); // Add the merchant ID to the set
  }

  // Search function
  search(pincode, merchantId) {
    let node = this.root;
    for (let digit of pincode) {
      if (!node.children[digit]) {
        return false; // Pin code not found in the Trie
      }
      node = node.children[digit];
    }
    return node.merchantIds.has(merchantId); // Check if the merchant ID exists in the set
  }

  // Function to get all details stored in the Trie
  getAllDetails() {
    let details = [];
    this.traverse(this.root, '', details);
    return details;
  }

  // Helper function to traverse the Trie
  traverse(node, prefix, details) {
    if (node.merchantIds.size > 0) {
      node.merchantIds.forEach(merchantId => {
        details.push({pincode: prefix, merchantId});
      });
    }
    for (let digit in node.children) {
      this.traverse(node.children[digit], prefix + digit, details);
    }
  }

  // Function to check if a value pair already exists in the Trie
  contains(pincode, merchantId) {
    let node = this.root;
    for (let digit of pincode) {
      if (!node.children[digit]) {
        return false; // Pin code not found in the Trie
      }
      node = node.children[digit];
    }
    return node.merchantIds.has(merchantId); // Check if the merchant ID exists in the set
  }
}

// Creating a new instance of PincodeTrie
const pincodeTrie = new PincodeTrie();

// Function to search for pincode and merchantId
function search() {
  const pincode = document.getElementById('searchPincodeInput').value.trim(); // Trim whitespace
  const merchantId = document.getElementById('searchMerchantIdInput').value.trim(); // Trim whitespace
  if (/^\d{6}$/.test(pincode) && /^[a-zA-Z0-9]+$/.test(merchantId)) {
    const result = pincodeTrie.search(pincode, merchantId);
    if (result) {
      alert("Service available for this pincode."); // Display alert if there is a match
    } else {
      alert("Service not available for this pincode."); // Display alert if there is no match
    }
  } else {
    alert("Invalid pincode or merchant ID.");
  }
}

// Function to display all saved information on the screen
function displaySavedInfo() {
  const detailsDiv = document.getElementById('details');
  const details = pincodeTrie.getAllDetails();
  detailsDiv.innerHTML = ''; // Clear previous details
  details.forEach(detail => {
    const div = document.createElement('div');
    div.textContent = 'Pincode: ' + detail.pincode + ' - Merchant ID: ' + detail.merchantId;
    detailsDiv.appendChild(div);
  });
}

