const { conn } = require('../../API/sql')
const bcrypt = require('bcrypt')

class LoginRepository {

    async Create (data) {
        const sql = 'INSERT INTO login SET ?'
        return new Promise((resolve, reject) => {
            conn.query(sql, data, (error, result) => {
                if(error) {
                    console.error('erro na query' + error)
                    reject("Erro na requisição")
                }
                else {
                    const line = JSON.parse(JSON.stringify(result))
                    resolve(line) 
                }
            })
        })
    }

    async getUser(email, password) {
        const cmd = 'SELECT email, password FROM login WHERE email = ? AND senha = ?';
        return new Promise((resolve, reject) => {
            conn.query(cmd, [email, password], (error, results) => {
                if(error) {
                    reject('Usuário não encontrado!')
                }
                else {
                    const line = JSON.parse(JSON.stringify(results));
                    bcrypt.compare(password, results[0].password, (err, result) => {
                        if(err) {
                            res.status(401).send({ message : 'Falha na autenticação' })
                        }
                        if(result) {
                            res.status(200).send({ message : 'Autenticação realizada com sucesso!'})
                            resolve(line);
                        }
                        return res.status(401).send({ message : 'Falha na autenticação2'})
                    })
                }
            });
        });
    }
}

module.exports = new LoginRepository()