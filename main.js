const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")


function  addTack(e){
    if(inputBox.value===""){
        alert("your most write  something ")
    }
    else{
        let li =document.createElement("li");
        li.innerHTML=inputBox.value
        listContainer.appendChild(li);
        const d=new Date()
        const r=d.getHours();
        const t=d.getMinutes()
        let e = `${r}:${t}`
        let a =document.createElement("a")
        a.innerHTML= e
        li.appendChild(a)
        let span =document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    inputBox.value=""
    saveData()
}

listContainer.addEventListener('click',function (e){
    if (e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        saveData();
    }

},false)
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask()