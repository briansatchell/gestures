// $("#button_id").click(function(){ // when "button_id" is clicked    
//     $("#element").show();         // show element    
//     $("#other_element").hide();   // hide other element 
// });
// $( "#gestureArea" ).mousemove(function( event ) {
//     var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
//     $( "span:last" ).text( "( event.clientX, event.clientY ) : " + clientCoords );
// });

//This code checks the direction a mouse has move after a mouse click
//to simulate a swipe. It will check the mouse coordinates on mouse click down 
//and compare it to the end coordinates when the mouse button is release to 
//determine the direction of the swipe. 
downX=0
downY=0

// check mouse click down and get (x,y)
$( "#gestureArea" ).mousedown(function() {
    document.getElementById("gestureResult").innerHTML = "Mouse Click Down."
    downX= event.clientX
    downY= event.clientY
});
//check mouse click up, get new (x, y)
$( "#gestureArea" ).mouseup(function() {
    // document.getElementById("gestureResult").innerHTML = "Mouse Up."
    upX= event.clientX
    upY= event.clientY

    //ensure mouse is move far enough to start swipe
    if ( (Math.abs(upX - downX) > 60) ||  (Math.abs(upY - downY) > 60)  ){
        //check which direction mouse as moved  
        if ( (upX < downX) && (upX - downX) < (upY - downY) ) {
            swipeLeft()
        } else if ( (upX > downX) && (upX - downX) > (upY - downY) ) {
            swipeRight()
        }
        else if ( (upY - downY) < 0) {
            swipeUp()
        } 
        else if ( (upY - downY) > 0) {
            swipeDown()
        }
    } else {
        document.getElementById("gestureResult").innerHTML = "No Swipe Detected."
    }
});
//output functions for swipe direction
function swipeLeft(){
    document.getElementById("gestureResult").innerHTML = "Swipe Left."
};
function swipeRight(){
    document.getElementById("gestureResult").innerHTML = "Swipe Right."
};
function swipeUp(){
    document.getElementById("gestureResult").innerHTML = "Swipe Up."
};
function swipeDown(){
    document.getElementById("gestureResult").innerHTML = "Swipe Down."
};