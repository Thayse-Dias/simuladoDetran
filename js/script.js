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
  {
        pergunta: "Conforme o Código de Trânsito Brasileiro, assinale a alternativa correta.",
        alternativas: [
        "A) O condutor que se recusar a ser submetido aos testes de alcoolemia terá sua Carteira Nacional de Habilitação recolhida e o veículo removido.",
        "B) O condutor que se recusar a ser submetido aos testes de alcoolemia não sofrerá qualquer penalidade.",
        "C) O condutor que se recusar a ser submetido aos testes de alcoolemia terá sua Carteira Nacional de Habilitação recolhida, mas o veículo não será removido.",
        "D) O condutor que se recusar a ser submetido aos testes de alcoolemia terá apenas o veículo removido.",
        "E) O condutor que se recusar a ser submetido aos testes de alcoolemia terá apenas sua Carteira Nacional de Habilitação recolhida."
        ],
        correta: "A",
        explicacao: "CTB, art. 165-A."    
  },
  {
        pergunta: [
        "Acerca do Regimento Interno do Departamento Estadual de Trânsito de Alagoas (DETRAN/AL), assinale a alternativa correta.",
        "Compete ao DETRAN/AL, na condição de órgão executivo de trânsito estadual:",
        ],
        alternativas: [ 
        "A) Atuar exclusivamente na fiscalização de infrações de trânsito em vias urbanas, sem exercer atividades administrativas.",
        "B) Executar apenas as políticas de trânsito definidas pela União, sem autonomia administrativa ou financeira.",
        "C) Planejar, coordenar, fiscalizar e executar as atividades relacionadas ao trânsito no âmbito do Estado de Alagoas, em conformidade com o Código de Trânsito Brasileiro.",
        "D) Exercer somente atividades de registro de veículos, sendo vedada sua atuação na habilitação de condutores.",
        "E) Subordinar-se diretamente ao Conselho Nacional de Trânsito (CONTRAN), sem vínculo com a administração estadual."
        ],
        correta: "C",
        explicacao: "O DETRAN/AL é responsável por planejar, coordenar, fiscalizar e executar as atividades relacionadas ao trânsito no Estado de Alagoas, conforme o CTB."
  },
  {
        pergunta: "Acerca do Regimento Interno do Departamento Estadual de Trânsito de Alagoas (DETRAN/AL), assinale a alternativa correta. Compete ao DETRAN/AL, na condição de órgão executivo de trânsito estadual:",
        alternativas: [
            "A) Atuar exclusivamente na fiscalização de infrações de trânsito em vias urbanas, sem exercer atividades administrativas.",
            "B) Executar apenas as políticas de trânsito definidas pela União, sem autonomia administrativa ou financeira.",
            "C) Planejar, coordenar, fiscalizar e executar as atividades relacionadas ao trânsito no âmbito do Estado de Alagoas, em conformidade com o Código de Trânsito Brasileiro.",
            "D) Exercer somente atividades de registro de veículos, sendo vedada sua atuação na habilitação de condutores.",
            "E) Subordinar-se diretamente ao Conselho Nacional de Trânsito (CONTRAN), sem vínculo com a administração estadual."
        ],
        correta: "C",
        explicacao: "O DETRAN/AL é o órgão executivo de trânsito estadual, competindo-lhe planejar, coordenar, fiscalizar e executar as atividades de trânsito, conforme o Código de Trânsito Brasileiro e o Regimento Interno."
    },
    {
        pergunta: "Acerca do Regimento Interno do Departamento Estadual de Trânsito de Alagoas (DETRAN/AL), assinale a alternativa correta. No âmbito de sua estrutura organizacional, o DETRAN/AL:",
        alternativas: [
            "A) Não possui unidades descentralizadas, concentrando todas as atividades exclusivamente na capital.",
            "B) Pode organizar-se em diretorias, coordenadorias, gerências e unidades administrativas, conforme previsto em seu Regimento Interno.",
            "C) É composto apenas por órgãos colegiados, não havendo unidades executivas permanentes.",
            "D) Subordina-se hierarquicamente aos municípios para execução das políticas de trânsito.",
            "E) Possui estrutura definida exclusivamente pelo Conselho Nacional de Trânsito (CONTRAN)."
        ],
        correta: "B",
        explicacao: "O Regimento Interno do DETRAN/AL prevê uma estrutura administrativa composta por diretorias, coordenadorias, gerências e unidades administrativas, visando à execução eficiente de suas competências."
    },
    {
        pergunta: "Acerca do Regimento Interno do Departamento Estadual de Trânsito de Alagoas (DETRAN/AL), assinale a alternativa correta. Entre as competências relacionadas à habilitação de condutores, cabe ao DETRAN/AL:",
        alternativas: [
            "A) Conceder habilitação independentemente do cumprimento dos requisitos previstos no Código de Trânsito Brasileiro.",
            "B) Delegar integralmente aos municípios todas as atividades relativas à formação e habilitação de condutores.",
            "C) Realizar, controlar e fiscalizar os procedimentos de habilitação, renovação e cassação da Carteira Nacional de Habilitação, conforme a legislação vigente.",
            "D) Atuar apenas como órgão consultivo, sem poder decisório sobre a habilitação de condutores.",
            "E) Limitar-se ao registro estatístico dos condutores habilitados no Estado."
        ],
        correta: "C",
        explicacao: "Compete ao DETRAN/AL executar e fiscalizar os procedimentos de habilitação de condutores, incluindo concessão, renovação e cassação da CNH, conforme o CTB e normas complementares."
    },
    {
        pergunta: "Acerca do Regimento Interno do Departamento Estadual de Trânsito de Alagoas (DETRAN/AL), assinale a alternativa correta. No exercício do poder de polícia administrativa de trânsito, o DETRAN/AL:",
        alternativas: [
            "A) Não possui competência para aplicar penalidades, limitando-se à função educativa.",
            "B) Pode aplicar penalidades e medidas administrativas previstas na legislação de trânsito, respeitados os limites legais.",
            "C) Atua exclusivamente na orientação dos condutores, sem realizar fiscalização.",
            "D) Depende de autorização prévia do CONTRAN para cada ação fiscalizatória realizada no Estado.",
            "E) Exerce poder de polícia apenas em rodovias federais."
        ],
        correta: "B",
        explicacao: "O DETRAN/AL exerce poder de polícia administrativa de trânsito, podendo fiscalizar, aplicar penalidades e adotar medidas administrativas previstas no Código de Trânsito Brasileiro."
    },
    {
        pergunta: "Acerca do Regimento Interno do Departamento Estadual de Trânsito de Alagoas (DETRAN/AL), assinale a alternativa correta. Quanto à gestão administrativa e financeira do DETRAN/AL, é correto afirmar que:",
        alternativas: [
            "A) O órgão não possui autonomia administrativa, estando subordinado exclusivamente à União.",
            "B) Todas as suas receitas devem ser repassadas integralmente aos municípios.",
            "C) O DETRAN/AL dispõe de autonomia administrativa e financeira, nos limites da legislação estadual e das normas aplicáveis.",
            "D) Suas despesas independem de previsão orçamentária.",
            "E) O órgão não pode celebrar convênios ou parcerias institucionais."
        ],
        correta: "C",
        explicacao: "O Regimento Interno assegura ao DETRAN/AL autonomia administrativa e financeira, observadas a legislação estadual e as normas que regem a administração pública."
    },
    {
        pergunta: "Acerca do Regimento Interno do DETRAN/AL e do Código de Trânsito Brasileiro (CTB), assinale a alternativa correta. O DETRAN/AL, como órgão executivo de trânsito estadual:",
        alternativas: [
            "A) Integra o Sistema Nacional de Trânsito apenas de forma consultiva.",
            "B) Atua exclusivamente na fiscalização de rodovias federais.",
            "C) Integra o Sistema Nacional de Trânsito e exerce competências executivas no âmbito estadual.",
            "D) Subordina-se hierarquicamente aos municípios.",
            "E) Possui atuação restrita à educação para o trânsito."
        ],
        correta: "C",
        explicacao: "O CTB define o DETRAN como órgão executivo de trânsito dos Estados, integrante do Sistema Nacional de Trânsito, com competências executivas no âmbito estadual."
    },
    {
        pergunta: "Segundo o CTB e o Regimento Interno do DETRAN/AL, compete ao DETRAN:",
        alternativas: [
            "A) Fiscalizar exclusivamente infrações cometidas por pedestres.",
            "B) Executar a fiscalização de trânsito, aplicar penalidades e medidas administrativas cabíveis.",
            "C) Apenas registrar veículos automotores.",
            "D) Atuar somente após autorização do CONTRAN.",
            "E) Executar políticas de trânsito apenas no âmbito municipal."
        ],
        correta: "B",
        explicacao: "O CTB atribui aos órgãos executivos estaduais de trânsito a fiscalização, aplicação de penalidades e adoção de medidas administrativas."
    },
    {
        pergunta: "Conforme o CTB, a Carteira Nacional de Habilitação (CNH) é expedida:",
        alternativas: [
            "A) Pelo CONTRAN.",
            "B) Pela Polícia Rodoviária Federal.",
            "C) Pelo DETRAN do Estado ou do Distrito Federal.",
            "D) Pelo órgão executivo municipal de trânsito.",
            "E) Pelo DENATRAN exclusivamente."
        ],
        correta: "C",
        explicacao: "De acordo com o CTB, a CNH é expedida pelo órgão executivo de trânsito do Estado ou do Distrito Federal."
    },
    {
        pergunta: "Acerca da estrutura administrativa prevista no Regimento Interno do DETRAN/AL, é correto afirmar que:",
        alternativas: [
            "A) É composta exclusivamente por órgãos colegiados.",
            "B) Não admite descentralização administrativa.",
            "C) Pode incluir diretorias, gerências e unidades administrativas.",
            "D) É definida exclusivamente por normas federais.",
            "E) Subordina-se ao CONTRAN."
        ],
        correta: "C",
        explicacao: "O Regimento Interno do DETRAN/AL prevê estrutura administrativa composta por diretorias, gerências e unidades administrativas."
    },
    {
        pergunta: "Segundo o CTB, o poder de polícia administrativa de trânsito permite ao DETRAN:",
        alternativas: [
            "A) Apenas orientar condutores.",
            "B) Aplicar penalidades e medidas administrativas.",
            "C) Atuar sem limites legais.",
            "D) Julgar crimes de trânsito.",
            "E) Executar funções judiciais."
        ],
        correta: "B",
        explicacao: "O poder de polícia administrativa de trânsito autoriza a fiscalização e aplicação de penalidades previstas em lei."
    },
    {
        pergunta: "De acordo com o Regimento Interno do DETRAN/AL, quanto à sua gestão financeira:",
        alternativas: [
            "A) Não possui autonomia financeira.",
            "B) Depende exclusivamente de repasses municipais.",
            "C) Possui autonomia administrativa e financeira, nos limites legais.",
            "D) Não integra o orçamento estadual.",
            "E) Está subordinado financeiramente ao CONTRAN."
        ],
        correta: "C",
        explicacao: "O Regimento Interno assegura ao DETRAN/AL autonomia administrativa e financeira, observadas as normas legais."
    },
    {
        pergunta: "Segundo o CTB, o Sistema Nacional de Trânsito tem como objetivo:",
        alternativas: [
            "A) Apenas punir infrações de trânsito.",
            "B) Estabelecer normas penais de trânsito.",
            "C) Exercício das atividades de planejamento, administração, fiscalização e educação para o trânsito.",
            "D) Julgar crimes de trânsito.",
            "E) Atuar exclusivamente em rodovias federais."
        ],
        correta: "C",
        explicacao: "O CTB define que o Sistema Nacional de Trânsito visa ao planejamento, administração, fiscalização e educação para o trânsito."
    },
    {
        pergunta: "Conforme o CTB, compete aos órgãos executivos estaduais de trânsito:",
        alternativas: [
            "A) Julgar recursos em última instância.",
            "B) Expedir a Permissão para Dirigir e a CNH.",
            "C) Elaborar leis de trânsito.",
            "D) Atuar exclusivamente como órgãos consultivos.",
            "E) Fiscalizar apenas pedestres."
        ],
        correta: "B",
        explicacao: "O CTB atribui aos órgãos executivos estaduais a expedição da Permissão para Dirigir e da CNH."
    },
    {
        pergunta: "Acerca da atuação do DETRAN/AL na educação para o trânsito, é correto afirmar que:",
        alternativas: [
            "A) Não possui qualquer competência nessa área.",
            "B) Atua apenas mediante autorização do CONTRAN.",
            "C) Pode promover ações educativas conforme o CTB e o Regimento Interno.",
            "D) Atua exclusivamente no ensino superior.",
            "E) Tem atuação restrita a campanhas nacionais."
        ],
        correta: "C",
        explicacao: "O CTB e o Regimento Interno preveem a atuação dos órgãos executivos estaduais em ações de educação para o trânsito."
    },
    {
        pergunta: "Segundo o CTB, o registro e o licenciamento de veículos são de competência:",
        alternativas: [
            "A) Do CONTRAN.",
            "B) Da Polícia Rodoviária Federal.",
            "C) Do órgão executivo de trânsito do Estado.",
            "D) Do órgão executivo municipal.",
            "E) Do DENATRAN exclusivamente."
        ],
        correta: "C",
        explicacao: "O CTB atribui aos órgãos executivos estaduais de trânsito o registro e o licenciamento de veículos."
    },
    {
        pergunta: "À luz do Código de Trânsito Brasileiro (CTB) e do Regimento Interno do DETRAN/AL, assinale a alternativa correta. O DETRAN/AL, enquanto órgão executivo de trânsito estadual, exerce suas competências:",
        alternativas: [
            "A) Apenas de forma normativa, sem atribuições executivas.",
            "B) Exclusivamente em caráter suplementar às decisões do CONTRAN.",
            "C) De forma executiva, administrativa e fiscalizatória, no âmbito de sua circunscrição.",
            "D) Somente quando provocado pelos órgãos municipais.",
            "E) Apenas mediante delegação da Polícia Rodoviária Federal."
        ],
        correta: "C",
        explicacao: "O CTB define os DETRANs como órgãos executivos de trânsito dos Estados, com competências administrativas, executivas e fiscalizatórias dentro de sua circunscrição."
    },
    {
        pergunta: "Segundo o CTB, compete aos órgãos executivos estaduais de trânsito, como o DETRAN/AL, julgar:",
        alternativas: [
            "A) Recursos contra penalidades impostas por órgãos municipais, em última instância.",
            "B) Crimes de trânsito cometidos em rodovias estaduais.",
            "C) Recursos interpostos contra penalidades por eles aplicadas.",
            "D) Infrações cometidas por pedestres e ciclistas exclusivamente.",
            "E) Recursos contra decisões do CONTRAN."
        ],
        correta: "C",
        explicacao: "De acordo com o CTB, os órgãos executivos estaduais de trânsito julgam os recursos interpostos contra penalidades que eles próprios aplicarem."
    },
    {
        pergunta: "Conforme o Regimento Interno do DETRAN/AL e os princípios da Administração Pública, é correto afirmar que a atuação do órgão deve observar:",
        alternativas: [
            "A) Exclusivamente o princípio da eficiência.",
            "B) Apenas as normas internas do próprio DETRAN.",
            "C) Os princípios da legalidade, impessoalidade, moralidade, publicidade e eficiência.",
            "D) Apenas as diretrizes do CONTRAN.",
            "E) Os princípios definidos unicamente pelo Sistema Nacional de Trânsito."
        ],
        correta: "C",
        explicacao: "Como autarquia estadual, o DETRAN/AL submete-se aos princípios constitucionais da Administração Pública, previstos no art. 37 da Constituição Federal."
    },
    {
        pergunta: "À luz do CTB, a integração do DETRAN/AL ao Sistema Nacional de Trânsito implica:",
        alternativas: [
            "A) Subordinação hierárquica direta ao CONTRAN.",
            "B) Atuação isolada, sem cooperação com outros órgãos.",
            "C) Atuação coordenada com os demais órgãos e entidades do Sistema.",
            "D) Exclusão das competências municipais.",
            "E) Exercício apenas de funções consultivas."
        ],
        correta: "C",
        explicacao: "O Sistema Nacional de Trânsito é estruturado de forma integrada e cooperativa, não havendo subordinação hierárquica entre seus órgãos."
    },
    {
        pergunta: "Segundo o CTB e o Regimento Interno do DETRAN/AL, no que se refere à educação para o trânsito, é correto afirmar que:",
        alternativas: [
            "A) Trata-se de atribuição exclusiva do Ministério da Educação.",
            "B) Compete apenas aos órgãos municipais de trânsito.",
            "C) É uma atribuição compartilhada entre os órgãos do Sistema Nacional de Trânsito.",
            "D) O DETRAN atua apenas como executor de campanhas federais.",
            "E) Não integra as competências dos órgãos executivos estaduais."
        ],
        correta: "C",
        explicacao: "O CTB estabelece que a educação para o trânsito é dever dos órgãos e entidades integrantes do Sistema Nacional de Trânsito, incluindo os DETRANs."
    },

  // Título: Informática / Conhecimento Específico  - Simulado
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
  {
        pergunta: "Em sistemas operacionais modernos, a principal função do kernel é:",
        alternativas: [
        "A) Fornecer interface gráfica ao usuário",
        "B) Executar aplicativos de usuário",
        "C) Gerenciar recursos do sistema",
        "D) Armazenar arquivos temporários",
        "E) Controlar apenas dispositivos de entrada"
        ],
        correta: "C",
        explicacao: "O kernel é o núcleo do sistema operacional, responsável pelo gerenciamento de CPU, memória, processos e dispositivos."
  },
  {
        pergunta: "No contexto de redes de computadores, o protocolo HTTP é utilizado para:",
        alternativas: [
        "A) Transferência segura de arquivos",
        "B) Envio de e-mails",
        "C) Comunicação entre navegadores e servidores web",
        "D) Gerenciamento de endereços IP",
        "E) Criptografia de dados"
        ],
        correta: "C",
        explicacao: "O HTTP é o protocolo base da Web, usado para comunicação entre cliente (browser) e servidor."
  },
  {
        pergunta: "O software que permite a interação direta entre usuário e hardware é o:",
        alternativas: [
        "A) Aplicativo",
        "B) Compilador",
        "C) Sistema operacional",
        "D) Firmware",
        "E) Middleware"
        ],
        correta: "C",
        explicacao: "O sistema operacional atua como intermediário entre usuário, aplicativos e hardware."
  },
  {
        pergunta: "No pacote LibreOffice ou Microsoft Office, a ferramenta mais adequada para criação de apresentações é:",
        alternativas: [
        "A) Writer / Word",
        "B) Calc / Excel",
        "C) Base / Access",
        "D) Impress / PowerPoint",
        "E) Draw / Publisher"
        ],
        correta: "D",
        explicacao: "Impress (LibreOffice) e PowerPoint (Microsoft) são usados para apresentações."
  },
  {
        pergunta: "Em segurança da informação, o princípio da integridade refere-se à:",
        alternativas: [
        "A) Garantia de acesso contínuo",
        "B) Proteção contra divulgação indevida",
        "C) Manutenção da exatidão das informações",
        "D) Recuperação após falhas",
        "E) Identificação do usuário"
        ],
        correta: "C",
        explicacao: "Integridade garante que os dados não sejam alterados indevidamente."
  },
  {
        pergunta: "Em bancos de dados relacionais, a chave primária tem como principal função:",
        alternativas: [
        "A) Permitir valores nulos",
        "B) Identificar unicamente um registro",
        "C) Relacionar tabelas secundárias",
        "D) Melhorar apenas o desempenho",
        "E) Controlar permissões de acesso"
        ],
        correta: "B",
        explicacao: "A chave primária garante unicidade e identificação de cada registro."
  },
  {
        pergunta: "O conceito de virtualização permite:",
        alternativas: [
        "A) A execução exclusiva de um sistema por hardware",
        "B) A criação de múltiplos ambientes isolados em um mesmo hardware",
        "C) A substituição do sistema operacional",
        "D) O aumento físico da capacidade do servidor",
        "E) A eliminação do hypervisor"
        ],
        correta: "B",
        explicacao: "Virtualização permite rodar várias máquinas virtuais isoladas em um mesmo hardware físico."
  },
  {
        pergunta: "Em criptografia, o uso de chaves assimétricas caracteriza-se por:",
        alternativas: [
        "A) Utilização de uma única chave secreta",
        "B) Uso exclusivo em redes locais",
        "C) Emprego de par de chaves pública e privada",
        "D) Maior velocidade que criptografia simétrica",
        "E) Eliminação da necessidade de certificados"
        ],
        correta: "C",
        explicacao: "Criptografia assimétrica utiliza um par de chaves: uma pública e outra privada."
  },
  {
        pergunta: "No modelo OSI, a camada responsável pelo roteamento de pacotes é a:",
        alternativas: [
        "A) Aplicação",
        "B) Transporte",
        "C) Rede",
        "D) Enlace",
        "E) Física"
        ],
        correta: "C",
        explicacao: "A camada de rede é responsável pelo roteamento e endereçamento lógico (IP)."
  },
  {
        pergunta: "Em engenharia de software, o conceito de acoplamento está relacionado:",
        alternativas: [
        "A) À quantidade de classes no sistema",
        "B) Ao grau de dependência entre módulos",
        "C) À documentação do código",
        "D) À interface gráfica",
        "E) À performance do sistema"
        ],
        correta: "B",
        explicacao: "Baixo acoplamento indica menor dependência entre módulos, facilitando manutenção e evolução do sistema."
  },
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
  {
        pergunta: "No âmbito do DETRAN/AL, os sistemas de informação têm como finalidade principal:",
        alternativas: [
        "A) Apenas armazenar dados históricos sem uso administrativo",
        "B) Apoiar a gestão, fiscalização e tomada de decisão no trânsito",
        "C) Substituir integralmente a atuação humana",
        "D) Atender exclusivamente às demandas federais",
        "E) Eliminar a necessidade de normas legais"
        ],
        correta: "B",
        explicacao: "Os sistemas de informação apoiam a gestão, a fiscalização e o processo decisório, sendo ferramentas estratégicas do DETRAN."
  },
  {
        pergunta: "Segundo o CTB, os órgãos do Sistema Nacional de Trânsito devem:",
        alternativas: [
        "A) Operar sistemas de forma isolada",
        "B) Centralizar dados apenas no CONTRAN",
        "C) Compartilhar informações e integrar sistemas",
        "D) Utilizar exclusivamente sistemas estaduais",
        "E) Restringir acesso aos dados de trânsito"
        ],
        correta: "C",
        explicacao: "O CTB prevê a integração e o compartilhamento de informações entre os órgãos do Sistema Nacional de Trânsito."
  },
  {
        pergunta: "A governança de TI no DETRAN/AL deve estar alinhada:",
        alternativas: [
        "A) Apenas ao orçamento disponível",
        "B) Somente às decisões técnicas da área de TI",
        "C) Aos objetivos estratégicos e às políticas públicas de trânsito",
        "D) Exclusivamente às diretrizes do DENATRAN",
        "E) À terceirização total dos sistemas"
        ],
        correta: "C",
        explicacao: "Governança de TI envolve alinhamento estratégico entre tecnologia, objetivos institucionais e políticas públicas."
  },
  {
        pergunta: "No desenvolvimento de sistemas do DETRAN/AL, a confidencialidade das informações refere-se:",
        alternativas: [
        "A) À garantia de acesso irrestrito aos dados",
        "B) À proteção contra acesso não autorizado",
        "C) À eliminação de registros históricos",
        "D) Ao livre compartilhamento de dados sensíveis",
        "E) À substituição de controles de acesso"
        ],
        correta: "B",
        explicacao: "Confidencialidade garante que apenas usuários autorizados tenham acesso às informações."
  },
  {
        pergunta: "Os sistemas de registro de veículos do DETRAN/AL devem:",
        alternativas: [
        "A) Funcionar de forma independente do CTB",
        "B) Registrar apenas veículos novos",
        "C) Manter dados íntegros e atualizados",
        "D) Ser acessíveis sem autenticação",
        "E) Operar sem políticas de backup"
        ],
        correta: "C",
        explicacao: "A integridade e atualização dos dados são essenciais para a confiabilidade dos sistemas."
  },
  {
        pergunta: "Em sistemas computacionais, o conceito de multitarefa refere-se:",
        alternativas: [
        "A) À execução simultânea de vários programas em múltiplos computadores",
        "B) À capacidade do sistema operacional executar vários processos de forma concorrente",
        "C) À execução de um único processo por vez",
        "D) Ao uso exclusivo de aplicações em segundo plano",
        "E) À substituição do sistema operacional"
        ],
        correta: "B",
        explicacao: "Multitarefa permite que o sistema operacional gerencie vários processos de forma concorrente, otimizando o uso da CPU."
  },
  {
        pergunta: "No contexto de segurança da informação, o controle de acesso baseado em papéis (RBAC) tem como objetivo:",
        alternativas: [
        "A) Conceder permissões individuais para cada usuário",
        "B) Eliminar a necessidade de autenticação",
        "C) Atribuir permissões com base nas funções exercidas",
        "D) Garantir criptografia de ponta a ponta",
        "E) Restringir o acesso apenas por endereço IP"
        ],
        correta: "C",
        explicacao: "No modelo RBAC, os usuários recebem permissões conforme seus papéis organizacionais."
  },
  {
        pergunta: "Em desenvolvimento de software, o uso de sistemas de controle de versão, como o Git, permite:",
        alternativas: [
        "A) Executar testes automatizados",
        "B) Gerenciar versões e histórico do código-fonte",
        "C) Compilar aplicações automaticamente",
        "D) Substituir documentação técnica",
        "E) Eliminar conflitos de código"
        ],
        correta: "B",
        explicacao: "Sistemas de controle de versão permitem acompanhar alterações, histórico e colaboração no desenvolvimento."
  },
  {
        pergunta: "No modelo cliente-servidor, é correto afirmar que:",
        alternativas: [
        "A) O servidor sempre inicia a comunicação",
        "B) Cliente e servidor possuem funções idênticas",
        "C) O cliente solicita serviços e o servidor responde",
        "D) O servidor não pode atender múltiplos clientes",
        "E) A comunicação ocorre apenas em redes locais"
        ],
        correta: "C",
        explicacao: "No modelo cliente-servidor, o cliente faz requisições e o servidor fornece os serviços."
  },
  {
        pergunta: "Em testes de software, o teste de regressão tem como finalidade:",
        alternativas: [
        "A) Avaliar desempenho do sistema",
        "B) Verificar segurança da aplicação",
        "C) Garantir que novas alterações não afetem funcionalidades existentes",
        "D) Validar requisitos do usuário",
        "E) Substituir testes unitários"
        ],
        correta: "C",
        explicacao: "Testes de regressão asseguram que mudanças no código não introduzam novos defeitos em funcionalidades já testadas."
  },
  {
        pergunta: "Em arquitetura de software, o padrão MVC (Model-View-Controller) tem como principal objetivo:",
        alternativas: [
        "A) Aumentar o desempenho da aplicação",
        "B) Separar responsabilidades, facilitando manutenção e evolução",
        "C) Eliminar a necessidade de banco de dados",
        "D) Centralizar regras de negócio na interface",
        "E) Substituir testes automatizados"
        ],
        correta: "B",
        explicacao: "O MVC promove separação de responsabilidades entre dados (Model), interface (View) e controle de fluxo (Controller), facilitando manutenção e escalabilidade."
  },
  {
        pergunta: "Em bancos de dados, a normalização até a 3ª Forma Normal (3FN) tem como objetivo principal:",
        alternativas: [
        "A) Melhorar apenas o desempenho das consultas",
        "B) Eliminar redundâncias e dependências transitivas",
        "C) Aumentar o tamanho das tabelas",
        "D) Evitar o uso de chaves primárias",
        "E) Garantir criptografia dos dados"
        ],
        correta: "B",
        explicacao: "A 3FN elimina dependências transitivas, reduzindo redundância e anomalias de atualização."
  },
  {
        pergunta: "No contexto de APIs RESTful, o método HTTP PUT é corretamente utilizado para:",
        alternativas: [
        "A) Criar um novo recurso sem identificação",
        "B) Atualizar ou substituir completamente um recurso existente",
        "C) Consultar informações sem efeito colateral",
        "D) Remover parcialmente um recurso",
        "E) Executar operações assíncronas"
        ],
        correta: "B",
        explicacao: "PUT é usado para atualizar ou substituir integralmente um recurso identificado."
  },
  {
        pergunta: "Em segurança da informação, o princípio do menor privilégio determina que:",
        alternativas: [
        "A) Todos os usuários devem ter acesso total ao sistema",
        "B) Permissões devem ser concedidas temporariamente",
        "C) Usuários devem possuir apenas as permissões estritamente necessárias",
        "D) O acesso deve ser baseado apenas em confiança",
        "E) O controle de acesso é dispensável em sistemas internos"
        ],
        correta: "C",
        explicacao: "O menor privilégio reduz riscos ao limitar acessos apenas ao necessário para execução das funções."
  },
  {
        pergunta: "Em engenharia de software, a principal vantagem do uso de integração contínua (CI) é:",
        alternativas: [
        "A) Eliminar a necessidade de testes",
        "B) Reduzir falhas ao integrar código frequentemente com validação automática",
        "C) Substituir o controle de versão",
        "D) Garantir desempenho máximo da aplicação",
        "E) Evitar a necessidade de documentação"
        ],
        correta: "B",
        explicacao: "A integração contínua detecta erros rapidamente ao integrar código de forma frequente com testes automatizados."
  },
  {       
        pergunta: "Em sistemas operacionais modernos, o escalonamento de processos tem como objetivo principal:",
        alternativas: [
            "A) Garantir exclusividade de execução",
            "B) Otimizar o uso da CPU e reduzir tempo de espera",
            "C) Eliminar processos em segundo plano",
            "D) Aumentar o consumo de memória",
            "E) Priorizar apenas processos do sistema"
        ],
        correta: "B",
        explicacao: "O escalonamento busca maximizar o uso da CPU e melhorar o tempo de resposta."
    },
    {
        pergunta: "O conceito de deadlock em sistemas operacionais ocorre quando:",
        alternativas: [
            "A) Um processo é finalizado abruptamente",
            "B) Dois ou mais processos aguardam indefinidamente por recursos",
            "C) A CPU entra em modo ocioso",
            "D) Há excesso de memória disponível",
            "E) O sistema reinicia automaticamente"
        ],
        correta: "B",
        explicacao: "Deadlock ocorre quando processos ficam presos esperando recursos mutuamente."
    },
    {
        pergunta: "No modelo OSI, a camada responsável pela criptografia e compressão é:",
        alternativas: [
            "A) Aplicação",
            "B) Apresentação",
            "C) Sessão",
            "D) Transporte",
            "E) Rede"
        ],
        correta: "B",
        explicacao: "A camada de apresentação trata da formatação, criptografia e compressão."
    },
    {
        pergunta: "O protocolo TCP diferencia-se do UDP principalmente por:",
        alternativas: [
            "A) Ser mais rápido",
            "B) Não usar portas",
            "C) Garantir entrega confiável e ordenada",
            "D) Operar apenas em redes locais",
            "E) Não permitir controle de fluxo"
        ],
        correta: "C",
        explicacao: "TCP garante entrega confiável, controle de erros e ordenação."
    },

    {
        pergunta: "Uma transação em banco de dados que respeita ACID garante:",
        alternativas: [
            "A) Apenas consistência",
            "B) Atomicidade, consistência, isolamento e durabilidade",
            "C) Alta disponibilidade",
            "D) Escalabilidade horizontal",
            "E) Controle de acesso"
        ],
        correta: "B",
        explicacao: "ACID define propriedades fundamentais das transações."
    },
    {
        pergunta: "O isolamento em transações visa:",
        alternativas: [
            "A) Eliminar concorrência",
            "B) Permitir leitura suja",
            "C) Garantir que transações concorrentes não interfiram",
            "D) Aumentar a redundância",
            "E) Substituir locks"
        ],
        correta: "C",
        explicacao: "Isolamento impede interferência entre transações simultâneas."
    },

    {
        pergunta: "O princípio SOLID conhecido como Single Responsibility determina que:",
        alternativas: [
            "A) Classes devem herdar de uma única classe",
            "B) Um módulo deve ter apenas uma razão para mudar",
            "C) Interfaces devem ser genéricas",
            "D) Métodos devem ser estáticos",
            "E) Classes devem ser abstratas"
        ],
        correta: "B",
        explicacao: "Cada classe deve ter uma única responsabilidade."
    },
    {
        pergunta: "Baixo acoplamento em software significa:",
        alternativas: [
            "A) Módulos altamente dependentes",
            "B) Código duplicado",
            "C) Menor dependência entre componentes",
            "D) Maior complexidade",
            "E) Menor reutilização"
        ],
        correta: "C",
        explicacao: "Baixo acoplamento facilita manutenção e evolução."
    },

    {
        pergunta: "Em APIs REST, o método DELETE é utilizado para:",
        alternativas: [
            "A) Atualizar parcialmente um recurso",
            "B) Criar um novo recurso",
            "C) Remover um recurso identificado",
            "D) Consultar dados",
            "E) Executar processos assíncronos"
        ],
        correta: "C",
        explicacao: "DELETE remove o recurso identificado pela URI."
    },
    {
        pergunta: "Uma API RESTful bem projetada deve ser:",
        alternativas: [
            "A) Dependente de sessão",
            "B) Statefull",
            "C) Stateless",
            "D) Exclusiva para XML",
            "E) Dependente de SOAP"
        ],
        correta: "C",
        explicacao: "REST exige que cada requisição seja independente."
    },
    {
        pergunta: "O uso de hash criptográfico tem como principal finalidade:",
        alternativas: [
            "A) Criptografar dados reversivelmente",
            "B) Garantir confidencialidade",
            "C) Verificar integridade",
            "D) Garantir disponibilidade",
            "E) Gerar chaves públicas"
        ],
        correta: "C",
        explicacao: "Hash é usado para verificação de integridade."
    },
    {
        pergunta: "O ataque conhecido como SQL Injection explora:",
        alternativas: [
            "A) Falhas de hardware",
            "B) Configurações de rede",
            "C) Validação inadequada de entradas",
            "D) Criptografia forte",
            "E) Firewalls mal configurados"
        ],
        correta: "C",
        explicacao: "Explora entradas mal validadas em comandos SQL."
    },
    {
        pergunta: "Integração Contínua (CI) tem como objetivo:",
        alternativas: [
            "A) Eliminar testes",
            "B) Integrar código frequentemente com validação automática",
            "C) Substituir deploy",
            "D) Eliminar versionamento",
            "E) Garantir alta disponibilidade"
        ],
        correta: "B",
        explicacao: "CI reduz erros integrando código frequentemente."
    },
    {
        pergunta: "Testes automatizados contribuem principalmente para:",
        alternativas: [
            "A) Aumentar retrabalho",
            "B) Reduzir confiabilidade",
            "C) Detectar erros precocemente",
            "D) Eliminar documentação",
            "E) Substituir testes manuais em 100%"
        ],
        correta: "C",
        explicacao: "Automação detecta falhas cedo no ciclo de desenvolvimento."
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
let respostaUsuario = null;

// ================= EMBARALHAR QUESTÕES =================
function embaralharQuestoes(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

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
        const letra = alt[0];
        let classe = "";

        if (respondido) {
            if (letra === q.correta) classe = "correct-option";
            else if (letra === respostaUsuario) classe = "wrong-option";
        }

        html += `
            <label class="option ${classe}">
                <input
                    type="radio"
                    name="resposta"
                    value="${letra}"
                    ${respondido ? "disabled" : ""}
                    ${letra === respostaUsuario ? "checked" : ""}
                >
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

        respostaUsuario = marcada.value;
        respondido = true;

        render(); // reaplica classes visuais

        if (respostaUsuario === questoes[index].correta) {
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
        respostaUsuario = null;

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
embaralharQuestoes(questoes);
render();
