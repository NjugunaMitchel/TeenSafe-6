var ask = document.getElementById('ask');
var display = document.getElementById('display');
var input = document.getElementById('input').innerText;    
ask.addEventListener('click', askQuestion);
function askQuestion(e){
    e.preventDefault();
    var page = document.createElement('div');
    document.getElementById('display').appendChild(page);
    var paragraph = document.createElement('p');
    page.appendChild(paragraph);
    var c = document.createTextNode(input);
    paragraph.innerHTML(input);
    page.className = "section" ;
   
}

