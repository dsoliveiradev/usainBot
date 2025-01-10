function navigateTo(screenId) {
    // Esconde todas as telas
    const screens = document.querySelectorAll('.screenView');
    screens.forEach(screen => screen.classList.add('hidden'));

    // Mostra a tela selecionada
    const targetScreen = document.getElementById(screenId);
    targetScreen.classList.remove('hidden');
}

function navigateTo(screenId) {
    // Esconde todas as telas
    const screens = document.querySelectorAll('.screenView');
    screens.forEach(screen => screen.classList.add('hidden'));

    if (screenId === 'correction' || screenId === 'translate') {
      // Define o ID da tela alvo
      const targetId = screenId + 'Screen';
      let targetScreen = document.getElementById(targetId);

      // Se a tela não existir, cria a partir do template
      if (!targetScreen) {
        const template = document.getElementById('screenTemplate');
        const clone = template.content.cloneNode(true);
        targetScreen = clone.querySelector('.screenView');
        targetScreen.id = targetId;
        targetScreen.querySelector('h1').textContent = screenId === 'correction' ? 'Corretor' : 'Tradutor';
        
        // Adicione conteúdo específico se necessário
        const contentDiv = targetScreen.querySelector('.content');
        if (screenId === 'correction') {
          contentDiv.innerHTML = `<p>Conteúdo do Corretor</p>`;
        } else if (screenId === 'translate') {
          contentDiv.innerHTML = `<p>Conteúdo do Tradutor</p>`;
        }

        // Adiciona a tela ao container dinâmico
        document.getElementById('dynamicScreenContainer').appendChild(clone);
      }

      // Mostra a tela selecionada
      targetScreen.classList.remove('hidden');
    } else {
      // Mostra a tela específica se não for 'correction' ou 'translate'
      const targetScreen = document.getElementById(screenId);
      if (targetScreen) {
        targetScreen.classList.remove('hidden');
      }
    }
  }