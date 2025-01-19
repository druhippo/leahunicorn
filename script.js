const unicorn = document.getElementById('unicorn');
const feedButton = document.getElementById('feedButton');
const waterButton = document.getElementById('waterButton');
const petButton = document.getElementById('petButton');
const rideButton = document.getElementById('petButton');

// Function to play a sound
function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}

// Play neigh sound when page loads
playSound('neigh.mp3');

feedButton.addEventListener('click', () => {
    console.log('Feeding the unicorn!');
    unicorn.src = 'unicorn3.jpg';
    playSound('crunch.mp3');
    setTimeout(() => {
        unicorn.src = 'unicorn1.jpg';
         playSound('magic.mp3');
    }, 5000);
});

waterButton.addEventListener('click', () => {
    console.log('Watering the unicorn!');
     unicorn.src = 'unicorn2.jpg';
    playSound('drink.mp3');
     setTimeout(() => {
         unicorn.src = 'unicorn1.jpg';
          playSound('magic.mp3');
    }, 10000);
});
petButton.addEventListener('click', () => {
    console.log('Petting the unicorn!');
    unicorn.src = 'pet.jpg';
    playSound('iloveyou.mp3');
     setTimeout(() => {
         unicorn.src = 'unicorn1.jpg';
         playSound('magic.mp3');
     }, 3000);
 });
 rideButton.addEventListener('click', () => {
    console.log('Riding the unicorn!');
    unicorn.src = 'pet.jpg';
    playSound('iloveyou.mp3');
     setTimeout(() => {
         unicorn.src = 'unicorn1.jpg';
         playSound('magic.mp3');
     }, 3000);
 });