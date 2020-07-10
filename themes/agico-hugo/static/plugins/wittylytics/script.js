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