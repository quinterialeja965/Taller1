
let pedidos = localStorage.getItem('itemList')
pedidos = pedidos ? JSON.parse(pedidos) : []
showPedido()

function addPedido() {
    let pedidoItem    = document.getElementById('pedido').value
    let cantidadItem = document.getElementById('cantidad').value
    let productoItem   = document.getElementById('producto').value
    let valorItem   = document.getElementById('valor').value

    if(pedidoItem && cantidadItem && productoItem && valorItem){
        pedidos.push({ 'pedidoArticulo': pedidoItem, 'cantidadArticulo': cantidadItem, 'productoArticulo': productoItem, 'valorArticulo': valorItem })
        showPedido()
    }
}

function showPedido() {
    document.getElementById('pedido').value = ''
    document.getElementById('cantidad').value = ''
    document.getElementById('producto').value = ''
    document.getElementById('valor').value = ''

    let html = ''

    pedidos.forEach((elemento, index) => {
        html += `<div class="col-2 mb-3"> ${elemento.pedidoArticulo} </div>`
        html += `<div class="col-3 mb-3"> ${elemento.cantidadArticulo} </div>`
        html += `<div class="col-3 mb-3">   ${elemento.productoArticulo} </div>`
        html += `<div class="col-3 mb-3">   ${elemento.valorArticulo} </div>`
        html += `<div class="col-1"> <a href="#" class="btn btn-danger" onclick="deletePedido(${index})"> X </a> </div>`
    });

    localStorage.setItem('itemList', JSON.stringify(pedidos))
    document.getElementById('listapedidos').innerHTML = html
}

function deletePedido(item) {
    pedidos.splice(item, 1)
    showPedido()
}






