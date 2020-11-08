const title = document.querySelector('#title')
const author = document.querySelector('#author')
const year = document.querySelector('#year')
const btn = document.querySelector('.btn')
const bookList = document.querySelector('#book-list')

btn.addEventListener('click', function(e){
    e.preventDefault()
    if ( title.value == '' && author.value == '' && year.value == '') {
        alert('Enter Book name, Author name & year')
    } else {
        const newRow = document.createElement('tr')

        const newTitle = document.createElement('th')
        newTitle.innerHTML = title.value
        newRow.appendChild(newTitle)

        const newAuthor = document.createElement('th')
        newAuthor.innerHTML = author.value
        newRow.appendChild(newAuthor)

        const newYear = document.createElement('th')
        newYear.innerHTML = year.value
        newRow.appendChild(newYear)

        let crossimg = document.createElement('img')
        crossimg.setAttribute("src", "cross.jpg")
        crossimg.setAttribute("width", "40");
        crossimg.setAttribute("height", "40");
        crossimg.setAttribute("alt", "Delete Button");
        newRow.appendChild(crossimg);
        
        bookList.appendChild(newRow)

        crossimg.addEventListener('click', function(){
            newRow.remove()
        })
    }

})