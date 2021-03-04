function myFunction(list){
    var text = "";
    var inputs = document.querySelectorAll("input[type=text]");
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
  
	document.getElementById('list').removeChild(list.children[0]); 
})
