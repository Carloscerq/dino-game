const dino = document.getElementsByClassName('dino')[0];
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
          if (dinoPosition <= 5) {
            dinoJump = false;
            clearInterval(down);
          } else {
            dinoPosition -= 15;
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

