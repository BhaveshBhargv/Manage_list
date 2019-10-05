function add() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var date = document.getElementById("datePickerId").value;
    var temp = document.createTextNode('(complete by: '+date+') '+inputValue);
    var div = document.createElement("div");
    div.appendChild(temp)
    li.appendChild(div);
    if ( inputValue === '') {
        alert("You must write something!");
    } else if (date === ''){
        alert("Please enter complete by date")
    } else {
        document.getElementById("todo").appendChild(li);
    }
    document.getElementById("input").value = "";
    document.getElementById("datePickerId").value = "";

    var btn1 = document.createElement("BUTTON");
    var icon1 = document.createTextNode("\uf1f8");
    btn1.className = "btn delete";
    btn1.appendChild(icon1);
    li.appendChild(btn1);

    var btn2 = document.createElement("BUTTON");
    var icon2 = document.createTextNode("\uf040");
    btn2.className = "btn edit";
    btn2.appendChild(icon2);
    li.appendChild(btn2);

    var del = document.getElementsByClassName("delete");
    for (var i = 0; i < del.length; i++) {
        del[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    var edt = document.getElementsByClassName('edit');
    for (var i = 0; i < edt.length; i++) {
        edt[i].onclick = function() {
            var temp = this.parentElement;
            var temp2 = temp.childNodes;
            if(temp2[0].contentEditable == "true"){
                temp2[0].contentEditable = false;
                temp2[0].style.backgroundColor = '';
            } else {
                temp2[0].contentEditable = true;
                temp2[0].style.backgroundColor = 'white';
            }
            if(temp2[0].innerText == ""){
                temp.style.display = "none";
            }
        }
    }
}

datePickerId.min = new Date().toISOString().split("T")[0];

    