var addToDoButton = document.getElementById("addToDo");
var list= document.getElementById("list");
var inputField= document.getElementById("inputField");

addToDoButton.addEventListener("click",function (){
    var divL=document.createElement('div');
    var li=document.createElement('li');
    li.classList.add("toDo-list");
    li.innerText=inputField.value
    var del = document.createElement('button');
    del.classList.add("toDo-button");
    del.innerText= 'delete';
    divL.appendChild(li);
    divL.appendChild(del);
    list.appendChild(divL);
    inputField.value="";
    li.addEventListener('click',function (){
        li.style.textDecoration="line-through";
    })
    li.addEventListener('dblclick',function (){
        li.style.textDecoration="";
    })
    del.addEventListener("click",function (){
        list.removeChild(divL);

    })
})
var API_URL = 'https://jsonplaceholder.typicode.com/todos';
var httpReq = new XMLHttpRequest();
httpReq.open('GET',API_URL);
httpReq.send();
httpReq.onreadystatechange = handler;

function handler(){
    if(httpReq.readyState===4 && httpReq.status===200){
        console.log(JSON.parse(httpReq.responseText));
        var list = JSON.parse(httpReq.responseText);
        for(var i=0;i<10;i++){
            var divMain=document.createElement('div');
            divMain.classList.add("divMain");
            var divInner=document.createElement('div');
            divInner.classList.add("divInner");
            var text = document.createTextNode(list[i].title);
            var delInner = document.createElement('button');
            delInner.classList.add("delButton")
            delInner.innerText= 'delete';
            divInner.appendChild(text);
            divMain.appendChild(divInner);
            divMain.appendChild(delInner);
            document.body.appendChild(divMain);
            delInner.addEventListener("click",function () {
                divMain.parentNode.removeChild(divMain);
                // divMain.removeChild(delInner);
                })
        }

    }

}
