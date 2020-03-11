var numberOfDrums = document.querySelectorAll(".drum").length

// Add event listening to the drums
for (i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        playSound(this.innerHTML);
        animateDrumHit(this.innerHTML);
})
}

document.addEventListener("keydown", function(event) {
    playSound(event.key);
    animateDrumHit(event.key);
});


// Play the correct sound based on the drum pressed!
function playSound(drum) {
    switch (drum) {
      case "w":
        var w = new Audio("sounds/crash.mp3");
        w.play();
        break;

      case "a":
        var a = new Audio("sounds/kick-bass.mp3");
        a.play();
        break;

      case "s":
        var s = new Audio("sounds/snare.mp3");
        s.play();
        break;

      case "d":
        var d = new Audio("sounds/tom-1.mp3");
        d.play();
        break;

      case "j":
        var j = new Audio("sounds/tom-2.mp3");
        j.play();
        break;

      case "k":
        var k = new Audio("sounds/tom-3.mp3");
        k.play();
        break;

      case "l":
        var l = new Audio("sounds/tom-4.mp3");
        l.play();
        break;

      default:
          console.log(drum)
        break;
    }
}

function animateDrumHit(drum) {
    document.querySelector("." + drum).classList.add("pressed")
    setTimeout( function() {
        document.querySelector("." + drum).classList.remove("pressed");
    }, 150);
}
