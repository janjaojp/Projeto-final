
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');
    const successBox = document.getElementById('successBox');

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        feedback.textContent = '';
        successBox.style.display = 'none';

        const nome = form.nome.value.trim();
        const email = form.email.value.trim();
        const mensagem = form.mensagem.value.trim();

        if (!nome) {
            feedback.textContent = 'Por favor, informe seu nome.';
            return;
        }
        if (!email || !validateEmail(email)) {
            feedback.textContent = 'Por favor, informe um e-mail válido.';
            return;
        }
        if (!mensagem || mensagem.length < 10) {
            feedback.textContent = 'A mensagem precisa ter ao menos 10 caracteres.';
            return;
        }

        const botao = form.querySelector('button[type="submit"]');
        const original = botao.textContent;
        botao.textContent = 'Enviando...';
        botao.disabled = true;

        setTimeout(() => {
            botao.textContent = original;
            botao.disabled = false;
            successBox.style.display = 'block';
            form.reset();
            feedback.textContent = '';
        }, 900);
    });
});
