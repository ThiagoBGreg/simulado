import { Question } from '../types/enem';

export const FISICA_QUESTIONS: Question[] = [
  {
    id: 'fis-2023-091',
    year: 2023,
    questionNumber: 91,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Física',
    topic: 'Mecânica',
    difficulty: 'Média',
    contextText:
      'Em uma rodovia federal plana e horizontal, um caminhão de carga de massa total igual a 12.000 kg trafega a uma velocidade constante de 72 km/h. Ao avistar um obstáculo imóvel na pista, o motorista aciona os freios imediatamente, imprimindo ao veículo uma desaceleração escalar média constante de módulo igual a 2,5 m/s² até a parada completa.',
    supportData:
      'Despreze o tempo de reação do motorista após o acionamento do pedal de freio.',
    commandText:
      'A distância mínima percorrida pelo caminhão desde o início da frenagem até parar completamente e o módulo do trabalho realizado pela força resultante de frenagem são, respectivamente:',
    alternatives: [
      { letter: 'A', text: '40 m e 1,2 × 10⁶ J.' },
      { letter: 'B', text: '80 m e 2,4 × 10⁶ J.' },
      { letter: 'C', text: '80 m e 1,2 × 10⁶ J.' },
      { letter: 'D', text: '160 m e 2,4 × 10⁶ J.' },
      { letter: 'E', text: '1.036,8 m e 3,1 × 10⁷ J.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Convertendo a velocidade inicial para unidades do Sistema Internacional (SI): v₀ = 72 km/h ÷ 3,6 = 20 m/s.',
        '2. Aplicando a Equação de Torricelli até a parada completa (v = 0, a = -2,5 m/s²): 0² = 20² + 2 × (-2,5) × Δs ⇒ 5 · Δs = 400 ⇒ Δs = 80 metros.',
        '3. Pelo Teorema da Energia Cinética, o módulo do trabalho da força resultante é igual à variação da energia cinética: |W_res| = (m · v₀²) / 2.',
        '4. Substituindo m = 12.000 kg e v₀ = 20 m/s: |W_res| = (12.000 × 400) / 2 = 6.000 × 400 = 2.400.000 J = 2,4 × 10⁶ J.',
      ],
      appliedFormulas: [
        {
          formula: 'v² = v₀² + 2 · a · Δs',
          description: 'Equação de Torricelli para o Movimento Uniformemente Variado (MUV).',
        },
        {
          formula: 'W_res = ΔE_c = (m · v²) / 2 - (m · v₀²) / 2',
          description: 'Teorema do Trabalho-Energia Cinética.',
        },
      ],
      logicalReasoning:
        'A conversão prévia de km/h para m/s (dividindo por 3,6) é obrigatória antes de utilizar aceleração em m/s² e massa em kg. Note também que a distância de frenagem varia com o quadrado da velocidade inicial (Δs ∝ v₀²): dobrar a velocidade quadruplica a distância necessária para frear.',
    },
  },
  {
    id: 'fis-2023-098',
    year: 2023,
    questionNumber: 98,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Física',
    topic: 'Eletrodinâmica',
    difficulty: 'Média',
    contextText:
      'Para aquecer a água de uma ducha elétrica residencial ligada a uma rede de tensão constante U = 220 V, o aparelho conta com um seletor de temperatura que altera o comprimento útil de um resistor ôhmico. Na posição "Inverno" (potência elétrica de 6.600 W), a água sofre um aquecimento maior do que na posição "Verão" (potência elétrica de 4.400 W).',
    commandText:
      'A intensidade da corrente elétrica na posição "Inverno" e a razão (R_Verão / R_Inverno) entre as resistências elétricas nas posições Verão e Inverno são, respectivamente:',
    alternatives: [
      { letter: 'A', text: '20 A e 1,5.' },
      { letter: 'B', text: '30 A e 1,5.' },
      { letter: 'C', text: '30 A e 0,67.' },
      { letter: 'D', text: '20 A e 0,67.' },
      { letter: 'E', text: '50 A e 1,5.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Cálculo da corrente elétrica na posição Inverno: P_Inv = U · i_Inv ⇒ 6.600 = 220 · i_Inv ⇒ i_Inv = 6.600 / 220 = 30 A.',
        '2. Como a tensão U = 220 V é constante nas duas posições, utilizamos P = U² / R ⇒ R = U² / P (resistência e potência são inversamente proporcionais).',
        '3. Calculando a razão entre as resistências: R_Verão / R_Inverno = P_Inverno / P_Verão = 6.600 / 4.400 = 66 / 44 = 3 / 2 = 1,5.',
      ],
      appliedFormulas: [
        {
          formula: 'P = U · i',
          description: 'Potência elétrica consumida em função da tensão e da corrente.',
        },
        {
          formula: 'P = U² / R',
          description: 'Potência dissipada por efeito Joule sob tensão elétrica constante.',
        },
      ],
      logicalReasoning:
        'Em instalações residenciais submetidas a uma mesma diferença de potencial (U constante), quanto menor a resistência elétrica do chuveiro, maior é a corrente elétrica e maior é a potência térmica dissipada (posição Inverno). Portanto, a resistência na posição Verão é necessariamente maior do que na posição Inverno (razão 1,5).',
    },
  },
  {
    id: 'fis-2023-105',
    year: 2023,
    questionNumber: 105,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Física',
    topic: 'Termologia',
    difficulty: 'Média',
    contextText:
      'Em um laboratório de engenharia térmica, um bloco de alumínio de massa 500 g inicialmente a 120 °C é mergulhado no interior de um calorímetro ideal contendo 450 g de água líquida inicialmente a 20 °C. O sistema é fechado imediatamente e aguarda-se o estabelecimento do equilíbrio térmico.',
    supportData:
      'Dados: calor específico sensível do alumínio c_Al = 0,20 cal/(g·°C); calor específico sensível da água c_água = 1,00 cal/(g·°C). Despreze trocas de calor com o meio externo.',
    commandText:
      'A temperatura final de equilíbrio térmico atingida pelo sistema água-alumínio, em grau Celsius, é igual a:',
    alternatives: [
      { letter: 'A', text: '30,0.' },
      { letter: 'B', text: '38,2.' },
      { letter: 'C', text: '42,5.' },
      { letter: 'D', text: '50,0.' },
      { letter: 'E', text: '70,0.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Capacidade térmica do bloco de alumínio: C_Al = m_Al · c_Al = 500 × 0,20 = 100 cal/°C.',
        '2. Capacidade térmica da água: C_água = m_água · c_água = 450 × 1,00 = 450 cal/°C.',
        '3. Pelo princípio da conservação de energia em sistema termicamente isolado: Q_Al + Q_água = 0.',
        '4. Equacionando em função da temperatura final T_f: 100 · (T_f - 120) + 450 · (T_f - 20) = 0.',
        '5. Desenvolvendo: 100·T_f - 12.000 + 450·T_f - 9.000 = 0 ⇒ 550·T_f = 21.000 ⇒ T_f = 21.000 / 550 = 420 / 11 ≈ 38,18 °C ≈ 38,2 °C.',
      ],
      appliedFormulas: [
        {
          formula: 'Q = m · c · ΔT',
          description: 'Equação fundamental da calorimetria para calor sensível.',
        },
        {
          formula: '∑ Q_i = 0',
          description: 'Conservação da energia térmica em sistema adiabaticamente isolado.',
        },
      ],
      logicalReasoning:
        'A água possui calor específico cinco vezes maior que o do alumínio, resultando em uma capacidade térmica (450 cal/°C) 4,5 vezes superior à do bloco metálico (100 cal/°C). Por essa razão, a temperatura de equilíbrio térmico (38,2 °C) fica muito mais próxima da temperatura inicial da água (20 °C) do que da temperatura inicial do metal (120 °C).',
    },
  },
  {
    id: 'fis-2023-112',
    year: 2023,
    questionNumber: 112,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Física',
    topic: 'Ondulatória',
    difficulty: 'Fácil',
    contextText:
      'Um roteador Wi-Fi de dupla banda opera simultaneamente nas frequências de 2,4 GHz e 5,0 GHz, emitindo ondas eletromagnéticas que se propagam no ar com velocidade aproximadamente igual a 3,0 × 10⁸ m/s.',
    supportData: 'Considere 1 GHz = 10⁹ Hz.',
    commandText:
      'Os comprimentos de onda das radiações emitidas por esse roteador nas bandas de 2,4 GHz e 5,0 GHz, em centímetro, são, respectivamente:',
    alternatives: [
      { letter: 'A', text: '8,0 e 16,7.' },
      { letter: 'B', text: '12,5 e 6,0.' },
      { letter: 'C', text: '6,0 e 12,5.' },
      { letter: 'D', text: '1,25 e 0,60.' },
      { letter: 'E', text: '125,0 e 60,0.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Pela equação fundamental da ondulatória (v = λ · f), temos λ = v / f.',
        '2. Para a banda f₁ = 2,4 GHz = 2,4 × 10⁹ Hz: λ₁ = (3,0 × 10⁸) / (2,4 × 10⁹) = 3,0 / 24 = 0,125 m = 12,5 cm.',
        '3. Para a banda f₂ = 5,0 GHz = 5,0 × 10⁹ Hz: λ₂ = (3,0 × 10⁸) / (5,0 × 10⁹) = 3,0 / 50 = 0,060 m = 6,0 cm.',
      ],
      appliedFormulas: [
        {
          formula: 'v = λ · f',
          description: 'Equação fundamental da ondulatória relacionando velocidade, comprimento de onda e frequência.',
        },
      ],
      logicalReasoning:
        'Como ambas as ondas eletromagnéticas se propagam no mesmo meio (ar) com a mesma velocidade c ≈ 3,0 × 10⁸ m/s, o comprimento de onda λ é inversamente proporcional à frequência f. Assim, a banda de menor frequência (2,4 GHz) possui o maior comprimento de onda (12,5 cm), o que também explica sua maior capacidade de difração ao contornar paredes domésticas.',
    },
  },
  {
    id: 'fis-2022-095',
    year: 2022,
    questionNumber: 95,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Física',
    topic: 'Óptica',
    difficulty: 'Média',
    contextText:
      'Uma estudante apresenta dificuldade para enxergar nitidamente textos escritos no quadro da sala de aula quando se senta nas últimas fileiras, pois seu globo ocular é alongado e forma a imagem de objetos distantes antes da retina. Seu oftalmologista prescreveu lentes corretivas com vergência (grau) igual a -2,5 dioptrias (di).',
    commandText:
      'A ametropia visual dessa estudante, a natureza óptica da lente prescrita e a distância focal dessa lente, em centímetro, são, respectivamente:',
    alternatives: [
      { letter: 'A', text: 'Miopia; lente divergente; f = -40 cm.' },
      { letter: 'B', text: 'Miopia; lente convergente; f = +40 cm.' },
      { letter: 'C', text: 'Hipermetropia; lente divergente; f = -40 cm.' },
      { letter: 'D', text: 'Hipermetropia; lente convergente; f = +25 cm.' },
      { letter: 'E', text: 'Miopia; lente divergente; f = -25 cm.' },
    ],
    correctAnswer: 'A',
    resolution: {
      numericalDemonstration: [
        '1. A dificuldade para enxergar objetos distantes com formação da imagem antes da retina caracteriza a Miopia.',
        '2. Para afastar os raios luminosos e recuar a imagem até a retina, emprega-se uma lente divergente (vergência V < 0).',
        '3. Pela definição de vergência (V = 1 / f, com f em metros): -2,5 = 1 / f ⇒ f = -1 / 2,5 = -0,40 m.',
        '4. Convertendo de metros para centímetros: f = -0,40 × 100 = -40 cm.',
      ],
      appliedFormulas: [
        {
          formula: 'V = 1 / f',
          description: 'Vergência (em dioptrias, di = m⁻¹) em função da distância focal f (em metros).',
        },
      ],
      logicalReasoning:
        'No olho míope, o sistema óptico ocular é excessivamente convergente para o comprimento axial do bulbo ocular, focalizando objetos distantes antes da retina. A correção exige uma lente divergente (distância focal e vergência negativas) que diminua a convergência global do sistema olho-lente.',
    },
  },
  {
    id: 'fis-2022-102',
    year: 2022,
    questionNumber: 102,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Física',
    topic: 'Eletromagnetismo',
    difficulty: 'Média',
    contextText:
      'Carregadores sem fio (por indução) para smartphones utilizam uma bobina primária na base transmissora percorrida por corrente elétrica alternada de alta frequência. Quando o aparelho celular é apoiado sobre a base, uma bobina secundária interna ao telefone passa a ser atravessada por um fluxo magnético variável no tempo.',
    commandText:
      'O princípio físico fundamental que explica o surgimento de uma força eletromotriz (tensão elétrica) nos terminais da bobina secundária do smartphone e o funcionamento de um transformador de tensão é a:',
    alternatives: [
      { letter: 'A', text: 'Lei de Coulomb da atração eletrostática entre cargas estacionárias.' },
      { letter: 'B', text: 'Lei de Faraday-Neumann da indução eletromagnética por variação de fluxo magnético.' },
      { letter: 'C', text: 'Primeira Lei de Ohm da proporcionalidade direta em corrente contínua constante.' },
      { letter: 'D', text: 'Efeito Termoiônico de emissão de elétrons por aquecimento resistivo.' },
      { letter: 'E', text: 'Blindagem Eletrostática de Gaiola de Faraday em condutores em equilíbrio.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. A corrente alternada i(t) na bobina transmissora gera um campo magnético variável B(t) no espaço ao seu redor.',
        '2. O fluxo magnético Φ_B = B · A · cos(θ) através da área A das N espiras da bobina receptora varia em função do tempo (ΔΦ_B / Δt ≠ 0).',
        '3. Pela Lei de Faraday-Neumann, a variação temporal do fluxo magnético induz uma força eletromotriz ε = -N · (ΔΦ_B / Δt) na bobina secundária.',
      ],
      appliedFormulas: [
        {
          formula: 'ε = -N · (ΔΦ_B / Δt)',
          description: 'Lei de Faraday-Lenz da indução eletromagnética.',
        },
        {
          formula: 'U₁ / U₂ = N₁ / N₂',
          description: 'Relação de transformação entre tensões e número de espiras em transformadores.',
        },
      ],
      logicalReasoning:
        'Tanto os carregadores sem fio quanto os transformadores da rede de distribuição elétrica e os fogões por indução funcionam exclusivamente com corrente variável (alternada), pois um campo magnético estático (corrente contínua constante) mantém ΔΦ_B = 0 e não induz força eletromotriz.',
    },
  },
  {
    id: 'fis-2022-110',
    year: 2022,
    questionNumber: 110,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Física',
    topic: 'Mecânica',
    difficulty: 'Média',
    contextText:
      'Em uma usina hidrelétrica de pequeno porte, a água represada cai a partir do repouso de uma altura vertical h = 45 m até atingir as pás da turbina hidráulica localizada na base da barragem. Considere que 80% da energia mecânica potencial gravitacional da água seja efetivamente convertida em energia elétrica pelo conjunto turbina-gerador.',
    supportData:
      'Adote g = 10 m/s² e densidade da água d = 1.000 kg/m³. Sabendo que a vazão volumétrica pela tubulação forçada é de 2,0 m³/s:',
    commandText:
      'A potência elétrica útil gerada por essa pequena central hidrelétrica, em quilowatt (kW), é igual a:',
    alternatives: [
      { letter: 'A', text: '360.' },
      { letter: 'B', text: '720.' },
      { letter: 'C', text: '900.' },
      { letter: 'D', text: '1.125.' },
      { letter: 'E', text: '1.800.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Massa de água que atravessa a turbina a cada Δt = 1 segundo (para vazão Z = 2,0 m³/s): m = d · V = 1.000 kg/m³ × 2,0 m³ = 2.000 kg por segundo.',
        '2. Potência total gravitacional disponível (P_total = m · g · h / Δt): P_total = (2.000 × 10 × 45) / 1 = 900.000 W = 900 kW.',
        '3. Aplicando o rendimento global η = 80% = 0,80: P_útil = η · P_total = 0,80 × 900 kW = 720 kW.',
      ],
      appliedFormulas: [
        {
          formula: 'P_total = d · Z · g · h',
          description: 'Potência hidráulica teórica de uma queda-d’água de vazão volumétrica Z e altura h.',
        },
        {
          formula: 'η = P_útil / P_total',
          description: 'Rendimento energético de um sistema conversor de energia.',
        },
      ],
      logicalReasoning:
        'A análise em um intervalo unitário de tempo (Δt = 1 s) simplifica problemas de potência hidráulica no ENEM: basta converter o volume que escoa em 1 segundo (2 m³) na respectiva massa (2.000 kg), calcular a energia potencial gravitacional liberada por segundo (m·g·h = 900 kJ/s = 900 kW) e multiplicar pela eficiência do gerador.',
    },
  },
  {
    id: 'fis-2022-119',
    year: 2022,
    questionNumber: 119,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Física',
    topic: 'Eletrodinâmica',
    difficulty: 'Difícil',
    contextText:
      'Em um laboratório de instrumentação, um técnico montou um circuito elétrico composto por uma fonte de tensão ideal de força eletromotriz E = 24 V conectada a uma associação mista de três resistores ôhmicos: um resistor R₁ = 5 Ω ligado em série com um ramo paralelo formado pelos resistores R₂ = 6 Ω e R₃ = 12 Ω.',
    commandText:
      'A resistência equivalente total do circuito e a intensidade da corrente elétrica que atravessa especificamente o resistor R₂ = 6 Ω são, respectivamente:',
    alternatives: [
      { letter: 'A', text: '9 Ω e 1,78 A.' },
      { letter: 'B', text: '9 Ω e 2,67 A.' },
      { letter: 'C', text: '23 Ω e 1,04 A.' },
      { letter: 'D', text: '4 Ω e 4,00 A.' },
      { letter: 'E', text: '9 Ω e 0,89 A.' },
    ],
    correctAnswer: 'A',
    resolution: {
      numericalDemonstration: [
        '1. Resistência equivalente do trecho em paralelo (R₂ = 6 Ω e R₃ = 12 Ω): R_p = (6 × 12) / (6 + 12) = 72 / 18 = 4 Ω.',
        '2. Resistência equivalente total (R₁ em série com R_p): R_eq = R₁ + R_p = 5 + 4 = 9 Ω.',
        '3. Corrente elétrica total fornecida pela fonte: i_total = E / R_eq = 24 / 9 = 8/3 A ≈ 2,67 A.',
        '4. Tensão elétrica no ramo paralelo: U_p = R_p · i_total = 4 × (8/3) = 32/3 V.',
        '5. Corrente no resistor R₂ = 6 Ω: i₂ = U_p / R₂ = (32/3) / 6 = 32 / 18 = 16 / 9 ≈ 1,78 A.',
      ],
      appliedFormulas: [
        {
          formula: 'R_paralelo = (R₂ · R₃) / (R₂ + R₃)',
          description: 'Resistência equivalente de dois resistores associados em paralelo.',
        },
        {
          formula: 'U = R · i',
          description: 'Primeira Lei de Ohm aplicada ao circuito total e a cada ramo.',
        },
      ],
      logicalReasoning:
        'Em associações mistas de resistores, primeiro reduz-se o paralelo para encontrar a resistência equivalente (9 Ω) e a corrente total (8/3 A ≈ 2,67 A). No divisor de corrente paralelo entre 6 Ω e 12 Ω, como R₂ tem metade da resistência de R₃, ele recebe o dobro da corrente de R₃, ficando com 2/3 da corrente total: (2/3) × (8/3) = 16/9 ≈ 1,78 A.',
    },
  },
  {
    id: 'fis-2021-093',
    year: 2021,
    questionNumber: 93,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Física',
    topic: 'Termologia',
    difficulty: 'Fácil',
    contextText:
      'Garrafas térmicas utilizadas para conservar café quente por várias horas possuem uma ampola interna de vidro com paredes duplas, entre as quais se produz vácuo quase perfeito, além de superfícies internas espelhadas (refletoras) e uma tampa isolante bem vedada.',
    commandText:
      'O vácuo entre as paredes duplas e o espelhamento das superfícies internas da ampola têm como funções principais evitar as perdas de calor, respectivamente, por:',
    alternatives: [
      { letter: 'A', text: 'irradiação térmica e condução térmica.' },
      { letter: 'B', text: 'condução/convecção térmica e irradiação térmica.' },
      { letter: 'C', text: 'convecção térmica e condução térmica.' },
      { letter: 'D', text: 'irradiação térmica e convecção térmica.' },
      { letter: 'E', text: 'condução térmica e convecção térmica.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Condução e convecção térmica exigem obrigatoriamente um meio material (átomos, moléculas ou fluido) para propagar energia térmica.',
        '2. Logo, a presença do vácuo entre as paredes duplas impede a propagação de calor por condução e por convecção.',
        '3. A irradiação térmica ocorre por ondas eletromagnéticas (infravermelho), que se propagam inclusive no vácuo; as paredes espelhadas refletem essas ondas de volta para o interior.',
      ],
      appliedFormulas: [
        {
          formula: 'Φ = k · A · ΔT / L',
          description: 'Lei de Fourier da condução térmica (nula no vácuo, onde k = 0).',
        },
      ],
      logicalReasoning:
        'Questão clássica do ENEM sobre os mecanismos de transferência de calor na garrafa de Dewar (garrafa térmica): o vácuo bloqueia os processos que dependem de matéria (condução e convecção), as superfícies espelhadas minimizam a irradiação térmica por reflexão de ondas infravermelhas e a tampa evita perdas por convecção com o ar externo.',
    },
  },
  {
    id: 'fis-2021-101',
    year: 2021,
    questionNumber: 101,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Física',
    topic: 'Óptica',
    difficulty: 'Média',
    contextText:
      'A fibra óptica revolucionou as telecomunicações transoceânicas ao permitir a transmissão de pulsos de luz laser por milhares de quilômetros com atenuação mínima. A fibra é constituída por um núcleo cilíndrico transparente de índice de refração n₁ envolto por uma casca (revestimento) transparente de índice de refração n₂.',
    commandText:
      'Para que o feixe de luz permaneça confinado no interior do núcleo da fibra óptica por sucessivas reflexões internas totais, é estritamente necessário que:',
    alternatives: [
      { letter: 'A', text: 'n₁ < n₂ e o ângulo de incidência seja menor que o ângulo limite.' },
      { letter: 'B', text: 'n₁ > n₂ e o ângulo de incidência seja maior que o ângulo limite.' },
      { letter: 'C', text: 'n₁ = n₂ e o feixe incida perpendicularmente à parede da casca.' },
      { letter: 'D', text: 'n₁ > n₂ e o ângulo de incidência seja menor que o ângulo limite.' },
      { letter: 'E', text: 'n₁ < n₂ e o ângulo de incidência seja maior que o ângulo limite.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Pela Lei de Snell-Descartes: n₁ · sen(θ₁) = n₂ · sen(θ₂).',
        '2. Para que o raio se afaste da normal ao tentar passar do núcleo (1) para a casca (2) e possa atingir θ₂ = 90°, deve-se ter sen(θ₁) < sen(θ₂), o que exige n₁ > n₂ (luz indo do meio mais refringente para o menos refringente).',
        '3. O ângulo limite L é definido por sen(L) = n₂ / n₁.',
        '4. Quando o ângulo de incidência θ₁ supera o ângulo limite (θ₁ > L), não há refração para a casca e ocorre a Reflexão Interna Total.',
      ],
      appliedFormulas: [
        {
          formula: 'n₁ · sen(θ₁) = n₂ · sen(θ₂)',
          description: 'Lei de Snell-Descartes da refração da luz.',
        },
        {
          formula: 'sen(L) = n_menor / n_maior',
          description: 'Cálculo do seno do ângulo limite de incidência.',
        },
      ],
      logicalReasoning:
        'A reflexão interna total depende simultaneamente de duas condições físicas invioláveis: (1) a luz deve propagar-se no meio de maior índice de refração em direção ao meio de menor índice de refração (n₁ > n₂), e (2) o ângulo de incidência em relação à reta normal deve ser superior ao ângulo limite L.',
    },
  },
  {
    id: 'fis-2021-109',
    year: 2021,
    questionNumber: 109,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Física',
    topic: 'Ondulatória',
    difficulty: 'Média',
    contextText:
      'Uma ambulância desloca-se em alta velocidade com a sirene ligada, emitindo um som de frequência própria constante f₀ = 800 Hz. Uma pedestre parada na calçada ouve o som da sirene enquanto a ambulância se aproxima dela e, instantes depois, continua ouvindo o som enquanto o veículo se afasta.',
    commandText:
      'Em relação à frequência própria f₀ = 800 Hz emitida pela sirene, as frequências aparentes percebidas pela pedestre durante a aproximação (f_aprox) e durante o afastamento (f_afast) satisfazem a relação:',
    alternatives: [
      { letter: 'A', text: 'f_aprox = 800 Hz e f_afast = 800 Hz, variando apenas a amplitude sonora.' },
      { letter: 'B', text: 'f_aprox > 800 Hz (som mais agudo) e f_afast < 800 Hz (som mais grave).' },
      { letter: 'C', text: 'f_aprox < 800 Hz (som mais grave) e f_afast > 800 Hz (som mais agudo).' },
      { letter: 'D', text: 'f_aprox > 800 Hz (som mais forte) e f_afast > 800 Hz (som mais fraco).' },
      { letter: 'E', text: 'f_aprox = f_afast > 800 Hz durante todo o movimento da ambulância.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Durante a aproximação relativa entre fonte e observador, as frentes de onda sonora ficam comprimidas à frente da ambulância (λ_aparente < λ₀).',
        '2. Como a velocidade do som no ar é constante, λ menor implica frequência aparente maior: f_aprox > 800 Hz (som fisiologicamente mais agudo / alto).',
        '3. Durante o afastamento relativo, as frentes de onda ficam mais espaçadas atrás da ambulância (λ_aparente > λ₀), resultando em f_afast < 800 Hz (som mais grave / baixo).',
      ],
      appliedFormulas: [
        {
          formula: 'f_obs = f₀ · (v_som ± v_obs) / (v_som ∓ v_fonte)',
          description: 'Equação do Efeito Doppler para ondas sonoras.',
        },
      ],
      logicalReasoning:
        'O Efeito Doppler altera a altura do som percebido (frequência: grave ou agudo) devido ao movimento relativo entre a fonte emissora e o observador. Não se deve confundir altura sonora (frequência) com intensidade sonora (volume: som forte ou fraco, associado à amplitude da onda).',
    },
  },
  {
    id: 'fis-2021-118',
    year: 2021,
    questionNumber: 118,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Física',
    topic: 'Eletromagnetismo',
    difficulty: 'Difícil',
    contextText:
      'Em um espectrômetro de massa, um íon positivo de carga elétrica q = 1,6 × 10⁻¹⁹ C e massa m = 3,2 × 10⁻²⁶ kg penetra perpendicularmente em uma região onde atua um campo magnético uniforme de intensidade B = 0,50 T, com velocidade escalar v = 2,0 × 10⁵ m/s.',
    supportData: 'Despreze a ação do campo gravitacional sobre o íon.',
    commandText:
      'No interior dessa região de campo magnético uniforme, o íon descreverá uma trajetória circular uniforme cujo raio R, em centímetro, é igual a:',
    alternatives: [
      { letter: 'A', text: '4,0.' },
      { letter: 'B', text: '8,0.' },
      { letter: 'C', text: '12,0.' },
      { letter: 'D', text: '16,0.' },
      { letter: 'E', text: '20,0.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Como a velocidade v é perpendicular ao campo magnético B, a força magnética F_m = q · v · B atua como resultante centrípeta (F_cp = m · v² / R).',
        '2. Igualando as forças: q · v · B = (m · v²) / R ⇒ R = (m · v) / (q · B).',
        '3. Substituindo os valores no SI: R = (3,2 × 10⁻²⁶ × 2,0 × 10⁵) / (1,6 × 10⁻¹⁹ × 0,50).',
        '4. Numerador: 6,4 × 10⁻²¹; Denominador: 0,8 × 10⁻¹⁹ = 8,0 × 10⁻²⁰.',
        '5. Efetuando a divisão: R = (6,4 × 10⁻²¹) / (8,0 × 10⁻²⁰) = 0,8 × 10⁻¹ m = 0,08 m = 8,0 cm.',
      ],
      appliedFormulas: [
        {
          formula: 'F_mag = |q| · v · B · sen(θ)',
          description: 'Módulo da força magnética de Lorentz sobre uma carga em movimento.',
        },
        {
          formula: 'R = (m · v) / (|q| · B)',
          description: 'Raio da trajetória circular de uma partícula carregada em campo magnético uniforme.',
        },
      ],
      logicalReasoning:
        'A força magnética é sempre perpendicular ao vetor velocidade da carga; por isso, ela nunca realiza trabalho e não altera o módulo da velocidade (energia cinética constante), atuando exclusivamente como resultante centrípeta que encurva a trajetória em um movimento circular uniforme de raio R = mv/(qB).',
    },
  },
  {
    id: 'fis-2023-116',
    year: 2023,
    questionNumber: 116,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Física',
    topic: 'Óptica',
    difficulty: 'Média',
    contextText:
      'Espelhos esféricos convexos são instalados estrategicamente nos corredores de supermercados, farmácias e saídas de garagens residenciais por proporcionarem um campo visual mais amplo do que um espelho plano de mesmas dimensões.',
    commandText:
      'Para qualquer objeto real posicionado diante de um espelho esférico convexo, a imagem conjugada por esse espelho apresenta as seguintes características ópticas:',
    alternatives: [
      { letter: 'A', text: 'Real, invertida e menor que o objeto.' },
      { letter: 'B', text: 'Virtual, direita e menor que o objeto.' },
      { letter: 'C', text: 'Virtual, direita e maior que o objeto.' },
      { letter: 'D', text: 'Real, direita e menor que o objeto.' },
      { letter: 'E', text: 'Virtual, invertida e de mesmo tamanho que o objeto.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. No espelho esférico convexo, o foco F e o centro de curvatura C são virtuais (situados atrás da superfície refletora, logo f < 0).',
        '2. Pela equação de Gauss (1/f = 1/p + 1/p\') com p > 0 e f < 0: 1/p\' = 1/f - 1/p < 0 ⇒ p\' < 0 (imagem sempre Virtual, formada atrás do espelho).',
        '3. Pelo aumento linear transversal A = -p\' / p = f / (f - p): como f < 0 e p > 0, temos 0 < A < 1 (imagem sempre Direita, pois A > 0, e Menor que o objeto, pois |A| < 1).',
      ],
      appliedFormulas: [
        {
          formula: '1/f = 1/p + 1/p\'   e   A = i/o = -p\'/p',
          description: 'Equação dos pontos conjugados de Gauss e aumento linear transversal.',
        },
      ],
      logicalReasoning:
        'A redução do tamanho das imagens conjugadas pelo espelho convexo (0 < A < 1) é justamente o que permite enquadrar uma área muito maior do ambiente em uma superfície refletora compacta, ampliando o campo visual de segurança.',
    },
  },
  {
    id: 'fis-2023-124',
    year: 2023,
    questionNumber: 124,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Física',
    topic: 'Eletromagnetismo',
    difficulty: 'Média',
    contextText:
      'Em uma subestação de distribuição de energia elétrica, um transformador ideal abaixador de tensão possui 2.200 espiras no enrolamento primário e 110 espiras no enrolamento secundário. O enrolamento primário é alimentado por uma tensão eficaz alternada de 4.400 V.',
    commandText:
      'A tensão eficaz disponível nos terminais do enrolamento secundário desse transformador, em volt, é igual a:',
    alternatives: [
      { letter: 'A', text: '110.' },
      { letter: 'B', text: '127.' },
      { letter: 'C', text: '220.' },
      { letter: 'D', text: '440.' },
      { letter: 'E', text: '880.' },
    ],
    correctAnswer: 'C',
    resolution: {
      numericalDemonstration: [
        '1. Dados do transformador: N₁ = 2.200 espiras; N₂ = 110 espiras; U₁ = 4.400 V.',
        '2. Pela relação fundamental do transformador ideal: U₁ / U₂ = N₁ / N₂.',
        '3. Substituindo os valores: 4.400 / U₂ = 2.200 / 110 ⇒ 4.400 / U₂ = 20.',
        '4. Isolando U₂: U₂ = 4.400 / 20 = 220 V.',
      ],
      appliedFormulas: [
        {
          formula: 'U₁ / U₂ = N₁ / N₂ = i₂ / i₁',
          description: 'Relação de transformação de tensões, espiras e correntes em um transformador ideal.',
        },
      ],
      logicalReasoning:
        'Em um transformador ideal, a tensão em cada bobina é diretamente proporcional ao seu número de espiras. Como o secundário possui 20 vezes menos espiras que o primário (2.200 / 110 = 20), a tensão é reduzida 20 vezes (4.400 V → 220 V), mantendo a potência elétrica constante.',
    },
  },
  {
    id: 'fis-2022-108',
    year: 2022,
    questionNumber: 108,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Física',
    topic: 'Termologia',
    difficulty: 'Média',
    contextText:
      'Uma máquina térmica cíclica opera segundo o ciclo termodinâmico de Carnot entre uma fonte quente mantida à temperatura constante de 227 °C e uma fonte fria mantida a 27 °C. A cada ciclo de operação, a máquina recebe 2.000 J de energia térmica da fonte quente.',
    supportData: 'Relação de conversão termométrica: T(K) = T(°C) + 273.',
    commandText:
      'O rendimento máximo teórico dessa máquina térmica e o trabalho mecânico útil realizado por ciclo são, respectivamente:',
    alternatives: [
      { letter: 'A', text: '40% e 800 J.' },
      { letter: 'B', text: '60% e 1.200 J.' },
      { letter: 'C', text: '40% e 1.200 J.' },
      { letter: 'D', text: '88% e 1.760 J.' },
      { letter: 'E', text: '50% e 1.000 J.' },
    ],
    correctAnswer: 'A',
    resolution: {
      numericalDemonstration: [
        '1. Convertendo obrigatoriamente as temperaturas para a escala absoluta Kelvin: T_Q = 227 + 273 = 500 K; T_F = 27 + 273 = 300 K.',
        '2. Cálculo do rendimento de Carnot: η = 1 - (T_F / T_Q) = 1 - (300 / 500) = 1 - 0,60 = 0,40 = 40%.',
        '3. Cálculo do trabalho útil por ciclo: W = η · Q_Q = 0,40 × 2.000 J = 800 J (e os 1.200 J restantes são rejeitados para a fonte fria).',
      ],
      appliedFormulas: [
        {
          formula: 'η_Carnot = 1 - (T_fria / T_quente)',
          description: 'Rendimento máximo teórico de uma máquina térmica de Carnot (temperaturas em Kelvin).',
        },
        {
          formula: 'W = Q_quente - Q_fria = η · Q_quente',
          description: 'Balanço energético da Segunda Lei da Termodinâmica.',
        },
      ],
      logicalReasoning:
        'A Segunda Lei da Termodinâmica estabelece que nenhuma máquina térmica operando em ciclos pode converter 100% do calor recebido em trabalho útil. A fórmula de Carnot exige temperaturas na escala absoluta Kelvin; usar graus Celsius levaria ao distrator 1 - 27/227 ≈ 88% (Alternativa D).',
    },
  },
  {
    id: 'fis-2022-125',
    year: 2022,
    questionNumber: 125,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Física',
    topic: 'Ondulatória',
    difficulty: 'Média',
    contextText:
      'Uma corda de violão de comprimento útil L = 60 cm, fixa em ambas as extremidades, é tangida e passa a vibrar estacionariamente em seu primeiro harmônico (modo fundamental) com uma frequência sonora de 250 Hz.',
    commandText:
      'O comprimento de onda da onda estacionária na corda e a velocidade de propagação das ondas transversais nessa corda, em m/s, são, respectivamente:',
    alternatives: [
      { letter: 'A', text: '1,20 m e 300 m/s.' },
      { letter: 'B', text: '0,60 m e 150 m/s.' },
      { letter: 'C', text: '0,30 m e 75 m/s.' },
      { letter: 'D', text: '1,20 m e 150 m/s.' },
      { letter: 'E', text: '2,40 m e 600 m/s.' },
    ],
    correctAnswer: 'A',
    resolution: {
      numericalDemonstration: [
        '1. No primeiro harmônico (n = 1) de uma corda fixa nas duas extremidades, o comprimento L corresponde a meio comprimento de onda (1 fuso): L = λ₁ / 2.',
        '2. Convertendo L = 60 cm = 0,60 m: λ₁ = 2 × 0,60 m = 1,20 m.',
        '3. Aplicando v = λ₁ · f₁: v = 1,20 m × 250 Hz = 300 m/s.',
      ],
      appliedFormulas: [
        {
          formula: 'λₙ = (2 · L) / n   e   fₙ = n · (v / 2L)',
          description: 'Comprimento de onda e frequência do n-ésimo harmônico em corda vibrante.',
        },
      ],
      logicalReasoning:
        'Em uma corda presa nas duas pontas, as extremidades são nós de vibração. A distância entre dois nós consecutivos é sempre igual a meio comprimento de onda (λ/2); portanto, no modo fundamental (n = 1), o comprimento de onda inteiro mede o dobro do comprimento da corda (2L = 1,20 m).',
    },
  },
  {
    id: 'fis-2021-097',
    year: 2021,
    questionNumber: 97,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Física',
    topic: 'Mecânica',
    difficulty: 'Média',
    contextText:
      'Em um centro de distribuição logística, um pacote de massa m = 4,0 kg parte do repouso no topo de uma rampa inclinada sem atrito, a uma altura vertical h = 1,8 m acima de uma esteira horizontal. Ao chegar à base da rampa, o pacote desliza sobre um trecho horizontal áspero onde o coeficiente de atrito cinético com a superfície vale μ_c = 0,40, até parar completamente.',
    supportData: 'Adote g = 10 m/s².',
    commandText:
      'A velocidade escalar do pacote ao atingir a base da rampa e a distância percorrida no trecho horizontal áspero até parar são, respectivamente:',
    alternatives: [
      { letter: 'A', text: '6,0 m/s e 4,5 m.' },
      { letter: 'B', text: '6,0 m/s e 9,0 m.' },
      { letter: 'C', text: '3,6 m/s e 4,5 m.' },
      { letter: 'D', text: '12,0 m/s e 9,0 m.' },
      { letter: 'E', text: '6,0 m/s e 1,8 m.' },
    ],
    correctAnswer: 'A',
    resolution: {
      numericalDemonstration: [
        '1. Na descida sem atrito, conserva-se a energia mecânica (m·g·h = m·v²/2): v = √(2·g·h) = √(2 × 10 × 1,8) = √36 = 6,0 m/s.',
        '2. No trecho horizontal áspero, o trabalho da força de atrito dissipa toda a energia cinética inicial: |W_fat| = E_p,inicial ⇒ F_at · d = m · g · h.',
        '3. Como no plano horizontal N = m · g, temos F_at = μ_c · m · g.',
        '4. Igualando: μ_c · m · g · d = m · g · h ⇒ d = h / μ_c = 1,8 / 0,40 = 4,5 metros.',
      ],
      appliedFormulas: [
        {
          formula: 'v = √(2 · g · h)',
          description: 'Velocidade na base de uma rampa sem atrito por conservação da energia mecânica.',
        },
        {
          formula: 'W_fat = -μ_c · m · g · d = ΔE_m',
          description: 'Teorema da Energia Mecânica na presença de forças dissipativas.',
        },
      ],
      logicalReasoning:
        'Observe como a massa m = 4,0 kg cancela-se tanto no cálculo da velocidade na base quanto na distância de frenagem por atrito (d = h / μ_c). Um pacote mais pesado adquire proporcionalmente mais energia potencial, mas também sofre uma força normal e de atrito proporcionalmente maiores, parando exatamente nos mesmos 4,5 m.',
    },
  },
  {
    id: 'fis-2021-114',
    year: 2021,
    questionNumber: 114,
    greatArea: 'Ciências da Natureza e suas Tecnologias',
    discipline: 'Física',
    topic: 'Eletrodinâmica',
    difficulty: 'Fácil',
    contextText:
      'Para reduzir o valor da conta mensal de energia elétrica de sua residência, uma família substituiu 5 lâmpadas incandescentes antigas de 60 W cada por 5 lâmpadas de tecnologia LED de 9 W cada, que produzem o mesmo fluxo luminoso. Todas as 5 lâmpadas permanecem acesas, em média, 6 horas por dia durante os 30 dias do mês.',
    supportData: 'Considere a tarifa de energia elétrica igual a R$ 0,80 por kWh.',
    commandText:
      'A economia mensal de energia elétrica, em kWh, e a redução financeira mensal na fatura proporcionadas por essa substituição são, respectivamente:',
    alternatives: [
      { letter: 'A', text: '45,9 kWh e R$ 36,72.' },
      { letter: 'B', text: '54,0 kWh e R$ 43,20.' },
      { letter: 'C', text: '8,1 kWh e R$ 6,48.' },
      { letter: 'D', text: '9,18 kWh e R$ 7,34.' },
      { letter: 'E', text: '45,9 kWh e R$ 45,90.' },
    ],
    correctAnswer: 'A',
    resolution: {
      numericalDemonstration: [
        '1. Potência economizada em cada lâmpada trocada: ΔP_unit = 60 W - 9 W = 51 W.',
        '2. Potência total economizada nas 5 lâmpadas: ΔP_total = 5 × 51 W = 255 W = 0,255 kW.',
        '3. Tempo total de uso mensal: Δt = 6 h/dia × 30 dias = 180 horas.',
        '4. Energia elétrica economizada no mês: ΔE = ΔP_total · Δt = 0,255 kW × 180 h = 45,9 kWh.',
        '5. Economia financeira mensal: Valor = 45,9 kWh × R$ 0,80/kWh = R$ 36,72.',
      ],
      appliedFormulas: [
        {
          formula: 'E (kWh) = P (kW) · Δt (h)',
          description: 'Cálculo do consumo de energia elétrica em quilowatt-hora.',
        },
      ],
      logicalReasoning:
        'Calcular diretamente a diferença de potência (60 W - 9 W = 51 W por lâmpada) antes de multiplicar pelo tempo mensal evita fazer duas contas separadas de consumo e reduz o tempo de resolução na prova.',
    },
  },
];


