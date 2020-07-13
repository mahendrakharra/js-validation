const form = document.querySelector('.signup-form');
const output = document.querySelector('.output');
const passToggle = document.querySelector('span');
const pass = document.querySelector('#pass');

     passToggle.addEventListener('click', e => {
         passToggle.className = "fa fa-eye";
         if(pass.type === "password"){
            pass.type = "text";
         }
      });
     passToggle.addEventListener('dblclick', event => {
         passToggle.className = "fa fa-eye-slash";
         if (pass.type === "text") {
             pass.type = "password";
         }
      });

    form.addEventListener('submit', e => {
        e.preventDefault();
        if(form.name.value === ""){
           alert('Please enter your correct name!')
           form.name.focus();
           return false;
        }
        if(form.email.value === ""){
           alert('Please enter your correct email address');
           form.email.focus();
           return false;
        }
        if(form.username.value === ""){
           alert('Please enter your correct username');
           form.username.focus();
           return false;
        }
        if(form.password.value === ""){
           alert('Please enter your correct password!');
           form.password.focus();
           return false;
        }
        if(form.number.value === ""){
           alert('Please enter correct phone number!')
           form.number.focus();
           return false;
        }else{
           output.innerHTML = `<p>Fullname : ${form.name.value}</p>
                               <p>Email Add : ${form.email.value}</p>
                               <p>Username : ${form.username.value}</p>
                               <p>Password : ${form.password.value}</p>
                               <p>Number : ${form.number.value}</p>`;
        }
           form.reset();
           return true;
    });
