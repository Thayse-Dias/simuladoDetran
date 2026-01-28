// ================= QUESTÕES =================

// Título: Lógica  - Simulado
const questoes = [
    {
        pergunta: "Se todo servidor é funcionário e todo funcionário é trabalhador, então:",
        alternativas: [
            "A) Todo trabalhador é servidor",
            "B) Todo servidor é trabalhador",
            "C) Nenhum servidor é trabalhador",
            "D) Nenhum funcionário é trabalhador",
            "E) Todo trabalhador é funcionário"
        ],
        correta: "B",
        explicacao: "Se servidor ⊂ funcionário e funcionário ⊂ trabalhador, então servidor ⊂ trabalhador."
    },
    {
        pergunta: "Negar a proposição: 'Todos os veículos são automóveis' resulta em:",
        alternativas: [
            "A) Nenhum veículo é automóvel",
            "B) Alguns veículos não são automóveis",
            "C) Todos os automóveis são veículos",
            "D) Alguns automóveis não são veículos",
            "E) Nenhum automóvel é veículo"
        ],
        correta: "B",
        explicacao: "A negação de 'todos são' é 'existe pelo menos um que não é'."
    },
    {
        pergunta: "Se hoje é quarta-feira, daqui a 15 dias será:",
        alternativas: ["A) Quinta", "B) Sexta", "C) Sábado", "D) Domingo", "E) Segunda"],
        correta: "C",
        explicacao: "15 dias = 14 + 1 → quarta + 1 = sábado."
    },
    {
        pergunta: "A sequência 2, 4, 8, 16 segue a lógica:",
        alternativas: [
        "A) Soma 2",
        "B) Soma 4",
        "C) Multiplica por 2",
        "D) Multiplica por 4",
        "E) Soma 8"
        ],
        correta: "C",
        explicacao: "Cada termo é o dobro do anterior."
    },
    {
        pergunta: "Se p → q é verdadeira e p é verdadeira, então q é:",
        alternativas: [
        "A) Falsa",
        "B) Verdadeira",
        "C) Indeterminada",
        "D) Contraditória",
        "E) Impossível"
        ],
        correta: "B",
        explicacao: "Modus Ponens."
    },
    {
        pergunta: "Qual é a negação de: 'Alguns candidatos foram aprovados'?",
        alternativas: [
        "A) Todos foram aprovados",
        "B) Nenhum foi aprovado",
        "C) Alguns não foram aprovados",
        "D) Todos não foram aprovados",
        "E) Nenhum não foi aprovado"
        ],
        "correta": "B",
        "explicacao": "Negação de 'alguns são' é 'nenhum é'."
    },
    {
        pergunta: "Em uma sala com 5 homens e 3 mulheres, qual a probabilidade de escolher uma mulher ao acaso?",
        alternativas: [
        "A) 3/8",   
        "B) 5/8",
        "C) 1/2",
        "D) 1/3",
        "E) 2/5"
        ],
        correta: "A",
        explicacao: "Probabilidade = número de mulheres / total de pessoas = 3/8."
    },
    // Título: Matemática  - Simulado
    {
        pergunta: "Quanto é 20% de 200?",
        alternativas: [
        "A) 20",
        "B) 30",
        "C) 40",
        "D) 50",
        "E) 60"
        ],
        correta: "C",
        explicacao: "20% = 0,2 → 0,2 × 200 = 40."
  },
  {
        pergunta: "Qual é o MMC de 4 e 6?",
        alternativas: [
        "A) 6",
        "B) 8",
        "C) 10",
        "D) 12",
        "E) 24"
        ],
        correta: "D",
        explicacao: "MMC(4,6)=12."
  },
  {
        pergunta: "Uma dúzia corresponde a:",
        alternativas: [
        "A) 6",
        "B) 10",
        "C) 12",
        "D) 24",
        "E) 30"
        ],
        correta: "C",
        explicacao: "Dúzia = 12."
  },
  {
        pergunta: "Quanto é 9 × 7?",
        "alternativas": [
        "A) 56",
        "B) 63",
        "C) 72",
        "D) 49",
        "E) 81"
        ],
        correta: "B",
        explicacao: "9 vezes 7 = 63."
  },
  {
        pergunta: "Se x = 5, quanto vale 2x + 3?",
        alternativas: [
        "A) 10",
        "B) 11",
        "C) 12",
        "D) 13",
        "E) 14"
        ],
        correta: "D",
        explicacao: "2×5 + 3 = 13."
  },

  // Título: Informática  - Simulado
  {
        pergunta: "Qual dos seguintes é um sistema operacional?",
        alternativas: [
        "A) Microsoft Word",
        "B) Google Chrome", 
        "C) Linux",
        "D) Adobe Photoshop",
        "E) Mozilla Firefox"
        ],
        correta: "C",
        explicacao: "Linux é um sistema operacional."
  },
  {
        pergunta: "Qual dispositivo é considerado hardware?",
        alternativas: [
        "A) Windows",
        "B) Linux",
        "C) Monitor",
        "D) Word",
        "E) Google Chrome"
        ],
        correta: "C",
        explicacao: "Hardware é a parte física do computador."
  },
  {
        pergunta: "O que é um software?",
        alternativas: [
        "A) Parte física",
        "B) Parte lógica",
        "C) Equipamento",
        "D) Processador",
        "E) Memória RAM"
        ],
        correta: "B",
        explicacao: "Software é o conjunto de programas."
  },
  {
        pergunta: "Qual é a função principal do sistema operacional?",
        alternativas: [
        "A) Criar textos",
        "B) Acessar a internet",
        "C) Gerenciar hardware e software",
        "D) Editar imagens",
        "E) Fazer cálculos"
        ],
        correta: "C",
        explicacao: "O SO gerencia recursos do sistema."
  },
  {
        pergunta: "Qual desses é um navegador?",
        alternativas: [
        "A) Excel",
        "B) PowerPoint",
        "C) Chrome",
        "D) Windows",
        "E) Linux"
        ],
        correta: "C",
        explicacao: "Navegadores acessam a internet."
  },
  {
        pergunta: "O que significa CPU?",
        alternativas: [
        "A) Central Program Unit",
        "B) Control Processing Unit",
        "C) Central Processing Unit",
        "D) Computer Personal Unit",
        "E) Control Personal Unit"
        ],
        correta: "C",
        explicacao: "CPU é a Unidade Central de Processamento."
  },
  // Título: Português  - Simulado
  {
        pergunta: "Qual é o plural de 'cidadão'?",
        alternativas: [
        "A) Cidadãos",  
        "B) Cidadães",
        "C) Cidadões",
        "D) Cidadãs",
        "E) Cidadãoses"
        ],
        correta: "A",
        explicacao: "O plural de 'cidadão' é 'cidadãos'."
  },
  {
        pergunta: "Qual é o antônimo de 'feliz'?",
        alternativas: [
        "A) Alegre",
        "B) Contente",
        "C) Triste",
        "D) Satisfeito",
        "E) Radiante"
        ],
        correta: "C",
        explicacao: "O antônimo de 'feliz' é 'triste'."
  },
  {
        pergunta: "Qual é a forma correta do verbo no presente do indicativo?",
        alternativas: [
        "A) Eu correram",   
        "B) Tu corre",
        "C) Ele correm",
        "D) Nós corre",
        "E) Eles corre"
        ],
        correta: "B",
        explicacao: "A forma correta é 'Tu corres'."
  },
  {
        pergunta: "Qual é a função do sujeito na oração?",
        alternativas: [
        "A) Indicar a ação",
        "B) Indicar o tempo",
        "C) Indicar quem pratica a ação",
        "D) Indicar o local",
        "E) Indicar o modo"
        ],
        correta: "C",
        explicacao: "O sujeito indica quem pratica a ação."
  },
  {
        pergunta: "Assinale a alternativa com apenas substantivos:",
        alternativas: [
        "A) Casa, amor, felicidade",
        "B) Bonito, rápido, alto",
        "C) Correr, falar, andar",
        "D) Felizmente, ontem, aqui",
        "E) Eu, tu, ele"
        ],
        correta: "A",
        explicacao: "Substantivos nomeiam seres, sentimentos ou ideias."
  },
  {
        pergunta: "Qual é o plural de 'cidadão'?",
        alternativas: [
        "A) Cidadões",
        "B) Cidadãos",
        "C) Cidadães",
        "D) Cidadãoses",
        "E) Cidadõeses"
        ],
        correta: "B",
        explicacao: "Plural irregular."
  },
  {
        pergunta: "Em 'Ela chegou cedo', o termo 'cedo' é:",
        alternativas: [
        "A) Substantivo",
        "B) Verbo",
        "C) Adjetivo",
        "D) Advérbio",
        "E) Artigo"
        ],
        correta: "D",
        explicacao: "Advérbio de tempo."
  },
  {
        pergunta: "Qual frase está correta?",
        alternativas: [
        "A) Haviam pessoas",
        "B) Existe pessoas",
        "C) Havia pessoas",
        "D) Existiam gente",
        "E) Houve pessoas existindo"
        ],
        correta: "C",
        explicacao: "Verbo haver é impessoal."
  },
  {
        pergunta: "Qual é o sujeito da frase: 'Choveu muito ontem'?",
        alternativas: [
        "A) Muito",
        "B) Ontem",
        "C) Chuva",
        "D) Sujeito oculto",
        "E) Não existe"
        ],
        correta: "E",
        explicacao: "Verbo impessoal."
  }
]

// ================= ESTADO =================
let index = 0;
let acertos = 0;
let respondido = false;
let tempo = 1800;

// ================= TIMER =================
const timerInterval = setInterval(() => {
    tempo--;
    const min = Math.floor(tempo / 60);
    const sec = tempo % 60;

    const timerEl = document.getElementById("timer");
    if (timerEl) {
        timerEl.innerText = `⏱️ Tempo restante: ${min}:${sec.toString().padStart(2, "0")}`;
    }

    if (tempo <= 0) finalizar();
}, 1000);

// ================= RENDER =================
function render() {
    const q = questoes[index];
    const quiz = document.getElementById("quiz");

    let html = `
        <div class="card">
            <b>Questão ${index + 1}</b><br>${q.pergunta}
        </div>
    `;

    q.alternativas.forEach(alt => {
        html += `
            <label class="option">
                <input type="radio" name="resposta" value="${alt[0]}" ${respondido ? "disabled" : ""}>
                ${alt}
            </label>
        `;
    });

    quiz.innerHTML = html;

    document.getElementById("progress").style.width =
        ((index + 1) / questoes.length) * 100 + "%";
}

// ================= BOTÃO =================
document.getElementById("actionBtn").onclick = () => {
    const quiz = document.getElementById("quiz");

    if (!respondido) {
        const marcada = document.querySelector("input[name='resposta']:checked");
        if (!marcada) return alert("Selecione uma alternativa");

        respondido = true;

        if (marcada.value === questoes[index].correta) {
            acertos++;
            quiz.innerHTML += `<div class="correct">✅ Correto</div>`;
        } else {
            quiz.innerHTML += `<div class="wrong">❌ Errado</div>`;
        }

        quiz.innerHTML += `<div class="explain">📘 ${questoes[index].explicacao}</div>`;
        document.getElementById("actionBtn").innerText = "➡️ Próxima questão";
    } else {
        index++;
        respondido = false;

        if (index >= questoes.length) {
            finalizar();
        } else {
            document.getElementById("actionBtn").innerText = "Responder";
            render();
        }
    }
};

// ================= FINAL =================
function finalizar() {
    clearInterval(timerInterval);

    document.body.innerHTML = `
        <div class="container">
            <h2>🏆 Simulado concluído</h2>
            <p><b>Resultado:</b> ${acertos}/${questoes.length}</p>
            <button onclick="location.reload()">🔁 Reiniciar</button>
        </div>
    `;
}

// ================= START =================
render();