/*!
 * script.js - https://wittylytics.com/
 * Version - 1.0.0
 * Licensed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Copyright (c) 2020 WittyLytics
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
  $('input#name,input#email,input#subject,textarea#textarea1').characterCounter();
 }); 

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
