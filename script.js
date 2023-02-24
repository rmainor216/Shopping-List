var head1 = document.createElement("h1");
head1.innerText = "Shopping List";
document.body.appendChild(head1);

var para = document.createElement("p");
para.innerText = "Get it done today";
document.body.appendChild(para);


var userInput = document.createElement("input");
document.body.appendChild(userInput);
document.querySelector("input").setAttribute("id","uInput");
document.querySelector("input").setAttribute("type","text");
userInput.placeholder = "Enter list item here";

var enterBtn = document.createElement("button");
enterBtn.appendChild(document.createTextNode("Enter"));
document.body.appendChild(enterBtn);
document.querySelector("button").setAttribute("id","enter");

var newUl = document.createElement("ul")
document.body.appendChild(newUl);

function inputLength() {
	return userInput.value.length;
}

function newLine(){
	var newLi = document.createElement("li");
		newUl.appendChild(newLi);
		newLi.appendChild(document.createTextNode(userInput.value));
		newLi.classList.add("item");
		userInput.value = "";
		
		var deleteBtn = document.createElement("button");
		newLi.appendChild(deleteBtn);
		deleteBtn.className = "delete";
		deleteBtn.innerText = "X";
		deleteBtn.id = "removeLi";
		deleteBtn.onclick = removeParent
}

var buttonAfter = document.getElementById("enter");

var addInfoClick = function(){
	if( inputLength() > 0){
		newLine();
	}
}

function pressAdd(event) {
	if(inputLength() > 0 && event.keyCode === 13){
	newLine();
	}   
}

function removeParent(evt){
	evt.target.parentNode.remove();
} 



function checkOff(item){
    item.target.classList.toggle("done");
}


buttonAfter.addEventListener("click", addInfoClick);

userInput.addEventListener("keypress", pressAdd);
   
newUl.addEventListener("click", checkOff);












