const Modal = {
    open(){
        document.querySelector('.modal-overlay').classList.add('active');
    },
    close(){
        document.getElementById("key").classList.remove('active')
    },
    save(){
        var desc = document.querySelector('#description')
        var amt  = document.querySelector('#amount')
        var date = document.querySelector('#date')

        if(desc.value.length == 0 || amt.value.length == 0 || date.value.length == 0){
            alert('Por favor preencha todos os campos')
        }else {
            var table = document.getElementById('tbr')
            var row = table.insertRow(0)

            var cell1 = row.insertCell(0)
            var cell2 = row.insertCell(1)
            var cell3 = row.insertCell(2)

            console.log(cell1)

            cell1.innerHTML = desc.value
            cell2.innerHTML = amt.value
            cell3.innerHTML = date.value
        }
        
    }
}

