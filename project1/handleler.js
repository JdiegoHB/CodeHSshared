var verification = "commit verification";
var namebutton = document.getElementById('following');


function handleUser() {

    namebutton.className = 'unfollowbutton button'; 
    namebutton.innerText = 'Following'; 
    namebutton.onclick = returnHandler;
}
function returnHandler() {
    namebutton.className = 'followbutton button';  
    namebutton.innerText = 'Follow';             
    namebutton.onclick = handleUser;   
}

namebutton.onclick = handleUser;

function isnotpossible() {
    alert('It wasn´t possible')
}


