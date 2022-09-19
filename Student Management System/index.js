// All the JS Code for the Add Students Page Goes Here

let data = JSON.parse(localStorage.getItem("admission")) || [];

document.querySelector('form').addEventListener("submit", collectData);


function collectData(event) {
    event.preventDefault();

    let obj = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        gender: document.getElementById('gender').value,
        course: document.getElementById('course').value
    }
    console.log(obj);
    data.push(obj);
    localStorage.setItem('admission', JSON.stringify(data));
}