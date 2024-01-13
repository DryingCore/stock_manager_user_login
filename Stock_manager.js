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

const cerveja = new Stock_manager("Heineken", "Cerveja", "R$5,65");
