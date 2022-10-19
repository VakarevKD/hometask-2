import { renderProductsList } from "./modules/renderProductsList.js";
import { filterProductsList } from "./modules/filterProductsList.js";
import { debounce } from "./modules/debounce.js";
import axios from "axios";
import "./style.css";
import "./index.html";

let products;

const search = document.querySelector(".search");

axios.get("https://mocki.io/v1/62d2680b-0e3f-49b2-9e3a-9434e99bc366")
.then((response) => {
	products = response.data;
	renderProductsList(products);
})
.catch((error) => alert(error));

search.addEventListener("keyup", () => {
	debounce(filterProductsList(products, search.value), 2000);
});
