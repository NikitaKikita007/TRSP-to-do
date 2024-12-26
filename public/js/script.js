let datadiv = document.getElementById("data")

function time() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    datadiv.textContent = `${hours}:${minutes}:${seconds}`
}
// datadiv.textContent = `${hours}:${minutes}:${seconds}`

setInterval(time, 500);
