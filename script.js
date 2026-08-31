const cenario = document.querySelector('.cenario');

let posFundo = 0;
const velocidadeFundo = 6; // Ajuste a velocidade da cidade aqui (maior = mais rápido)

function animar() {
  // Move o fundo para a esquerda continuadamente
  posFundo -= velocidadeFundo;
  
  // Atualiza a posição do background
  cenario.style.backgroundPosition = `${posFundo}px center`;

  // Chama o próximo frame
  requestAnimationFrame(animar);
}

// Inicia o movimento
animar();