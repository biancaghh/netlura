
// Função para armazenar o perfil ativo no localStorage
function armazenarPerfilAtivo(event) {
    event.preventDefault(); // Impede o redirecionamento imediato

    const profileElement = event.currentTarget;
    const imgElement = profileElement.querySelector('img');
    const figcaptionElement = profileElement.querySelector('figcaption');

    const nome = figcaptionElement.textContent;
    const imagem = imgElement.src;

    // Armazenar no localStorage
    localStorage.setItem('perfilAtivo', JSON.stringify({ nome: nome, imagem: imagem }));

    // Redirecionar para a página do catálogo
    window.location.href = profileElement.href;
}

// Adicionar event listeners aos perfis
document.addEventListener('DOMContentLoaded', function() {
    const profiles = document.querySelectorAll('.profile a');
    profiles.forEach(profile => {
        profile.addEventListener('click', armazenarPerfilAtivo);
    });
});