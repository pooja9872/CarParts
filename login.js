function store() {

         var fname = document.getElementById('firstname');
         var lname = document.getElementById("lastname");
         var emailId = document.getElementById("register-email");
         var reemailId = document.getElementById("re-register-email")
         var pw = document.getElementById('register-password');
         var cnfpwd = document.getElementById('confirm-register-password');


         if (fname.value.length == 0) {
             alert('Enter your first name');
         }
         else if (lname.value.length == 0) {
             alert('Enter your last name');
         }
         else if (emailId.value.length == 0) {
             alert('Enter your email address');
         }
         else if (reemailId.value.length == 0) {
             alert('Re-enter your email address');
         }
         else if (emailId.value != reemailId.value) {
             alert("Re-enter password is not matching");
         }
         else if (pw.value.length == 0) {
             alert('Enter your password ');
         }
         else if (pw.value.length !== 8) {
             alert('Enter Eight digit length password');
         }
         else if (pw.value != cnfpwd.value) {
             alert('Confirm password is not matching');
         }

         else if (fname.value.length == 0 && lname.value.length == 0 && emailId.value.length == 0 && reemailId.value.length == 0 && pw.length.value == 0 && cnfpwd.value.length == 0) {
             alert('Enter your all details');

         }
         else {
             localStorage.setItem('fname', fname.value);
             localStorage.setItem('lname', lname.value);
             localStorage.setItem('emailId', emailId.value);
             localStorage.setItem('pw', pw.value);
             alert('Your account has been created successfully');
         }
     }


     function checklogin(e) {
          e.preventDefault();
         let emailAddress = document.getElementById('current-email').value;
         let loginPassword = document.getElementById('current-password').value;
         let get_email = localStorage.getItem('emailId');
         let get_password = localStorage.getItem('pw');

         if (emailAddress == get_email && loginPassword == get_password) {
             alert("You are successfully logged in");
              window.location.href = "index.html";     
         }
         else {
             alert("Enter correct Email and Password");
         }
     }

     function redirectToHome(){
          window.location.href = "index.html";
     }
       function redirectToShopppingCart(){
          window.location.href = "shoppingcart.html";
     }
