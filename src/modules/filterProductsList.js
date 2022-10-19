import { renderProductsList } from "./renderProductsList.js";

export const filterProductsList = (products, string) => {
	const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(string));
	renderProductsList(filteredProducts);
}
