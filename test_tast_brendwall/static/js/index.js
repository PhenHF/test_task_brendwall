document.addEventListener('DOMContentLoaded', () => {
    let table = document.querySelector('.goods_table')
    const addFormBtn = document.querySelector('.add_form-btn')
    
    function clearTD() {
        let tableRow = document.querySelectorAll('.table_row')
        tableRow.forEach(e => {
            e.remove()
        })
    }

    function addNewProduct() {
        let addForm = document.querySelector('#add_form')
        const addFormData = new FormData(addForm)

        const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value

        const request = new Request(
            'goods/',
            {
                method: 'POST',
                headers: {'X-CSRFToken': csrftoken},
                mode: 'same-origin',
                body: addFormData
            }
        )

        fetch(request).then(response => {
            if (response.ok) {    
                addForm.reset()
                clearTD()
                getGoods()
            } else {
                let formWrapper = document.querySelector('.add_form-wrapper')
                let err = document.createElement('p')
                err.textContent = 'Ошибка добавления товара, проверьте корректность введеных данных'
                formWrapper.append(err)
            }
        })
    }

    addFormBtn.addEventListener('click', () => {
        addNewProduct()
    })

    function createTableRow(data) {
        let tablerRows = []
    
        for (let i = 0; i < data.length; i ++) {
            let tr = document.createElement('tr')
            tr.className = 'table_row'
            tablerRows.push(tr)
        }
        table.append(...tablerRows)
    }

    function createTableData(data) {
        let tableRow = document.querySelectorAll('.table_row')
        let tableDataPointer = 0
        tableRow.forEach(element => {
            let name = document.createElement('td')
            let description = document.createElement('td')
            let price = document.createElement('td')
            
            name.innerText = data[tableDataPointer].name
            
            description.innerText = data[tableDataPointer].description

            price.innerText = data[tableDataPointer].price

            tableDataPointer++
            element.append(name, description, price)
        });
    }
    
    function getGoods() {
        let goods = fetch(
            'goods/',
            {
                method: "GET"
            }
        ).then(response => response.json())
        .then((data) => {
            createTableRow(data)
            createTableData(data)
        }).catch(e => {
            console.log(e)
        }
        )
    }    


    getGoods()


        
})

