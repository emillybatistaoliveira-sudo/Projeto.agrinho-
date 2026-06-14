window.onscroll = function() {
    const barra = document.getElementById("barra-progresso");
    if (barra) {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        barra.style.width = scrolled + "%";
    }
};

function alternarDarkMode() {
    document.body.classList.toggle("dark-mode");
    const b = document.getElementById("btn-dark");
    if(!b) return;
    if(document.body.classList.contains("dark-mode")) {
        b.innerText = "☀️ Modo Claro";
        localStorage.setItem("theme", "dark");
    } else {
        b.innerText = "🌙 Modo Escuro";
        localStorage.setItem("theme", "light");
    }
}

let idiomaAtual = "pt";
function alternarIdioma() {
    idiomaAtual = (idiomaAtual === "pt") ? "en" : "pt";
    const btn = document.getElementById("btn-lang");
    if (btn) btn.innerText = (idiomaAtual === "pt") ? "🇧🇷 PT" : "🇺🇸 EN";
    
    document.querySelectorAll("[data-pt]").forEach(el => {
        el.innerHTML = el.getAttribute(`data-${idiomaAtual}`);
    });
}

function calcularResultadoPremium() {
    const form = document.getElementById("quiz-form");
    const nome = document.getElementById("nome-aluno").value.trim();
    const resultadoDiv = document.getElementById("resultado");
    const certArea = document.getElementById("certificado-area");
    const certNome = document.getElementById("cert-nome");

    if (!nome) {
        resultadoDiv.innerText = (idiomaAtual === "pt") ? "⚠️ Digite seu nome completo para gerar o certificado!" : "⚠️ Enter your full name to generate the certificate!";
        resultadoDiv.style.color = "#d32f2f";
        return;
    }

    const selecionados = form.querySelectorAll('input[type="radio"]:checked');
    if (selecionados.length < 3) {
        resultadoDiv.innerText = (idiomaAtual === "pt") ? "⚠️ Responda todas as 3 perguntas!" : "⚠️ Answer all 3 questions!";
        resultadoDiv.style.color = "#d32f2f";
        return;
    }

    let acertos = 0;
    selecionados.forEach(r => { if(r.value === "correto") acertos++; });

    if (acertos === 3) {
        resultadoDiv.innerText = (idiomaAtual === "pt") ? "🎉 Incrível! Nota máxima. Seu certificado foi liberado!" : "🎉 Incredible! Perfect score. Certificate unlocked!";
        resultadoDiv.style.color = "#2e7d32";
        certNome.innerText = nome;
        certArea.style.display = "block";
    } else {
        resultadoDiv.innerText = (idiomaAtual === "pt") 
            ? `🌱 Acertou ${acertos} de 3. Gabarite o teste para liberar o certificado!` 
            : `🌱 You got ${acertos}/3. Score 100% to unlock your certificate!`;
        resultadoDiv.style.color = "#ef6c00";
        certArea.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        const b = document.getElementById("btn-dark");
        if(b) b.innerText = "☀️ Modo Claro";
    }
});