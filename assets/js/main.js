import {subscribeToHellfireClube} from "./firebase/app.js"

console.log(app)

(function main() {
    const txtName = document.getElementById('txtName')
    const txtEmail = document.getElementById('txtEmail')
    const txtLevel = document.getElementById('txtLevel')
    const txtCharacter = document.getElementById('txtCharacter')

    document.getElementById('btnSubscribe').addEventListener('click', async () => {
        const subscribe = {
            name: txtName.value,
            email: txtEmail.value,
            level: txtLevel.value,
            character: txtCharacter.value
        }

        const id = await subscribeToHellfireClube(subscribe)
        alert(`Inscrição ${id} adicionada com sucesso!`)
    })
})()