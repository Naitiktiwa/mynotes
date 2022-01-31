shownotes()
let sel= document.querySelector('.btn')
sel.addEventListener('click', function(e) {
  
  
  let elem = document.querySelector('#textarea')
  let p = document.querySelector('#tex')
  notes= localStorage.getItem('notes')
  if (notes == null){
    notesobj = [];
    
  }
  else{
    notesobj = JSON.parse(notes)
  }
  klp = {
    title:p.value,
    text:elem.value
  }
  notesobj.push(klp);
   localStorage.setItem("notes",JSON.stringify(notesobj));
   elem.value = "";
   p.value ="";
   console.log(notesobj);
   



  
  
  shownotes();
  
})
   
function shownotes() {
   let notes = localStorage.getItem('notes');
   let p = document.querySelector('#tex')
     if (notes == null) {
       notesobj = [];
   
     }
     else {
       notesobj = JSON.parse(notes)
      
       
     }
     
     
     
     html = "";
     
     notesobj.forEach(function (element,index) {
       html += `  
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <button id ="${index}" onclick="deletenot(this.id)"class="btl">Delete Now</button>
        </div>    
        `
     })
     
     el = document.getElementById('el')
     if (notesobj.length !=0) {
       
     
     el.innerHTML= html;
     }
     else {
     el.innerHTML =`Noting to show please add a note to show .`
       
     }
  
}

function deletenot(index) {
  //   console.log("I am deleting", index);
  
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
    
  } else {
    notesobj = JSON.parse(notes);
  }
  
  
  
  
  

  notesobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  
  
  
  
  
  
  shownotes();
}


     
     
   
   
 
     
  

   
