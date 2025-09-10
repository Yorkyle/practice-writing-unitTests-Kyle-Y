const { addItem, removeItem, getTotalItems } = require("../cart");

//ADD ITEM TESTS

describe("addItem", function () {
  function addsNewItemIfPositive() {
    const cart = [];
    addItem(cart, "apple", 2);
    expect(cart).toEqual([{ item: "apple", quantity: 2 }]);
  }

  function ignoresNegativeQuantityIfNegative() {
    const cart = [];
    addItem(cart, "apple", -5);
    expect(cart).toEqual([]);
  }

  function ignoresZeroQuantityIfEdge() {
    const cart = [];
    addItem(cart, "apple", 0);
    expect(cart).toEqual([]);
  }

  test("adds a valid item (positive)", addsNewItemIfPositive);
  test(
    "ignores negative quantity (negative)",
    ignoresNegativeQuantityIfNegative,
  );
  test("ignores zero quantity (edge)", ignoresZeroQuantityIfEdge);
});

//REMOVE ITEM TESTS

describe("removeItem", function () {
  function removesExistingIfPositive() {
    const cart = [
      { item: "apple", quantity: 2 },
      { item: "milk", quantity: 1 },
    ];
    removeItem(cart, "apple");
    expect(cart).toEqual([{ item: "milk", quantity: 1 }]);
  }

  function doesNothingIfMissingIfNegative() {
    const cart = [{ item: "apple", quantity: 2 }];
    removeItem(cart, "banana");
    expect(cart).toEqual([{ item: "apple", quantity: 2 }]);
  }

  function removesLastItemIfEdge() {
    const cart = [{ item: "apple", quantity: 1 }];
    removeItem(cart, "apple");
    expect(cart).toEqual([]);
  }

  test("removes an existing item (positive)", removesExistingIfPositive);
  test(
    "does nothing if item not found (negative)",
    doesNothingIfMissingIfNegative,
  );
  test("removes the last remaining item (edge)", removesLastItemIfEdge);
});

// GET TOTAL ITEMS TEST

describe("getTotalItems", function () {
  function sumsQuantitiesIfPositive() {
    const cart = [
      { item: "apple", quantity: 2 },
      { item: "banana", quantity: 3 },
    ];
    expect(getTotalItems(cart)).toBe(5);
  }

  function returnsZeroIfNegative() {
    expect(getTotalItems([])).toBe(0);
  }

  function handlesLargeQuantitiesIfEdge() {
    const cart = [
      { item: "bulk rice", quantity: 1000 },
      { item: "bulk beans", quantity: 5000 },
    ];
    expect(getTotalItems(cart)).toBe(6000);
  }

  test("sums quantities across items (positive)", sumsQuantitiesIfPositive);
  test("returns 0 for an empty cart (negative)", returnsZeroIfNegative);
  test("handles large quantities (edge)", handlesLargeQuantitiesIfEdge);
});
