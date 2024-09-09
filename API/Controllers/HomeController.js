const HomeRepository = require('../Repositories/HomeRepository');

class HomeController {
    async getProducts(req, res) {
        try {
            const row = await HomeRepository.Products() 
            res.json(row)
        }
        catch {
            res.status(500).json("Erro interno no servidor")
        }
    }
}

module.exports = new HomeController