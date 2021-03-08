function myFunction(){
    var text = "";
    var inputs = document.querySelectorAll("input");
    for (var i = 0; i < inputs.length; i++) {
        text += inputs[i].value;
    }
    var li = document.createElement("li");
    var node = document.createTextNode(text);
    li.appendChild(node);
    document.getElementById("list").appendChild(li); 
    document.getElementById('toDo').value='';
}


    list = document.getElementById('list');
    list.addEventListener('click', function(event){
        setTimeout(function(){
        document.getElementById('list').removeChild(event.target);}, 2000) 
    })