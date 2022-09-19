// All the Code for the Admitted page goes here

let data = JSON.parse(localStorage.getItem("admission-accepted"));

data.map(mapping);


function mapping(el, index) {
    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    td1.innerText = el.name;

    const td2 = document.createElement('td');
    td2.innerText = el.email;

    const td3 = document.createElement('td');
    td3.innerText = el.course;

    const td4 = document.createElement('td');
    td4.innerText = el.gender;

    const td5 = document.createElement('td');
    td5.innerText = el.phone;

    tr.append(td1, td2, td3, td4, td5);
    document.querySelector('tbody').append(tr);
}