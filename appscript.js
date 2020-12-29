var events=[];
function Add(){
    var event=document.getElementById("event");

    var s= events.includes(event);

    if (s==true){
        alert("Activity already added")
    }else{
        events.push(event)
    }
    console.log(events);
}
