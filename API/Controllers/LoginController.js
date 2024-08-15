const LoginRepository = require('../Repositories/LoginRepository')

class LoginController {

    async Registration(req, res) {
        try {
            const data = req.body
            const row = await LoginRepository.Create(data)
            res.status(201).send(row)
        }
        catch {
            res.status(500).send("Erro na requisição!")
        }
    }

    async User(req, res) {
        try {
            const { email , password } = req.body
            const row = await LoginRepository.getUser(email, password);
            res.json(row)
        }
        catch {
            res.status(500).json({
                message : "Erro interno no servidor, tente novamente mais tarde!"
            })
        }
    }
}


module.exports =  new LoginController()