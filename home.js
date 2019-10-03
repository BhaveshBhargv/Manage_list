function add() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var temp = document.createTextNode(inputValue);
    li.appendChild(temp);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("todo").appendChild(li);
    }
    document.getElementById("input").value = "";

    var btn = document.createElement("BUTTON");
    var txt = document.createTextNode("\uf1f8");
    btn.className = "delete";
    btn.appendChild(txt);
    li.appendChild(btn);

    for (i = 0; i < del.length; i++) {
        del[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
var list = document.getElementsByTagName("LI");
for (var i = 0; i < list.length; i++) {
    var btn = document.createElement("BUTTON");
    var txt = document.createTextNode("\u00D7");
    btn.appendChild(txt);
    list[i].appendChild(btn);
    btn.className = "delete";
}

var del = document.getElementsByClassName("delete");
for (var i = 0; i < del.length; i++) {
    del[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
var done = document.getElementsByTagName("LI");
for (var i = 0; i < done.length; i++){
    done[i].onclick = function() {
        done[i].style.textDecoration = "line-through";
    }
}
    