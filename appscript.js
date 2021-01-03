var lists=[];
function Add(){
    var list=document.getElementById("event").value
    var s= lists.includes(list);
    if (s==true){
        alert("Activity already added")
    }else{
        lists.push(list)
        console.log(lists) 
    }
    var output=lists.join('<br/>');
    document.getElementById("sec").innerHTML=output;
}


