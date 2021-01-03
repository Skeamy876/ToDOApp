var lists=[];
function Add(){
    var list=document.getElementById("event").value
    var s= lists.includes(list);
    if (s==true){
        alert("Activity already added")
    }else{
        lists.push(list)
        console.log(lists)
        document.getElementById("sec").innerHTML += `<li idx="${lists.length-1}">${lists} <button type="button" onclick="remove()">Delete</button></li>`
    }     
    
}
//delete activity from list
function remove(){
    const btn = event.target;
    const index = parseInt(btn.parentElement.getAttribute("idx"), 10);
    activities.splice(index, 1);
    document.getElementById("sec").innerHTML = lists.map((list, i) => {
      return `<li idx="${i}">${lists} <button type="button" onclick="remove()">Delete</button></li>`
    });

}
