console.log('hello')
// notes are stored at local storage
shownotes();
document.getElementById('addbtn').addEventListener('click', function (e) {
    let text = document.getElementById('addText')
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        noteobj = []
    }
    else {
        noteobj = JSON.parse(notes);
    }
    noteobj.push(text.value)
    localStorage.setItem('notes', JSON.stringify(noteobj))
    text = ''
    shownotes()
})

function shownotes() {

    let notes = localStorage.getItem('notes')
    if (notes == null) {
        noteobj = []
    }
    else {
        noteobj = JSON.parse(notes);
    }

    html = ''
    noteobj.forEach(function (element, index) {
        html += `
        <div class="my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index +1}</h5>
                <p class="card-text">${element}</p>
                <button onclick='deletenotes(${index})' class="btn btn-primary">delete notes</button>
            </div>
        </div>
        
   
        `
    });
    addnote = document.getElementById('notes')
    if (noteobj.length != 0)
        addnote.innerHTML = html
        else
        {
            addnote.innerHTML=`there is nothing to be displayed please use 'Add notes' button add notes `
        }
}

function deletenotes(index)
{
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        noteobj = []
    }
    else {
        noteobj = JSON.parse(notes);
    }
    let a = confirm('are you want to delete? ')
    if(a==true){
    noteobj.splice(index,1)
    localStorage.setItem('notes',JSON.stringify(noteobj))
    }
    shownotes()
}

searchText = document.getElementById('searchText')
searchText.addEventListener('input',function(){
        search = searchText.value
        console.log('input fired')
        let cards = document.getElementsByClassName('card')
        Array.from(cards).forEach(function(ele,index){
              val = ele.getElementsByTagName('p')[0];
              s = val.innerText;
              if(s.includes(search))
              ele.style.display = 'block'
              else 
              ele.style.display = 'none'
        })
})