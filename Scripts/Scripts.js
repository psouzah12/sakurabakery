const modoEscuroToggle = document.getElementById('modoescuro-toggle');
const body = document.body;

// Verifica se o modo escuro está ativado no armazenamento local ao carregar a página
if (localStorage.getItem('modoEscuroAtivado') === 'true') {
    body.classList.add('dark-theme');
    modoEscuroToggle.checked = true;
}

// Ativa/desativa o modo escuro e armazena o estado no armazenamento local
modoEscuroToggle.addEventListener('change', () => {
    body.classList.toggle('dark-theme');
    localStorage.setItem('modoEscuroAtivado', modoEscuroToggle.checked);
});
