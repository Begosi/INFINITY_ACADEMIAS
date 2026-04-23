/* INFINITY PRIME - Scripts de Interatividade
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DO CARROSSEL (HERO) ---
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const slideInterval = 5000; // Tempo em milissegundos (5 segundos)

    function showSlide(index) {
        // Remove a classe ativa de todos os slides e pontos
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Ativa o slide e o ponto correspondente
        slides[index].classList.add('active');
        if (dots.length > 0) {
            dots[index].classList.add('active');
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Inicia o carrossel automático
    if (slides.length > 0) {
        setInterval(nextSlide, slideInterval);
    }

    // Permite clicar nos pontos (dots) para mudar de slide
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });


    // --- LÓGICA DO FORMULÁRIO DE LEADS ---
    const leadForm = document.getElementById('lead-form');

    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o site de recarregar
            
            // Captura os dados dos campos
            const nome = leadForm.querySelector('input[type="text"]').value;
            const email = leadForm.querySelector('input[type="email"]').value;
            
            // Simulação de envio
            alert(`Obrigado, ${nome}! Recebemos sua inscrição. Entraremos em contato pelo e-mail: ${email}`);
            
            leadForm.reset(); // Limpa o formulário
        });
    }

    // --- EFEITO DE SCROLL NO HEADER ---
    // Faz o fundo do header ficar sólido ao rolar a página
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 1)';
            header.style.padding = '10px 5%';
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
            header.style.padding = '20px 5%';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const unidades = document.querySelectorAll('.unidade-item');
    const fotoExibida = document.getElementById('unidade-foto');
    const mapaExibido = document.getElementById('unidade-mapa');

    // Função para atualizar a visualização
    function atualizarUnidade(item) {
        // Remove active de todos e adiciona no selecionado
        unidades.forEach(u => u.classList.remove('active'));
        item.classList.add('active');

        const novaFoto = item.getAttribute('data-img');
        const novoMapa = item.getAttribute('data-map');

        if (fotoExibida) {
            fotoExibida.src = novaFoto;
        }
        if (mapaExibido) {
            mapaExibido.src = novoMapa;
        }
    }

    // Configura o clique em cada item
    unidades.forEach(item => {
        item.addEventListener('click', () => {
            atualizarUnidade(item);
        });
    });

    // --- SELEÇÃO PADRÃO AO CARREGAR ---
    // Se existir ao menos uma unidade, força a atualização da primeira
    if (unidades.length > 0) {
        atualizarUnidade(unidades[0]);
    }
});