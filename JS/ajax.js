
var submit = document.getElementById('submit');
var fullName = document.getElementById('name');
var email = document.getElementById('email');
var subject = document.getElementById('subject');
var comment = document.getElementById('comment');
var responseDisplay = document.getElementById("message");

function submitInput(data) {
  

  console.log(data)

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  fetch(
    'https://faruks-portfolio.herokuapp.com/response', 
    options
  )
}

document.getElementById('form').addEventListener('submit', 
      (() => {
        
        const data = {
          fullName: fullName.value, 
          email: email.value, 
          subject: subject.value, 
          comment: comment.value
        };
        if (fullName.value === "" 
        || email.value === "" 
        || subject.value === "" 
        || comment.value === "") {
      responseDisplay.innerHTML = `Please fill all input fields`;
        } else {
    
          let fullNameFormat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
          let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          let subjectFormat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

          if (fullNameFormat.test(data.fullName) ||
        Number(data.fullName) == data.fullName) {
        responseDisplay.innerHTML = `Please enter a valid name format`;
      } else if (!emailFormat.test(data.email)) {
        responseDisplay.innerHTML = `Please enter a valid email address`;
      } else if (subjectFormat.test(subjectFormat.subject)) {
        responseDisplay.innerHTML = `Please enter a valid subject`;
      }  else if (data.comment.length <= 1) {
        responseDisplay.innerHTML = `Comment box must not be empty`;
      } else {
        responseDisplay.innerHTML = `<span style="color: #00ff36;">Thank you 
        for reaching out</span>`;

        submitInput(data);

        fullName.value = "";
        email.value = "";
        subject.value = "";
        comment.value = "";

    }
    }

        }
      ));



