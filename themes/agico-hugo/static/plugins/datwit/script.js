/*!
 * script.js - https://datwit.com/
 * Version - 1.0.0
 * Licensed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Copyright (c) 2020 datwit
 */

//sidenav responsive 
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var list = [edge='left', draggable='true', preventScrolling='true'];
  var instances = M.Sidenav.init(elems, list );
});

//initializing character counter input texts 
$(document).ready(function() {
  M.updateTextFields();
});

$(document).ready(function() {
  $('input#namejehdn,input#emaildjjd,input#subjectjdhf,textarea#messagejdjkdkd').characterCounter();
 }); 

// Go to top button 
mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

// tooltip floating call to action button banner
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var options = [exitDelay= 1];
  var instances = M.Tooltip.init(elems, options);
});

//slider
document.addEventListener('DOMContentLoaded', function() {
  var options = [indicators = 'true', height = 440, interval = 6000];
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, options);
});

//********************************* */

//material box effect 
document.addEventListener('DOMContentLoaded', function() {
  var options = [inDuration = '275'];
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, options);
});

//collapsible
var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionItemHeading');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordionItem close';
        }
        if (itemClass == 'accordionItem close') {
            this.parentNode.className = 'accordionItem open';
        }
    }



/* function changedValue() {
  let text = document.getElementById("textarea1");
  let textValue = text.value;
  let row = text.getAttribute('rows');
  let lines = textValue.split(/\r|\r\n|\n/);
  let count = lines.length;
  console.log(lines)
  
  if (count >= row) {
      text.style.overflowY = "scroll";
  }
  else if (count < row) {
      text.style.overflowY = "hidden";
  }
}
 */
