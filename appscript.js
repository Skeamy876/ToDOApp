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
    document.getElementById("sec").innerHTML=lists
}
