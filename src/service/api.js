// API base URL
const API_BASE_URL = "http://localhost:8080";

// Register
export async function login(email, password) {
  const res = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }), // Include the email and password
  });
  const data = await res.json();
  return data;
}

// Register
export async function register(userData) {
  const res = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData), // Send the registration data as JSON
  });
  const data = await res.json();
  return data;
}

// Add product
export async function addProduct(product) {
  const res = await fetch(`${API_BASE_URL}/addProduct`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const data = await res.json();
  return data;
}

// Get product by Category
export async function getProductByCategory(category) {
  const res = await fetch(`${API_BASE_URL}/getProductByCategory/${category}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });
  const data = await res.json();
  return data;
}

// Get all products
export async function getAllProducts() {
  const res = await fetch(`${API_BASE_URL}/getAllProducts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}
