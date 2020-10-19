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
  var box1 = document.getElementById("demo");
  var box2 = document.getElementById("demo2");
  var box3 = document.getElementById("demo3");
  var box4 = document.getElementById("demo4");

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
      case 1: 
      box2.className = 'box-text hide';
      box3.className = 'box-text hide';
      box4.className = 'box-text hide';
      dot2.className = 'dot2';
      dot3.className = 'dot3';
      dot4.className = 'dot4';
      tit2.className = 'tit2';
      tit3.className = 'tit3';
      tit4.className = 'tit4';
      box1.className == 'box-text hide'? box1.className= 'box-text show' : box1.className= 'box-text hide';  
      dot1.className == 'dot1' ? dot1.className='dot1 draw-orange' : dot1.className = 'dot1';  
      tit1.className == 'tit1' ? tit1.className= 'tit1 bold-title' : tit1.className = 'tit1' ;   
      break;
      case 2: 
      box1.className = 'box-text hide';
      box3.className = 'box-text hide';
      box4.className = 'box-text hide';
      dot1.className = 'dot1';
      dot3.className = 'dot3';
      dot4.className = 'dot4';
      tit1.className = 'tit1';
      tit3.className = 'tit3';
      tit4.className = 'tit4';
      box2.className == 'box-text hide'? box2.className= 'box-text show' : box2.className= 'box-text hide';
      dot2.className == 'dot2' ? dot2.className='dot2 draw-orange' : dot2.className = 'dot2';  
      tit2.className == 'tit2' ? tit2.className= 'tit2 bold-title' : tit2.className = 'tit2' ; 

      break;
      case 3: 
      box2.className = 'box-text hide';
      box1.className = 'box-text hide';
      box4.className = 'box-text hide';
      dot1.className = 'dot1';
      dot2.className = 'dot2';
      dot4.className = 'dot4';
      tit1.className = 'tit1';
      tit2.className = 'tit2';
      tit4.className = 'tit4';
      box3.className == 'box-text hide'? box3.className= 'box-text show' : box3.className= 'box-text hide'; 
      dot3.className == 'dot3' ? dot3.className='dot3 draw-orange' : dot3.className = 'dot3';  
      tit3.className == 'tit3' ? tit3.className= 'tit3 bold-title' : tit3.className = 'tit3' ;         
      break;
      case 4: 
      box2.className = 'box-text hide';
      box3.className = 'box-text hide';
      box1.className = 'box-text hide';
      dot1.className = 'dot1';
      dot2.className = 'dot2';
      dot3.className = 'dot3';
      tit1.className = 'tit1';
      tit2.className = 'tit2';
      tit3.className = 'tit3';
      box4.className == 'box-text hide'? box4.className= 'box-text show' : box4.className= 'box-text hide';
      dot4.className == 'dot4' ? dot4.className='dot4 draw-orange' : dot4.className = 'dot4';  
      tit4.className == 'tit4' ? tit4.className= 'tit4 bold-title' : tit4.className = 'tit4' ;          
      break;
      default:
        break;
    }   
    // switch(res){
    //   /***************onclick button 1**************************** */
    //   case 1:
    //     if ((box1.className == 'box-text hide') & (box2.className == 'box-text hide') & (box3.className=='box-text hide') & (box4.className=='box-text hide')) {
    //       box1.className = 'box-text show';  
    //       dot1.className = 'dot1 draw-orange';
    //       tit1.className = 'tit1 bold-title';
    //       dot2.className = 'dot2'; 
    //       tit2.className = 'tit2';
    //       dot3.className = 'dot3'; 
    //       tit3.className = 'tit3'; 
    //       dot4.className = 'dot4'; 
    //       tit4.className = 'tit4';           
    //     } 
    //     else{
    //       box1.className = 'box-text hide';
    //       dot1.className = 'dot1'; 
    //       tit1.className = 'tit1';
    //     }
    //     if ((box1.className == 'box-text show') | (box2.className == 'box-text show') | (box3.className=='box-text show') | (box4.className=='box-text show')){
    //       box1.className = 'box-text show';
    //       dot1.className = 'dot1 draw-orange';
    //       tit1.className = 'tit1 bold-title'; 
    //       box2.className = 'box-text hide';
    //       box3.className = 'box-text hide';
    //       box4.className = 'box-text hide'; 
    //       dot2.className = 'dot2'; 
    //       tit2.className = 'tit2';
    //       dot3.className = 'dot3'; 
    //       tit3.className = 'tit3'; 
    //       dot4.className = 'dot4'; 
    //       tit4.className = 'tit4';       
    //     }
    //     else{
    //       box1.className = 'box-text hide';
    //       dot1.className = 'dot1'; 
    //       tit1.className = 'tit1';
    //     }   
    //     break;
    //     /***********************onclick button 2****************** */
    //   case 2:
    //     if ((box1.className == 'box-text hide') & (box2.className == 'box-text hide') & (box3.className=='box-text hide') & (box4.className=='box-text hide')) {
    //       dot2.className = 'dot2 draw-orange';
    //       tit2.className = 'tit2 bold-title';
    //       box2.className = 'box-text show';          
    //       dot1.className = 'dot1'; 
    //       tit1.className = 'tit1';
    //       dot3.className = 'dot3'; 
    //       tit3.className = 'tit3'; 
    //       dot4.className = 'dot4'; 
    //       tit4.className = 'tit4';           
    //     } 
    //     else{
    //       box2.className = 'box-text hide';
    //       dot2.className = 'dot2'; 
    //       tit2.className = 'tit2';
    //     }
    //     if ((box1.className == 'box-text show') | (box2.className == 'box-text show') | (box3.className=='box-text show') | (box4.className=='box-text show')){
    //       box2.className = 'box-text show';
    //       dot2.className = 'dot2 draw-orange';
    //       tit2.className = 'tit2 bold-title'; 
    //       box1.className = 'box-text hide';
    //       box3.className = 'box-text hide';
    //       box4.className = 'box-text hide'; 
    //       dot2.className = 'dot2'; 
    //       tit2.className = 'tit2';
    //       dot3.className = 'dot3'; 
    //       tit3.className = 'tit3'; 
    //       dot4.className = 'dot4'; 
    //       tit4.className = 'tit4';       
    //     }
    //     else{
    //       box2.className = 'box-text hide';
    //       dot2.className = 'dot2'; 
    //       tit2.className = 'tit2';
    //     }   
       
    //     break;
    //   /*********************onclick button 3*********************** */  
    //   case 3:
    //     if ((box1.className == 'box-text hide') & (box2.className == 'box-text hide') & (box3.className=='box-text hide') & (box4.className=='box-text hide')) {
    //       box3.className = 'box-text show';  
    //       dot3.className = 'dot3 draw-orange';
    //       tit3.className = 'tit3 bold-title';
    //       dot2.className = 'dot2'; 
    //       tit2.className = 'tit2';
    //       dot1.className = 'dot1'; 
    //       tit1.className = 'tit1'; 
    //       dot4.className = 'dot4'; 
    //       tit4.className = 'tit4';           
    //     } 
    //     else{
    //       box3.className = 'box-text hide';
    //       dot3.className = 'dot3'; 
    //       tit3.className = 'tit3';
    //     }
    //     if ((box1.className == 'box-text show') | (box2.className == 'box-text show') | (box3.className=='box-text show') | (box4.className=='box-text show')){
    //       box3.className = 'box-text show';
    //       dot3.className = 'dot3 draw-orange';
    //       tit3.className = 'tit3 bold-title'; 
    //       box2.className = 'box-text hide';
    //       box3.className = 'box-text hide';
    //       box4.className = 'box-text hide'; 
    //       dot2.className = 'dot2'; 
    //       tit2.className = 'tit2';
    //       dot1.className = 'dot1'; 
    //       tit1.className = 'tit1'; 
    //       dot4.className = 'dot4'; 
    //       tit4.className = 'tit4';       
    //     }
    //     else{
    //       box3.className = 'box-text hide';
    //       dot3.className = 'dot3'; 
    //       tit3.className = 'tit3';
    //     }   
        
    //     break;
    //    /*********************onclick button 4************************* */ 
    //   case 4:
       
    //     break;
    //   default:
    //     break;
    // }    
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
