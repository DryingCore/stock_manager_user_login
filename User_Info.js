const readline = require("readline");

class User_info {
	constructor(fullname, email, pass) {
		this.fullname = fullname;
		if (!this.isValidEmail(email)) {
			console.error("Insira um email válido");
			return;
		} else {
			this.email = email;
		}
		this.pass = pass.toString();
	}

	isValidEmail(email) {
		// Expressão regular para verificar se é um formato de e-mail válido
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

	loginUser() {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});
		rl.question("Insira seu email ", (email) => {
			if (email === this.email) {
				rl.question("Insira sua senha ", (senha) => {
					if (senha === this.pass) {
						console.log("Usuario logado com sucesso!");
						console.log(`Bem-vindo(a) ${this.fullname}`);
					} else {
						console.error("Senha inválida");
						rl.close();
					}
				});
			} else {
				console.error("Email inválido");
				rl.close();
			}
		});
	}
}