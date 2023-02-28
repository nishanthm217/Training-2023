var selectedRow = null;

function onFormSubmit()
{
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null)
    {
        insertData(formData);
    }
    else
    {
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data

function readFormData()
{
    var formData = {};
    formData["FullName"] = document.getElementById("FullName").value;
    formData["email"] = document.getElementById("email").value;
    return formData;

}

//Inseting the data

function insertData(data)
{
    var newRow= {};

    var table = document.getElementById("customers").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.FullName;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<button onClick='editDetails(this)'>Edit</button> <button onClick='deleteDetails(this)'>Delete</button>`;

}

function editDetails(td)
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById("FullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
}

function updateRecord(formData)
{
    selectedRow.cells[0].innerHTML = formData.FullName;
    selectedRow.cells[1].innerHTML = formData.email;
}

function deleteDetails(td)
{
    if(alert("Give confirmation! Are you sure, you want to delete this record."));
    row = td.parentElement.parentElement;
    document.getElementById('customers').deleteRow(row.rowIndex);
}

function reset(td)
{
    document.getElementById('FullName').value=' ';
    document.getElementById('email').value=' ';
}