
let lista = localStorage.getItem('itemList')
lista = lista ? lista.split(',') : []
showLista()


function addCategory() {
    let elemento = document.getElementById('elemento').value
    elemento  = elemento.split(',')
    for (let i = 0; i < elemento.length; i++) {
        if(elemento[i]){
            lista.push(elemento[i])
            showLista()
        }
    }
   
}

function showLista() {
    document.getElementById('elemento').value = ''
    let html = ''
    for (let i = 0; i < lista.length; i++) {
        
        html += `<div class="col-10 mb-3"> ${lista[i]} </div>`
        html += `<div class="col"> <a href="#" class="btn btn-danger" onclick="deleteElemento(${i})"> X </a> </div>`
    }

    localStorage.setItem('itemList', lista)
    document.getElementById('lista').innerHTML = html
}

function deleteElemento(elemento) {
    lista.splice(elemento, 1)
    showLista()
}

