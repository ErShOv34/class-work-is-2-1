const checkInput = () => {
    let number = document.querySelector('#requestNumber').value;
    let date = document.querySelector('#requestDate').value;
    let description = document.querySelector('#requestDescription').value;
    let status = document.querySelector('#requestStatus').value;
    let button = document.querySelector('#requestBtn');

    if (number !== "" && date !== "" && description !== "" && status !== "") {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

const addRequest = () => {
    let number = document.querySelector('#requestNumber').value;
    let date = document.querySelector('#requestDate').value;
    let description = document.querySelector('#requestDescription').value;
    let status = document.querySelector('#requestStatus').value;

    let requestCard = document.createElement('div');
    requestCard.classList.add('card');

    if (status.toLowerCase() === 'Выполнен') {
        requestCard.classList.add('pink');
    } else if (status.toLowerCase() === 'В процессе') {
        requestCard.classList.add('yellow');
    } else {
        requestCard.classList.add('orange');
    }

    requestCard.innerHTML = `
        <p><strong>Номер запроса:</strong> ${number}</p>
        <p><strong>Дата создания:</strong> ${date}</p>
        <p><strong>Описание:</strong> ${description}</p>
        <p><strong>Статус:</strong> ${status}</p>
    `;


    document.querySelector('#requestList').appendChild(requestCard);
    document.querySelector('#requestBtn').disabled = false;
}