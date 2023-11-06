let items = document.querySelectorAll("ul#categories li.item");

console.log(`Liczba kategorii: ${items.length}`);

items.forEach((item) => {
  let headerText = item.getElementsByTagName("h2")[0].innerText;

  let categoryCount = item.getElementsByTagName("li").length;

  console.log(`Kategoria: ${headerText}, Liczba elementów: ${categoryCount}`);
});
