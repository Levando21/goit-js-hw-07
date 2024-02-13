/** @format */

const categoriesList = document.getElementById("categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
	const categoryTitle = item.querySelector("h2").textContent;
	const categoryItemsCount = item.querySelectorAll("ul li").length;
	console.log(`Category: ${categoryTitle}`);
	console.log(`Elements: ${categoryItemsCount}`);
});

const underCatersLists = document.querySelectorAll(".under-caters");

underCatersLists.forEach((list) => {
	list.querySelectorAll("li").forEach((item) => {
		item.style.border = "1px solid rgba(122,122,122,0.7)";
		item.style.padding = "8px";
		item.style.margin = "4px";
		item.style.overflow = "transparent";
		item.style.color = "gray";
		item.style.opacity = "0.7";
	});
});
