



     

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
document.getElementById("logoutButton").addEventListener("click", function() {
    // Get the JWT cookie
    const cookies = document.cookie.split(';');
    let jwtCookie;
    for (const cookie of cookies) {
        if (cookie.trim().startsWith('jwt=')) {
            jwtCookie = cookie.trim().substring(4); // Extract the JWT value
            break;
        }
    }

    // If JWT cookie is found, remove it
    if (jwtCookie) {
        document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        alert("Logged out successfully!");
    } else {
        alert("No JWT cookie found!");
    }
});
 