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
            const { email, senha } = req.body
            const line = await LoginRepository.getUser(email, senha);
            res.status(200).send(line);
        }
        catch {
            res.status(500).json({
                message: "Credenciais inválidas!"
            })
        }
    }

    async alterPassword(req, res) {
        try {
            const { newPassword, email, phrase } = req.body;
            if (!newPassword || !email || !phrase) {
                return res.status(400).json({
                    message: 'Todos os campos são obrigatórios!'
                });
            }
            const result = await LoginRepository.recoverPassword(newPassword, email, phrase);

            res.status(200).json(result);
        }
        catch (error) {
            console.error('Erro ao alterar senha:', error);

            res.status(500).json({
                message: 'Não foi possível alterar a senha' + error.message,
            });
        }
    }
}

module.exports = new LoginController()