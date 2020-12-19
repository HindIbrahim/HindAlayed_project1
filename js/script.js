let modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const button=document.getElementById("log");
button.addEventListener("click",Validate );
function Validate(e){
    e.preventDefault()

    let username="Hind";
    let pass=123;
       let enteredUsername= document.getElementById("name").value;
       let enteredPassword= document.getElementById("pass").value;
    
       if(enteredUsername ==username && enteredPassword==pass){
           console.log("hh");
        window.location.replace("Home.html");
    
    
       }
       else{
        
        alert("The username or Password is wrong! Try again")
       }
    
    
    
    }
   
    
    function Done(e){
        e.preventDefault();
        let done=e.target.parentNode;
        done.style.backgroundColor="gray";
  
          }

          function Del(e){
              e.preventDefault();
            let del=e.target.parentNode.parentNode;
            del.style.display="none"
  
          }


          
function addTask() {

    
      let prio=document.getElementById("prio").value;
      let task = document.getElementById("task").value;
  
      let col = document.createElement("div");
      col.classList.add("col");
  
      let card = document.createElement("div");
      card.classList.add("card", "mb-4", "shadow-sm");
  
      let cardHeader = document.createElement("div");
      cardHeader.classList.add("card-header");
  
      if(prio == "high"){
        cardHeader.style.backgroundColor="red";
      }else if(prio == "mid"){
        cardHeader.style.backgroundColor="yellow";
      }else{
        cardHeader.style.backgroundColor="chartreuse";
      }
  
      let cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
  
      let br = document.createElement("br");
      let h = document.createElement("h1");
      h.classList.add("card-title", "pricing-card-title");
      h.innerHTML = task;
      let br2 = document.createElement("br");
  
      let done = document.createElement("button");
      done.classList.add("btnn");
      done.innerHTML="Done";
      done.addEventListener("click",Done);
      let delet = document.createElement("button");
      delet.classList.add("btnn");
      delet.addEventListener("click",Del);
      delet.innerHTML="Delete";

      
      cardBody.append(br);
      cardBody.append(h);
      cardBody.append(br2);
      cardBody.append(done);  
      
      cardBody.append(delet);
  
      card.append(cardHeader);
      card.append(cardBody);
  
      col.append(card);
  
      
  
      let contain=document.getElementById("listContiner");
      contain.append(col)
  
  
          }


          
  function remove(){

    document.getElementById('newCourse').style.display="none";
    document.getElementById("courseName").value=" "
    document.getElementById("courseDescription").value=" "

  }
function addCourse(){
  console.log("jjj")
let CourseName= document.getElementById("courseName").value;
let CouseDecip=document.getElementById("courseDescription").value;

let rowDiv=document.createElement("div");
rowDiv.classList.add("row","mb-2");
let colDiv=document.createElement("div");
colDiv.classList.add("col-md-4");
let row=document.createElement("div");
row.classList.add("row", "g-0", "border", "rounded", "overflow-hidden", "flex-md-row", "mb-4", "shadow-sm", "h-md-250", "position-relative")
let col=document.createElement("div");
col.classList.add("col", "p-4", "d-flex", "flex-column", "position-static");
let title=document.createElement("strong");
title.classList.add("d-inline-block", "mb-2", "text-success");
let dscrip=document.createElement("p");
dscrip.classList.add("card-text", "mb-auto");


col.append(title);
col.append(dscrip);
row.append(col);
colDiv.append(row);
rowDiv.append(colDiv);

dscrip.innerHTML=CouseDecip;
title.innerHTML=CourseName;

let addCors=document.getElementById("container-Course");
addCors.append(rowDiv);

}


function remv(){
    document.getElementById("task").value="Add new Task and select its priority"
    document.getElementById("prio").value=""

}
          