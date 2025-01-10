function navigateTo(screenId) {
    // Esconde todas as telas
    const screens = document.querySelectorAll('.screenView');
    screens.forEach(screen => screen.classList.add('hidden'));

    // Mostra a tela selecionada
    const targetScreen = document.getElementById(screenId);
    targetScreen.classList.remove('hidden');
}