function saveResponse() {

    let fullName = document.getElementById('name');
    let email = document.getElementById('email');
    let subject = document.getElementById('subject');
    let response = document.getElementById('comment');

    let userResponse = {};
    userResponse.fullName = fullName.value;
    userResponse.email = email.value;
    userResponse.subject = subject.value;
    userResponse.message = response.value;
    
    var responseDisplay = document.getElementById("message");

    if (fullName.value === "" || email.value === "" || subject.value === "" ||
     response.value === "") {
        responseDisplay.innerHTML = `Please fill all input fields`;

    } else {

    fullNameFormat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    subjectFormat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    passWordFormat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (fullNameFormat.test(userResponse.fullName) ||
        Number(userResponse.fullName) == userResponse.fullName) {
        responseDisplay.innerHTML = `Please enter a valid name format`;
      } else if (!emailFormat.test(userResponse.email)) {
        responseDisplay.innerHTML = `Please enter a valid email address`;
      } else if (subjectFormat.test(subjectFormat.subject)) {
        responseDisplay.innerHTML = `Please enter a valid subject`;
      } else if (userResponse.message.length <= 1) {
        responseDisplay.innerHTML = `Comment box must not be empty`;
      } else{
        responseDisplay.innerHTML = `<span style="color: #00ff36;">Thank you 
        for reaching out</span>`;

    let responseDB = JSON.parse(localStorage.getItem('userResponseDB'));

      if(responseDB === null){
        responseDB = [];
        }
        responseDB.push(userResponse);
        

    localStorage.setItem('userResponseDB', JSON.stringify(responseDB));


    }
    }

    fullName.value = "";
    email.value = "";
    subject.value = "";
    response.value = "";

}