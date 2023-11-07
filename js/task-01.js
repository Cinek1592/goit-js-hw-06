let items = document.querySelectorAll("ul#categories li.item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  let headerText = item.querySelector("h2").innerText;
  let categoryCount = item.querySelectorAll("li").length;

  console.log(`Category: ${headerText}\nElements: ${categoryCount}`);
});
