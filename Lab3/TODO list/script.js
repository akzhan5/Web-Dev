
var n = []; 

// check item
function checkItem(value) {
    var l = document.getElementById(value);
    l.style.textDecoration="line-through"; 
}

//add item 
function insertItem() {
    var inputText = document.getElementById('content').value; 
    n.push(inputText); 
    var newIt = `<li> 
    <div style=" font-size: 14px;
    margin-bottom: 6px" class="items"> 
    <input onclick="checkItem(this.value)" type="checkbox" value = "${inputText} "name="item" id="Item"/> 
    <label style="margin-left: 15px; " class = "item" for="${inputText}" id="${inputText}"> ${inputText} </label> 
    <img style=" width: 4%; ; 
    margin-left: 225px;  
    margin-top: 3px; 
    padding-top: 2px; 
    margin-bottom: 0px; 
    padding-bottom: 0px; 
    object-fit: cover" onclick = "deleteItem(this.id)" id="${inputText} img" src="/Users/akzhansabibolda/Desktop/Web-Dev/Lab3/TODO list/istockphoto-1201412419-1024x1024.jpg"/> 
    </div>
    </li>`

    document.querySelector('.main_items ul').innerHTML += newIt; 
}
/*
var checkboxes = document.querySelectorAll("input[type='checkbox']"); 
var v = checkboxes[0].value; 
var l = document.getElementById(v);
l.style.textDecoration="line-through"; 
prompt(typeof(v)); 
*/ 

// delete item 
function deleteItem(id) {
    var img = document.getElementById(id); 
    // delete its parent div 
    img.parentElement.remove(); 
}





