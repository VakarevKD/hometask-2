import renderProductsList from "./renderProductsList.js";

const filterProductsList = (products, string) => {
	const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(string));
	renderProductsList(filteredProducts);
}

export default filterProductsList;
