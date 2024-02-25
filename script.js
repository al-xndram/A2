// function PlaySound(wind) {
//     var thissound = document.getElementById(wind);
//     thissound.play();
// }

// function StopSound(wind) {
//     var thissound = document.getElementById(wind);
//     thissound.pause();
//     thissound.currentTime = 0;
// }


// ^^ JS from V1



// > making the "archivedSounds" elements shuffle in the main body div

// document.addEventListener('DOMContentLoaded', function() {
//   const content = document.querySelector('.archivedSounds');
//   shuffleItems(content);
// });

// function shuffleItems(container) {
//   for (let i = container.children.length; i >= 0; i--) {
//     const randomX = Math.random() * (container.offsetWidth - 100); // Subtract item width
//     const randomY = Math.random() * (container.offsetHeight - 150); // Subtract item height
//     const randomIndex = Math.floor(Math.random() * i);
//     const item = container.children[randomIndex];
//     item.style.left = randomX + 'px';
//     item.style.top = randomY + 'px';
//     container.appendChild(item);
//   }
// }


// > sound functions... [v2]
let modal_open = false
// Function to play individual sound when hovered
function playSound(soundId) {
  if (modal_open === true) return
  // Pause all sounds
  const sounds = document.getElementsByTagName('audio');
  for (let i = 0; i < sounds.length; i++) {
      sounds[i].pause();
      sounds[i].currentTime = 0;
  }
  // Play the selected sound
  const sound = document.getElementById(soundId);
  sound.play();
}

// Function to play all sounds initially
window.onload = function() {
  const sounds = document.getElementsByTagName('audio');
  for (let i = 0; i < sounds.length; i++) {
      sounds[i].play();
  }
};

// Function to stop all sounds when mouse leaves sound element
function stopSound() {
  if (modal_open === true) return


  const sounds = document.getElementsByTagName('audio');
  for (let i = 0; i < sounds.length; i++) {
      sounds[i].pause();
      sounds[i].currentTime = 0;
  }
  // Play all sounds again
  window.onload();
}


//MODAL (popup windows)

// Function to open the modal and play corresponding audio
function openModal(text, audioId) {
  // var modal = document.getElementById("myModal");
  // var modalText = document.getElementById("modalText");
  // var audioElements = document.getElementsByTagName('audio');

  // // Pause all other audio elements
  // for (let i = 0; i < audioElements.length; i++) {
  //     audioElements[i].pause();
  // }

  // // Play the corresponding audio
  // var audio = document.getElementById(audioId);
  // audio.currentTime = 0;
  // audio.play();

  // // Set the modal text and display the modal
  // modalText.innerHTML = text;
  let modal=document.querySelector("#"+text)
  modal.style.display = "block";
  modal_open = true
}

// Function to close the modal
function closeModal(text) {
  modal_open = false
  
  console.log("ok")
  let modal=document.querySelector("#"+text)
  modal.style.display = "none";
}