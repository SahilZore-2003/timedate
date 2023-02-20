


let timeout = () => {
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let hour = date.getHours();
    let miniutes = date.getMinutes();
    let seconds = date.getSeconds();

    let currentDate = `${day}/${month}/${year}`;
    let currentTime = `${hour}:${miniutes}:${seconds}`;

    document.querySelector('#displayDate').innerText = currentDate;
    document.querySelector('#displayTime').innerText = currentTime;


}

setInterval(() => {
    timeout();
}, 1000)




