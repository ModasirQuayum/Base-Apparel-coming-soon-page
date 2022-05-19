const message = document.getElementById('message');
const form = document.getElementById('form');
const email = document.getElementById('email');
// const link = document.getElementById('permalink');
const error_icon = document.getElementById("error_icon");


const check_icon = document.getElementById("check_icon");

message.style.visibility = "hidden";
error_icon.style.visibility = "hidden";
check_icon.style.visibility = "hidden";

let pattern = /^([\.\_a-zA-Z0-9]+)@(a-zA-Z+)\.(a-zA-Z){2,8}$/;

form.addEventListener('submit',(e)=>{
    let input = email.value;
    if(input === '' || !isEmail(input)){
        message.innerHTML = "Please provide valid email";
        email.style.border =  "2px solid hsl(0deg 93% 40%)";
        message.style.visibility = "visible";
        error_icon.style.visibility = "visible";
        message.style.color = 'hsl(0deg 93% 40%)';
    }
    else{
        message.innerHTML = "Email is Valid";
        message.style.visibility = "visible";
        check_icon.style.visibility = "visible";
        error_icon.style.visibility = "hidden";
        message.style.color = 'hsl(158deg 95% 34%)';
        email.style.border =  "2px solid hsl(158deg 95% 34%)";
    }
   e.preventDefault();

    
});
function isEmail(email){
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}