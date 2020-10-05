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
// animated diagram 
  var t = document.getElementById("demo");
  var r = document.getElementById("demo2");
  var s = document.getElementById("demo3");
  var m = document.getElementById("demo4");

  var tit1 = document.getElementById("tit1");
  var tit2 = document.getElementById("tit2");
  var tit3 = document.getElementById("tit3");
  var tit4 = document.getElementById("tit4");

  var dot1 = document.getElementById("dot1");
  var dot2 = document.getElementById("dot2");
  var dot3 = document.getElementById("dot3");
  var dot4 = document.getElementById("dot4");


  function toggleText(res) {    
    switch(res){
      /***************onclick button 1**************************** */
      case 1:
        if ((t.className == 'text hide') & (r.className == 'text hide') & (s.className=='text hide') & (m.className=='text hide')) {
          t.className = 'text show';  
          dot1.className = 'dot1 draw-orange'; 
          tit1.className = 'tit1 bold-title';
          dot2.className = 'dot2'; 
          tit2.className = 'tit2';
          dot3.className = 'dot3'; 
          tit3.className = 'tit3'; 
          dot4.className = 'dot4'; 
          tit4.className = 'tit4';           
        } 
        else{
          t.className = 'text hide';
          dot1.className = 'dot1'; 
          tit1.className = 'tit1';
        }
        if ((t.className == 'text show') | (r.className == 'text show') | (s.className=='text show') | (m.className=='text show')){
          t.className = 'text show';
          dot1.className = 'dot1 draw-orange';
          tit1.className = 'tit1 bold-title'; 
          r.className = 'text hide';
          s.className = 'text hide';
          m.className = 'text hide'; 
          dot2.className = 'dot2'; 
          tit2.className = 'tit2';
          dot3.className = 'dot3'; 
          tit3.className = 'tit3'; 
          dot4.className = 'dot4'; 
          tit4.className = 'tit4';       
        }
        else{
          t.className = 'text hide';
          dot1.className = 'dot1'; 
          tit1.className = 'tit1';
        }   
        break;
        /***********************onclick button 2****************** */
      case 2:
        if ((r.className == 'text hide') & (t.className == 'text hide') & (s.className=='text hide') & (m.className=='text hide')) {
          r.className = 'text show';  
          dot2.className = 'dot2 draw-orange'; 
          tit2.className = 'tit2 bold-title'; 
          dot1.className = 'dot1'; 
          tit1.className = 'tit1';
          dot3.className = 'dot3'; 
          tit3.className = 'tit3'; 
          dot4.className = 'dot4'; 
          tit4.className = 'tit4';           
        } 
        else{
          r.className = 'text hide';
          dot2.className = 'dot2'; 
          tit2.className = 'tit2'; 

        }
        if ((r.className == 'text show') | (t.className == 'text show') | (s.className=='text show') | (m.className=='text show')){
          r.className = 'text show';
          dot2.className = 'dot2 draw-orange'; 
          tit2.className = 'tit2 bold-title';
          dot1.className = 'dot1'; 
          tit1.className = 'tit1'; 
          dot3.className = 'dot3'; 
          tit3.className = 'tit3'; 
          dot4.className = 'dot4'; 
          tit4.className = 'tit4';       
          t.className = 'text hide';
          s.className = 'text hide';
          m.className = 'text hide';      
        }
        else{
          r.className = 'text hide';
          dot2.className = 'dot2'; 
          tit2.className = 'tit2'; 
        }
        break;
      /*********************onclick button 3*********************** */  
      case 3:
        if ((s.className == 'text hide') & (t.className == 'text hide') & (r.className=='text hide') & (m.className=='text hide')) {
          s.className = 'text show';  
          dot3.className = 'dot3 draw-orange'; 
          tit3.className = 'tit3 bold-title'; 
          dot2.className = 'dot2'; 
          tit2.className = 'tit2';
          dot1.className = 'dot1'; 
          tit1.className = 'tit1'; 
          dot4.className = 'dot4'; 
          tit4.className = 'tit4';     
        } 
        else{
          s.className = 'text hide';
          dot3.className = 'dot3'; 
          tit3.className = 'tit3'; 
        }
        if ((s.className == 'text show') | (t.className == 'text show') | (r.className=='text show') | (m.className=='text show')){
          s.className = 'text show';
          t.className = 'text hide';
          r.className = 'text hide';
          m.className = 'text hide';  
          dot3.className = 'dot3 draw-orange'; 
          tit3.className = 'tit3 bold-title'; 
          dot2.className = 'dot2'; 
          tit2.className = 'tit2';
          dot1.className = 'dot1'; 
          tit1.className = 'tit1'; 
          dot4.className = 'dot4'; 
          tit4.className = 'tit4';      
        }
        else{
          s.className = 'text hide';
          dot3.className = 'dot3'; 
          tit3.className = 'tit3'; 
        }
        break;
       /*********************onclick button 4************************* */ 
      case 4:
        if ((m.className == 'text hide') & (t.className == 'text hide') & (r.className=='text hide') & (s.className=='text hide')) {
          m.className = 'text show'; 
          dot4.className = 'dot4 draw-orange'; 
          tit4.className = 'tit4 bold-title';  
          dot2.className = 'dot2'; 
          tit2.className = 'tit2';
          dot1.className = 'dot1'; 
          tit1.className = 'tit1'; 
          dot3.className = 'dot3'; 
          tit3.className = 'tit3';     
        } 
        else{
          m.className = 'text hide';
          dot4.className = 'dot4'; 
          tit4.className = 'tit4';    
        }
        if ((m.className == 'text show') | (t.className == 'text show') | (r.className=='text show') | (s.className=='text show')){
          m.className = 'text show';
          t.className = 'text hide';
          r.className = 'text hide';
          s.className = 'text hide'; 
          dot4.className = 'dot4 draw-orange'; 
          tit4.className = 'tit4 bold-title';  
          dot2.className = 'dot2'; 
          tit2.className = 'tit2';
          dot1.className = 'dot1'; 
          tit1.className = 'tit1'; 
          dot3.className = 'dot3'; 
          tit3.className = 'tit3';        
        }
        else{
          m.className = 'text hide';
          dot4.className = 'dot4'; 
          tit4.className = 'tit4';   
        }
        break;
      default:
        break;
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
