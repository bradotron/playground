// My javascript and jQuery for the playground



// this line is a shortcut way to get the same effect as a document.ready
$(function () {

  //=======================================================//
  // this is a way to set up some content to loop through a list
  // in this example I plan to change the background-color of an element every few seconds
  // var i = 0;
  // // the setInterval(function, delay) runs the function every delay milliseconds
  // setInterval(function(){
  //   console.log(i);
  //   i = (i+1) % 10; // this line creates a looping i up to the value behind the modulus operator
  // }, 1000);

  //=======================================================//
  // here is how to attach a listener to the DOM in jquery
  // create document listeners and link to the functions

  // this will call the userKeyDown() function and pass the event for every keydown trigger
  // $(document).keydown(function(event) {
  //   userKeyDown(event);
  // }); 

  // // this will call the userClick() function and pass the click event
  // $(document).click(function(event) {
  //   userClick(event);
  // });


  // these are just placeholders for how to handle user inputs
  // function userKeyDown(e) {
  //   // user released a key
  //   console.log("Key Down");
  // }

  // function userClick(e) {
  //   // user clicked the mouse
  //   console.log("Mouse Click");
  // }

  //=======================================================//
  var search = function (array, number) {
    //create a loop for the array
    //check if the number is in the array
    //return true if the number is found
    //return false if is not found
    var myReturn = false;
    for(var i=0; i<array.length; i++) {
      if(array[i] == number) {
        myReturn = true;
      }
    }
    return myReturn;
  }

  console.log(search([8, 55, 6, 44, 5, 89, 5, 4], 4)); // true
  console.log(search([8, 55, 6, 44, 5, 89, 5, 4], 1)); // false


});
