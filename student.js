var selectedRow = null;

function onFormSubmit() {
    if (validateID() && validatename() && validateemail() && validatedrop()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["sid"] = document.getElementById("sid").value;
    formData["fname"] = document.getElementById("fname").value;
    formData["lname"] = document.getElementById("lname").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["email"] = document.getElementById("email").value;
    formData["gender1"] = document.getElementById("gender1").value;
    formData["gender2"] = document.getElementById("gender2").value;
    formData["drop"] = document.getElementById("drop").value;



    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.sid;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.lname;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.dob;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.email;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.gender1;
    cell6.innerHTML = data.gender2;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.drop;
    cell7 = newRow.insertCell(7);
    cell7.innerHTML = `<a1 onClick="onEdit(this)">Edit</a>
                       <a1 onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("sid").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("email").value = "";
    document.getElementById("drop").value = "";



    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("sid").value = selectedRow.cells[0].innerHTML;
    document.getElementById("fname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("lname").value = selectedRow.cells[2].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[3].innerHTML;
    document.getElementById("email").value = selectedRow.cells[4].innerHTML;
    document.getElementById("gender1").value = selectedRow.cells[5].innerHTML;
    document.getElementById("gender2").value = selectedRow.cells[5].innerHTML;
    document.getElementById("drop").value = selectedRow.cells[6].innerHTML;



}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.sid;
    selectedRow.cells[1].innerHTML = formData.fname;
    selectedRow.cells[2].innerHTML = formData.lname;
    selectedRow.cells[3].innerHTML = formData.dob;
    selectedRow.cells[4].innerHTML = formData.email;
    selectedRow.cells[5].innerHTML = formData.gender1;
    selectedRow.cells[5].innerHTML = formData.gender2;
    selectedRow.cells[6].innerHTML = formData.drop;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validateID() {
    isValid = true;
    if (document.getElementById("sid").value == "") {
        isValid = false; 
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

function validatename() {
    isValid = true;
    if (document.getElementById("fname").value == "") {
        isValid = false; 
        document.getElementById("fnameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fnameValidationError").classList.contains("hide"))
            document.getElementById("fnameValidationError").classList.add("hide");
    }
    return isValid;
}

function validateemail() {
    isValid = true;
    if (document.getElementById("email").value == "") {
        isValid = false; 
        document.getElementById("emailValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("emailValidationError").classList.contains("hide"))
            document.getElementById("emailValidationError").classList.add("hide");
    }
    return isValid;
}

function validatedrop() {
    isValid = true;
    if (document.getElementById("drop").value == "") {
        isValid = false; 
        document.getElementById("dropValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("dropValidationError").classList.contains("hide"))
            document.getElementById("dropValidationError").classList.add("hide");
    }
    return isValid;
}
