const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const signupform = document.querySelector('#signupform')
const users = []
const allusers = JSON.parse(localStorage.getItem('users')) || [];

signupform.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(email.value=='' || username.value == '' || password.value==''){
        alert('ensure that all fields are filled correctly')
        return
    }
    const signupFormat={
        id:email.value,
        username: username.value,
        password: password.value
    }
    const existingUser = allusers.map(user=>{
        return user
    }).filter(user=>{
        return user.id == email.value
    })[0]
    console.log(existingUser)
    if(existingUser){
        alert('This email is already in use')
        return
    }else{
        users.push(signupFormat);
        update();
        emptyInputs()
    }
    // location.assign('index.html');
})

function update(){
    localStorage.setItem('users',JSON.stringify(users))
}
function emptyInputs(){
    username.value = '';
    email.value = '';
    password.value = '';
}