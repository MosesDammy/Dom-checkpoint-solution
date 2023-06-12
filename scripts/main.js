// Sample items in the cart
const cartItems = [
    { id: 1, name: "Item 1", price: 10, quantity: 1, liked: false },
    { id: 2, name: "Item 2", price: 20, quantity: 2, liked: false },
    { id: 3, name: "Item 3", price: 30, quantity: 3, liked: false },
  ];
  
  // Function to render the cart items
  function renderCartItems() {
    const itemList = document.getElementById("item-list");
    itemList.innerHTML = "";
  
    let totalPrice = 0;
  
    cartItems.forEach((item) => {
      const itemElement = document.createElement("li");
      itemElement.classList.add("cart-item");
  
      const itemInfo = document.createElement("div");
      itemInfo.classList.add("item-info");
  
      const itemImage = document.createElement("img");
      itemImage.src = "images/download.jpeg"; // Replace with item image URL
      itemInfo.appendChild(itemImage);
  
      const itemName = document.createElement("span");
      itemName.textContent = item.name;
      itemInfo.appendChild(itemName);
  
      itemElement.appendChild(itemInfo);
  
      const quantity = document.createElement("div");
      quantity.classList.add("quantity");
  
      const minusButton = document.createElement("button");
      minusButton.textContent = "-";
      minusButton.addEventListener("click", () => decreaseQuantity(item));
      quantity.appendChild(minusButton);
  
      const quantityValue = document.createElement("span");
      quantityValue.textContent = item.quantity;
      quantity.appendChild(quantityValue);
  
      const plusButton = document.createElement("button");
      plusButton.textContent = "+";
      plusButton.addEventListener("click", () => increaseQuantity(item));
      quantity.appendChild(plusButton);
  
      itemElement.appendChild(quantity);
  
      const likeButton = document.createElement("button");
      likeButton.classList.add("like-button");
      if (item.liked) {
        likeButton.classList.add("active");
      }
      likeButton.innerHTML = "&#x2764;"; // Heart symbol
      likeButton.addEventListener("click", () => toggleLike(item));
      itemElement.appendChild(likeButton);
  
      itemList.appendChild(itemElement);
  
      totalPrice += item.price * item.quantity;
    });
  
    const totalPriceElement = document.getElementById("total-price");
    totalPriceElement.textContent = "Total Price: $" + totalPrice;
  }
  
  // Function to increase the quantity of an item
  function increaseQuantity(item) {
    item.quantity++;
    renderCartItems();
  }
  
  // Function to decrease the quantity of an item
  function decreaseQuantity(item) {
    if (item.quantity > 1) {
      item.quantity--;
      renderCartItems();
    }
  }
  
  // Function to toggle the liked status of an item
  function toggleLike(item) {
    item.liked = !item.liked;
    renderCartItems();
  }
  
  // Initial rendering of cart items
  renderCartItems();
  