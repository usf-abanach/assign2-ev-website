
var selectedRow = null;

// Hide the element initially
document.getElementById("errorSignUp").style.display = "none";

// Function to show the form error message
function showSignUpError() {
    document.getElementById("errorSignUp").style.display = "block";
  }
  // Function to hide the error message
  function hideSignUpError(){
      document.getElementById("errorSignUp").style.display = "none";
  }

function onFormSubmit(){
    event.preventDefault();

    console.log("Submit Button was pressed");
    if (document.getElementById("make_fld").value != '' &&
        document.getElementById("model_fld").value != ''  &&
        document.getElementById("license_fld").value != '' ){
            
        console.log("All required fields entered");
        var formData = readFormData();
        if (selectedRow === null){
            insertNewRecord(formData);
        }
        else{
            updateRecord(formData);
        }
        resetForm();
        
    }
    else{
        showSignUpError();
    }
}

// Retrieve the data
function readFormData(){
    var formData = {};
    formData["make"] = document.getElementById("make_fld").value;
    formData["model"] = document.getElementById("model_fld").value;
    formData["license"] = document.getElementById("license_fld").value;

    selected_ev_index = document.getElementById("ev_type_fld").value ;

    console.log("selected value is: ",selected_ev_index );
    console.log (document.getElementById("ev_type_fld").options[selected_ev_index].text);
    formData["ev_type"] = document.getElementById("ev_type_fld").options[selected_ev_index].text;
    
    return formData;
}

// Insert the data
function insertNewRecord(data){
    var table = document.getElementById("car_grid").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.make;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.model;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.license;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.ev_type;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button class="btn btn-primary"  onClick='onEdit(this)'>Edit</button> <button class="btn btn-outline-danger" onClick='onDelete(this)') >Delete</button>`

       

}


// Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    
    document.getElementById("make_fld").value = selectedRow.cells[0].innerHTML;
    document.getElementById("model_fld").value = selectedRow.cells[1].innerHTML;
    document.getElementById("license_fld").value = selectedRow.cells[2].innerHTML;
    document.getElementById("ev_type_fld").value = selectedRow.cells[3].innerHTML;

}

// Save updated row
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.make;
    selectedRow.cells[1].innerHTML = formData.model;
    selectedRow.cells[2].innerHTML = formData.license;
    selectedRow.cells[3].innerHTML = formData.ev_type;


}

// Delete a row
function onDelete(td){
    if(confirm("Are you sure you want to delete this record?")){
        row = td.parentElement.parentElement;
        document.getElementById('car_grid').deleteRow(row.rowIndex);
    }
    resetForm();
}

// Reset the data
function resetForm(){
    document.getElementById('make_fld').value = '';
    document.getElementById('model_fld').value = '';
    document.getElementById('license_fld').value = '';
    document.getElementById('ev_type_fld').selectedIndex = 0;

    hideSignUpError();
}

