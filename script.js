// Initialize an empty cart
const cart = [];

// Function to add an item to the cart
function addToCart(productName, price) {
    const item = {
        name: productName,
        price: price,
    };
    cart.push(item);
}

// Function to calculate the total price of items in the cart
function calculateTotal() {
    let total = 0;
    for (const item of cart) {
        total += item.price;
    }
    return total;
}

// Example usage:
addToCart("Product 1", 19.99);
addToCart("Product 2", 29.99);

// Display the cart and total
console.log("Cart:", cart);
console.log("Total: $" + calculateTotal());
