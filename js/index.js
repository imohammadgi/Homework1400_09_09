function changecontent(){
    document.getElementById("title").innerHTML="از عکس ها دیدن کنید";
}

function changeattributr(){
    document.getElementById("title").setAttribute("align","right")
}

function changestyle(){
    document.getElementById("title").style.color="blue";
}

function showelements(){

    document.getElementById("title").style.display="block";
}

function hideelements(){
    document.getElementById("title").style.display="none";
}

function hideshowelements(){
    var x=document.getElementById("title");
    if (x.style.display==="none"){x.style.display="block"}
    else {x.style.display="none"}
}
function setcss(){
    document.getElementById("title").setAttribute("class","p1")
}