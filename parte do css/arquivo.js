function type() {
    const currentWord = words[wordIndex];
    const currentText = currentWord.slice(0, letterIndex + 1);
    const typingText = document.querySelector(".typing_text");
    const typingBar = document.querySelector(".typing_bar");
    
    typingText.textContent = currentText;
    typingBar.style.left = (typingText.offsetWidth + 4) + "px"; // Posiciona a barra
  
    // Resto do código...
  }


const words = [
   "        ",
   "        ",
    "Engenheiro de Software",
    "Programador",
    "Freelancer",
    "Desenvolvedor Full-Stack"
  ];
  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;
  let typingSpeed = 30; // Velocidade de digitação em milissegundos
  
  function type() {
    const currentWord = words[wordIndex];
    const currentText = currentWord.slice(0, letterIndex + 1);
    document.querySelector(".typing_text").textContent = currentText;
  
    if (!isDeleting && letterIndex === currentWord.length) {
      if (wordIndex === words.length - 1) {
        return; // Manter a última palavra visível
      }
      isDeleting = true;
      typingSpeed = 200; // Tempo de pausa após escrever
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 100; // Tempo de pausa entre as palavras
    }
  
    letterIndex += isDeleting ? -1 : 1;
    setTimeout(type, typingSpeed);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, typingSpeed);
  });


