var Events=[];
function Add(){
    var event=document.getElementById("event");

    var s= Events.includes(event);

    if (s==true){
        alert("Activity already added")
    }else{
        Events.push(event)
    }
}
console.log(Events)