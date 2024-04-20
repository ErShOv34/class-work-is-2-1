const saveData = () => {
    let bookName = document.querySelector("#bookName").value;
    let Author = document.querySelector("#Author").value;
    let genre = document.querySelector("#genre").value;
    let description = document.querySelector("#description").value;

    let storeData = JSON.parse(localStorage.getItem("books")) || [];

    let bookData = {
        bookName: bookName,
        Author: Author,
        genre: genre,
        description: description,
    }

    storeData.push(bookData);
    localStorage.setItem("books", JSON.stringify(storeData));
    getData();
}

const getData = () => {
    let storeData = JSON.parse(localStorage.getItem("books")) || [];
    let resultData = document.querySelector("#resultData");
    resultData.innerHTML = "";
    if ( storeData && storeData.length > 0 ) {
        storeData.forEach(function(bookData, index) {
            resultData.innerHTML += `<li> Название: ${bookData.bookName}</li>`;
            resultData.innerHTML += `<li> Автор: ${bookData.Author}</li>`;
            resultData.innerHTML += `<li> Жанр: ${bookData.genre}</li>`;
            resultData.innerHTML += `<li> Краткое описание: ${bookData.description}</li>`;
            resultData.innerHTML += `<button onclick='deleteData(${index})'>Удалить</button>`;
            resultData.innerHTML += `<hr><br>`;
        });
    } else {
        resultData.innerHTML += "<li>Данные не найдены</li>"
    }
}

const deleteData = (index) => {
    let storeData = JSON.parse(localStorage.getItem("books")) || [];
    storeData.splice(index, 1)
    localStorage.setItem("books", JSON.stringify(storeData))
    getData();
}

window.onload = function(){
    getData();
}