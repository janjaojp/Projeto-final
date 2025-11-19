# 🃏 Império dos Cards
Um site completo dedicado aos três maiores Trading Card Games do mundo:  
**Pokémon TCG**, **Yu-Gi-Oh! TCG** e **Magic: The Gathering**.

O projeto apresenta guias detalhados, layout moderno, páginas exclusivas para cada TCG, carrossel interativo na página inicial e seções institucionais como “Quem Somos” e “Fale Conosco”.

---

## 🚀 Funcionalidades

### 🎨 Interface Moderna
- Tema escuro com acentos azul-esverdeados.
- Tipografias modernas (Poppins + League Gothic).
- Glassmorphism sutil e sombras suaves.
- Layout totalmente responsivo.

### 🖼️ Carrossel Interativo
- Destaque visual para cada TCG.
- Troca automática de slides.
- Animações suaves com transição por opacidade e movimento.

### 📄 Páginas Incluídas
- **index.html** — Página inicial com slider.
- **pokemon.html** — Guia detalhado de Pokémon TCG.
- **yugioh.html** — Guia completo do Yu-Gi-Oh! TCG.
- **magic.html** — Página de guia do Magic: The Gathering.
- **sobre-tcgs.html** — Resumo geral dos três TCGs.
- **quem-somos.html** — Página institucional.
- **fale-conosco.html** — Página com formulário de contato.

---

## 🧩 Estrutura do Projeto

```
📁 projeto
 ├── index.html
 ├── pokemon.html
 ├── yugioh.html
 ├── magic.html
 ├── sobre-tcgs.html
 ├── quem-somos.html
 ├── fale-conosco.html
 ├── scripts.js
 ├── imagens/
 │     ├── Logo.png
 │     ├── pokemon2.png
 │     ├── yugi-oh2.png
 │     ├── magic2.png
 │     └── arrow.png

```

---

## 🛠 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
  - Glassmorphism
  - Grid & Flexbox
  - Animações de transição
- **JavaScript Puro (Vanilla JS)**
- Google Fonts

---

## ⚙️ Como Executar

1. Baixe o projeto ou clone o repositório:
   git clone https://github.com/janjaojp/Projeto-final.git


2. Execute abrindo o arquivo principal:
   ```
   index.html
   ```

**Nenhum servidor adicional é necessário.**

---

## 🧠 Scripts Importantes

### Smooth Scroll
Permite rolagem suave ao clicar em links internos (âncoras):

```javascript
document.addEventListener('click', function (e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
        window.scrollTo({ 
            top: el.getBoundingClientRect().top + window.scrollY - 30, 
            behavior: 'smooth' 
        });
    }
});
```

### Lógica do Carrossel
Controla:
- slides
- transições
- autoplay

Localizado em: **scripts.js**

---

## 🎯 Objetivo do Projeto
O Império dos Cards tem como objetivo:

- Informar novos e antigos jogadores sobre os principais TCGs.
- Unificar o conteúdo de cada jogo em uma interface amigável.
- Servir como referência para lojas, criadores de conteúdo ou sites de comunidade.
- Ser visualmente moderno, rápido e responsivo.

---

## 📞 Contato
Caso queira sugerir melhorias, entre em contato:

📧 **janjaojp@yahoo.com.br**  
📱 **(21) 96827-3475**

---

## 📄 Licença
Uso livre para fins pessoais e educacionais.  
Para fins comerciais, consulte o autor.

---
