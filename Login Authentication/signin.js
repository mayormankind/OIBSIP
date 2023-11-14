const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const signinform = document.querySelector('.signinform')
const users = []
const allusers = JSON.parse(localStorage.getItem('users')) || []

signinform.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(email.value=='' || password.value==''){
        alert('ensure that all fields are filled correctly')
        return
    }
    const user = authenticateUser(email.value,password.value)
    if(user!==undefined){
        localStorage.setItem('xprname',user.username)
        navigateToHomePage()
    }
    emptyInputs()
})

function authenticateUser(id){
    const user = allusers.map(user=>{
        return user
    }).filter(user=>{
        return user.id == id && user.password == password.value
    })[0]
    if(!user){
        alert('check your login details and try again!');
        return
    }else{
        return user
    }
}
function navigateToHomePage(){
    location.assign('homepage.html')
}
function emptyInputs(){
    email.value = '';
    password.value = '';
}