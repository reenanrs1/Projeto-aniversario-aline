// Mensagens especiais para cada foto
const photoMessages = {
    1: "💕 Essa foto me lembra de como você é linda e especial! Cada momento ao seu lado é um tesouro que guardo no coração. 💕",
    2: "💖 Quando olho para esta imagem, vejo todo o amor que compartilhamos. Você ilumina minha vida de uma forma única! 💖",
    3: "💝 Este momento capturado é prova de como somos felizes juntos. Você é minha melhor companhia em todas as aventuras! 💝",
    4: "💗 Nesta foto vejo o futuro brilhante que construímos juntos. Você é minha inspiração diária para ser uma pessoa melhor! 💗"
};

// Função para mostrar mensagem das fotos
function showMessage(photoNumber) {
    const modal = document.getElementById('messageModal');
    const modalMessage = document.getElementById('modalMessage');
    
    modalMessage.innerHTML = photoMessages[photoNumber];
    modal.style.display = 'block';
    
    // Adiciona animação de corações
    createRandomHearts();
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('messageModal');
    modal.style.display = 'none';
}

// Fechar modal clicando fora dele
window.onclick = function(event) {
    const modal = document.getElementById('messageModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Função para revelar mensagens dos cartões
function revealMessage(card) {
    card.classList.toggle('flipped');
    
    // Adiciona efeito de corações
    setTimeout(() => {
        createRandomHearts();
    }, 300);
}

// Função para criar explosão de corações
function createHeartExplosion() {
    const heartsEmojis = ['💕', '💖', '💗', '💓', '💝', '💘', '💌', '❤️', '💜', '🧡'];
    
    // Som de festa (você pode adicionar um arquivo de áudio)
    playBirthdaySound();
    
    // Criar múltiplos corações
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart-explosion';
            heart.innerHTML = heartsEmojis[Math.floor(Math.random() * heartsEmojis.length)];
            
            // Posição aleatória
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = Math.random() * window.innerHeight + 'px';
            
            document.body.appendChild(heart);
            
            // Remover após animação
            setTimeout(() => {
                document.body.removeChild(heart);
            }, 3000);
        }, i * 100);
    }
    
    // Mostrar mensagem especial
    setTimeout(() => {
        showSpecialMessage();
    }, 1000);
}

// Função para criar corações aleatórios
function createRandomHearts() {
    const heartsEmojis = ['💕', '💖', '💗', '💓', '💝'];
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'click-heart';
            heart.innerHTML = heartsEmojis[Math.floor(Math.random() * heartsEmojis.length)];
            
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = Math.random() * window.innerHeight + 'px';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                document.body.removeChild(heart);
            }, 2000);
        }, i * 200);
    }
}

// Função para mostrar mensagem especial
function showSpecialMessage() {
    const modal = document.getElementById('messageModal');
    const modalMessage = document.getElementById('modalMessage');
    
    const specialMessage = `
        🎉 FELIZ ANIVERSÁRIO, ALINE! 🎉
        <br><br>
        💕 Hoje é seu dia especial e eu queria que soubesse o quanto você significa para mim! 💕
        <br><br>
        🌟 Você é a estrela mais brilhante da minha vida, a razão do meu sorriso e a dona do meu coração! 🌟
        <br><br>
        🎂 Que este novo ano de vida seja repleto de alegrias, conquistas, realizações e muito amor! 🎂
        <br><br>
        ❤️ Te amo mais do que palavras podem expressar! ❤️
    `;
    
    modalMessage.innerHTML = specialMessage;
    modal.style.display = 'block';
}

// Função para simular som de festa (você pode substituir por um arquivo real)
function playBirthdaySound() {
    // Aqui você pode adicionar um arquivo de áudio
    // const audio = new Audio('happy-birthday.mp3');
    // audio.play();
    
    // Por enquanto, vamos apenas fazer um alerta visual
    console.log('🎵 Tocando música de aniversário! 🎵');
}

// Adicionar corações ao clicar em qualquer lugar da página
document.addEventListener('click', function(e) {
    // Não criar corações se clicar em botões ou elementos interativos
    if (e.target.tagName === 'BUTTON' || e.target.classList.contains('close') || 
        e.target.closest('.photo-card') || e.target.closest('.message-card') ||
        e.target.closest('.modal')) {
        return;
    }
    
    const heart = document.createElement('div');
    heart.className = 'click-heart';
    heart.innerHTML = '💕';
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        document.body.removeChild(heart);
    }, 2000);
});

// Animação inicial quando a página carrega
window.addEventListener('load', function() {
    // Adicionar uma pequena animação de boas-vindas
    setTimeout(() => {
        createRandomHearts();
    }, 1000);
    
    // Mostrar mensagem de boas-vindas
    setTimeout(() => {
        const modal = document.getElementById('messageModal');
        const modalMessage = document.getElementById('modalMessage');
        
        modalMessage.innerHTML = `
            🌸 Bem-vinda à sua página especial de aniversário! 🌸
            <br><br>
            💖 Clique nas fotos, nos cartões de mensagem e no botão especial para descobrir surpresas! 💖
            <br><br>
            🎈 Esta página foi feita com muito carinho especialmente para você! 🎈
        `;
        
        modal.style.display = 'block';
    }, 2000);
});

// Adicionar efeito de parallax sutil aos corações de fundo
window.addEventListener('scroll', function() {
    const hearts = document.querySelectorAll('.hearts-background .heart');
    const scrolled = window.pageYOffset;
    
    hearts.forEach((heart, index) => {
        const rate = scrolled * -0.5 * (index + 1) * 0.1;
        heart.style.transform = `translateY(${rate}px)`;
    });
});

// Adicionar mais interatividade com teclado
document.addEventListener('keydown', function(e) {
    // Pressionar 'H' para mais corações
    if (e.key.toLowerCase() === 'h') {
        createRandomHearts();
    }
    
    // Pressionar 'B' para explosão de corações
    if (e.key.toLowerCase() === 'b') {
        createHeartExplosion();
    }
    
    // Pressionar 'Escape' para fechar modal
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Função para adicionar mais mensagens românticas aleatórias
const romanticMessages = [
    "💕 Você é a melodia mais doce da minha vida! 💕",
    "🌹 Cada dia com você é como um presente do céu! 🌹",
    "💖 Seu sorriso é capaz de iluminar até os dias mais escuros! 💖",
    "⭐ Você é mais preciosa que todas as estrelas do universo! ⭐",
    "💝 Meu amor por você cresce a cada batida do coração! 💝",
    "🦋 Você faz meu coração voar como borboletas! 🦋",
    "🌸 Você é a primavera eterna da minha alma! 🌸",
    "💓 Com você aprendi o verdadeiro significado do amor! 💓"
];

// Função para mostrar mensagem romântica aleatória
function showRandomRomanticMessage() {
    const randomMessage = romanticMessages[Math.floor(Math.random() * romanticMessages.length)];
    const modal = document.getElementById('messageModal');
    const modalMessage = document.getElementById('modalMessage');
    
    modalMessage.innerHTML = randomMessage;
    modal.style.display = 'block';
    
    createRandomHearts();
}

// Adicionar listener para mostrar mensagem aleatória a cada 30 segundos
setInterval(() => {
    // Só mostrar se o modal não estiver aberto
    const modal = document.getElementById('messageModal');
    if (modal.style.display !== 'block') {
        // 20% de chance de mostrar mensagem aleatória
        if (Math.random() < 0.2) {
            showRandomRomanticMessage();
        }
    }
}, 30000);
