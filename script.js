// Simulate scrolling
let items = document.getElementById('items');
let i = 6; // Change this number to the next item number
setInterval(() => {
  items.innerHTML += `<li>Item ${i}</li>`;
  i++;
}, 1000); // Change this number to control the interval for adding new items
