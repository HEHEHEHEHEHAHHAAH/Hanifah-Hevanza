function openLetter() {
    const dino = document.querySelector('.dino');
    const letter = document.getElementById('letterContent');
    const dinoText = document.getElementById('dinoText');

    // Move the dino up and change the text
    dino.classList.add('move-up');
    dinoText.textContent = "Hi, I'm Brosu, the puppet of Prodigy!";

    // Show the letter with a bounce effect
    setTimeout(() => {
        letter.classList.toggle('show');
    }, 1000); // Delay to ensure the dino has moved up before the letter appears
}
