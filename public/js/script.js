document.querySelector('.icon .fa-bars').addEventListener("click",() => {
    document.querySelectorAll('ul .list-group-item').forEach((item)=>{
        item.classList.toggle('close')
    })
})