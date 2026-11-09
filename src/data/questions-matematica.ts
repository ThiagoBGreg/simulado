import { Question } from '../types/enem';

export const MATEMATICA_QUESTIONS: Question[] = [
  {
    id: 'mat-2023-136',
    year: 2023,
    questionNumber: 136,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Estatística',
    difficulty: 'Fácil',
    contextText:
      'Uma estudante de engenharia civil, durante o controle de qualidade de um lote de blocos cerâmicos, coletou a resistência à compressão (em MPa) de 7 amostras consecutivas retiradas da esteira de produção. Os valores registrados foram: 4,2; 3,8; 4,5; 4,2; 5,1; 3,9 e 4,4.',
    supportData:
      'Para aprovação preliminar do lote segundo a norma interna do laboratório, exige-se o registro simultâneo da média aritmética, da mediana e da moda das resistências medidas.',
    commandText:
      'Os valores da média aritmética, da mediana e da moda dessa amostra, em MPa, são, respectivamente:',
    alternatives: [
      { letter: 'A', text: '4,20; 4,20 e 4,30.' },
      { letter: 'B', text: '4,30; 4,20 e 4,20.' },
      { letter: 'C', text: '4,30; 4,30 e 4,20.' },
      { letter: 'D', text: '4,20; 4,30 e 4,50.' },
      { letter: 'E', text: '4,30; 4,40 e 4,20.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Ordenando o rol de dados em ordem crescente (n = 7 amostras): 3,8 ; 3,9 ; 4,2 ; 4,2 ; 4,4 ; 4,5 ; 5,1.',
        '2. Cálculo da soma dos valores: S = 3,8 + 3,9 + 4,2 + 4,2 + 4,4 + 4,5 + 5,1 = 30,1 MPa.',
        '3. Cálculo da Média Aritmética: x̄ = 30,1 / 7 = 4,30 MPa.',
        '4. Determinação da Mediana (termo central, posição (7 + 1)/2 = 4ª posição do rol ordenado): Md = 4,20 MPa.',
        '5. Determinação da Moda (valor mais frequente na amostra, que aparece 2 vezes): Mo = 4,20 MPa.',
      ],
      appliedFormulas: [
        {
          formula: 'x̄ = (x₁ + x₂ + ... + xₙ) / n',
          description: 'Média aritmética simples para n observações.',
        },
        {
          formula: 'Posição Central (n ímpar) = (n + 1) / 2',
          description: 'Índice do elemento mediano no rol ordenado.',
        },
      ],
      logicalReasoning:
        'Em problemas de Estatística do ENEM que envolvem medidas de tendência central, o primeiro passo indispensável é construir o rol (ordenar os dados em ordem crescente ou decrescente). Sem ordenar, corre-se o erro clássico de tomar o 4º elemento da listagem original como mediana. Após ordenar, identifica-se facilmente a moda por inspeção visual da frequência e a mediana pelo termo central.',
    },
  },
  {
    id: 'mat-2023-142',
    year: 2023,
    questionNumber: 142,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Funções',
    difficulty: 'Média',
    contextText:
      'Um sistema de irrigação automatizado controla a vazão de água lançada por um aspersor agrícola. A trajetória do jato principal de água descreve um arco de parábola cuja altura h(x), em metros acima do solo, em função da distância horizontal x, em metros a partir do bico emissor, é modelada pela expressão h(x) = -0,2x² + 1,6x + 0,8.',
    commandText:
      'A altura máxima atingida pelo jato de água em relação ao solo, em metro, é igual a:',
    alternatives: [
      { letter: 'A', text: '3,2.' },
      { letter: 'B', text: '3,6.' },
      { letter: 'C', text: '4,0.' },
      { letter: 'D', text: '4,8.' },
      { letter: 'E', text: '8,0.' },
    ],
    correctAnswer: 'C',
    resolution: {
      numericalDemonstration: [
        '1. Identificando os coeficientes da função quadrática h(x) = ax² + bx + c: a = -0,2; b = 1,6; c = 0,8.',
        '2. Calculando a abscissa do vértice (distância horizontal em que ocorre a altura máxima): x_v = -b / (2a) = -1,6 / (2 × (-0,2)) = -1,6 / (-0,4) = 4 metros.',
        '3. Substituindo x_v = 4 na função para obter a ordenada do vértice (h_máx): h(4) = -0,2 × (4)² + 1,6 × (4) + 0,8.',
        '4. Efetuando as operações: h(4) = -0,2 × 16 + 6,4 + 0,8 = -3,2 + 7,2 = 4,0 metros.',
      ],
      appliedFormulas: [
        {
          formula: 'x_v = -b / (2a)',
          description: 'Coordenada horizontal do vértice da parábola.',
        },
        {
          formula: 'y_v = -Δ / (4a) = f(x_v)',
          description: 'Valor máximo (quando a < 0) da função quadrática.',
        },
      ],
      logicalReasoning:
        'Como o coeficiente dominante a = -0,2 é negativo, a parábola possui concavidade voltada para baixo e admite ponto de máximo no vértice. Preste atenção à pergunta do comando: solicita-se a "altura máxima atingida" (ordenada y_v = 4,0 m), e não a distância horizontal até o ponto máximo (x_v = 4,0 m, que neste caso coincidem numericamente, mas conceitualmente representam grandezas distintas).',
    },
  },
  {
    id: 'mat-2023-149',
    year: 2023,
    questionNumber: 149,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Geometria Espacial',
    difficulty: 'Média',
    contextText:
      'Uma fábrica de cosméticos comercializa um perfume em um frasco cilíndrico reto de raio interno igual a 3 cm e altura interna útil de 10 cm. Para uma edição comemorativa, a empresa decidiu substituir a embalagem por um frasco em formato de cone circular reto com o mesmo volume interno útil do cilindro original, mas com raio da base igual a 5 cm.',
    supportData: 'Considere que a espessura das paredes de vidro já foi descontada nas medidas internas.',
    commandText:
      'A altura interna útil do novo frasco cônico, em centímetro, deverá ser igual a:',
    alternatives: [
      { letter: 'A', text: '3,6.' },
      { letter: 'B', text: '6,0.' },
      { letter: 'C', text: '9,0.' },
      { letter: 'D', text: '10,8.' },
      { letter: 'E', text: '18,0.' },
    ],
    correctAnswer: 'D',
    resolution: {
      numericalDemonstration: [
        '1. Volume do cilindro original: V_cil = π × R_cil² × h_cil = π × 3² × 10 = 90π cm³.',
        '2. Volume do novo frasco cônico: V_cone = (1/3) × π × R_cone² × H = (1/3) × π × 5² × H = (25π / 3) × H.',
        '3. Igualando os volumes (V_cone = V_cil): (25π / 3) × H = 90π.',
        '4. Simplificando π em ambos os lados e isolando H: H = (90 × 3) / 25 = 270 / 25 = 10,8 cm.',
      ],
      appliedFormulas: [
        {
          formula: 'V_cilindro = π · r² · h',
          description: 'Volume de um cilindro circular reto.',
        },
        {
          formula: 'V_cone = (1/3) · π · R² · H',
          description: 'Volume de um cone circular reto.',
        },
      ],
      logicalReasoning:
        'Em questões de equivalência de volumes entre sólidos geométricos no ENEM, evite substituir o valor aproximado de π logo no início. Ao igualar as expressões algébricas do cilindro e do cone, a constante π cancela-se nos dois membros da equação, tornando a conta exata e muito mais rápida.',
    },
  },
  {
    id: 'mat-2023-155',
    year: 2023,
    questionNumber: 155,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Probabilidade',
    difficulty: 'Média',
    contextText:
      'Em um congresso acadêmico de Ciências Exatas com 200 estudantes inscritos, 110 participam do minicurso de Inteligência Artificial, 80 participam do minicurso de Computação Quântica e 40 estudantes participam simultaneamente de ambos os minicursos.',
    commandText:
      'Escolhendo-se ao acaso um estudante entre os que participam do minicurso de Inteligência Artificial, qual é a probabilidade de ele também participar do minicurso de Computação Quântica?',
    alternatives: [
      { letter: 'A', text: '1/5' },
      { letter: 'B', text: '4/11' },
      { letter: 'C', text: '2/5' },
      { letter: 'D', text: '4/15' },
      { letter: 'E', text: '11/20' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Identificando os conjuntos: n(IA) = 110 estudantes; n(CQ) = 80 estudantes; n(IA ∩ CQ) = 40 estudantes.',
        '2. Como o estudante foi escolhido "entre os que participam do minicurso de Inteligência Artificial", o espaço amostral reduzido possui exatamente n(IA) = 110 estudantes.',
        '3. O número de casos favoráveis dentro desse grupo é a interseção n(IA ∩ CQ) = 40.',
        '4. Calculando a probabilidade condicional: P(CQ | IA) = 40 / 110 = 4/11.',
      ],
      appliedFormulas: [
        {
          formula: 'P(B | A) = n(A ∩ B) / n(A)',
          description: 'Probabilidade condicional de ocorrer B sabendo que A ocorreu.',
        },
      ],
      logicalReasoning:
        'A leitura atenta do comando diferencia a probabilidade simples (sobre o total de 200 congressistas, que daria 40/200 = 1/5, um distrator clássico na alternativa A) da probabilidade condicional. A expressão "Escolhendo-se ao acaso um estudante entre os que participam do minicurso de Inteligência Artificial" restringe o universo de busca aos 110 alunos de IA.',
    },
  },
  {
    id: 'mat-2023-163',
    year: 2023,
    questionNumber: 163,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Matemática Financeira',
    difficulty: 'Média',
    contextText:
      'Raphaela planeja adquirir um notebook para seus estudos universitários cujo preço de tabela é R$ 4.000,00. A loja oferece duas modalidades de pagamento:\n• Modalidade I: pagamento à vista com 10% de desconto sobre o preço de tabela;\n• Modalidade II: entrada de R$ 1.800,00 no ato da compra e mais uma parcela única de R$ 2.100,00 após 30 dias.',
    supportData:
      'Raphaela dispõe dos R$ 3.600,00 necessários para a compra à vista e pode aplicar qualquer saldo em um fundo de renda fixa que rende 2% ao mês.',
    commandText:
      'Caso opte pela Modalidade II e aplique o restante do dinheiro que usaria à vista no fundo de renda fixa durante esses 30 dias, em relação à Modalidade I, ao final dos 30 dias Raphaela terá:',
    alternatives: [
      { letter: 'A', text: 'vantagem financeira de R$ 36,00 na Modalidade I.' },
      { letter: 'B', text: 'vantagem financeira de R$ 264,00 na Modalidade I.' },
      { letter: 'C', text: 'vantagem financeira de R$ 300,00 na Modalidade I.' },
      { letter: 'D', text: 'vantagem financeira de R$ 36,00 na Modalidade II.' },
      { letter: 'E', text: 'equivalência financeira exata entre as duas modalidades.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Valor à vista na Modalidade I: V_I = 4.000 × (1 - 0,10) = R$ 3.600,00. (Saldo restante após a compra = R$ 0,00).',
        '2. Na Modalidade II, dos R$ 3.600,00 disponíveis, Raphaela paga R$ 1.800,00 de entrada e aplica o restante: C_aplicado = 3.600 - 1.800 = R$ 1.800,00.',
        '3. Montante do valor aplicado após 30 dias (rendimento de 2%): M = 1.800 × 1,02 = R$ 1.836,00.',
        '4. Valor necessário para quitar a parcela de 30 dias na Modalidade II: R$ 2.100,00.',
        '5. Diferença desembolsada a mais na Modalidade II em 30 dias: 2.100,00 - 1.836,00 = R$ 264,00 a mais, logo a Modalidade I é mais vantajosa em R$ 264,00.',
      ],
      appliedFormulas: [
        {
          formula: 'M = C · (1 + i)ⁿ',
          description: 'Montante em regime de capitalização a taxa i no período n.',
        },
        {
          formula: 'V_desconto = V_tabela · (1 - d)',
          description: 'Valor líquido após desconto percentual d.',
        },
      ],
      logicalReasoning:
        'Para comparar decisões financeiras em datas distintas (valor do dinheiro no tempo), deve-se projetar os fluxos de caixa para a mesma data focal (neste caso, 30 dias após a compra). Ao aplicar os R$ 1.800,00 que sobraram do capital inicial a 2% ao mês, obtém-se R$ 1.836,00, valor insuficiente para cobrir a parcela de R$ 2.100,00, revelando que a compra à vista (Modalidade I) gera uma economia real de R$ 264,00.',
    },
  },
  {
    id: 'mat-2023-171',
    year: 2023,
    questionNumber: 171,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Trigonometria',
    difficulty: 'Difícil',
    contextText:
      'A altura da maré h(t), em metros, em um porto brasileiro ao longo das 24 horas de determinado dia foi modelada pela função trigonométrica h(t) = 2,2 + 1,4 · cos((π/6) · t), em que t representa o tempo, em horas, transcorrido após a meia-noite (0 ≤ t ≤ 24). Um navio cargueiro de grande calado só pode entrar com segurança no canal portuário quando a profundidade da maré é maior ou igual a 2,9 metros.',
    commandText:
      'Durante as primeiras 12 horas desse dia (0 ≤ t ≤ 12), a duração total do intervalo de tempo, em hora, em que o navio pode entrar com segurança no porto é igual a:',
    alternatives: [
      { letter: 'A', text: '2.' },
      { letter: 'B', text: '4.' },
      { letter: 'C', text: '6.' },
      { letter: 'D', text: '8.' },
      { letter: 'E', text: '10.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Condição de segurança: h(t) ≥ 2,9 ⇒ 2,2 + 1,4 · cos((π/6)t) ≥ 2,9.',
        '2. Isolando o cosseno: 1,4 · cos((π/6)t) ≥ 0,7 ⇒ cos((π/6)t) ≥ 0,7 / 1,4 ⇒ cos((π/6)t) ≥ 1/2.',
        '3. Para 0 ≤ t ≤ 12, o argumento θ = (π/6)t varia no intervalo 0 ≤ θ ≤ 2π (um período completo da função cosseno).',
        '4. No ciclo trigonométrico [0, 2π], temos cos(θ) ≥ 1/2 quando 0 ≤ θ ≤ π/3 ou quando 5π/3 ≤ θ ≤ 2π.',
        '5. Convertendo para o tempo t: (a) 0 ≤ (π/6)t ≤ π/3 ⇒ 0 ≤ t ≤ 2 h (duração de 2 horas); (b) 5π/3 ≤ (π/6)t ≤ 2π ⇒ 10 ≤ t ≤ 12 h (duração de 2 horas).',
        '6. Somando os dois intervalos favoráveis nas primeiras 12 horas: Δt_total = 2 + 2 = 4 horas.',
      ],
      appliedFormulas: [
        {
          formula: 'P = 2π / |ω|',
          description: 'Período fundamental de uma função harmônica f(t) = A + B·cos(ωt).',
        },
        {
          formula: 'cos(π/3) = cos(5π/3) = 1/2',
          description: 'Arcos congruentes de primeiro e quarto quadrantes no ciclo trigonométrico.',
        },
      ],
      logicalReasoning:
        'Um erro frequente nesse modelo de questão é considerar apenas o primeiro quadrante (0 ≤ θ ≤ π/3, resultando em 2 horas) e esquecer que em 12 horas a função de período P = 2π/(π/6) = 12 h completa um ciclo inteiro, voltando a superar 2,9 m no quarto quadrante (entre t = 10 h e t = 12 h).',
    },
  },
  {
    id: 'mat-2022-138',
    year: 2022,
    questionNumber: 138,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Álgebra',
    difficulty: 'Fácil',
    contextText:
      'Para organizar seus estudos para o ENEM, uma estudante estabeleceu uma meta progressiva de resolução de exercícios de Matemática e Ciências da Natureza. Na primeira semana do cronograma, ela resolveu 25 questões e, a cada semana subsequente, aumentou essa quantidade em 6 questões em relação à semana imediatamente anterior.',
    commandText:
      'Mantendo rigorosamente esse planejamento, o número total de questões resolvidas por essa estudante ao final de 12 semanas completas de estudo será igual a:',
    alternatives: [
      { letter: 'A', text: '372.' },
      { letter: 'B', text: '540.' },
      { letter: 'C', text: '696.' },
      { letter: 'D', text: '732.' },
      { letter: 'E', text: '1.392.' },
    ],
    correctAnswer: 'C',
    resolution: {
      numericalDemonstration: [
        '1. As quantidades semanais formam uma Progressão Aritmética (PA) com primeiro termo a₁ = 25, razão r = 6 e número de termos n = 12.',
        '2. Calculando a quantidade de questões na 12ª semana (a₁₂): a₁₂ = a₁ + (12 - 1) × r = 25 + 11 × 6 = 25 + 66 = 91 questões.',
        '3. Calculando a soma acumulada das 12 semanas (S₁₂): S₁₂ = ((a₁ + a₁₂) × 12) / 2 = ((25 + 91) × 6) = 116 × 6 = 696 questões.',
      ],
      appliedFormulas: [
        {
          formula: 'aₙ = a₁ + (n - 1) · r',
          description: 'Termo geral de uma Progressão Aritmética (PA).',
        },
        {
          formula: 'Sₙ = ((a₁ + aₙ) · n) / 2',
          description: 'Soma dos n primeiros termos de uma Progressão Aritmética.',
        },
      ],
      logicalReasoning:
        'Sempre que uma grandeza cresce segundo um acréscimo constante a cada período fixo ("aumentou em 6 questões a cada semana"), estamos diante de uma Progressão Aritmética. Deve-se distinguir se o comando pede o valor em uma semana específica (termo geral aₙ = 91) ou o total acumulado ao longo de todas as semanas (soma Sₙ = 696).',
    },
  },
  {
    id: 'mat-2022-144',
    year: 2022,
    questionNumber: 144,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Geometria Plana',
    difficulty: 'Média',
    contextText:
      'Um arquiteto projetou um jardim sensorial no formato de um trapézio retângulo ABCD, cujas bases paralelas medem AB = 18 m e CD = 12 m, e a altura perpendicular às bases mede AD = 8 m. Nos vértices A e D (ângulos retos de 90°), serão instalados dois canteiros floridos em formato de setores circulares de raio igual a 2 m, ambos inteiramente contidos no interior do trapézio. O restante da área do trapézio será revestido com grama esmeralda.',
    supportData: 'Utilize 3 como aproximação para π.',
    commandText:
      'A área total do jardim que será revestida com grama esmeralda, em metro quadrado, é igual a:',
    alternatives: [
      { letter: 'A', text: '108.' },
      { letter: 'B', text: '114.' },
      { letter: 'C', text: '117.' },
      { letter: 'D', text: '120.' },
      { letter: 'E', text: '126.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Cálculo da área total do trapézio: A_trap = ((B + b) × h) / 2 = ((18 + 12) × 8) / 2 = (30 × 8) / 2 = 120 m².',
        '2. Cada canteiro nos vértices A e D possui ângulo central de 90° (um quarto de círculo) e raio r = 2 m.',
        '3. Juntos, os dois setores de 90° equivalem a um semicírculo (180°) de raio r = 2 m: A_canteiros = (1/2) × π × r² = 0,5 × 3 × (2)² = 6 m².',
        '4. Área revestida com grama: A_grama = A_trap - A_canteiros = 120 - 6 = 114 m².',
      ],
      appliedFormulas: [
        {
          formula: 'A_trapézio = ((B + b) · h) / 2',
          description: 'Área de um trapézio de bases B e b e altura h.',
        },
        {
          formula: 'A_setor = (α / 360°) · π · r²',
          description: 'Área de um setor circular de ângulo central α.',
        },
      ],
      logicalReasoning:
        'Problemas de áreas hachuradas ou revestimentos parciais em Geometria Plana são resolvidos por subtração de áreas elementares. Ao notar que dois setores circulares de mesmo raio e ângulos de 90° somam 180°, calcula-se diretamente metade da área de um círculo de raio 2 m.',
    },
  },
  {
    id: 'mat-2022-151',
    year: 2022,
    questionNumber: 151,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Geometria Analítica',
    difficulty: 'Média',
    contextText:
      'Uma torre de transmissão de internet sem fio (Wi-Fi) foi instalada no campus de uma universidade. Em um sistema de coordenadas cartesianas ortogonais no plano do campus, graduado em decâmetros (dam), a torre está posicionada no ponto C(3, -4) e possui um alcance máximo de sinal circular de raio igual a 6 dam.',
    commandText:
      'A equação cartesiana que representa a circunferência limite da região de cobertura máxima do sinal dessa torre é dada por:',
    alternatives: [
      { letter: 'A', text: '(x - 3)² + (y + 4)² = 36' },
      { letter: 'B', text: '(x + 3)² + (y - 4)² = 36' },
      { letter: 'C', text: '(x - 3)² + (y + 4)² = 6' },
      { letter: 'D', text: '(x - 3)² + (y - 4)² = 36' },
      { letter: 'E', text: '(x + 3)² + (y + 4)² = 12' },
    ],
    correctAnswer: 'A',
    resolution: {
      numericalDemonstration: [
        '1. Equação reduzida da circunferência de centro C(x₀, y₀) e raio R: (x - x₀)² + (y - y₀)² = R².',
        '2. Substituindo as coordenadas do centro x₀ = 3 e y₀ = -4: (x - 3)² + (y - (-4))² = R² ⇒ (x - 3)² + (y + 4)² = R².',
        '3. Substituindo o raio R = 6 dam no segundo membro: R² = 6² = 36.',
        '4. Portanto, a equação reduzida é (x - 3)² + (y + 4)² = 36.',
      ],
      appliedFormulas: [
        {
          formula: '(x - x₀)² + (y - y₀)² = R²',
          description: 'Equação reduzida da circunferência no plano cartesiano.',
        },
      ],
      logicalReasoning:
        'A equação reduzida da circunferência decorre diretamente da aplicação do Teorema de Pitágoras (distância entre um ponto genérico P(x, y) da borda e o centro C(x₀, y₀) igual a R). Os dois cuidados essenciais são inverter o sinal das coordenadas do centro dentro dos binômios e elevar o raio ao quadrado no termo independente.',
    },
  },
  {
    id: 'mat-2022-160',
    year: 2022,
    questionNumber: 160,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Funções',
    difficulty: 'Difícil',
    contextText:
      'Em um laboratório de microbiologia, uma colônia bacteriana submetida a um agente nutriente específico apresenta crescimento populacional dado pela função exponencial N(t) = N₀ · 2^(0,5t), em que N(t) é o número de bactérias no instante t (medido em horas) e N₀ é a população inicial no instante t = 0.',
    supportData: 'Considere log₁₀(2) = 0,30.',
    commandText:
      'O tempo necessário, em hora, para que a população dessa colônia se torne igual a 100 vezes a população inicial N₀ é:',
    alternatives: [
      { letter: 'A', text: '6,67.' },
      { letter: 'B', text: '10,00.' },
      { letter: 'C', text: '12,00.' },
      { letter: 'D', text: '13,33.' },
      { letter: 'E', text: '20,00.' },
    ],
    correctAnswer: 'D',
    resolution: {
      numericalDemonstration: [
        '1. Equacionando a condição N(t) = 100 · N₀: N₀ · 2^(0,5t) = 100 · N₀.',
        '2. Dividindo ambos os membros por N₀ (N₀ > 0): 2^(0,5t) = 100.',
        '3. Aplicando logaritmo decimal (base 10) nos dois membros: log₁₀(2^(0,5t)) = log₁₀(10²).',
        '4. Pela propriedade do logaritmo da potência: 0,5t · log₁₀(2) = 2.',
        '5. Substituindo log₁₀(2) = 0,30: 0,5t × 0,30 = 2 ⇒ 0,15t = 2 ⇒ t = 2 / 0,15 = 200 / 15 = 40 / 3 ≈ 13,33 horas.',
      ],
      appliedFormulas: [
        {
          formula: 'log(aᵇ) = b · log(a)',
          description: 'Propriedade operatória do logaritmo de uma potência.',
        },
        {
          formula: 'N(t) = N₀ · b^(kt)',
          description: 'Lei de crescimento exponencial populacional.',
        },
      ],
      logicalReasoning:
        'Quando a incógnita encontra-se no expoente e as bases das potências não podem ser reduzidas ao mesmo número inteiro (bases 2 e 10), aplica-se o logaritmo na base fornecida pelo texto de apoio (base 10). Isso transforma a equação exponencial em uma equação linear simples no tempo t.',
    },
  },
  {
    id: 'mat-2022-168',
    year: 2022,
    questionNumber: 168,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Geometria Espacial',
    difficulty: 'Média',
    contextText:
      'Uma maquete arquitetônica de um museu moderno possui a forma de uma pirâmide quadrangular regular e foi construída na escala linear de 1 : 50 em relação ao edifício real. O volume interno da maquete construída é igual a 480 cm³.',
    commandText:
      'O volume interno correspondente do edifício real, em metro cúbico, será igual a:',
    alternatives: [
      { letter: 'A', text: '24.' },
      { letter: 'B', text: '60.' },
      { letter: 'C', text: '120.' },
      { letter: 'D', text: '600.' },
      { letter: 'E', text: '1.200.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. A razão de semelhança linear entre o edifício real e a maquete é k = 50.',
        '2. A razão entre os volumes de dois sólidos semelhantes é o cubo da razão linear: V_real / V_maquete = k³ = 50³ = 125.000.',
        '3. Calculando o volume real em cm³: V_real = 480 cm³ × 125.000 = 60.000.000 cm³.',
        '4. Convertendo de cm³ para m³ (dividindo por 10⁶, pois 1 m = 100 cm ⇒ 1 m³ = 10⁶ cm³): V_real = 60.000.000 / 1.000.000 = 60 m³.',
      ],
      appliedFormulas: [
        {
          formula: 'V₁ / V₂ = k³',
          description: 'Relação volumétrica entre sólidos geométricos semelhantes de razão linear k.',
        },
        {
          formula: '1 m³ = 10⁶ cm³ = 1.000 L',
          description: 'Conversão padrão de unidades de volume no Sistema Internacional.',
        },
      ],
      logicalReasoning:
        'A relação entre escalas lineares, superficiais e volumétricas é um dos temas mais recorrentes de Geometria no ENEM: enquanto comprimentos escalam por k e áreas escalam por k², volumes escalam por k³. Além disso, o formato piramidal é irrelevante para o cálculo, pois a relação V_real = k³ · V_maquete vale para qualquer sólido tridimensional semelhante.',
    },
  },
  {
    id: 'mat-2022-175',
    year: 2022,
    questionNumber: 175,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Probabilidade',
    difficulty: 'Difícil',
    contextText:
      'Um simulado diagnóstico é composto por 4 questões de múltipla escolha, cada uma com 5 alternativas (A, B, C, D e E), das quais apenas uma é correta. Um candidato resolveu corretamente as duas primeiras questões com certeza absoluta, mas precisou escolher ao acaso ("chutar") uma alternativa em cada uma das duas últimas questões.',
    commandText:
      'A probabilidade de esse candidato acertar, no total, pelo menos 3 das 4 questões desse simulado é igual a:',
    alternatives: [
      { letter: 'A', text: '4%' },
      { letter: 'B', text: '16%' },
      { letter: 'C', text: '20%' },
      { letter: 'D', text: '32%' },
      { letter: 'E', text: '36%' },
    ],
    correctAnswer: 'E',
    resolution: {
      numericalDemonstration: [
        '1. Como o candidato já acertou as 2 primeiras questões, para acertar "pelo menos 3 questões no total", ele precisa acertar pelo menos 1 das 2 últimas questões chutadas.',
        '2. Em cada questão chutada com 5 alternativas: probabilidade de acerto p = 1/5 = 0,20 e probabilidade de erro q = 4/5 = 0,80.',
        '3. Pelo evento complementar, a probabilidade de errar ambas as questões chutadas é: P(errar as duas) = (4/5) × (4/5) = 16/25 = 0,64 (64%).',
        '4. Portanto, a probabilidade de acertar pelo menos uma das duas últimas é: P = 1 - 16/25 = 9/25 = 36/100 = 36%.',
      ],
      appliedFormulas: [
        {
          formula: 'P(A) = 1 - P(Aᶜ)',
          description: 'Probabilidade do evento complementar ("pelo menos um" = 1 - "nenhum").',
        },
        {
          formula: 'P(E₁ ∩ E₂) = P(E₁) · P(E₂)',
          description: 'Produto de probabilidades para eventos independentes.',
        },
      ],
      logicalReasoning:
        'A presença da expressão "pelo menos" em questões de Probabilidade é um forte indicativo de que o uso da probabilidade complementar economiza etapas. Alternativamente, poderíamos somar os casos disjuntos: acertar apenas a 3ª (1/5 × 4/5 = 4/25), acertar apenas a 4ª (4/5 × 1/5 = 4/25) e acertar ambas (1/5 × 1/5 = 1/25), totalizando 9/25 = 36%.',
    },
  },
  {
    id: 'mat-2021-137',
    year: 2021,
    questionNumber: 137,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Álgebra',
    difficulty: 'Fácil',
    contextText:
      'Em uma lanchonete universitária, três amigas fizeram pedidos compostos pelos mesmos tipos de salgados assados e sucos naturais:\n• O pedido 1, contendo 2 salgados e 1 suco, custou R$ 19,00;\n• O pedido 2, contendo 3 salgados e 2 sucos, custou R$ 31,00.',
    commandText:
      'Se a terceira amiga pedir 1 salgado e 2 sucos nessa mesma lanchonete, o valor total a ser pago por ela será de:',
    alternatives: [
      { letter: 'A', text: 'R$ 12,00.' },
      { letter: 'B', text: 'R$ 17,00.' },
      { letter: 'C', text: 'R$ 19,00.' },
      { letter: 'D', text: 'R$ 21,00.' },
      { letter: 'E', text: 'R$ 23,00.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Sejam x o preço unitário do salgado e y o preço unitário do suco.',
        '2. Montando o sistema linear: (I) 2x + y = 19 e (II) 3x + 2y = 31.',
        '3. Multiplicando a equação (I) por 2: 4x + 2y = 38.',
        '4. Subtraindo a equação (II) dessa nova equação: (4x + 2y) - (3x + 2y) = 38 - 31 ⇒ x = R$ 7,00.',
        '5. Substituindo x = 7 em (I): 2(7) + y = 19 ⇒ y = 19 - 14 = R$ 5,00.',
        '6. Calculando o pedido da terceira amiga (1 salgado + 2 sucos): x + 2y = 7 + 2(5) = 7 + 10 = R$ 17,00.',
      ],
      appliedFormulas: [
        {
          formula: '{ a₁x + b₁y = c₁ ; a₂x + b₂y = c₂ }',
          description: 'Sistema linear de duas equações e duas incógnitas.',
        },
      ],
      logicalReasoning:
        'A modelagem algébrica por sistemas lineares 2×2 permite determinar rapidamente os preços unitários por adição ou substituição. Uma vez obtidos x = R$ 7,00 e y = R$ 5,00, substitui-se na expressão do terceiro pedido (x + 2y = 7 + 10 = R$ 17,00).',
    },
  },
  {
    id: 'mat-2021-145',
    year: 2021,
    questionNumber: 145,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Geometria Plana',
    difficulty: 'Média',
    contextText:
      'Para reforçar a estrutura de um portão retangular de madeira que mede 2,4 m de comprimento por 1,8 m de altura, um marceneiro instalará uma ripa metálica reta ligando dois vértices opostos (diagonal do retângulo) e duas ripas laterais ao longo de uma base e de uma altura.',
    commandText:
      'O comprimento total de ripa metálica utilizado pelo marceneiro nessa estrutura (soma da diagonal com uma base e uma altura), em metro, é igual a:',
    alternatives: [
      { letter: 'A', text: '3,0.' },
      { letter: 'B', text: '5,4.' },
      { letter: 'C', text: '6,6.' },
      { letter: 'D', text: '7,2.' },
      { letter: 'E', text: '8,4.' },
    ],
    correctAnswer: 'D',
    resolution: {
      numericalDemonstration: [
        '1. A diagonal d do retângulo forma um triângulo retângulo de catetos b = 2,4 m e h = 1,8 m.',
        '2. Aplicando o Teorema de Pitágoras (ou reconhecendo o triângulo pitagórico 3-4-5 multiplicado por 0,6): d² = (2,4)² + (1,8)² = 5,76 + 3,24 = 9,00 ⇒ d = 3,0 m.',
        '3. Somando o comprimento da diagonal com uma base e uma altura: L_total = 3,0 + 2,4 + 1,8 = 7,2 m.',
      ],
      appliedFormulas: [
        {
          formula: 'd² = b² + h²',
          description: 'Teorema de Pitágoras aplicado à diagonal do retângulo.',
        },
      ],
      logicalReasoning:
        'Reconhecer ternos pitagóricos proporcionais ao triângulo (3, 4, 5) acelera significativamente a resolução de questões no ENEM: como 1,8 = 3 × 0,6 e 2,4 = 4 × 0,6, a hipotenusa é imediatamente 5 × 0,6 = 3,0 m, restando apenas somar os comprimentos solicitados no comando.',
    },
  },
  {
    id: 'mat-2021-153',
    year: 2021,
    questionNumber: 153,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Estatística',
    difficulty: 'Média',
    contextText:
      'Na seleção para uma bolsa de iniciação científica, a nota final de cada estudante é calculada pela média aritmética ponderada de três avaliações: Prova Escrita (peso 5), Análise de Currículo (peso 3) e Entrevista Técnica (peso 2). Uma candidata obteve nota 8,4 na Prova Escrita e nota 7,0 na Análise de Currículo.',
    commandText:
      'Para que essa candidata atinja nota final mínima igual a 8,0 e conquiste a bolsa, a nota mínima que ela precisa obter na Entrevista Técnica é:',
    alternatives: [
      { letter: 'A', text: '7,5.' },
      { letter: 'B', text: '8,0.' },
      { letter: 'C', text: '8,3.' },
      { letter: 'D', text: '8,5.' },
      { letter: 'E', text: '8,6.' },
    ],
    correctAnswer: 'D',
    resolution: {
      numericalDemonstration: [
        '1. Soma dos pesos: P = 5 + 3 + 2 = 10.',
        '2. Expressão da média ponderada com nota x na entrevista: M_p = (5 × 8,4 + 3 × 7,0 + 2 × x) / 10.',
        '3. Calculando os produtos conhecidos: 5 × 8,4 = 42,0 e 3 × 7,0 = 21,0.',
        '4. Impondo M_p ≥ 8,0: (42,0 + 21,0 + 2x) / 10 ≥ 8,0 ⇒ 63,0 + 2x ≥ 80,0.',
        '5. Isolando x: 2x ≥ 17,0 ⇒ x ≥ 8,5.',
      ],
      appliedFormulas: [
        {
          formula: 'x̄_p = (w₁x₁ + w₂x₂ + w₃x₃) / (w₁ + w₂ + w₃)',
          description: 'Média aritmética ponderada com pesos wᵢ.',
        },
      ],
      logicalReasoning:
        'Na média aritmética ponderada, cada nota contribui proporcionalmente ao seu respectivo peso. Multiplicando a média desejada (8,0) pela soma dos pesos (10), descobre-se que a candidata precisa acumular 80 pontos ponderados; como já possui 42 + 21 = 63 pontos, faltam 17 pontos divididos pelo peso 2 da entrevista, resultando em 8,5.',
    },
  },
  {
    id: 'mat-2021-162',
    year: 2021,
    questionNumber: 162,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Geometria Analítica',
    difficulty: 'Média',
    contextText:
      'Um drone de monitoramento ambiental parte de uma base localizada no ponto A(2, 3) e voa em linha reta até um sensor meteorológico situado no ponto B(10, 9), em um mapa plano graduado em quilômetros. Exatamente no ponto médio M do segmento AB será instalada uma estação repetidora de sinal.',
    commandText:
      'A distância em linha reta entre a base A e o sensor B, em quilômetro, e as coordenadas do ponto médio M são, respectivamente:',
    alternatives: [
      { letter: 'A', text: '10 km e M(6, 6).' },
      { letter: 'B', text: '10 km e M(4, 3).' },
      { letter: 'C', text: '14 km e M(6, 6).' },
      { letter: 'D', text: '100 km e M(6, 6).' },
      { letter: 'E', text: '10 km e M(8, 6).' },
    ],
    correctAnswer: 'A',
    resolution: {
      numericalDemonstration: [
        '1. Variações nas coordenadas entre A(2, 3) e B(10, 9): Δx = 10 - 2 = 8 km e Δy = 9 - 3 = 6 km.',
        '2. Distância euclidiana d(A, B): d = √(Δx² + Δy²) = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
        '3. Coordenadas do ponto médio M: x_M = (x_A + x_B) / 2 = (2 + 10) / 2 = 6; y_M = (y_A + y_B) / 2 = (3 + 9) / 2 = 6.',
        '4. Portanto, d(A, B) = 10 km e M(6, 6).',
      ],
      appliedFormulas: [
        {
          formula: 'd(A, B) = √[(x_B - x_A)² + (y_B - y_A)²]',
          description: 'Distância euclidiana entre dois pontos no plano cartesiano.',
        },
        {
          formula: 'M = ((x_A + x_B)/2 , (y_A + y_B)/2)',
          description: 'Coordenadas do ponto médio de um segmento.',
        },
      ],
      logicalReasoning:
        'A distância entre dois pontos no plano cartesiano é a medida da hipotenusa do triângulo retângulo cujos catetos são os deslocamentos horizontal (Δx = 8) e vertical (Δy = 6), enquanto o ponto médio corresponde à média aritmética simples das abscissas e das ordenadas das extremidades.',
    },
  },
  {
    id: 'mat-2021-170',
    year: 2021,
    questionNumber: 170,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Trigonometria',
    difficulty: 'Média',
    contextText:
      'Para medir a altura de um edifício histórico sem subir nele, uma topógrafa posicionou um teodolito a 1,6 m de altura do solo plano e horizontal, a uma distância de 30 m da fachada vertical do prédio, observando o topo sob um ângulo de elevação de 30°.',
    supportData: 'Considere √3 = 1,73.',
    commandText:
      'A altura total desse edifício em relação ao nível do solo, em metro, é mais próxima de:',
    alternatives: [
      { letter: 'A', text: '15,0.' },
      { letter: 'B', text: '16,6.' },
      { letter: 'C', text: '17,3.' },
      { letter: 'D', text: '18,9.' },
      { letter: 'E', text: '53,5.' },
    ],
    correctAnswer: 'D',
    resolution: {
      numericalDemonstration: [
        '1. Seja h a altura do topo do prédio acima do nível horizontal da luneta do teodolito.',
        '2. No triângulo retângulo formado pela visada: tg(30°) = cateto oposto / cateto adjacente = h / 30.',
        '3. Sabendo que tg(30°) = √3 / 3: h = 30 × (√3 / 3) = 10 × √3 = 10 × 1,73 = 17,3 m.',
        '4. Somando a altura do teodolito em relação ao solo (1,6 m): H_total = 17,3 + 1,6 = 18,9 m.',
      ],
      appliedFormulas: [
        {
          formula: 'tg(θ) = Cateto Oposto / Cateto Adjacente',
          description: 'Razão trigonométrica tangente no triângulo retângulo.',
        },
        {
          formula: 'H_total = h_visada + h_instrumento',
          description: 'Correção de cota pela altura do instrumento de medição.',
        },
      ],
      logicalReasoning:
        'Em problemas de trigonometria no triângulo retângulo com teodolito ou observador, a alternativa 17,3 m (Alternativa C) funciona como distrator para quem esquece de somar a altura do aparelho (1,6 m) medida a partir do solo.',
    },
  },
  {
    id: 'mat-2021-178',
    year: 2021,
    questionNumber: 178,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Matemática Financeira',
    difficulty: 'Média',
    contextText:
      'Durante uma campanha promocional, uma livraria aplicou um aumento de 20% sobre o preço original de uma coleção de livros de Física e Química e, na semana seguinte, anunciou um desconto promocional de 20% sobre o novo preço reajustado.',
    commandText:
      'Em comparação ao preço original antes das duas alterações sucessivas, o preço final da coleção passou a apresentar:',
    alternatives: [
      { letter: 'A', text: 'exatamente o mesmo valor original.' },
      { letter: 'B', text: 'uma redução de 2%.' },
      { letter: 'C', text: 'uma redução de 4%.' },
      { letter: 'D', text: 'um aumento de 2%.' },
      { letter: 'E', text: 'um aumento de 4%.' },
    ],
    correctAnswer: 'C',
    resolution: {
      numericalDemonstration: [
        '1. Seja P₀ o preço original da coleção (podemos adotar P₀ = 100 para facilitar).',
        '2. Após o aumento de 20%, o fator multiplicativo é 1,20: P₁ = 1,20 × P₀.',
        '3. Após o desconto de 20% sobre P₁, o fator multiplicativo é 0,80: P_final = 0,80 × P₁ = 0,80 × 1,20 × P₀ = 0,96 × P₀.',
        '4. Como 0,96 = 1 - 0,04, o preço final corresponde a 96% do preço inicial, ou seja, uma redução acumulada de 4%.',
      ],
      appliedFormulas: [
        {
          formula: 'F_acumulado = (1 + i₁) · (1 - i₂)',
          description: 'Fator de variação percentual sucessiva.',
        },
      ],
      logicalReasoning:
        'Porcentagens sucessivas incidem sobre bases diferentes: o aumento de 20% incide sobre a base original (100 → 120), enquanto o desconto de 20% incide sobre uma base maior (20% de 120 = 24), levando o preço final para 120 - 24 = 96, o que representa queda de 4%.',
    },
  },
  {
    id: 'mat-2023-139',
    year: 2023,
    questionNumber: 139,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Álgebra',
    difficulty: 'Média',
    contextText:
      'Uma startup de tecnologia educacional registrou que o número de estudantes ativos na plataforma triplicou a cada quadrimestre ao longo de 2023. No primeiro quadrimestre do ano, havia 450 estudantes ativos.',
    commandText:
      'Mantendo-se essa mesma taxa geométrica de crescimento, o número de estudantes ativos no quarto quadrimestre consecutivo dessa série foi igual a:',
    alternatives: [
      { letter: 'A', text: '1.350.' },
      { letter: 'B', text: '4.050.' },
      { letter: 'C', text: '5.400.' },
      { letter: 'D', text: '12.150.' },
      { letter: 'E', text: '18.000.' },
    ],
    correctAnswer: 'D',
    resolution: {
      numericalDemonstration: [
        '1. Os valores formam uma Progressão Geométrica (PG) de primeiro termo a₁ = 450 e razão q = 3.',
        '2. Aplicando a fórmula do termo geral para n = 4: a₄ = a₁ · q^(4 - 1) = 450 × 3³.',
        '3. Como 3³ = 27, temos: a₄ = 450 × 27 = 12.150 estudantes ativos.',
      ],
      appliedFormulas: [
        {
          formula: 'aₙ = a₁ · q^(n - 1)',
          description: 'Termo geral de uma Progressão Geométrica (PG) de razão q.',
        },
      ],
      logicalReasoning:
        'Quando uma grandeza é multiplicada por um fator constante a cada período ("triplicou a cada quadrimestre"), o modelo algébrico correspondente é uma Progressão Geométrica de razão q = 3. No 4º período, o valor inicial foi multiplicado por 3 três vezes (q³ = 27).',
    },
  },
  {
    id: 'mat-2023-146',
    year: 2023,
    questionNumber: 146,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Geometria Plana',
    difficulty: 'Média',
    contextText:
      'Uma praça circular de raio igual a 20 metros possui uma pista de caminhada pavimentada ao redor de toda a sua borda externa. No centro da praça, há um palco hexagonal regular inscrito em uma circunferência interna de raio igual a 6 metros.',
    supportData: 'Considere √3 = 1,73.',
    commandText:
      'A área ocupada exclusivamente pelo palco hexagonal regular no centro da praça, em metro quadrado, é mais próxima de:',
    alternatives: [
      { letter: 'A', text: '54,0.' },
      { letter: 'B', text: '62,3.' },
      { letter: 'C', text: '93,4.' },
      { letter: 'D', text: '108,0.' },
      { letter: 'E', text: '186,8.' },
    ],
    correctAnswer: 'C',
    resolution: {
      numericalDemonstration: [
        '1. Todo hexágono regular inscrito em uma circunferência de raio R possui lado L exatamente igual ao raio: L = R = 6 m.',
        '2. O hexágono regular é composto por 6 triângulos equiláteros congruentes de lado L = 6 m.',
        '3. Calculando a área do hexágono: A_hex = 6 × (L² · √3) / 4 = 6 × (36 × 1,73) / 4.',
        '4. Simplificando: A_hex = 6 × 9 × 1,73 = 54 × 1,73 = 93,42 m² ≈ 93,4 m².',
      ],
      appliedFormulas: [
        {
          formula: 'A_hexágono = (3 · L² · √3) / 2',
          description: 'Área de um hexágono regular de lado L (soma de 6 triângulos equiláteros).',
        },
      ],
      logicalReasoning:
        'O raio da praça externa (20 m) é uma informação contextual que não interfere no cálculo da área do palco central. A propriedade-chave do hexágono regular inscrito é a decomposição em 6 triângulos equiláteros cujo lado coincide com o raio da circunferência circunscrita (6 m).',
    },
  },
  {
    id: 'mat-2023-158',
    year: 2023,
    questionNumber: 158,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Geometria Analítica',
    difficulty: 'Média',
    contextText:
      'No projeto de uma linha de metrô subterrânea representada no plano cartesiano (em quilômetros), o trecho retilíneo Norte-Sul passa pelas estações P(1, 2) e Q(5, 10). Uma passarela subterrânea de emergência deverá ser construída ao longo de uma reta perpendicular ao trecho PQ, passando exatamente pela estação Q(5, 10).',
    commandText:
      'O coeficiente angular da reta que contém a passarela de emergência e sua equação reduzida são, respectivamente:',
    alternatives: [
      { letter: 'A', text: 'm = 2 e y = 2x.' },
      { letter: 'B', text: 'm = -1/2 e y = -0,5x + 12,5.' },
      { letter: 'C', text: 'm = -2 e y = -2x + 20.' },
      { letter: 'D', text: 'm = 1/2 e y = 0,5x + 7,5.' },
      { letter: 'E', text: 'm = -1/2 e y = -0,5x + 10.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Coeficiente angular da reta PQ: m_PQ = (y_Q - y_P) / (x_Q - x_P) = (10 - 2) / (5 - 1) = 8 / 4 = 2.',
        '2. Pela condição de perpendicularidade entre retas no plano (m_⊥ · m_PQ = -1): m_⊥ = -1 / 2 = -0,5.',
        '3. Equação fundamental da reta perpendicular passando por Q(5, 10): y - 10 = -0,5 · (x - 5).',
        '4. Isolando y: y = -0,5x + 2,5 + 10 ⇒ y = -0,5x + 12,5.',
      ],
      appliedFormulas: [
        {
          formula: 'm₁ · m₂ = -1',
          description: 'Condição de perpendicularidade entre duas retas oblíquas no plano cartesiano.',
        },
        {
          formula: 'y - y₀ = m · (x - x₀)',
          description: 'Equação fundamental da reta que passa por (x₀, y₀) com declividade m.',
        },
      ],
      logicalReasoning:
        'Duas retas perpendiculares no plano cartesiano possuem coeficientes angulares que são inversos e opostos (m₂ = -1/m₁). Obtido m = -1/2, basta substituir as coordenadas do ponto de interseção Q(5, 10) para determinar o coeficiente linear n = 12,5.',
    },
  },
  {
    id: 'mat-2022-141',
    year: 2022,
    questionNumber: 141,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Estatística',
    difficulty: 'Média',
    contextText:
      'Dois atletas de tiro com arco, Atleta X e Atleta Y, disputam a última vaga na equipe olímpica. Nas 5 séries classificatórias, ambos obtiveram exatamente a mesma média aritmética de 90 pontos:\n• Pontuações do Atleta X: 88, 90, 90, 90, 92;\n• Pontuações do Atleta Y: 80, 85, 90, 95, 100.',
    supportData:
      'O treinador escolherá o atleta mais regular, isto é, aquele que apresentar o menor desvio padrão amostral populacional nas 5 séries.',
    commandText:
      'A variância populacional das pontuações do Atleta X e o atleta escolhido pelo treinador são, respectivamente:',
    alternatives: [
      { letter: 'A', text: '1,6 e Atleta X.' },
      { letter: 'B', text: '8,0 e Atleta X.' },
      { letter: 'C', text: '1,6 e Atleta Y.' },
      { letter: 'D', text: '50,0 e Atleta Y.' },
      { letter: 'E', text: '0,8 e Atleta X.' },
    ],
    correctAnswer: 'A',
    resolution: {
      numericalDemonstration: [
        '1. Média de ambos os atletas: x̄ = 90 pontos.',
        '2. Desvios do Atleta X em relação à média 90: (-2), 0, 0, 0, (+2).',
        '3. Quadrados dos desvios do Atleta X: (-2)² + 0² + 0² + 0² + (+2)² = 4 + 0 + 0 + 0 + 4 = 8.',
        '4. Variância populacional do Atleta X (n = 5): σ²_X = 8 / 5 = 1,6 (enquanto para Y seria [100 + 25 + 0 + 25 + 100]/5 = 50).',
        '5. Como σ_X < σ_Y, o Atleta X é muito mais regular e é o escolhido.',
      ],
      appliedFormulas: [
        {
          formula: 'σ² = [ ∑ (xᵢ - x̄)² ] / n',
          description: 'Variância populacional como média dos quadrados dos desvios em torno da média.',
        },
      ],
      logicalReasoning:
        'No ENEM, o conceito de "regularidade", "homogeneidade" ou "estabilidade" está sempre associado às medidas de dispersão (variância e desvio padrão): quanto mais próximos da média estão os dados individuais, menor é a variância e maior é a regularidade.',
    },
  },
  {
    id: 'mat-2022-154',
    year: 2022,
    questionNumber: 154,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Trigonometria',
    difficulty: 'Média',
    contextText:
      'Dois cabos de aço retilíneos sustentam o topo de uma antena vertical a partir de dois pontos de ancoragem A e B situados de um mesmo lado da antena, no solo plano horizontal. O cabo preso em A forma ângulo de 30° com o solo, e o cabo preso em B (mais próximo da base da antena) forma ângulo de 60° com o solo. A distância entre os pontos A e B no solo é de 20 metros.',
    supportData: 'Considere √3 = 1,73.',
    commandText:
      'O comprimento do cabo conectado ao ponto B e a altura da antena, em metro, são, respectivamente:',
    alternatives: [
      { letter: 'A', text: '20,0 m e 17,3 m.' },
      { letter: 'B', text: '17,3 m e 20,0 m.' },
      { letter: 'C', text: '10,0 m e 17,3 m.' },
      { letter: 'D', text: '20,0 m e 10,0 m.' },
      { letter: 'E', text: '34,6 m e 17,3 m.' },
    ],
    correctAnswer: 'A',
    resolution: {
      numericalDemonstration: [
        '1. No triângulo obtusângulo formado pelo topo T da antena e pelos pontos A e B no solo: o ângulo em A mede 30° e o ângulo externo em B mede 60°.',
        '2. Pelo Teorema do Ângulo Externo, o ângulo no topo T (ÂTB) vale 60° - 30° = 30°.',
        '3. Logo, o triângulo ATB é isósceles de base AT, implicando que o cabo TB tem a mesma medida do segmento AB no solo: TB = AB = 20,0 m.',
        '4. No triângulo retângulo formado pela antena de altura H e a hipotenusa TB = 20 m (com ângulo de 60°): H = TB · sen(60°) = 20 × (√3 / 2) = 10 × 1,73 = 17,3 m.',
      ],
      appliedFormulas: [
        {
          formula: 'θ_externo = α + β',
          description: 'Teorema do ângulo externo de um triângulo.',
        },
        {
          formula: 'sen(60°) = H / hipotenusa = √3 / 2',
          description: 'Razão seno no triângulo retângulo de 30°-60°-90°.',
        },
      ],
      logicalReasoning:
        'A configuração clássica de duas visadas de 30° e 60° gera sempre um triângulo isósceles lateral (ângulos de 30° e 30°), permitindo descobrir imediatamente a hipotenusa menor (20 m) sem precisar montar sistemas lineares longos com tangentes.',
    },
  },
  {
    id: 'mat-2022-179',
    year: 2022,
    questionNumber: 179,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Matemática Financeira',
    difficulty: 'Fácil',
    contextText:
      'Uma estudante aplicou um capital inicial de R$ 2.500,00 em um Certificado de Depósito Bancário (CDB) para custear sua matrícula universitária. A aplicação foi contratada sob regime de juros simples, com taxa de rendimento líquido de 1,2% ao mês, durante um período de 15 meses.',
    commandText:
      'O valor total dos juros obtidos e o montante final resgatado ao término dos 15 meses são, respectivamente:',
    alternatives: [
      { letter: 'A', text: 'R$ 300,00 e R$ 2.800,00.' },
      { letter: 'B', text: 'R$ 450,00 e R$ 2.950,00.' },
      { letter: 'C', text: 'R$ 450,00 e R$ 2.500,00.' },
      { letter: 'D', text: 'R$ 375,00 e R$ 2.875,00.' },
      { letter: 'E', text: 'R$ 540,00 e R$ 3.040,00.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Dados: Capital C = R$ 2.500,00; taxa mensal i = 1,2% = 0,012 a.m.; tempo t = 15 meses.',
        '2. Cálculo dos juros simples: J = C · i · t = 2.500 × 0,012 × 15.',
        '3. Como 2.500 × 0,012 = R$ 30,00 por mês, em 15 meses temos: J = 30 × 15 = R$ 450,00.',
        '4. Montante final resgatado: M = C + J = 2.500 + 450 = R$ 2.950,00.',
      ],
      appliedFormulas: [
        {
          formula: 'J = C · i · t   e   M = C + J',
          description: 'Juros e montante no regime de capitalização simples.',
        },
      ],
      logicalReasoning:
        'No regime de juros simples, a taxa incide sempre sobre o capital inicial (gerando um acréscimo constante de R$ 30,00 ao mês), formando uma Progressão Aritmética ao longo do tempo.',
    },
  },
  {
    id: 'mat-2021-141',
    year: 2021,
    questionNumber: 141,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Funções',
    difficulty: 'Fácil',
    contextText:
      'Uma empresa de entregas expressas por aplicativo cobra de seus clientes uma taxa fixa de coleta de R$ 8,50 acrescida de R$ 2,40 por quilômetro rodado no trajeto entre o ponto de retirada e o destino. Em determinado dia, uma laboratório enviou uma encomenda e pagou o valor total de R$ 44,50 pela corrida.',
    commandText:
      'A distância total percorrida nessa entrega, em quilômetro, foi igual a:',
    alternatives: [
      { letter: 'A', text: '12,0.' },
      { letter: 'B', text: '15,0.' },
      { letter: 'C', text: '18,5.' },
      { letter: 'D', text: '22,0.' },
      { letter: 'E', text: '25,0.' },
    ],
    correctAnswer: 'B',
    resolution: {
      numericalDemonstration: [
        '1. Modelando o custo C(x) por uma função afim da distância x (em km): C(x) = 2,40x + 8,50.',
        '2. Igualando ao valor pago C(x) = 44,50: 2,40x + 8,50 = 44,50.',
        '3. Subtraindo a taxa fixa: 2,40x = 44,50 - 8,50 = 36,00.',
        '4. Dividindo por 2,40: x = 36,00 / 2,40 = 360 / 24 = 15,0 km.',
      ],
      appliedFormulas: [
        {
          formula: 'f(x) = a · x + b',
          description: 'Função polinomial do 1º grau (função afim) com taxa variável a e custo fixo b.',
        },
      ],
      logicalReasoning:
        'A função afim f(x) = ax + b modela tarifas compostas por uma parcela fixa (coeficiente linear b = 8,50) e uma parcela proporcional ao consumo ou deslocamento (coeficiente angular a = 2,40).',
    },
  },
  {
    id: 'mat-2021-159',
    year: 2021,
    questionNumber: 159,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Geometria Espacial',
    difficulty: 'Média',
    contextText:
      'Um reservatório de água de um condomínio possui o formato de um paralelepípedo reto-retângulo com dimensões internas de 5,0 m de comprimento, 4,0 m de largura e 2,5 m de altura. No início da manhã, o reservatório encontrava-se com 70% de sua capacidade volumétrica máxima preenchida com água.',
    commandText:
      'O volume de água contido nesse reservatório no início da manhã, em litro, era igual a:',
    alternatives: [
      { letter: 'A', text: '35.' },
      { letter: 'B', text: '50.' },
      { letter: 'C', text: '3.500.' },
      { letter: 'D', text: '35.000.' },
      { letter: 'E', text: '50.000.' },
    ],
    correctAnswer: 'D',
    resolution: {
      numericalDemonstration: [
        '1. Volume total do paralelepípedo reto-retângulo: V_total = a · b · c = 5,0 × 4,0 × 2,5 = 50,0 m³.',
        '2. Volume ocupado pela água (70% da capacidade): V_água = 0,70 × 50,0 m³ = 35,0 m³.',
        '3. Convertendo de metros cúbicos para litros (1 m³ = 1.000 L): V_água = 35,0 × 1.000 = 35.000 litros.',
      ],
      appliedFormulas: [
        {
          formula: 'V_paralelepípedo = a · b · c',
          description: 'Volume de um prisma reto-retângulo de dimensões a, b e c.',
        },
        {
          formula: '1 m³ = 1.000 L = 10³ dm³',
          description: 'Equivalência fundamental entre capacidade em litros e volume em metros cúbicos.',
        },
      ],
      logicalReasoning:
        'A conversão entre metros cúbicos e litros (1 m³ = 1.000 L) está presente na quase totalidade das questões de Geometria Espacial do ENEM. Repare que as alternativas A (35) e C (3.500) são distratores desenhados especificamente para erros de potência de 10 na conversão de unidades.',
    },
  },
  {
    id: 'mat-2021-166',
    year: 2021,
    questionNumber: 166,
    greatArea: 'Matemática e suas Tecnologias',
    discipline: 'Matemática',
    topic: 'Probabilidade',
    difficulty: 'Média',
    contextText:
      'Uma urna utilizada em uma dinâmica de grupo contém 10 bolas idênticas ao tato, sendo 6 bolas rosas e 4 bolas brancas. Uma estudante retira, sucessivamente e sem reposição, duas bolas dessa urna ao acaso.',
    commandText:
      'A probabilidade de que as duas bolas retiradas sejam ambas da cor rosa é igual a:',
    alternatives: [
      { letter: 'A', text: '1/3' },
      { letter: 'B', text: '9/25' },
      { letter: 'C', text: '2/5' },
      { letter: 'D', text: '3/5' },
      { letter: 'E', text: '12/25' },
    ],
    correctAnswer: 'A',
    resolution: {
      numericalDemonstration: [
        '1. Probabilidade de a 1ª bola retirada ser rosa: P(R₁) = 6 / 10.',
        '2. Como a retirada ocorre SEM reposição, restam 9 bolas na urna, das quais 5 são rosas.',
        '3. Probabilidade condicional de a 2ª bola ser rosa dado que a 1ª foi rosa: P(R₂ | R₁) = 5 / 9.',
        '4. Pelo teorema da multiplicação: P(R₁ ∩ R₂) = (6 / 10) × (5 / 9) = 30 / 90 = 1/3.',
      ],
      appliedFormulas: [
        {
          formula: 'P(A ∩ B) = P(A) · P(B | A)',
          description: 'Teorema da multiplicação de probabilidades para extrações sem reposição.',
        },
      ],
      logicalReasoning:
        'Em extrações sucessivas sem reposição, o espaço amostral e o número de casos favoráveis diminuem de uma etapa para a seguinte (de 6/10 para 5/9). Caso houvesse reposição, a resposta seria (6/10)² = 36/100 = 9/25 (Alternativa B, distrator para quem ignora a expressão "sem reposição").',
    },
  },
];

