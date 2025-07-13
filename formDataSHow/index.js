

const formdata = document.getElementById("formdata");
const nodelist = document.getElementById("dataList");

formdata.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const number = document.getElementById("number").value.trim();

    if (name && age && number) {
        const DateNow = document.createElement("div");
        DateNow.className = 'data-item';
        DateNow.innerHTML = `<strong>Name: </strong>${name}  | <strong>Age : </strong>${age} | <strong>Number :</strong>${number} `

        nodelist.appendChild(DateNow)
        form.reset()
    }



})