Dapper
======

JQuery Sliding Element Plugin

This JQuery plugin allows you to slide your HTML elements on and off the screen, giving the user the option to view the Dapper'ed element or not. This functionality is particularly useful for Menus, Legends, and other informational windows that supplement the primary content of the page.

Example:
  $('#myDapperElement').dapper();
  
Example With Options:
  $('myDapperElement').dapper({
    dapperButton1: '#legendButton',
    dapperButton2: '.closeButton',
    showTime: 200,
    hideTime: 1000,
    sideOffset: 20,
    actionSide: 'left'
  });

Options:
  dapperButton1-  JQuery selector for the element that activates the dapper function in its onclick
                  Default value is'#dapper_button_1'
                  
  dapperButton2-  Another JQuery selector activating dapper in its onclick
                  Default value is '#dapper_button_2'
                  
  showTime-       Elapsed time (in milliseconds) for the show animation to complete
                  Default value is 500
  
  hideTime-       Elapsed time (in milliseconds) for the hide animation to complete
                  Default value is 500
  
  actionSide-     Determines which side the element slides in from
                  Possible values are 'left' and 'right'
                  Default value is 'right'
                  
  sideOffset-     Determines how far (in pixels) the element will be from the edge
                  Default value is 0
                  
  topOffset-      Determinds how far (in pixels) the element will be from the top
                  Default value is 0
