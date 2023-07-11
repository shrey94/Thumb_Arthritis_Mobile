//REPS FOR EXERCISES
var seconds_rev = 11;
var el = document.getElementById('counter_rev');
// var ispaused = false;

function incrementSecondsRev() {
  seconds_rev =seconds_rev - 1;
  el.innerText = "Reps: " + seconds_rev;
  // console.log(seconds);
  if (seconds_rev <1){
    // window.location.href = 'Completion_PFE_Page.html';
    console.log("Done");
    clearInterval(timer_rev);
  }
}
var timer_rev = setInterval(incrementSecondsRev, 1000);

// if (ispaused==false){
//     setInterval(incrementSeconds, 2500);
// }
//MODAL HIDE SHOW
var wrist_image = document.getElementById('wrist-ISO-video');


var modal = document.getElementById("myModal");
console.log(modal);
// Get the button that opens the modal
var PB = document.getElementById("Pause_Button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var cont_exercise =  document.getElementById("Cont_Ex");


// function ContinueExercise(event){
//     console.log(event.target);
//     modal.style.display="none";
//     pfe_video.load();
//   timer = setInterval(incrementSeconds, 2500);
//   console.log(event);

// }
// When the user clicks the button, open the modal 
PB.onclick = function(){
  modal.style.display = "block";
  // pfe_video.pause();

  // ispaused=true;
  clearInterval(timer_rev);
  // console.log(seconds);
  console.log(event);
}

// When the user clicks on <span> (x), close the modal
// span.onclick = ContinueExercise;
// window.onclick = ContinueExercise;

// function(event) {
//   modal.style.display = "none";
//   pfe_video.load();
//   timer = setInterval(incrementSeconds, 2500);
//   console.log(event);

//   // ispaused=false;
//   console.log(seconds);
// }

span.onclick = function() {
  modal.style.display = "none";
  // pfe_video.load();
  timer_rev = setInterval(incrementSecondsRev, 1000);
  console.log(event);

  // ispaused=false;
  // console.log(seconds);
}

cont_exercise.onclick = function() {
  modal.style.display = "none";
  // pfe_video.load();
  timer_rev = setInterval(incrementSecondsRev, 1000);
  console.log(event);

  // ispaused=false;
  console.log(seconds_rev);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    // pfe_video.load();
    timer_rev = setInterval(incrementSeconds, 1000);
    // ispaused=false;
    // console.log(seconds);
  }
}


