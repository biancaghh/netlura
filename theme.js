// theme.js - Controle de dark/light mode
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.body = document.body;
        this.currentTheme = localStorage.getItem('theme') || 'dark';

        this.init();
    }

    init() {
        // Aplicar tema salvo ou padrão (dark)
        this.applyTheme(this.currentTheme);

        // Adicionar evento ao botão
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Atualizar texto do botão
        this.updateButtonText();
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(this.currentTheme);
        this.saveTheme();
        this.updateButtonText();
    }

    applyTheme(theme) {
        if (theme === 'dark') {
            this.body.classList.remove('light-mode');
            this.body.classList.add('dark-mode');
        } else {
            this.body.classList.remove('dark-mode');
            this.body.classList.add('light-mode');
        }
    }

    saveTheme() {
        localStorage.setItem('theme', this.currentTheme);
    }

    updateButtonText() {
        if (this.themeToggle) {
            // Exibe apenas ícone do tema ativo (sem texto explicativo)
            this.themeToggle.textContent = this.currentTheme === 'dark' ? '🌙' : '☀️';
            // Atualiza aria-label para acessibilidade contínua
            this.themeToggle.setAttribute('aria-label', this.currentTheme === 'dark' ? 'Atualmente modo escuro. Clique para modo claro.' : 'Atualmente modo claro. Clique para modo escuro.');
        }
    }
}

// Inicializar quando DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});