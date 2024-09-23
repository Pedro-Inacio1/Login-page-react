const { conn } = require('../sql');

class HomeRepository {

    async Products() {
        const cmdSql = 'SELECT nome_produto, preco FROM PRODUTOS';
        return new Promise((resolve, reject) => {
            conn.query(cmdSql, (error, result) => {
                if(error) {
                    return reject("ERRO" + error)
                }
                else {
                    const line = JSON.parse(JSON.stringify(result))
                    return resolve(line)
                }
            })
        })
    }
}

module.exports = new HomeRepository