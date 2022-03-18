const dino = document.getElementById('dino');
const background = document.getElementById('bg');
let dinoJump = false;

document.addEventListener('keyup', event => {
  const key = event.code;

  if (key === 'Space' && !dinoJump) {
    dispatchEvent = true;
    let dinoPosition = parseInt(dino.style.bottom) || 5;

    const jumpAction = setInterval(() => {
      if (dinoPosition >= 150 ) {
        clearInterval(jumpAction);

        const down = setInterval(() => {
          if (dinoPosition <= 20) {
            dinoJump = false;
            clearInterval(down);
          } else {
            dinoPosition -= 5;
            dino.style.bottom = `${dinoPosition}px`;
          }
        }, 10);
      } else {
        dinoPosition += 10;
        dino.style.bottom = `${dinoPosition}px`;
      }
    }, 10);
  }
});

(function generateCactus() {
  const cactus = document.createElement('div');
  cactus.classList.add('cactus');
  cactus.style.right = `${Math.floor((10))}px`;
  background.appendChild(cactus);

  const moveCactus = setInterval(() => {
    let cactusPosition = parseInt(cactus.style.right);

    if (cactusPosition > window.innerWidth) {
      clearInterval(moveCactus);
      background.removeChild(cactus);
    } else {
      cactusPosition += 10;
      cactus.style.right = `${cactusPosition}px`;
    }
  }, 30);

  setTimeout(generateCactus, Math.floor(Math.random() * 10000) + 1000);
})();
