$(function() {
  const textMax = 140;
  $("#counter").html(textMax);

  $(".text-area").on("keyup", function(event) {
    const textLength = this.value.length;
    const textRemaining = textMax - textLength;
    const counter = $(this).siblings('#counter')
    counter.append('')
  
    if (textRemaining < 0) {
      counter
        .html(textRemaining)
        .css("color", "red");
    } else if (textRemaining >= 0) {
      counter
        .html(textRemaining)
        .css("color", "black");
    }
  });
});

// textBox.text.value.length

// const inputContent = event.target.elements.textBox

// //prevent default event on submit (GET)
// event.preventDefault();

// //Grab the content of the input
// const Inputcontent = event.target.elements.(addtodo);

// // create a new thing in the list
// const createList = content => {

//   //create a new li for the content
//   const liEl = document.createElement('li')

//   //create a class name for the content (should be the same as the other posts or things in the list)
//   liEl.className = 'list-group-item'
//   liEl.innerText = ` ${content}`;

//   //create a new checkBox
//   const checkBoxEl = document.createElement('input')
//   checkBoxEl.setAttribute("type", "checkbox")
//   checkBoxEl.class = 'todo-check'
//   checkBoxEl.setAttribute('name', content.split(' ').join('')).toLowerCase;  //same thing as checkBoxEl.name = content.split...
//   checkBoxEl.id = content.split(' ').join('-').toLowerCase;

//   //  put the checkbox before the text
//    liEl.insertBefore(checkBoxEl, iEl.firstChild);

//   return liEl;
// }

// //Put the value of content in a variable
// const newLi = createList(inputContent.value);

// // put the new thing to do in the DOM (list) so you can see it on the page
// const parentUl = document.getElementById('todo-list')
// parentUl.appendChild(newLi)

// //Add the same event listener on the newLi (same as the others in the list)
// newLi.(firstChild).addEventListener(click, function (){
//   blabla;
// })

// // reset value in the box
// inputContent.value = "";


// const $tagName = $('tagname')
// $tagName.append($otherTagName).addClass('contentName')
// $contentDiv = $('<div>')