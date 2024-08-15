const { conn } = require('../../API/sql')

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
        const cmd = 'SELECT email, password FROM login WHERE email = ? AND password = ?';
        return new Promise((resolve, reject) => {
            conn.query(cmd, [email, password], (error, result) => {
                if(error) {
                    reject('Usuário não encontrado!')
                }
                else {
                    const line = JSON.parse(JSON.stringify(result));
                    resolve(line);
                }
            });
        });
    }
}

module.exports = new LoginRepository()