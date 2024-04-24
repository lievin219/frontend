



     

function got(){
    document.querySelector('.dax')
    const inputElement =document.querySelector('.dax');
   document.querySelector('.lii').innerHTML= inputElement.value
};

var work=document.getElementsByClassName("work");
var skills=document.getElementsByClassName("skills");
function opentab(tabname ){
    for(skiaa of skills){
    skiaa.classList.remove("skill");
    }
    for(worklll of work){
        worklll.classList.remove("active");
    }
    event.currentTarget.classList.add("skill");
document.getElementById(tabname).classList.add("active");
}
var sidemeu=document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right="0";
}
function closemenu(){
    sidemeu.style.right="-100px"
}

let logout=document.getElementById("logotButton")
   logout.addEventListener('click', async (e) => {
    
    e.preventDefault();
    updateUserUII(null); 
    document.cookie = `jwt=; max-age=0`
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 0); 
    }
);

function logout() {
    // Set the expiration date of the cookie to a past date
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
    // Redirect the user to the login page or any other necessary action
    window.location.assign("login.html"); // Redirect to login page
}

// Attach click event listener to the logout button
document.getElementById("glooutBtn").addEventListener("click", function() {
    logout();
});