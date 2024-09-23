import React, { useState } from 'react'
import '../CSS/RecoverPassword.css'

const RecoverPassword = () => {

    const [phraseRecover, setPhraseRecover] = useState('');
    const [recoverEmail, setRecoverEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const HandleRecover = async (e) => {
        e.preventDefault();
        if (newPassword === confirmNewPassword) {
            fetch('http://localhost:8000/Recover', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    newPassword: newPassword,
                    email: recoverEmail,
                    phrase: phraseRecover
                })
            })
                .then(response => {
                    if (!response.ok) {
                        return response.json()
                        .then(errorData => {
                            throw new Error(errorData.message);
                        });
                    }
                    return response.json();
                })
                .then(data => {
                    alert(data.message);

                })
                .catch(error => {
                    alert('Erro: ' + error.message);
                });
        }
    }
    return (

        <div id='contentRecover'>
            <form onSubmit={HandleRecover} id='formRecover'>
                <div className="inputsRecover">
                <input type="text" placeholder='Digite o seu email' onChange={(e) => setRecoverEmail(e.target.value)} />
                <input type="text" id="newPassword" placeholder='Nova senha' onChange={(e) => setNewPassword(e.target.value)} />
                <input type="text" id="confirmNewPassword" placeholder='Confirmar senha' onChange={(ev) => setConfirmNewPassword(ev.target.value)} />
                <input type="text" placeholder='Digite a frase de recuperação de senha' onChange={(e) => setPhraseRecover(e.target.value)} />

                <button type='submit'>Salvar</button>
                </div>
            </form>
        </div>
    )
}

export default RecoverPassword
