const cart = [];

function addItem(cart, item, quantity) {
  if (!Array.isArray(cart)) {
    throw new TypeError("Shopping cart must be an array of items");
  }

  if (typeof item !== "string" || item.trim() === "") {
    throw new TypeError(
      "Shopping cart item must contain a string with characters",
    );
  }

  if (typeof quantity !== "number") {
    throw new TypeError("Shopping cart item quantity must be a number");
  }

  if (quantity <= 0) return cart;

  const currentItemIndex = cart.findIndex(
    (cartElement) => cartElement.item === item,
  );

  if (currentItemIndex !== -1) {
    cart[currentItemIndex].quantity += quantity;
  } else {
    cart.push({ item, quantity });
  }
  return cart;
}

addItem(cart, "tamarind candies", 3);
addItem(cart, "sugar", 2);
addItem(cart, "milk", 1);

console.log("Shopping Cart:", cart);

function removeItem(cart, item) {
  if (!Array.isArray(cart)) {
    throw new TypeError("Shopping cart must be an array of items");
  }

  if (typeof item !== "string" || item.trim() === "") {
    throw new TypeError(
      "Shopping cart item must contain a string with characters",
    );
  }

  const currentItemIndex = cart.findIndex(
    (cartElement) => cartElement.item === item,
  );

  if (currentItemIndex !== -1) {
    cart.splice(currentItemIndex, 1);
  }
  return cart;
}

function getTotalItems(cart) {
  if (!Array.isArray(cart)) {
    throw new TypeError("Shopping cart must be an array of items");
  }

  let total = 0;
  for (const cartElement of cart) {
    total += cartElement.quantity;
  }
  return total;
}

module.exports = { addItem, removeItem, getTotalItems };
