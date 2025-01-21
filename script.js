function populateList() {
    const data = Array.from({ length: 100 })    
    .map((_, i) =>  `<div class="item">Item ${(i + 1)}</div>`)
    
    const list = document.querySelector('#paginate .list')
    list.innerHTML = data.join("")
}

populateList()



/* Primeira forma

function populateList() {
    const data = []    

    for (let i = 0; i < 100; i++) {
        data.push(`Item ${(i + 1)}`)    
    }

    console.log(data)
}

populateList()

*/


