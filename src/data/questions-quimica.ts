import { Question } from '../types/enem';

export const QUIMICA_QUESTIONS: Question[] = [
  {
    id: 'qui-2023-094',
    year: 2023,
    questionNumber: 94,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Química',
    topic: 'Estequiometria',
    difficulty: 'Média',
    contextText:
      'Para corrigir a acidez de um solo agrícola antes do plantio de soja, um engenheiro agrônomo recomendou a aplicação de calcário agrícola contendo 80% em massa de carbonato de cálcio puro (CaCO₃) e 20% de impurezas inertes. Quando submetido à decomposição térmica completa em laboratório (calcinação), o carbonato de cálcio reage segundo a equação química balanceada: CaCO₃(s) → CaO(s) + CO₂(g).',
    supportData:
      'Massas molares (g/mol): Ca = 40; C = 12; O = 16 (CaCO₃ = 100 g/mol; CaO = 56 g/mol; CO₂ = 44 g/mol).',
    commandText:
      'A massa de óxido de cálcio (CaO, cal virgem), em quilograma, obtida a partir da calcinação completa de 500 kg desse calcário com 80% de pureza é igual a:',
    alternatives: [
      { letter: 'A', text: '176.' },
      { letter: 'B', text: '224.' },
      { letter: 'C', text: '280.' },
      { letter: 'D', text: '350.' },
      { letter: 'E', text: '400.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Massa de CaCO₃ puro presente nos 500 kg de calcário (grau de pureza p = 80%): m_puro = 500 kg × 0,80 = 400 kg de CaCO₃.',
        '2. Pela proporção estequiométrica 1 mol CaCO₃ : 1 mol CaO, 100 g de CaCO₃ produzem 56 g de CaO.',
        '3. Aplicando a regra de três para 400 kg de CaCO₃ puro: m(CaO) = (400 kg × 56) / 100 = 4 × 56 = 224 kg de CaO.',
      ],
      appliedFormulas: [
        {
          formula: 'm_útil = m_amostra · (pureza / 100%)',
          description: 'Cálculo da massa efetivamente reagente em amostra impura.',
        },
        {
          formula: 'n = m / M',
          description: 'Relação entre quantidade de matéria (mol), massa (g) e massa molar (g/mol).',
        },
      ],
      logicalReasoning:
        'Em cálculos estequiométricos envolvendo grau de pureza, apenas a fração pura da amostra participa efetivamente da reação química. Caso o candidato esqueça de descontar os 20% de impurezas inertes, encontrará 500 × 0,56 = 280 kg (Alternativa C, distrator clássico do ENEM).',
    },
  },
  {
    id: 'qui-2023-103',
    year: 2023,
    questionNumber: 103,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Química',
    topic: 'Termoquímica',
    difficulty: 'Média',
    contextText:
      'O hidrogênio verde (H₂) obtido por eletrólise da água utilizando energia solar é apontado como combustível estratégico para a descarbonização da matriz energética mundial, pois sua combustão completa produz apenas vapor de água:\nH₂(g) + 1/2 O₂(g) → H₂O(g)   ΔH° = -242 kJ/mol',
    supportData:
      'Massa molar do gás hidrogênio (H₂) = 2,0 g/mol. Considere a combustão completa do combustível nas condições-padrão.',
    commandText:
      'A energia térmica liberada na combustão completa de 1,0 kg de gás hidrogênio (H₂), em megajoule (MJ), é igual a:',
    alternatives: [
      { letter: 'A', text: '24,2.' },
      { letter: 'B', text: '60,5.' },
      { letter: 'C', text: '121,0.' },
      { letter: 'D', text: '242,0.' },
      { letter: 'E', text: '484,0.' },
    ],
    correctAnswer: 'C',
    resolution: {
      numericalDemonstration: [
        '1. Convertendo a massa de H₂ para gramas: m = 1,0 kg = 1.000 g.',
        '2. Número de mols de H₂ em 1.000 g: n = m / M = 1.000 g / (2,0 g/mol) = 500 mols de H₂.',
        '3. Como cada 1 mol de H₂ libera 242 kJ, 500 mols liberam: Q = 500 × 242 kJ = 121.000 kJ.',
        '4. Convertendo de quilojoule (10³ J) para megajoule (10⁶ J): Q = 121.000 / 1.000 = 121,0 MJ.',
      ],
      appliedFormulas: [
        {
          formula: 'Q_liberado = n · |ΔH°_combustão|',
          description: 'Calor total liberado em processo exotérmico proporcional ao número de mols.',
        },
      ],
      logicalReasoning:
        'A entalpia molar de combustão expressa o calor liberado por mol de substância (2,0 g de H₂). Como a massa molar do H₂ é extremamente baixa, seu poder calorífico gravimétrico (por quilograma) atinge 121 MJ/kg — cerca de quase três vezes o da gasolina ou do gás natural —, justificando seu destaque energético.',
    },
  },
  {
    id: 'qui-2023-114',
    year: 2023,
    questionNumber: 114,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Química',
    topic: 'Eletroquímica',
    difficulty: 'Média',
    contextText:
      'Um estudante montou uma pilha galvânica de Daniell em condições-padrão (25 °C e 1 atm) utilizando semicélulas de níquel (Ni²⁺/Ni) e de prata (Ag⁺/Ag) interligadas por uma ponte salina de KNO₃ e um fio condutor externo com voltímetro.',
    supportData:
      'Potenciais-padrão de redução (E°_red):\n• Ag⁺(aq) + e⁻ → Ag(s)    E° = +0,80 V\n• Ni²⁺(aq) + 2e⁻ → Ni(s)   E° = -0,25 V',
    commandText:
      'A diferença de potencial padrão (ΔE°) dessa pilha, o metal que atua como ânodo e o sentido do fluxo de elétrons pelo circuito externo são, respectivamente:',
    alternatives: [
      { letter: 'A', text: '+1,05 V; Níquel; do eletrodo de níquel para o de prata.' },
      { letter: 'B', text: '+0,55 V; Níquel; do eletrodo de níquel para o de prata.' },
      { letter: 'C', text: '+1,05 V; Prata; do eletrodo de prata para o de níquel.' },
      { letter: 'D', text: '+1,85 V; Níquel; do eletrodo de níquel para o de prata.' },
      { letter: 'E', text: '+1,05 V; Níquel; do eletrodo de prata para o de níquel.' },
    ],
    correctAnswer: 'A',
    resolution: {
      numericalDemonstration: [
        '1. Comparando os potenciais-padrão de redução: E°(Ag⁺/Ag) = +0,80 V > E°(Ni²⁺/Ni) = -0,25 V.',
        '2. A espécie com maior potencial de redução sofre redução no Cátodo (Prata, polo positivo); a espécie com menor potencial de redução sofre oxidação no Ânodo (Níquel, polo negativo).',
        '3. Cálculo da força eletromotriz (ddp) da pilha: ΔE° = E°_maior - E°_menor = (+0,80) - (-0,25) = +0,80 + 0,25 = +1,05 V.',
        '4. Os elétrons sempre fluem espontaneamente do ânodo (onde são liberados na oxidação do Ni) para o cátodo (onde são consumidos na redução da Ag⁺).',
      ],
      appliedFormulas: [
        {
          formula: 'ΔE° = E°_red(cátodo) - E°_red(ânodo)',
          description: 'Diferença de potencial padrão de uma célula galvânica.',
        },
      ],
      logicalReasoning:
        'Importante: ao balancear o número de elétrons da equação global (multiplicando a semirreação da prata por 2: 2Ag⁺ + Ni → 2Ag + Ni²⁺), o potencial-padrão E° = +0,80 V NÃO deve ser multiplicado por 2, pois o potencial elétrico é uma propriedade intensiva (joule por coulomb). Multiplicá-lo por 2 levaria ao distrator +1,85 V (Alternativa D).',
    },
  },
  {
    id: 'qui-2023-121',
    year: 2023,
    questionNumber: 121,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Química',
    topic: 'Química Orgânica',
    difficulty: 'Fácil',
    contextText:
      'O paracetamol (N-(4-hidroxifenil)etanamida), amplamente utilizado como analgésico e antitérmico, apresenta em sua estrutura molecular um anel benzênico ligado diretamente a um grupo hidroxila (-OH) na posição para em relação a um grupo funcional -NH-C(=O)-CH₃.',
    commandText:
      'As funções orgânicas oxigenadas e nitrogenadas presentes na estrutura molecular do paracetamol descritas no texto são, respectivamente:',
    alternatives: [
      { letter: 'A', text: 'Álcool e amina.' },
      { letter: 'B', text: 'Fenol e amida.' },
      { letter: 'C', text: 'Fenol e amina.' },
      { letter: 'D', text: 'Ácido carboxílico e amida.' },
      { letter: 'E', text: 'Álcool e cetona.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Grupo -OH ligado diretamente a carbono de anel aromático (anel benzênico): função Fenol (e não álcool, que requer -OH ligado a carbono saturado sp³).',
        '2. Grupo nitrogênio ligado diretamente a uma carbonila (-NH-C(=O)-R): função Amida (e não amina concatenada com cetona).',
      ],
      appliedFormulas: [
        {
          formula: 'Ar-OH (Fenol) e R-C(=O)-NR\'R\'\' (Amida)',
          description: 'Grupos funcionais característicos de fenóis e amidas substituídas.',
        },
      ],
      logicalReasoning:
        'A identificação de funções orgânicas em fármacos é tema presente em praticamente todas as edições do ENEM. Os dois erros mais cobrados são confundir Fenol com Álcool (sempre observe se a hidroxila está diretamente presa ao anel aromático) e desmembrar a Amida (-CONH-) em "amina + cetona".',
    },
  },
  {
    id: 'qui-2023-128',
    year: 2023,
    questionNumber: 128,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Química',
    topic: 'Soluções',
    difficulty: 'Média',
    contextText:
      'No controle de qualidade de um laboratório farmacêutico, uma técnica precisa preparar 500 mL de uma solução aquosa de hidróxido de sódio (NaOH) de concentração molar igual a 0,20 mol/L a partir da diluição de uma solução-estoque concentrada de NaOH 2,50 mol/L.',
    supportData: 'Massa molar do NaOH = 40 g/mol.',
    commandText:
      'O volume da solução-estoque concentrada (2,50 mol/L), em mililitro, que deve ser medido com pipeta volumétrica e transferido para o balão de 500 mL, e a massa de soluto NaOH contida na solução final são, respectivamente:',
    alternatives: [
      { letter: 'A', text: '20 mL e 2,0 g.' },
      { letter: 'B', text: '40 mL e 4,0 g.' },
      { letter: 'C', text: '40 mL e 8,0 g.' },
      { letter: 'D', text: '50 mL e 4,0 g.' },
      { letter: 'E', text: '25 mL e 4,0 g.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Pela conservação do número de mols do soluto na diluição (C₁ · V₁ = C₂ · V₂): 2,50 × V₁ = 0,20 × 500 mL.',
        '2. Calculando V₁: V₁ = 100 / 2,50 = 40 mL de solução-estoque.',
        '3. Número de mols de NaOH presentes nos 500 mL (0,50 L) da solução diluída: n = M · V = 0,20 mol/L × 0,50 L = 0,10 mol.',
        '4. Massa de NaOH correspondente: m = n · MM = 0,10 mol × 40 g/mol = 4,0 g.',
      ],
      appliedFormulas: [
        {
          formula: 'M₁ · V₁ = M₂ · V₂',
          description: 'Equação da diluição de soluções com conservação da quantidade de soluto.',
        },
        {
          formula: 'm = M · V(L) · MM',
          description: 'Relação entre massa do soluto, molaridade, volume em litros e massa molar.',
        },
      ],
      logicalReasoning:
        'Durante uma diluição, adiciona-se exclusivamente solvente (água destilada), de modo que a quantidade de matéria (n = 0,10 mol) e a massa de soluto (4,0 g) retiradas nos 40 mL da solução-estoque permanecem exatamente iguais nos 500 mL da solução final.',
    },
  },
  {
    id: 'qui-2022-096',
    year: 2022,
    questionNumber: 96,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Química',
    topic: 'Equilíbrio Químico',
    difficulty: 'Média',
    contextText:
      'A síntese industrial da amônia pelo processo Haber-Bosch é fundamental para a produção de fertilizantes nitrogenados e ocorre em fase gasosa segundo o equilíbrio reversível exotérmico:\nN₂(g) + 3 H₂(g) ⇌ 2 NH₃(g)   ΔH° = -92 kJ/mol',
    commandText:
      'De acordo com o Princípio de Le Chatelier, para deslocar a posição desse equilíbrio químico no sentido de maximizar o rendimento de formação de amônia (NH₃), deve-se:',
    alternatives: [
      { letter: 'A', text: 'aumentar a pressão total do sistema e diminuir a temperatura moderadamente.' },
      { letter: 'B', text: 'diminuir a pressão total do sistema e aumentar a temperatura.' },
      { letter: 'C', text: 'adicionar um catalisador metálico para deslocar o equilíbrio para a direita.' },
      { letter: 'D', text: 'aumentar a pressão total do sistema e aumentar a temperatura.' },
      { letter: 'E', text: 'remover continuamente gás hidrogênio (H₂) do reator.' },
    ],
    correctAnswer: 'A',
    resolution: {
      numericalDemonstration: [
        '1. Análise de volume gasoso (mols de gás): nos reagentes há 1 mol N₂ + 3 mols H₂ = 4 mols gasosos; nos produtos há 2 mols de NH₃ gasoso (contração de volume no sentido direto).',
        '2. Efeito da pressão: o aumento da pressão total desloca o equilíbrio para o lado de menor volume gasoso (menor número de mols de gás), favorecendo a formação de NH₃ (sentido direto).',
        '3. Efeito da temperatura: como a reação direta é exotérmica (ΔH < 0), a diminuição da temperatura desloca o equilíbrio no sentido exotérmico (direto), aumentando o rendimento de NH₃.',
      ],
      appliedFormulas: [
        {
          formula: 'K_p = (P_NH₃)² / [P_N₂ · (P_H₂)³]',
          description: 'Constante de equilíbrio em termos das pressões parciais.',
        },
      ],
      logicalReasoning:
        'Atenção à pegadinha recorrente sobre catalisadores (Alternativa C): o catalisador diminui a energia de ativação tanto da reação direta quanto da inversa na mesma proporção, fazendo o equilíbrio ser atingido mais rapidamente, mas NÃO desloca o equilíbrio químico nem altera o rendimento de equilíbrio.',
    },
  },
  {
    id: 'qui-2022-104',
    year: 2022,
    questionNumber: 104,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Química',
    topic: 'Físico-Química',
    difficulty: 'Média',
    contextText:
      'O isótopo radioativo iodo-131 (¹³¹I) é amplamente empregado na medicina nuclear para diagnóstico e tratamento de disfunções da glândula tireoide, apresentando tempo de meia-vida (t₁/₂) igual a 8 dias. Um hospital recebeu uma amostra lacrada contendo inicialmente 80 mg desse radioisótopo.',
    commandText:
      'Após transcorridos exatamente 32 dias desde a calibração inicial, a massa residual de iodo-131 ainda ativa nessa amostra, em miligrama, será igual a:',
    alternatives: [
      { letter: 'A', text: '2,5.' },
      { letter: 'B', text: '5,0.' },
      { letter: 'C', text: '10,0.' },
      { letter: 'D', text: '20,0.' },
      { letter: 'E', text: '40,0.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Determinando o número de meias-vidas (x) transcorridas em 32 dias: x = t_total / t₁/₂ = 32 / 8 = 4 meias-vidas.',
        '2. Aplicando a relação de decaimento radioativo m = m₀ / 2ˣ: m = 80 mg / 2⁴ = 80 / 16 = 5,0 mg.',
        '3. Conferindo passo a passo: 80 mg →(8d)→ 40 mg →(16d)→ 20 mg →(24d)→ 10 mg →(32d)→ 5,0 mg.',
      ],
      appliedFormulas: [
        {
          formula: 'm = m₀ / 2ˣ , onde x = t / t₁/₂',
          description: 'Cinética de primeira ordem do decaimento radioativo.',
        },
      ],
      logicalReasoning:
        'O decaimento radioativo segue uma cinética de primeira ordem que independe de fatores externos como temperatura ou pressão. A cada período de meia-vida (8 dias), metade dos núcleos radioativos remanescentes sofre transmutação.',
    },
  },
  {
    id: 'qui-2022-113',
    year: 2022,
    questionNumber: 113,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Química',
    topic: 'Termoquímica',
    difficulty: 'Difícil',
    contextText:
      'Em um estudo termoquímico sobre a conversão de carbono grafite em monóxido de carbono gasoso — reação difícil de ser medida diretamente em calorímetro devido à formação simultânea de CO₂ —, utilizaram-se as seguintes equações termoquímicas medidas a 25 °C e 1 atm:\nI) C(grafite) + O₂(g) → CO₂(g)   ΔH₁ = -394 kJ/mol\nII) CO(g) + 1/2 O₂(g) → CO₂(g)   ΔH₂ = -283 kJ/mol',
    commandText:
      'Aplicando a Lei de Hess, a variação de entalpia padrão (ΔH°) da reação de formação de 1 mol de monóxido de carbono, C(grafite) + 1/2 O₂(g) → CO(g), em kJ/mol, é igual a:',
    alternatives: [
      { letter: 'A', text: '-677.' },
      { letter: 'B', text: '-111.' },
      { letter: 'C', text: '+111.' },
      { letter: 'D', text: '+677.' },
      { letter: 'E', text: '-222.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Equação-alvo desejada: C(grafite) + 1/2 O₂(g) → CO(g).',
        '2. Mantemos a equação (I), pois contém 1 mol de C(grafite) no lado dos reagentes: C(grafite) + O₂(g) → CO₂(g)   (ΔH₁ = -394 kJ).',
        '3. Invertemos a equação (II) para posicionar 1 mol de CO(g) nos produtos (trocando o sinal de ΔH₂): CO₂(g) → CO(g) + 1/2 O₂(g)   (-ΔH₂ = +283 kJ).',
        '4. Somando as duas equações, cancela-se CO₂(g) e simplifica-se 1/2 O₂(g): ΔH° = -394 + 283 = -111 kJ/mol.',
      ],
      appliedFormulas: [
        {
          formula: 'ΔH_global = ∑ ΔH_etapas',
          description: 'Lei de Hess da aditividade das entalpias de reação.',
        },
      ],
      logicalReasoning:
        'A entalpia é uma função de estado: sua variação depende unicamente dos estados inicial e final da transformação química, e não do caminho intermediário. Ao inverter uma equação termoquímica na Lei de Hess, inverte-se obrigatoriamente o sinal algébrico do respectivo ΔH.',
    },
  },
  {
    id: 'qui-2022-123',
    year: 2022,
    questionNumber: 123,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Química',
    topic: 'Química Orgânica',
    difficulty: 'Média',
    contextText:
      'Na indústria de fragrâncias, o etanoato de etila (acetato de etila, CH₃-COO-CH₂-CH₃) é utilizado como solvente e aromatizante com odor frutado característico. Em escala laboratorial, ele é sintetizado pelo aquecimento de dois reagentes orgânicos na presença de ácido sulfúrico concentrado como catalisador (reação de esterificação de Fischer).',
    commandText:
      'Os dois compostos orgânicos reagentes necessários para a síntese do etanoato de etila por esterificação direta são:',
    alternatives: [
      { letter: 'A', text: 'Ácido etanoico e etanol.' },
      { letter: 'B', text: 'Ácido metanoico e propan-1-ol.' },
      { letter: 'C', text: 'Etanal e etanol.' },
      { letter: 'D', text: 'Ácido etanoico e etanal.' },
      { letter: 'E', text: 'Ácido propanoico e metanol.' },
    ],
    correctAnswer: 'A',
    resolution: {
      numericalDemonstration: [
        '1. A reação de esterificação de Fischer ocorre entre um Ácido Carboxílico e um Álcool, produzindo um Éster e Água.',
        '2. No nome do éster "etanoato de etila", a primeira parte ("etanoato", 2 carbonos com a carbonila) provém do ácido etanoico (ácido acético, CH₃-COOH).',
        '3. A segunda parte ("de etila", radical de 2 carbonos ligado ao oxigênio simples) provém do álcool etanol (CH₃-CH₂-OH).',
        '4. Equação: CH₃-COOH + HO-CH₂-CH₃ ⇌ CH₃-COO-CH₂-CH₃ + H₂O.',
      ],
      appliedFormulas: [
        {
          formula: 'R-COOH + HO-R\' ⇌ R-COO-R\' + H₂O',
          description: 'Equação geral da reação de esterificação de Fischer (inversa da hidrólise ácida).',
        },
      ],
      logicalReasoning:
        'A nomenclatura IUPAC dos ésteres (prefixo do ácido + "oato" de prefixo do álcool + "ila") revela imediatamente os reagentes de partida: "etanoato" → ácido etanoico; "de etila" → álcool etílico (etanol).',
    },
  },
  {
    id: 'qui-2021-092',
    year: 2021,
    questionNumber: 92,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Química',
    topic: 'Físico-Química',
    difficulty: 'Média',
    contextText:
      'Em regiões de inverno rigoroso onde a temperatura ambiente cai abaixo de 0 °C, adiciona-se etilenoglicol (um líquido orgânico não volátil e solúvel em água) à água do sistema de arrefecimento (radiador) dos automóveis.',
    commandText:
      'A adição de etilenoglicol à água pura do radiador promove dois efeitos coligativos simultâneos fundamentais para proteger o motor tanto no inverno quanto durante o funcionamento em alta temperatura, que são:',
    alternatives: [
      { letter: 'A', text: 'aumento da temperatura de congelamento e diminuição da temperatura de ebulição.' },
      { letter: 'B', text: 'diminuição da temperatura de congelamento (crioscopia) e aumento da temperatura de ebulição (ebulioscopia).' },
      { letter: 'C', text: 'aumento da pressão máxima de vapor e aumento da temperatura de congelamento.' },
      { letter: 'D', text: 'diminuição da pressão osmótica e diminuição da temperatura de ebulição.' },
      { letter: 'E', text: 'manutenção da temperatura de congelamento em 0 °C e redução da densidade.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Ao dissolver um soluto não volátil (etilenoglicol) em um solvente puro (água), ocorre a Tonoscopia: abaixamento da pressão máxima de vapor do líquido.',
        '2. Consequentemente, é necessário aquecer a solução a uma temperatura superior a 100 °C (a 1 atm) para entrar em ebulição — Ebulioscopia (evita que a água do radiador ferva com o motor quente).',
        '3. Simultaneamente, a temperatura de início de solidificação cai para valores inferiores a 0 °C — Crioscopia (impede que a água congele e rompa o bloco do motor no inverno).',
      ],
      appliedFormulas: [
        {
          formula: 'ΔT_e = K_e · W · i   e   ΔT_c = K_c · W · i',
          description: 'Leis de Raoult para a elevação ebulioscópica e o abaixamento crioscópico.',
        },
      ],
      logicalReasoning:
        'As propriedades coligativas dependem exclusivamente da concentração de partículas dispersas do soluto não volátil. Adicionar aditivo ao radiador amplia a faixa em que a solução permanece no estado líquido: congela abaixo de 0 °C (crioscopia) e ferve acima de 100 °C (ebulioscopia).',
    },
  },
  {
    id: 'qui-2021-100',
    year: 2021,
    questionNumber: 100,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Química',
    topic: 'Equilíbrio Químico',
    difficulty: 'Média',
    contextText:
      'Ao medir o pH de duas amostras líquidas a 25 °C em um laboratório de análise ambiental, uma química encontrou pH = 3,0 para uma amostra de chuva ácida industrial e pH = 5,0 para uma amostra de chuva coletada em região preservada.',
    commandText:
      'Comparando as duas amostras, a concentração molar de íons H⁺ (ou H₃O⁺) na amostra de chuva ácida industrial (pH = 3,0) é:',
    alternatives: [
      { letter: 'A', text: '2 vezes maior que na chuva de região preservada.' },
      { letter: 'B', text: '20 vezes maior que na chuva de região preservada.' },
      { letter: 'C', text: '100 vezes maior que na chuva de região preservada.' },
      { letter: 'D', text: '100 vezes menor que na chuva de região preservada.' },
      { letter: 'E', text: '1.000 vezes maior que na chuva de região preservada.' },
    ],
    correctAnswer: 'C',
    resolution: {
      numericalDemonstration: [
        '1. Pela definição logarítmica de Sorensen: pH = -log₁₀[H⁺] ⇒ [H⁺] = 10^(-pH) mol/L.',
        '2. Na amostra de pH = 3,0: [H⁺]₁ = 10⁻³ mol/L.',
        '3. Na amostra de pH = 5,0: [H⁺]₂ = 10⁻⁵ mol/L.',
        '4. Calculando a razão entre as concentrações: [H⁺]₁ / [H⁺]₂ = 10⁻³ / 10⁻⁵ = 10² = 100 vezes maior.',
      ],
      appliedFormulas: [
        {
          formula: 'pH = -log₁₀[H⁺]  ⇔  [H⁺] = 10^(-pH)',
          description: 'Definição do potencial hidrogeniônico em escala logarítmica de base 10.',
        },
      ],
      logicalReasoning:
        'Como a escala de pH é logarítmica de base 10 e possui sinal negativo, cada redução de 1 unidade no valor do pH representa um aumento de 10 vezes na concentração de íons H⁺. Assim, uma redução de 2 unidades de pH (de 5,0 para 3,0) corresponde a uma acidez 10² = 100 vezes maior.',
    },
  },
  {
    id: 'qui-2021-108',
    year: 2021,
    questionNumber: 108,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Química',
    topic: 'Eletroquímica',
    difficulty: 'Difícil',
    contextText:
      'Na produção industrial de alumínio metálico pelo processo Hall-Héroult, realiza-se a eletrólise ígnea da alumina (Al₂O₃) dissolvida em criolita fundida, ocorrendo no cátodo a semirreação de redução: Al³⁺(l) + 3 e⁻ → Al(l). Em uma cuba eletrolítica industrial, manteve-se uma corrente elétrica constante de 9.650 A durante 1.000 segundos.',
    supportData:
      'Dados: Constante de Faraday F = 96.500 C/mol de elétrons; Massa molar do alumínio (Al) = 27 g/mol.',
    commandText:
      'A massa de alumínio metálico produzida no cátodo dessa cuba eletrolítica nesse intervalo de tempo, em grama, é igual a:',
    alternatives: [
      { letter: 'A', text: '300.' },
      { letter: 'B', text: '900.' },
      { letter: 'C', text: '1.350.' },
      { letter: 'D', text: '2.700.' },
      { letter: 'E', text: '8.100.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Cálculo da carga elétrica total Q que atravessou a cuba: Q = i · Δt = 9.650 A × 1.000 s = 9.650.000 C.',
        '2. Número de mols de elétrons transferidos: n(e⁻) = Q / F = 9.650.000 / 96.500 = 100 mols de elétrons.',
        '3. Pela semirreação catódica (Al³⁺ + 3 e⁻ → Al), cada 3 mols de elétrons depositam 1 mol de Al (27 g).',
        '4. Calculando a massa de Al formada por 100 mols de elétrons: m(Al) = (100 / 3) × 27 g = 100 × 9 = 900 g.',
      ],
      appliedFormulas: [
        {
          formula: 'Q = i · Δt',
          description: 'Carga elétrica em coulomb em função da corrente (A) e do tempo (s).',
        },
        {
          formula: 'm = (M · i · Δt) / (n_e · F)',
          description: 'Lei de Faraday da Eletrólise quantitativa.',
        },
      ],
      logicalReasoning:
        'A estequiometria da eletrólise conecta a Física (Q = i · t) à Química através da Constante de Faraday (1 mol de elétrons = 96.500 C). Como o cátion alumínio é trivalente (Al³⁺), são necessários 3 mols de elétrons para produzir cada 1 mol (27 g) de metal.',
    },
  },
  {
    id: 'qui-2021-116',
    year: 2021,
    questionNumber: 116,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Química',
    topic: 'Estequiometria',
    difficulty: 'Média',
    contextText:
      'Nos airbags automotivos de segurança, um sensor de desaceleração aciona a decomposição térmica ultrarrápida da azida de sódio sólida (NaN₃), gerando gás nitrogênio (N₂) que infla a bolsa em milissegundos, segundo a equação balanceada:\n2 NaN₃(s) → 2 Na(s) + 3 N₂(g)',
    supportData:
      'Dados: Massas molares: Na = 23 g/mol; N = 14 g/mol (NaN₃ = 65 g/mol). Volume molar dos gases nas condições de enchimento da bolsa = 25 L/mol.',
    commandText:
      'Para produzir um volume de 75 L de gás nitrogênio (N₂) nas condições de acionamento do airbag, a massa mínima necessária de azida de sódio (NaN₃) pura, em grama, é igual a:',
    alternatives: [
      { letter: 'A', text: '65.' },
      { letter: 'B', text: '97,5.' },
      { letter: 'C', text: '130.' },
      { letter: 'D', text: '195.' },
      { letter: 'E', text: '260.' },
    ],
    correctAnswer: 'C',
    resolution: {
      numericalDemonstration: [
        '1. Número de mols de N₂ necessários para ocupar 75 L (com V_m = 25 L/mol): n(N₂) = 75 L / (25 L/mol) = 3,0 mols de N₂.',
        '2. Pela proporção estequiométrica da equação balanceada (2 mols NaN₃ : 3 mols N₂), para formar 3,0 mols de N₂ são consumidos exatamente 2,0 mols de NaN₃.',
        '3. Convertendo 2,0 mols de NaN₃ em massa (MM = 23 + 3 × 14 = 65 g/mol): m = 2,0 × 65 = 130 g.',
      ],
      appliedFormulas: [
        {
          formula: 'n = V / V_molar',
          description: 'Quantidade de matéria de um gás a partir de seu volume e do volume molar.',
        },
      ],
      logicalReasoning:
        'A resolução torna-se direta ao converter imediatamente o volume gasoso desejado (75 L) em quantidade de matéria (3 mols de N₂) usando o volume molar fornecido (25 L/mol). A partir daí, a leitura dos coeficientes estequiométricos (2 : 3) mostra de imediato que são necessários 2 mols de NaN₃ (130 g).',
    },
  },
  {
    id: 'qui-2021-126',
    year: 2021,
    questionNumber: 126,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Química',
    topic: 'Soluções',
    difficulty: 'Fácil',
    contextText:
      'De acordo com a Portaria de Potabilidade da Água, a concentração máxima permitida (VMP) de íons fluoreto (F⁻) na água tratada distribuída à população é de aproximadamente 1,5 mg/L (equivalente a 1,5 ppm em solução aquosa diluída), prevenindo a cárie dentária sem causar fluorose.',
    commandText:
      'Em um reservatório de estação de tratamento contendo 20.000 litros de água isenta de flúor, a massa máxima de íons fluoreto (F⁻), em grama, que pode ser adicionada para atingir exatamente o limite de 1,5 mg/L é igual a:',
    alternatives: [
      { letter: 'A', text: '3,0.' },
      { letter: 'B', text: '15,0.' },
      { letter: 'C', text: '30,0.' },
      { letter: 'D', text: '150,0.' },
      { letter: 'E', text: '300,0.' },
    ],
    correctAnswer: 'C',
    resolution: {
      numericalDemonstration: [
        '1. Pela definição de concentração comum C = m / V, temos m = C · V.',
        '2. Substituindo C = 1,5 mg/L e V = 20.000 L: m = 1,5 mg/L × 20.000 L = 30.000 mg.',
        '3. Convertendo de miligrama para grama (dividindo por 1.000): m = 30.000 / 1.000 = 30,0 g.',
      ],
      appliedFormulas: [
        {
          formula: '1 ppm (m/V em água) ≈ 1 mg/L',
          description: 'Equivalência de partes por milhão em soluções aquosas diluídas (d ≈ 1 kg/L).',
        },
        {
          formula: 'C = m_soluto / V_solução',
          description: 'Concentração comum da solução.',
        },
      ],
      logicalReasoning:
        'A relação 1 ppm = 1 mg/kg ≈ 1 mg/L para soluções aquosas diluídas e a conversão de miligramas para gramas (1 g = 10³ mg) são cobradas frequentemente nas questões ambientais de Química do ENEM.',
    },
  },
  {
    id: 'qui-2023-107',
    year: 2023,
    questionNumber: 107,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Química',
    topic: 'Físico-Química',
    difficulty: 'Média',
    contextText:
      'A decomposição catalítica do peróxido de hidrogênio (água oxigenada, 2 H₂O₂(aq) → 2 H₂O(l) + O₂(g)) foi monitorada em um laboratório a 25 °C. Nos primeiros 20 minutos de reação, a concentração molar de H₂O₂ diminuiu de 0,80 mol/L para 0,20 mol/L.',
    commandText:
      'A velocidade média de consumo do peróxido de hidrogênio (H₂O₂) e a velocidade média de formação do gás oxigênio (O₂) nesse intervalo de tempo, em mol/(L·min), são, respectivamente:',
    alternatives: [
      { letter: 'A', text: '0,030 e 0,015.' },
      { letter: 'B', text: '0,030 e 0,030.' },
      { letter: 'C', text: '0,040 e 0,020.' },
      { letter: 'D', text: '0,015 e 0,030.' },
      { letter: 'E', text: '0,600 e 0,300.' },
    ],
    correctAnswer: 'A',
    resolution: {
      numericalDemonstration: [
        '1. Variação em módulo da concentração de H₂O₂: |Δ[H₂O₂]| = |0,20 - 0,80| = 0,60 mol/L em Δt = 20 min.',
        '2. Velocidade média de consumo de H₂O₂: v(H₂O₂) = 0,60 / 20 = 0,030 mol/(L·min).',
        '3. Pela proporção estequiométrica 2 mols H₂O₂ : 1 mol O₂, a velocidade de formação do O₂ é metade da velocidade de consumo do H₂O₂: v(O₂) = v(H₂O₂) / 2 = 0,015 mol/(L·min).',
      ],
      appliedFormulas: [
        {
          formula: 'v_m = |Δ[A]| / Δt   e   v_A / a = v_B / b',
          description: 'Velocidade média de uma espécie e relação estequiométrica entre velocidades.',
        },
      ],
      logicalReasoning:
        'Em Cinética Química (Físico-Química), as velocidades de consumo dos reagentes e de formação dos produtos são diretamente proporcionais aos respectivos coeficientes estequiométricos da equação química balanceada.',
    },
  },
  {
    id: 'qui-2023-131',
    year: 2023,
    questionNumber: 131,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Química',
    topic: 'Equilíbrio Químico',
    difficulty: 'Média',
    contextText:
      'O esmalte dentário é constituído principalmente pelo mineral hidroxiapatita, Ca₅(PO₄)₃OH(s), que no meio bucal estabelece o seguinte equilíbrio heterogêneo de dissociação iônica:\nCa₅(PO₄)₃OH(s) ⇌ 5 Ca²⁺(aq) + 3 PO₄³⁻(aq) + OH⁻(aq)',
    commandText:
      'Quando uma pessoa ingere frequentemente refrigerantes e alimentos açucarados fermentados por bactérias que liberam íons H⁺ na saliva, ocorre a desmineralização do esmalte dentário porque os íons H⁺:',
    alternatives: [
      { letter: 'A', text: 'reagem com os íons OH⁻ formando água e deslocam o equilíbrio para a direita (dissolução).' },
      { letter: 'B', text: 'aumentam a concentração de OH⁻ e deslocam o equilíbrio para a esquerda (precipitação).' },
      { letter: 'C', text: 'reagem diretamente com os cátions Ca²⁺ formando cálcio metálico sólido.' },
      { letter: 'D', text: 'diminuem a constante de equilíbrio K_ps da hidroxiapatita sem alterar o pH.' },
      { letter: 'E', text: 'atuam apenas como catalisador físico sem deslocar o equilíbrio químico.' },
    ],
    correctAnswer: 'A',
    resolution: {
      numericalDemonstration: [
        '1. Os íons H⁺ provenientes da acidez bucal neutralizam os íons hidroxila do produto: H⁺(aq) + OH⁻(aq) → H₂O(l).',
        '2. Com a retirada contínua de OH⁻(aq) do meio, a concentração desse produto diminui.',
        '3. Pelo Princípio de Le Chatelier, o sistema desloca-se para a direita (sentido direto) a fim de repor os íons OH⁻ consumidos, dissolvendo o sólido Ca₅(PO₄)₃OH (desmineralização).',
      ],
      appliedFormulas: [
        {
          formula: 'H⁺(aq) + OH⁻(aq) ⇌ H₂O(l)',
          description: 'Neutralização ácido-base acoplada ao equilíbrio de solubilidade.',
        },
      ],
      logicalReasoning:
        'A cárie dentária por desmineralização ácida é um dos exemplos favoritos do ENEM para cobrar equilíbrios acoplados e Princípio de Le Chatelier. Em contrapartida, o creme dental alcalino e fluoretado repõe OH⁻/F⁻ e desloca o equilíbrio para a esquerda (remineralização).',
    },
  },
  {
    id: 'qui-2022-099',
    year: 2022,
    questionNumber: 99,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Química',
    topic: 'Estequiometria',
    difficulty: 'Média',
    contextText:
      'Na síntese industrial do ácido acetilsalicílico (aspirina, C₉H₈O₄, massa molar = 180 g/mol), faz-se reagir 1 mol de ácido salicílico (C₇H₆O₃, massa molar = 138 g/mol) com excesso de anidrido acético. Em uma batelada piloto cujo rendimento reacional efetivo foi de 80%, colocaram-se para reagir 276 g de ácido salicílico puro.',
    commandText:
      'A massa real de ácido acetilsalicílico (aspirina) obtida ao final dessa batelada com 80% de rendimento, em grama, foi igual a:',
    alternatives: [
      { letter: 'A', text: '180.' },
      { letter: 'B', text: '220,8.' },
      { letter: 'C', text: '288.' },
      { letter: 'D', text: '360.' },
      { letter: 'E', text: '450.' },
    ],
    correctAnswer: 'C',
    resolution: {
      numericalDemonstration: [
        '1. Quantidade de matéria de ácido salicílico reagente: n = 276 g / (138 g/mol) = 2,0 mols.',
        '2. Pela proporção estequiométrica 1 : 1, o rendimento teórico (100%) produziria 2,0 mols de aspirina: m_teórica = 2,0 × 180 g/mol = 360 g.',
        '3. Aplicando o rendimento real da batelada (η = 80% = 0,80): m_real = 0,80 × 360 g = 288 g.',
      ],
      appliedFormulas: [
        {
          formula: 'Rendimento (η) = (m_real / m_teórica) × 100%',
          description: 'Rendimento percentual de uma reação química.',
        },
      ],
      logicalReasoning:
        'Em questões de estequiometria com rendimento inferior a 100%, calcula-se primeiramente a massa teórica esperada pela proporção molar (360 g) e, ao final, multiplica-se pelo fator de rendimento (0,80), obtendo-se 288 g.',
    },
  },
  {
    id: 'qui-2022-117',
    year: 2022,
    questionNumber: 117,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Química',
    topic: 'Eletroquímica',
    difficulty: 'Fácil',
    contextText:
      'Para proteger cascos de aço (constituídos majoritariamente por ferro, Fe) de navios e tubulações subterrâneas contra a corrosão oxidativa (ferrugem), fixa-se à estrutura metálica blocos de magnésio ou de zinco metálico, técnica conhecida como proteção catódica por eletrodo de sacrifício.',
    supportData:
      'Potenciais-padrão de redução: E°(Fe²⁺/Fe) = -0,44 V; E°(Zn²⁺/Zn) = -0,76 V; E°(Mg²⁺/Mg) = -2,37 V.',
    commandText:
      'O metal utilizado como eletrodo de sacrifício protege o casco de ferro contra a corrosão porque apresenta:',
    alternatives: [
      { letter: 'A', text: 'menor potencial de redução que o ferro, oxidando-se preferencialmente no lugar do ferro.' },
      { letter: 'B', text: 'maior potencial de redução que o ferro, reduzindo o oxigênio dissolvido na água.' },
      { letter: 'C', text: 'menor potencial de oxidação que o ferro, atuando como cátodo da pilha.' },
      { letter: 'D', text: 'impermeabilidade elétrica total que bloqueia a passagem de corrente iônica.' },
      { letter: 'E', text: 'mesmo potencial de redução do ferro, anulando a diferença de potencial.' },
    ],
    correctAnswer: 'A',
    resolution: {
      numericalDemonstration: [
        '1. Comparando os potenciais de redução: E°(Mg²⁺/Mg) = -2,37 V < E°(Zn²⁺/Zn) = -0,76 V < E°(Fe²⁺/Fe) = -0,44 V.',
        '2. Como Mg e Zn possuem menor potencial de redução (e consequentemente MAIOR potencial de oxidação) que o Fe, eles atuam como ânodo (oxidam-se primeiro).',
        '3. O ferro é forçado a atuar como cátodo da célula galvânica formada, permanecendo no estado reduzido Fe(s) enquanto houver metal de sacrifício.',
      ],
      appliedFormulas: [
        {
          formula: 'E°_oxidação = -E°_redução',
          description: 'Relação simétrica entre os potenciais-padrão de oxidação e de redução.',
        },
      ],
      logicalReasoning:
        'O metal de sacrifício recebe esse nome justamente porque "se sacrifica" sofrendo oxidação anódica no lugar do ferro. Para isso, ele deve ser um redutor mais forte, isto é, apresentar menor potencial de redução (ou maior potencial de oxidação) que o metal protegido.',
    },
  },
  {
    id: 'qui-2022-129',
    year: 2022,
    questionNumber: 129,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Química',
    topic: 'Soluções',
    difficulty: 'Média',
    contextText:
      'Para neutralizar completamente 25,0 mL de uma amostra de ácido clorídrico (HCl) de concentração desconhecida em uma titulação ácido-base com indicador fenolftaleína, foram gastos exatamente 20,0 mL de solução aquosa padrão de hidróxido de sódio (NaOH) de concentração 0,15 mol/L.',
    supportData: 'Equação química da neutralização: HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l).',
    commandText:
      'A concentração em quantidade de matéria (molaridade) da solução de ácido clorídrico (HCl) titulada, em mol/L, é igual a:',
    alternatives: [
      { letter: 'A', text: '0,10.' },
      { letter: 'B', text: '0,12.' },
      { letter: 'C', text: '0,15.' },
      { letter: 'D', text: '0,18.' },
      { letter: 'E', text: '0,20.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. No ponto de equivalência de uma reação 1 : 1 entre monoácido forte (HCl) e monobase forte (NaOH): n(HCl) = n(NaOH).',
        '2. Expressando em termos de molaridade e volume (M_a · V_a = M_b · V_b): M_a × 25,0 mL = 0,15 mol/L × 20,0 mL.',
        '3. Calculando o produto à direita: 0,15 × 20,0 = 3,0.',
        '4. Isolando M_a: M_a = 3,0 / 25,0 = 0,12 mol/L.',
      ],
      appliedFormulas: [
        {
          formula: 'x · M_ácido · V_ácido = y · M_base · V_base',
          description: 'Equação estequiométrica da titulação ácido-base no ponto de equivalência.',
        },
      ],
      logicalReasoning:
        'A titulação volumétrica permite determinar a concentração de uma solução problema a partir da medida rigorosa de volumes reagentes com uma solução padrão de concentração conhecida.',
    },
  },
  {
    id: 'qui-2021-104',
    year: 2021,
    questionNumber: 104,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Química',
    topic: 'Termoquímica',
    difficulty: 'Média',
    contextText:
      'A reação de síntese do cloreto de hidrogênio gasoso em fase homogênea é representada pela equação química: H₂(g) + Cl₂(g) → 2 HCl(g). Para estimar a variação de entalpia dessa reação a partir das energias médias de ligação, um estudante consultou a tabela termoquímica:\n• Energia de ligação H–H = 436 kJ/mol;\n• Energia de ligação Cl–Cl = 242 kJ/mol;\n• Energia de ligação H–Cl = 431 kJ/mol.',
    commandText:
      'A variação de entalpia (ΔH) para a reação de formação de 2 mols de HCl(g) descrita na equação acima, em kJ, é igual a:',
    alternatives: [
      { letter: 'A', text: '-184.' },
      { letter: 'B', text: '+184.' },
      { letter: 'C', text: '-247.' },
      { letter: 'D', text: '-92.' },
      { letter: 'E', text: '+247.' },
    ],
    correctAnswer: 'A',
    resolution: {
      numericalDemonstration: [
        '1. A quebra de ligações nos reagentes é um processo endotérmico (absorve calor, sinal positivo +): ΔH_quebra = +1 × E(H–H) + 1 × E(Cl–Cl) = +436 + 242 = +678 kJ.',
        '2. A formação de ligações nos produtos é um processo exotérmico (libera calor, sinal negativo -): ΔH_formação = -2 × E(H–Cl) = -2 × 431 = -862 kJ.',
        '3. Somando as contribuições: ΔH = ΔH_quebra + ΔH_formação = +678 - 862 = -184 kJ.',
      ],
      appliedFormulas: [
        {
          formula: 'ΔH = ∑ E_ligações quebradas (reagentes) - ∑ E_ligações formadas (produtos)',
          description: 'Cálculo da variação de entalpia a partir das energias médias de ligação.',
        },
      ],
      logicalReasoning:
        'Para romper ligações químicas é sempre necessário fornecer energia ao sistema (+), enquanto a formação de novas ligações químicas estabiliza os átomos e libera energia para a vizinhança (-). Como a energia liberada na formação de 2 mols de H–Cl (862 kJ) supera a energia absorvida na quebra de H–H e Cl–Cl (678 kJ), a reação global é exotérmica (ΔH = -184 kJ).',
    },
  },
  {
    id: 'qui-2021-122',
    year: 2021,
    questionNumber: 122,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Química',
    topic: 'Química Orgânica',
    difficulty: 'Média',
    contextText:
      'O ácido lático (ácido 2-hidroxipropanoico), de fórmula estrutural CH₃–CH(OH)–COOH, é produzido nos músculos humanos durante exercícios físicos intensos em condições anaeróbicas e também na fermentação lática do leite.',
    commandText:
      'A molécula do ácido lático apresenta atividade óptica (isomeria óptica, desviando o plano da luz polarizada) porque possui em sua estrutura:',
    alternatives: [
      { letter: 'A', text: 'uma ligação dupla entre carbonos com ligantes diferentes (carbono sp²).' },
      { letter: 'B', text: 'um átomo de carbono assimétrico (quiral) ligado a quatro grupos distintos (-H, -OH, -CH₃ e -COOH).' },
      { letter: 'C', text: 'um anel aromático planar conjugado com grupos hidroxila e carboxila.' },
      { letter: 'D', text: 'dois átomos de oxigênio capazes de formar ligações de hidrogênio intermoleculares.' },
      { letter: 'E', text: 'uma cadeia carbônica ramificada insaturada com simetria molecular especular.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Analisando o carbono número 2 (central) da cadeia do ácido 2-hidroxipropanoico: CH₃ – C*(H)(OH) – COOH.',
        '2. Os quatro ligantes presos ao carbono C-2 são mutuamente diferentes: R₁ = -H, R₂ = -OH, R₃ = -CH₃ e R₄ = -COOH.',
        '3. A presença de 1 carbono quiral (assimétrico, C*) gera 2¹ = 2 enantiômeros opticamente ativos (dextrogiro e levogiro) e 1 mistura racêmica.',
      ],
      appliedFormulas: [
        {
          formula: 'N_opticamente ativos = 2ⁿ   (onde n = nº de carbonos quirais)',
          description: 'Regra de Van\'t Hoff-Le Bel para o número de estereoisômeros opticamente ativos.',
        },
      ],
      logicalReasoning:
        'A condição essencial cobrada no ENEM para a ocorrência de isomeria óptica em compostos de cadeia aberta é a assimetria molecular provocada pela presença de pelo menos um carbono quiral (hibridização sp³ ligado a quatro radicais diferentes entre si).',
    },
  },
];


