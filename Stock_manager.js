class Stock_manager {
	constructor(name, description, price) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.inStock = 0;
	}

	addToStock(qnt) {
		this.inStock = qnt;
	}
}