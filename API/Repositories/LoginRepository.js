const { conn } = require('../../API/sql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class LoginRepository {

    async Create(nome, email, senha) {
        return new Promise((resolve, reject) => {

            bcrypt.hash(senha, 10, (errCrypt, hash) => {
                if (errCrypt) {
                    return reject({ message: 'Erro na criptografia', errCrypt });
                }

                const sql = 'INSERT INTO login (nome, email, senha) VALUES (?, ?, ?)'
                conn.query(sql, [nome, email, hash], (error, result) => {
                    if (error) {
                        console.error('erro na query' + error)
                        reject("Erro na requisição")
                    }
                    else {
                        const line = JSON.parse(JSON.stringify(result))
                        resolve(line)
                    }
                })
            })
        })
    }

    async getUser(email, senha) {
        return new Promise((resolve, reject) => {
            const cmd = 'SELECT * FROM login WHERE email = ?';
            conn.query(cmd, [email], (error, results) => {
                if (error) {
                    return reject('Usuário não encontrado!')
                }

                if (results.length === 0) {
                    return reject("Não autorizado")
                }

                const storedHash = results[0].senha;

                bcrypt.compare(senha, storedHash, (err, result) => {
                    if (err) {
                        return reject("Erro na comparação");
                    }

                    if (result) {
                        let token = jwt.sign({
                            id: results[0].id,
                            name: results[0].nome,
                            email: results[0].email
                        },
                            process.env.JWT_KEY,
                            {
                                expiresIn: "1h"
                            })

                        resolve({
                            message: "Autenticação realizada com sucesso!",
                            token: token,
                            name: results[0].nome
                        });
                    }
                    else {
                        reject("Falha na autenticação");
                    }
                })

            });
        });
    }

    async recoverPassword(newPassword, email, phrase) {
        try {
          const hash = await bcrypt.hash(newPassword, 10);
          const sql = 'UPDATE login SET senha = ? WHERE email = ? and frase = ?';
          const [result] = await conn.promise().query(sql, [hash, email, phrase]);
          
          if (result.affectedRows === 0) {
            throw new Error("Email ou frase de recuperação incorretos");
          }
          
          return { message: "Senha atualizada com sucesso" };
        } catch (error) {
          throw { message: "Email ou frase de recuperação inválido!" };
        }
      }
}

module.exports = new LoginRepository()