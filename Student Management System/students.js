let data = JSON.parse(localStorage.getItem("admission"));
console.log(data);
let accepted = JSON.parse(localStorage.getItem("admission-accepted")) || [];
let rejected = JSON.parse(localStorage.getItem("admission-rejected")) || [];



function sortbydep(event) {
    let c = document.getElementById("filter").value;
    let b = data.filter(function(el) {
        if (c === "all") {
            return true;
        } else
            return el.course == c
    });

    document.querySelector('tbody').innerHTML = "";
    b.map(mapping);

}



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

    const td6 = document.createElement('td');
    td6.innerText = "Accept";
    td6.style.backgroundColor = "green";

    const td7 = document.createElement('td');
    td7.innerText = "Reject";
    td7.style.backgroundColor = "red";
    td6.style.color = "white";
    td7.style.color = "white";
    tr.append(td1, td2, td3, td4, td5, td6, td7);
    document.querySelector('tbody').append(tr);

    td6.addEventListener('click', function() {
        accept(el, index);
    })
    td7.addEventListener('click', function() {
        reject(el, index);
    })
}

function accept(el, index) {
    accepted.push(el);
    localStorage.setItem("admission-accepted", JSON.stringify(accepted));

    data.splice(index, 1);
    localStorage.setItem('admission', JSON.stringify(data));
    window.location.reload();


}

function reject(el, index) {
    rejected.push(el);
    localStorage.setItem("admission-rejected", JSON.stringify(rejected));

    data.splice(index, 1);
    localStorage.setItem('admission', JSON.stringify(data));
    window.location.reload();


}