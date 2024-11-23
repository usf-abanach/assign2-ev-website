
//const partners = ["Tom Thumb", "Bob Hope", "Peter Parker", "Paul Rudd"]

var new_name = '';

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

    console.log("Button was pressed");
   // var formData = readFormData();
    if (document.getElementById("email_fld").value != '' && document.getElementById("name_fld").value != ''){

        console.log("Trigger Thank you Modal");
        readFormData()
        var myModal = document.getElementById("modalSignin");
        const bsModal = bootstrap.Modal.getInstance(myModal);
        console.log("Attempt to close modal window");
        bsModal.hide();

        showThanksAlert(new_name);
        resetForm();
        hideSignUpError()
    }
    else{
        
        console.log("No email and/or full name provided");
        showSignUpError()  
    }
   
}

// Retrieve the data
function readFormData(){
    var formData = {};
    formData["name_fld"] = document.getElementById("name_fld").value;
    formData["email_fld"] = document.getElementById("email_fld").value;
    new_name = document.getElementById("name_fld").value;

    partners.push(formData.name_fld);
    

    console.log("Getting the Name value: ",formData.name_fld );

    console.log(partners);
   
    
    return formData;
}


// Show Parter List
function showPartners(){
    console.log("Entered showParnters() function.");
    let list_text = "<ul>";
    partners.forEach(element => {
        list_text += "<li>" + element + "</li>";
    });
    list_text += "</ul>";
    const partList = document.getElementById("showList");
    partList.innerHTML = list_text;
}


function showThanksAlert(the_name){
   
    console.log("trying to show alert message for " + the_name);

    var div = document.getElementById("alertLoc");
    div.style.display = 'block';
    
}

function closeAlert(){
    var div = document.getElementById("alertLoc");
    div.style.display = 'none';

}


// Reset the data
function resetForm(){
    document.getElementById('name_fld').value = '';
    document.getElementById('email_fld').value = '';
}