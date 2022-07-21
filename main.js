let btnAdd = document.querySelector('button');
let table = document.querySelector('table');

let addTop = document.querySelector('#addTop');

let FirstName = document.querySelector('#firstName');
let LastName = document.querySelector('#lastName');
let cityIn = document.querySelector('#city');

let countryIn = document.querySelector('#country');


let sNo =0;
btnAdd.addEventListener('click', () => {
    console.log("hjsjv");

    let firstName = FirstName.value;
    let lastName = LastName.value;
    let city = cityIn.value;
    sNo = sNo+1;
   
    let country = countryIn.value;

    let template = `
                <tr>
                    <td>${sNo}</td>

                    <td>${firstName}</td>
                    <td>${lastName}</td>
                    <td>${city}</td>
                    <td>${country}</td>


                    
                </tr>`;

    table.innerHTML += template;
});



addTop.addEventListener('click',() => {
    
    let firstName = FirstName.value;
    let lastName = LastName.value;
    let city = cityIn.value;
    sNo = sNo+1;
   
    let country = countryIn.value;

    let template = `
                <tr>
                    <td>${sNo}</td>

                    <td>${firstName}</td>
                    <td>${lastName}</td>
                    <td>${city}</td>
                    <td>${country}</td>


                    
                </tr>`;

row = table.insertRow(1);
row.innerHTML =template



});


// var myTable = document.getElementById('myTable'),
//     tbody = myTable.tbodies[0],
//     tr = tbody.insertRow(-1)  // puts it at the start
// ;

// var td = document.createElement('td');
//     td.innerHTML = "Something";
// tr.appendChild(td);