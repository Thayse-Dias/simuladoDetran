// ================= QUESTÕES =================

// Título: Lógica  - Simulado
const questoes = [
   
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
  {
      pergunta: "Qual é a raiz quadrada de 81?",
      alternativas: [
        "A) 8",
        "B) 9",
        "C) 10",
        "D) 11",
        "E) 12"
      ],
      correta: "B",
      explicacao: "A raiz quadrada de 81 é 9."
  },
  {
      pergunta: "Em uma urna com 6 bolas vermelhas, 5 azuis e 4 verdes, a probabilidade de retirar simultaneamente 3 bolas de cores diferentes é igual a 24/91.",
      alternativas: [
      "C) Certo",
      "E) Errado"
      ],
      correta: "C",
      explicacao: "Total de combinações: C(15,3)=455. Casos favoráveis: 6×5×4=120. Probabilidade = 120/455 = 24/91."
  },
  {
      pergunta: "Se 30% de um número é igual a 90, então 40% desse número é igual a 120.",
      alternativas: [
      "C) Certo",
      "E) Errado"
      ],
      correta: "C",
      explicacao: "30% = 0,3 → número = 90 / 0,3 = 300. Logo, 40% = 0,4 × 300 = 120."
  },

   // Título: Legislação do Trânsito  - Simulado
  {
        pergunta: "No que se refere ao tema da “sinalização de trânsito”, assinale a alternativa incorreta.",
        alternativas: [
        "A) Sempre que necessário, será colocada ao longo da via, sinalização prevista no Código de Trânsito Brasileiro e em legislação complementar, destinadaa condutores e pedestres, vedada a utilização de qualquer outra.",
        "B) A sinalização deve ser colocada em posição e condições que a tornem perfeitamente visível e legível durante o dia e a noite, em distância compatível com a segurança do trânsito, conformenormas e especificações do CONTRAN.",
        "C) A responsabilidade pela instalação da sinalização nas vias internas pertencentes aos condomínios constituídos por unidades autônomas e nas vias e áreas de estacionamento de estabelecimentos privados de uso coletivo é do poder público.",
        "D) Nas vias públicas e nos imóveis é proibido colocar luzes, publicidade, inscrições, vegetação e mobiliário que possam gerar confusão, interferir na visibilidade da sinalização e comprometer a segurança do trânsito.",
        "E) A sinalização de trânsito compreende os sinais, os dispositivos auxiliares e a sinalização semafórica."
        ],
        correta: "C",
        explicacao: "A responsabilidade pela instalação da sinalização nas vias internas pertencentes aos condomínios constituídos por unidades autônomas e nas vias e áreas de estacionamento de estabelecimentos privados de uso coletivo é dos proprietários ou responsáveis pelos condomínios e estabelecimentos privados, e não do poder público."
  },
  {
        pergunta: "No que concerne ao “uso de luzes em veículo”, conforme disposto no Código de Trânsito Brasileiro, assinale a alternativa incorreta.",
        alternativas: [
        "A) Os veículos de transporte coletivo de passageiros, quado circularem em faixas ou pistas a eles destinadas, e as motocicletas, motonetas e ciclomotores deverão utilizar-se de farol de luz baixa durante o dia e à noite. ",
        "B) O condutor deve manter acesos os faróis do veículo, por meio da utilização da luz baixa à noite.",
        "C) É facultado ao condutor o condutor manter acesas, à noite, as luzes de posição quando o veículo estiver parado para fins de embarque ou desembarque de passageiros e carga ou descarga de mercadorias.",
        "D) O condutor deve manter acesos os faróis do veículo, por meio da utilização da luz baixa durante o dia, em túneis e sob chuva, neblina ou cerração.",
        "E) O condutor deve manter acesos os faróis do veículo, por meio da utilização da luz baixa durante o dia, em rodovias."
        ],
        correta: "C",
        explicacao: "O condutor deve manter acesas, à noite, as luzes de posição quando o veículo estiver parado para fins de embarque ou desembarque de passageiros e carga ou descarga de mercadorias, exceto em rodovias."
  },
  {
        pergunta: "No que diz respeito ao procedimento de estacionamento, parada, carga e descarga, conforme disposto no Código de Trânsito Brasileiro, assinale a alternativa incorreta.",
        alternativas: [
        "A) Nas vias providas de acostamento, os veículos parados, estacionados ou em operação de carga ou descarga devem estar situados fora da pista de rolamento.",
        "B) Nas paradas, operações de carga ou descarga e nos estacionamentos, o veículo deve ser posicionado no sentido do fluxo, paralelo ao bordo da pista de rolamento e junto à guia da calçada, admitidas as exceções devidamente sinalizadas.",
        "C) Quando proibido o estacionamento na via, a parada deverá restringir-se ao tempo indispensável para embarque ou desembarque de passageiros, desde que não interrompa ou perturbe o fluxo de veículos ou a locomoção de pedestres.",
        "D) A operação de carga ou descarga deve ser regulamentada pelo órgão ou pela entidade com circunscrição sobre a via e não deve ser consideradaestacionamento.",
        "E) O condutor que estacionar o veículo em via pública deve desligar o motor, retirar a chave da ignição, acionar o freio de estacionamento e, quando necessário, sinalizar a presença do veículo."
        ],
        correta: "D",
        explicacao: "Carga e descarga = estacionamento (CTB, art. 47)."
  },
  {
        pergunta: "Os condutores de motocicletas, motonetas e ciclomotores devem circular nas vias públicas:",
        alternativas: [
        "A) trajados com roupas especiais de proteção contra quedas e acidentes, de livre escolha.",
        "B) segurando o guidom com as duas mãos e com os pés posicionados em paralelo.",
        "C) utilizando capacete de segurança, com viseira ou óculos protetores.",
        "D) dando preferência a pedestres e a veículos de quatro rodas.",
        "E) utilizando roupas claras, de preferência com faixas refletivas."
        ],
        correta: "C",
        explicacao: "CTB, art. 244, inciso V."
  },
  {
        pergunta: "No que diz respeito às vias abertas à circulação, assinale a alternativa incorreta.",
        alternativas: [
        "A) É vedado ao órgão ou entidade de trânsito ourodoviário com circunscrição sobre a via regulamentar, por meio de sinalização, velocidades superiores às previstas em lei para determinada via pública.",
        "B) A velocidade máxima permitida para a via será indicada por meio de sinalização, obedecidas suas características técnicas e as condições de trânsito.",
        "C) A velocidade mínima não pode ser inferior à metade da velocidade máxima estabelecida, respeitadas as condições operacionais de trânsito e da via.",
        "D) A velocidade máxima permitida para a via será estabelecida pelo órgão ou entidade de trânsito ou rodoviário com circunscrição sobre a via, observadas as condições de trânsito e da via.",
        "E) Nas vias urbanas, a velocidade máxima permitida para os veículos é de 60 km/h, salvo onde houver sinalização em contrário."
        ],
        correta: "A",
        explicacao: "De acordo com o CTB (art. 61), o órgão ou entidade de trânsito pode regulamentar velocidades máximas superiores ou inferiores às previstas em lei, desde que por meio de sinalização, observadas as condições da via e do trânsito."
  },
  {
        pergunta: "Assinale a alternativa que apresenta a classificação aplicável às vias abertas à circulação, de acordo com sua utilização.",
        alternativas: [
        "A) Vias urbanas: via regional e via lateral.",
        "B) Vias rurais: estradas vicinais e vias coletoras.",
        "C) Vias urbanas: via de tráfego intenso e via local.",
        "D) Vias rurais: rodovias e estradas.",
        "E) Vias urbanas: rodovias e estradas."
        ],
        correta: "D",
        explicacao: "Vias rurais: rodovias e estradas (CTB, art. 2º, inciso II)."
  },
  {
        pergunta: "Onde não existir sinalização regulamentadora, a velocidade máxima será de:",
        alternativas: [
        "A) 80 km/h (oitenta quilômetros por hora), nas vias arteriais.",
        "B) 120 km/h (cento e vinte quilômetros por hora), nas vias de trânsito rápido.",
        "C) 100 km/h (cem quilômetros por hora) para automóveis, camionetas e motocicletas, nas rodovias de pista simples.",
        "D) 90 km/h (noventa quilômetros por hora), nas vias coletoras.",
        "E) 60 km/h (sessenta quilômetros por hora), nas vias arteriais."
        ],
        correta: "C",
        explicacao: "CTB, art. 61."     
  },
  {
        pergunta: "A autoridade de trânsito ou seus agentes, na esfera das competências previstas no Código de Trânsito Brasileiro e dentro de sua circunscrição, deverá adotar, dente outras, as seguintes medidas administrativas:",
        alternativas: [
        "A) recolhimento da permissão para dirigir e leilão do veículo sinistrado.",
        "B) transbordo do excesso de carga e retenção do veículo.",
        "C) recolhimento de adolescentes que estejam na direção de veículo automotor e realização de teste de dosagem de alcoolemia.",
        "D) realização de perícia de substância entorpecente e apreensão da carteira de identidade.",
        "E) remoção do veículo e não recolhimento do documento de habilitação."
        ],
        correta: "B",
        explicacao: "Medida administrativa (art. 269 CTB): retenção do veículo e transbordo do excesso de carga."
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
  {
        pergunta: [
        " Nas últimas versões do Microsoft Word é disponibilizado várias funções tais como:",
        "(1) o recurso denominado 'Quebra de Página',",
        "(2) transformar um arquivo PDF no padrão do Word.",
        "(3) selecionar modelos de documentos online."
        ],
        alternativas: [
        "Da relação apresentada:",
        "A) Apenas (1) e (2) estão corretas.",
        "B) Apenas (1) e (3) estão corretas.",
        "C) Apenas (2) e (3) estão corretas.",
        "D) Todas estão corretas.",
        "E) Nenhuma está correta."
        ],
        correta: "D",
        explicacao: "Todas as funções são oferecidas pelo Word."
  },
  {
        pergunta: [
        "Leia a frase abaixo referente às estruturas de redes de computadores e topologia:",
        "As três topologias físicas mais comumente usadas são respectivamente: ______, ______ e ______.",
        ],
        alternativas: [
        "A) barramento(bus), estrela (star) e anel (ring).",,
        "B) linear (line), caracol (snail) e quadrada (square).",
        "C) estrela (star), caracol (snail) e quadrada (square).",
        "D) anel (ring), linear (line) e barramento (bus).",
        "E) barramento (bus), caracol (snail) e quadrada (square)."
        ],
        correta: "A",
        explicacao: "As topologias mais comuns são barramento, estrela e anel."  
  },
  {
        pergunta: [
        "Referente ao aumento de memória principal em um computador, analise as afirmativas abaixo e dê valores Verdadeiro (V) ou Falso (F):",
        "( )  A velocidade de acesso aos dados no HD aumenta exponencialmente. ",
        "( ) O computador aumenta o clock da CPU aumentando o processamento.",
        "( )  O sistema poderá acessar maior quantidade de dados na RAM.",
        ],
        alternativas: [
        "Assinale a alternativa que apresenta a sequência correta de cima para baixo.",
        "A) V, F, F.",
        "B) V, V, F.",
        "C) F, V, V.",
        "D) F, F, V.",
        "E) V, F, V."
        ],
        correta: "D",
        explicacao: "Aumento de memória não afeta HD ou clock da CPU."
  },
  {
      pergunta: "Qual é a extensão padrão de arquivos do Microsoft Excel?",
      alternativas: [
        "A) .xls",
        "B) .xlsx",
        "C) .xlsm",
        "D) .csv",
        "E) .ods"
      ],
      correta: "B",
      explicacao: "A extensão padrão do Excel é .xlsx."
  },

  // Título: Conhecimentos Específicos  - Simulado

  {
      pergunta: [
      "Conforme SOMMERVILLE (2011), tanto o SCRUM, como o XP, com base no manifesto ágil, compartilham de um mesmo conjunto de princípios dos métodos ágeis, tais como:",
      "(1) Entrega incremental do software para o cliente.",
      "(2) Documentação antes, desenvolvimento depois.",
      "(3) Requisitos mudam, mudanças devem ser aceitas.",
      "(4) Manter a simplicidade, eliminar a complexidade."
      ],
      alternativas: [
      "Da relação apresentada, existem somente:",
      "A) 1, 2 e 3",
      "B) 1, 2 e 4",
      "C) 2, 3 e 4",
      "D) 1, 3 e 4",
      "E) Nenhuma das alternativas anteriores."
      ],
      correta: "D",
      explicacao: "Ágil ≠ documentação antes de desenvolver."
  },
  {
      pergunta: [
      "Leia atentamente a frase abaixo::",
      "O padrão de arquitetura MVC, do inglês: ______,______, ______ é a base do gerenciamento de interação em muitos sistemas baseados em Web.", 
      ],
      alternativas: [
      "Assinale a alternativa que preencha correta e respectivamente as lacunas",
      "A) MEAN / VALUE / CORE",
      "B) MEAN / VALUE / CONTROLLER",
      "C) MODEL / VIEW / CONTROLLER",
      "D) MODEL / VIEW / CORE",
      "E) MODEL / VALUE / CONTROLLER"
      ],
      correta: "C",
      explicacao: "MVC = Model, View, Controller."

  },
  {
      pergunta: "Em relação aos conceitos de redes de computadores, assinale a alternativa correta:",
      alternativas: [
      "A) O protocolo TCP é utilizado para transmissão de dados em tempo real, como em chamadas de voz.",
      "B) O protocolo UDP é utilizado para transmissão de dados em tempo real, como em chamadas de voz.",
      "C) O protocolo TCP é utilizado para transmissão de dados em tempo real, como em chamadas de voz.",
      "D) O protocolo UDP é utilizado para transmissão de dados em tempo real, como em chamadas de voz.",
      "E) O protocolo TCP é utilizado para transmissão de dados em tempo real, como em chamadas de voz."
      ],
      correta: "B",
      explicacao: "O protocolo UDP é utilizado para transmissão de dados em tempo real, como em chamadas de voz."
  },
  {
      pergunta: "Quanto ao Modelo Entidade Relacionamento, é dada a definição: uma instância de uma entidade pode apresentar diversas instâncias de relacionamento com a outra entidade e viceversa, ou seja, refere-se a cardinalidade:",
      alternativas: [
      "A) um-para-muitos",
      "B) muitos-para-muitos",
      "C) muitos-para-um",
      "D) um-para-um"
      ],
      correta: "B",
      explicacao: "A cardinalidade muitos-para-muitos permite que uma instância de uma entidade esteja relacionada com várias instâncias de outra entidade e vice-versa."

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
  },
  
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