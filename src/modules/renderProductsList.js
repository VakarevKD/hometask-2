const renderProductsList = (data) => {
	const productsList = document.querySelector(".products-list");
	const template = document.querySelector("#product-template");
	productsList.innerHTML = '';
	data.forEach((product) => {
		const element = template.content.cloneNode(true);
		const productLink = element.querySelector(".product-link");
		const productFavoriteIcon = element.querySelector(".favorite-icon");
		const productImage = element.querySelector(".product-image");
		const productTitle = element.querySelector(".product-title");
		const productPrice = element.querySelector(".product-price");
		(product.id) ? productLink.href = "./detailed-page.html?product-id" + product.id : productLink.href = "./detailed-page.html";
		(product.favorite) ? productFavoriteIcon.classList.add("favorite-icon--active") : productFavoriteIcon.classList.remove("favorite-icon--active");
		(product.img) ? productImage.src = product.img : productImage.src = "./img/product-image.png";
		(product.name) ? productTitle.textContent = product.name : productTitle.textContent = "G Home";
		(product.price) ? productPrice.textContent = "$" + product.price : productPrice.textContent = "$129";
		productsList.append(element);
	});
}

export default renderProductsList;
