const inputbox = document.getElementById("input-box");
const listcontianer = document.getElementById("list-contianer");
function addtask() {
    if (inputbox.value === "") {
        alert( "Please enter a task" );
    } else {
        let li  = document.createElement("li") ;
        li.innerHTML = inputbox.value;
        listcontianer.appendChild(li) ;
        let span = document.createElement("span");
        span.innerHTML ="x";
        li.appendChild(span);
    }
    inputbox.value ="";
    savedata()
}
listcontianer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata()
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata()
    }
}, false);
function savedata(){
    localStorage.setItem("data" , listcontianer.innerHTML)
}
function showitem(){
    listcontianer.innerHTML =localStorage.getItem("data")
}
showitem()

