function navigateTo(type, screen) {
    // Esconde todas as telas
    const screens = document.querySelectorAll('.screenView');
    screens.forEach(screen => screen.classList.add('hidden'));

    // Mostra a tela selecionada
    const targetScreen = document.getElementById(screen);
    targetScreen.classList.remove('hidden');
    if (type !== "functionality") document.getElementById('titleOption').textContent = translateName(type)
}

function translateName(name) {
    switch (name) {
        case "correction":
            return "Corretor";
        case "translate": 
            return "Tradutor";
        default: 
            return "";
    }
}