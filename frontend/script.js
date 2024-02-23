const url = `http://localhost:4000`;
function signUp(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var isPasswordMatch = password === confirmPassword;
    if(!isPasswordMatch){
        document.getElementById('passwordMain').innerText = '';
        document.getElementById('passwordError').innerText = 'Passwords do not match';
    }else
        document.getElementById('passwordError').innerText = '';
    if (isPasswordMatch) {
        var minLength = 8;
        var hasUppercase = /[A-Z]/.test(password);
        var hasLowercase = /[a-z]/.test(password);
        var hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

        if(password.length < minLength)
            document.getElementById('passwordMain').innerText = 'Password should have 8 characters';

        else if(!hasUppercase)
            document.getElementById('passwordMain').innerText = 'Password should have atleast one uppercase character';
        else if(!hasLowercase)
            document.getElementById('passwordMain').innerText = 'Password should have atleast one lowercase character';
        else if(!hasSpecialCharacter)
            document.getElementById('passwordMain').innerText = 'Password should have atleast one special character';
    
        else{
            
            let obj = {
                name,
                email,
                password
            }

            axios.post(`${url}/users/addUser`, obj)
                .then(respond => {

                    var msg = respond.data.message;
                    var check = respond.data.check;

                    alert(`${msg}`);

                    if(check)
                        window.location.replace("./login.html");
                    else
                        window.top.location = window.top.location;
                })
                .catch(err => console.log(err));

        }
    }
}