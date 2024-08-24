const LoginRepository = require('../Repositories/LoginRepository')

class LoginController {

    async Registration(req, res) {
        try {
            const { nome, email, senha } = req.body
            const row = await LoginRepository.Create(nome, email, senha)
            res.status(201).send(row)
        }
        catch {
            res.status(500).send("Erro na requisição!")
        }
    }

    async User(req, res) {
        try {
            const { email , senha } = req.body
            const line = await LoginRepository.getUser(email, senha);
            res.status(200).send(line);
        }
        catch {
            res.status(500).json({
                message : "Credenciais inválidas!"
            })
        }
    }
}

module.exports =  new LoginController()