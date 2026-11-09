import React from 'react';
import { Question, Topic } from '../types/enem';

interface TopicIllustrationProps {
  question: Question;
}

export interface TopicStudyMeta {
  title: string;
  caption: string;
  keyTakeaway: string;
  theorySummary: string;
  commonTrap: string;
  renderSvg: (q?: Question) => React.ReactNode;
}

export const TOPIC_VISUALS: Record<Topic, TopicStudyMeta> = {
  Estatística: {
    title: 'Esquema Visual: Rol Ordenado, Média, Mediana e Dispersão',
    caption:
      'Representação gráfica da distribuição de dados em rol crescente, destacando o termo central (Mediana), a concentração de frequência (Moda) e o ponto de equilíbrio (Média).',
    keyTakeaway:
      'Sempre ordene os dados antes de buscar a Mediana! Na média ponderada, multiplique cada valor pelo seu peso e divida pela soma dos pesos.',
    theorySummary:
      'As medidas de tendência central resumem um conjunto de dados em um valor representativo (Média Aritmética Simples/Ponderada, Mediana e Moda), enquanto as medidas de dispersão (Amplitude, Variância e Desvio Padrão) avaliam a regularidade ou homogeneidade da amostra em torno da média.',
    commonTrap:
      'Tomar o termo central da lista original sem antes ordenar os valores em ordem crescente ou decrescente (rol), ou esquecer de dividir pela soma dos pesos na média ponderada.',
    renderSvg: () => (
      <svg viewBox="0 0 420 155" className="w-full h-auto max-h-44" fill="none">
        <rect x="8" y="8" width="404" height="139" rx="14" fill="#FAF0F2" stroke="#F3E3E7" />
        <line x1="35" y1="115" x2="385" y2="115" stroke="#8C4A5F" strokeWidth="2" />
        {[
          { x: 52, h: 38, val: 'x₁', label: 'Mín' },
          { x: 98, h: 46, val: 'x₂', label: '' },
          { x: 144, h: 58, val: 'x₃', label: 'Moda' },
          { x: 190, h: 58, val: 'x₄', label: 'Mediana' },
          { x: 236, h: 68, val: 'x₅', label: '' },
          { x: 282, h: 76, val: 'x₆', label: '' },
          { x: 328, h: 90, val: 'x₇', label: 'Máx' },
        ].map((b, i) => (
          <g key={i}>
            <rect
              x={b.x}
              y={115 - b.h}
              width="28"
              height={b.h}
              rx="6"
              fill={i === 3 ? '#7A3E53' : i === 2 ? '#8C4A5F' : '#E5C5D0'}
            />
            <text
              x={b.x + 14}
              y={131}
              textAnchor="middle"
              fontSize="10"
              fontWeight="700"
              fill="#4A4045"
            >
              {b.val}
            </text>
            {b.label && (
              <text
                x={b.x + 14}
                y={115 - b.h - 6}
                textAnchor="middle"
                fontSize="9.5"
                fontWeight="800"
                fill="#7A3E53"
              >
                {b.label}
              </text>
            )}
          </g>
        ))}
        <line
          x1="35"
          y1="53"
          x2="385"
          y2="53"
          stroke="#7A3E53"
          strokeWidth="1.8"
          strokeDasharray="5 4"
        />
        <rect x="295" y="20" width="102" height="22" rx="6" fill="#7A3E53" />
        <text x="346" y="34" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#FFFFFF">
          Média x̄ = ∑xᵢ / n
        </text>
      </svg>
    ),
  },

  Funções: {
    title: 'Esquema Visual: Comportamento de Funções (Afim, Quadrática e Exponencial)',
    caption:
      'Trajetória parabólica com identificação do Vértice V(x_v, y_v) de altura máxima, raízes e comparação com crescimento linear/exponencial.',
    keyTakeaway:
      'Em funções quadráticas f(x) = ax² + bx + c com a < 0, o pedido de "valor máximo" refere-se a y_v = -Δ/(4a), enquanto "em qual ponto/instante ocorre o máximo" refere-se a x_v = -b/(2a).',
    theorySummary:
      'A função afim f(x) = ax + b modela taxas constantes de variação; a função quadrática f(x) = ax² + bx + c modela trajetórias parabólicas e problemas de otimização (máximos e mínimos no vértice); e a função exponencial f(t) = N₀·b^(kt) modela crescimentos populacionais e decaimentos.',
    commonTrap:
      'Confundir a coordenada x_v (domínio: tempo ou distância horizontal) com a coordenada y_v (imagem: altura máxima, lucro máximo) no vértice da parábola.',
    renderSvg: () => (
      <svg viewBox="0 0 420 155" className="w-full h-auto max-h-44" fill="none">
        <rect x="8" y="8" width="404" height="139" rx="14" fill="#FAF0F2" stroke="#F3E3E7" />
        <line x1="45" y1="125" x2="375" y2="125" stroke="#4A4045" strokeWidth="1.8" />
        <line x1="65" y1="135" x2="65" y2="20" stroke="#4A4045" strokeWidth="1.8" />
        <text x="382" y="128" fontSize="11" fontWeight="700" fill="#4A4045">
          x
        </text>
        <text x="58" y="18" fontSize="11" fontWeight="700" fill="#4A4045">
          y
        </text>
        <path
          d="M 65 95 Q 195 -25 325 125"
          stroke="#7A3E53"
          strokeWidth="3"
          fill="none"
        />
        <line
          x1="195"
          y1="35"
          x2="195"
          y2="125"
          stroke="#8C4A5F"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <line
          x1="65"
          y1="35"
          x2="195"
          y2="35"
          stroke="#8C4A5F"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <circle cx="195" cy="35" r="5" fill="#7A3E53" />
        <rect x="205" y="20" width="136" height="24" rx="6" fill="#FFFFFF" stroke="#7A3E53" />
        <text x="273" y="35" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">
          Vértice V(x_v , y_máx)
        </text>
        <text x="195" y="139" textAnchor="middle" fontSize="10" fontWeight="700" fill="#7A3E53">
          x_v = -b / (2a)
        </text>
        <text x="38" y="38" textAnchor="middle" fontSize="10" fontWeight="700" fill="#7A3E53">
          y_v
        </text>
      </svg>
    ),
  },

  'Geometria Espacial': {
    title: 'Esquema Visual: Sólidos Geométricos (Cilindro, Cone, Pirâmide e Prisma)',
    caption:
      'Comparação volumétrica entre um cilindro reto (V = π·r²·h) e um cone reto (V = 1/3·π·R²·H), além da escala tridimensional V_real / V_maquete = k³.',
    keyTakeaway:
      'Sólidos com ponta (cone e pirâmide) têm exatamente 1/3 do volume do prisma/cilindro de mesma área da base e mesma altura. Não se esqueça: 1 m³ = 1.000 litros!',
    theorySummary:
      'O volume de prismas e cilindros é dado pelo produto da área da base pela altura (V = A_b · h), enquanto pirâmides e cones possuem volume igual a um terço desse produto (V = A_b · h / 3). Em maquetes de escala linear 1:k, as áreas escalam por k² e os volumes por k³.',
    commonTrap:
      'Multiplicar o volume da maquete apenas pela escala linear k em vez de k³, ou errar na conversão de cm³ para m³ (1 m³ = 10⁶ cm³ = 1.000 L).',
    renderSvg: () => (
      <svg viewBox="0 0 420 155" className="w-full h-auto max-h-44" fill="none">
        <rect x="8" y="8" width="404" height="139" rx="14" fill="#FAF0F2" stroke="#F3E3E7" />
        <ellipse cx="105" cy="38" rx="36" ry="11" fill="#E5C5D0" stroke="#7A3E53" strokeWidth="2" />
        <path d="M69 38 L69 112 A36 11 0 0 0 141 112 L141 38" fill="#FAF0F2" fillOpacity="0.6" stroke="#7A3E53" strokeWidth="2" />
        <ellipse cx="105" cy="112" rx="36" ry="11" stroke="#7A3E53" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="105" y1="38" x2="105" y2="112" stroke="#8C4A5F" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="105" y1="112" x2="141" y2="112" stroke="#7A3E53" strokeWidth="2" />
        <text x="122" y="108" fontSize="9.5" fontWeight="700" fill="#7A3E53">r</text>
        <text x="95" y="78" fontSize="9.5" fontWeight="700" fill="#7A3E53">h</text>
        <text x="105" y="138" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">
          V_cil = π · r² · h
        </text>
        <text x="205" y="82" textAnchor="middle" fontSize="18" fontWeight="800" fill="#8C4A5F">
          ⇔
        </text>
        <ellipse cx="305" cy="112" rx="46" ry="13" fill="#E5C5D0" stroke="#7A3E53" strokeWidth="2" />
        <path d="M259 112 L305 28 L351 112" stroke="#7A3E53" strokeWidth="2" fill="none" />
        <line x1="305" y1="28" x2="305" y2="112" stroke="#8C4A5F" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="305" y1="112" x2="351" y2="112" stroke="#7A3E53" strokeWidth="2" />
        <text x="326" y="108" fontSize="9.5" fontWeight="700" fill="#7A3E53">R</text>
        <text x="294" y="78" fontSize="9.5" fontWeight="700" fill="#7A3E53">H</text>
        <text x="305" y="138" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">
          V_cone = (π · R² · H) / 3
        </text>
      </svg>
    ),
  },

  Probabilidade: {
    title: 'Esquema Visual: Diagrama de Venn, Espaço Amostral Reduzido e Árvore de Eventos',
    caption:
      'Visualização da interseção A ∩ B em problemas de probabilidade condicional P(B|A) e eventos complementares (P = 1 - P_nenhum).',
    keyTakeaway:
      'Quando o texto restringe o grupo ("escolhendo-se um aluno ENTRE os que cursam IA"), o denominador deixa de ser o total geral e passa a ser apenas o conjunto condicionante n(A).',
    theorySummary:
      'A probabilidade de um evento em espaço equiprovável é a razão entre casos favoráveis e casos possíveis. Na probabilidade condicional P(B|A), restringimos o universo ao conjunto A. Em extrações sucessivas sem reposição, multiplicam-se as probabilidades atualizando o total restante.',
    commonTrap:
      'Usar o total geral de elementos no denominador quando a pergunta especifica um subgrupo condicionante, ou esquecer de subtrair 1 do denominador em sorteios sem reposição.',
    renderSvg: () => (
      <svg viewBox="0 0 420 155" className="w-full h-auto max-h-44" fill="none">
        <rect x="8" y="8" width="404" height="139" rx="14" fill="#FAF0F2" stroke="#F3E3E7" />
        <circle cx="145" cy="78" r="46" fill="#E5C5D0" fillOpacity="0.65" stroke="#7A3E53" strokeWidth="2" />
        <circle cx="205" cy="78" r="46" fill="#8C4A5F" fillOpacity="0.25" stroke="#8C4A5F" strokeWidth="2" />
        <text x="116" y="82" textAnchor="middle" fontSize="10" fontWeight="700" fill="#7A3E53">
          A - B
        </text>
        <text x="175" y="82" textAnchor="middle" fontSize="11" fontWeight="800" fill="#7A3E53">
          A ∩ B
        </text>
        <text x="234" y="82" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4A4045">
          B - A
        </text>
        <text x="135" y="25" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">
          Conjunto A (Condição)
        </text>
        <rect x="272" y="38" width="128" height="78" rx="10" fill="#FFFFFF" stroke="#7A3E53" strokeWidth="1.5" />
        <text x="336" y="60" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">
          Prob. Condicional
        </text>
        <text x="336" y="82" textAnchor="middle" fontSize="11" fontWeight="800" fill="#4A4045">
          P(B|A) = n(A ∩ B) / n(A)
        </text>
        <text x="336" y="102" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#8C4A5F">
          Complementar: 1 - P(Aᶜ)
        </text>
      </svg>
    ),
  },

  'Matemática Financeira': {
    title: 'Esquema Visual: Fluxo de Caixa no Tempo, Descontos e Juros',
    caption:
      'Comparação de poder de compra na mesma data focal (t = 0 vs t = 30 dias) e efeito de variações percentuais sucessivas (1 + i₁)·(1 - i₂).',
    keyTakeaway:
      'Nunca compare nem some valores financeiros em datas diferentes sem aplicar a taxa de juros do período! E lembre-se: aumento de 20% seguido de desconto de 20% resulta em 1,20 × 0,80 = 0,96 (-4%).',
    theorySummary:
      'No regime de juros simples, os juros crescem linearmente sobre o capital inicial (J = C·i·t). No regime composto, os juros incidem sobre o saldo acumulado (M = C·(1+i)ⁿ). Em compras à vista vs. parceladas, projeta-se o saldo aplicado para a data da parcela.',
    commonTrap:
      'Achar que um aumento de x% seguido de um desconto de x% retorna ao valor original (na verdade sempre resulta em redução de x²/100%).',
    renderSvg: () => (
      <svg viewBox="0 0 420 155" className="w-full h-auto max-h-44" fill="none">
        <rect x="8" y="8" width="404" height="139" rx="14" fill="#FAF0F2" stroke="#F3E3E7" />
        <line x1="45" y1="88" x2="365" y2="88" stroke="#7A3E53" strokeWidth="2.5" />
        <polygon points="365,83 377,88 365,93" fill="#7A3E53" />
        <circle cx="85" cy="88" r="6" fill="#7A3E53" />
        <text x="85" y="108" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">
          t = 0 (À vista)
        </text>
        <rect x="35" y="34" width="105" height="36" rx="8" fill="#FFFFFF" stroke="#7A3E53" />
        <text x="87" y="50" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#4A4045">
          Capital Inicial C₀
        </text>
        <text x="87" y="63" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#7A3E53">
          Desconto: V·(1 - d)
        </text>
        <path d="M 145 48 Q 210 14 275 48" stroke="#8C4A5F" strokeWidth="2" strokeDasharray="4 3" fill="none" />
        <text x="210" y="26" textAnchor="middle" fontSize="10" fontWeight="800" fill="#8C4A5F">
          × (1 + i)ⁿ
        </text>
        <circle cx="315" cy="88" r="6" fill="#7A3E53" />
        <text x="315" y="108" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">
          t = n (Prazo)
        </text>
        <rect x="260" y="34" width="115" height="36" rx="8" fill="#7A3E53" />
        <text x="317" y="50" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#FAF0F2">
          Montante Futuro M
        </text>
        <text x="317" y="63" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#FFFFFF">
          M = C₀ · (1 + i)ⁿ
        </text>
      </svg>
    ),
  },

  Trigonometria: {
    title: 'Esquema Visual: Razões no Triângulo Retângulo e Funções Periódicas',
    caption:
      'Relação entre visada angular (30°/60°), altura do instrumento e comportamento periódico da função cosseno h(t) = A + B·cos(ωt).',
    keyTakeaway:
      'Em problemas de teodolito, lembre-se de somar a altura do observador/aparelho ao final! Em funções trigonométricas periódicas, verifique as duas soluções dentro de um ciclo [0, 2π].',
    theorySummary:
      'No triângulo retângulo, sen(θ) = CO/HIP, cos(θ) = CA/HIP e tg(θ) = CO/CA. Nos fenômenos periódicos modelados por f(t) = A + B·cos(ωt + φ), A é o valor médio, |B| é a amplitude (oscilação máxima em torno de A) e P = 2π/|ω| é o período.',
    commonTrap:
      'Esquecer de adicionar a altura do teodolito/observador à altura calculada pelo cateto oposto, ou considerar apenas o arco do 1º quadrante ao resolver inequações trigonométricas.',
    renderSvg: () => (
      <svg viewBox="0 0 420 155" className="w-full h-auto max-h-44" fill="none">
        <rect x="8" y="8" width="404" height="139" rx="14" fill="#FAF0F2" stroke="#F3E3E7" />
        <polygon points="40,120 175,120 175,32" fill="#E5C5D0" fillOpacity="0.45" stroke="#7A3E53" strokeWidth="2.2" />
        <rect x="165" y="110" width="10" height="10" stroke="#7A3E53" strokeWidth="1.5" />
        <path d="M 72 120 A 32 32 0 0 0 67 102" stroke="#7A3E53" strokeWidth="1.8" />
        <text x="82" y="114" fontSize="10" fontWeight="800" fill="#7A3E53">θ (30°/60°)</text>
        <text x="184" y="80" fontSize="10" fontWeight="800" fill="#7A3E53">h = d·tg(θ)</text>
        <text x="108" y="135" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4A4045">Distância d</text>
        <line x1="245" y1="80" x2="395" y2="80" stroke="#8C4A5F" strokeWidth="1.4" strokeDasharray="3 3" />
        <path
          d="M 250 42 C 275 42, 290 118, 320 118 C 350 118, 365 42, 390 42"
          stroke="#7A3E53"
          strokeWidth="2.5"
          fill="none"
        />
        <line x1="245" y1="60" x2="395" y2="60" stroke="#7A3E53" strokeWidth="1.4" />
        <text x="320" y="28" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">
          Ciclo Periódico P = 2π/ω
        </text>
        <text x="320" y="135" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#8C4A5F">
          h(t) = A + B·cos(ωt)
        </text>
      </svg>
    ),
  },

  Álgebra: {
    title: 'Esquema Visual: Progressões (PA e PG) e Sistemas Lineares',
    caption:
      'Diferenciação visual entre crescimento aritmético constante (+r a cada etapa) e crescimento geométrico multiplicativo (×q a cada etapa).',
    keyTakeaway:
      'Soma constante por período = Progressão Aritmética (aₙ = a₁ + (n-1)r). Multiplicação constante por período (dobrou, triplicou) = Progressão Geométrica (aₙ = a₁·qⁿ⁻¹).',
    theorySummary:
      'A Álgebra no ENEM concentra-se na tradução de enunciados em sistemas de equações lineares e no reconhecimento de padrões sequenciais: Progressões Aritméticas (diferença constante entre termos consecutivos) e Progressões Geométricas (razão multiplicativa constante).',
    commonTrap:
      'Confundir o valor do n-ésimo termo (aₙ) com a soma acumulada dos n primeiros termos (Sₙ) em problemas de metas semanais ou produção acumulada.',
    renderSvg: () => (
      <svg viewBox="0 0 420 155" className="w-full h-auto max-h-44" fill="none">
        <rect x="8" y="8" width="404" height="139" rx="14" fill="#FAF0F2" stroke="#F3E3E7" />
        <text x="30" y="34" fontSize="10.5" fontWeight="800" fill="#7A3E53">
          Progressão Aritmética (PA): +r constante
        </text>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={30 + i * 92} y="44" width="64" height="28" rx="8" fill="#FFFFFF" stroke="#7A3E53" strokeWidth="1.6" />
            <text x={62 + i * 92} y="62" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">
              a₁ + {i}r
            </text>
            {i < 3 && (
              <text x={108 + i * 92} y="62" textAnchor="middle" fontSize="10" fontWeight="800" fill="#8C4A5F">
                +r →
              </text>
            )}
          </g>
        ))}
        <text x="30" y="96" fontSize="10.5" fontWeight="800" fill="#7A3E53">
          Progressão Geométrica (PG): ×q constante
        </text>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={30 + i * 92} y="106" width="64" height="28" rx="8" fill="#7A3E53" />
            <text x={62 + i * 92} y="124" textAnchor="middle" fontSize="10" fontWeight="800" fill="#FFFFFF">
              a₁ · q^{i}
            </text>
            {i < 3 && (
              <text x={108 + i * 92} y="124" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">
                ×q →
              </text>
            )}
          </g>
        ))}
      </svg>
    ),
  },

  'Geometria Plana': {
    title: 'Esquema Visual: Polígonos, Setores Circulares e Decomposição de Áreas',
    caption:
      'Cálculo de áreas hachuradas por subtração de figuras planas (trapézio menos setores circulares) e decomposição do hexágono regular em 6 triângulos equiláteros.',
    keyTakeaway:
      'Todo hexágono regular de lado L divide-se em 6 triângulos equiláteros de área (L²√3)/4. Em áreas sombreadas, calcule a área total externa e subtraia os recortes internos.',
    theorySummary:
      'Estuda relações métricas no triângulo retângulo (Teorema de Pitágoras, ternos 3-4-5) e áreas de figuras planas: retângulo (b·h), triângulo (b·h/2), triângulo equilátero (L²√3/4), trapézio ((B+b)h/2), círculo (πr²) e setor circular ((α/360°)πr²).',
    commonTrap:
      'Esquecer de somar todos os trechos pedidos em problemas de perímetro/estrutura metálica ou usar o diâmetro no lugar do raio ao calcular áreas circulares.',
    renderSvg: () => (
      <svg viewBox="0 0 420 155" className="w-full h-auto max-h-44" fill="none">
        <rect x="8" y="8" width="404" height="139" rx="14" fill="#FAF0F2" stroke="#F3E3E7" />
        <polygon points="35,120 185,120 150,36 35,36" fill="#E5C5D0" fillOpacity="0.55" stroke="#7A3E53" strokeWidth="2" />
        <path d="M 35 62 A 26 26 0 0 0 61 36 L 35 36 Z" fill="#7A3E53" />
        <path d="M 35 94 A 26 26 0 0 1 61 120 L 35 120 Z" fill="#7A3E53" />
        <text x="108" y="82" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">
          A_útil = A_total - A_setores
        </text>
        <text x="108" y="138" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#4A4045">
          Trapézio: (B + b)·h / 2
        </text>
        <polygon
          points="315,28 358,52 358,100 315,124 272,100 272,52"
          fill="#FFFFFF"
          stroke="#7A3E53"
          strokeWidth="2"
        />
        <line x1="272" y1="52" x2="358" y2="100" stroke="#8C4A5F" strokeWidth="1.3" strokeDasharray="3 3" />
        <line x1="272" y1="100" x2="358" y2="52" stroke="#8C4A5F" strokeWidth="1.3" strokeDasharray="3 3" />
        <line x1="315" y1="28" x2="315" y2="124" stroke="#8C4A5F" strokeWidth="1.3" strokeDasharray="3 3" />
        <text x="315" y="140" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#7A3E53">
          Hexágono = 6 × (L²√3 / 4)
        </text>
      </svg>
    ),
  },

  'Geometria Analítica': {
    title: 'Esquema Visual: Plano Cartesiano, Circunferência, Ponto Médio e Retas',
    caption:
      'Representação da circunferência de centro C(x₀, y₀) e raio R, distância entre pontos por Pitágoras e condição de perpendicularidade m₁·m₂ = -1.',
    keyTakeaway:
      'Na equação reduzida da circunferência (x - x₀)² + (y - y₀)² = R², inverta o sinal das coordenadas do centro e eleve o raio ao quadrado!',
    theorySummary:
      'Traduz elementos geométricos em equações algébricas no plano cartesiano: distância entre dois pontos d = √(Δx² + Δy²), ponto médio M((x_A+x_B)/2, (y_A+y_B)/2), inclinação da reta m = Δy/Δx, retas perpendiculares (m₁·m₂ = -1) e circunferência.',
    commonTrap:
      'Deixar o raio R sem elevar ao quadrado no segundo membro da equação da circunferência ou não trocar o sinal de x₀ e y₀ quando uma coordenada do centro é negativa.',
    renderSvg: () => (
      <svg viewBox="0 0 420 155" className="w-full h-auto max-h-44" fill="none">
        <rect x="8" y="8" width="404" height="139" rx="14" fill="#FAF0F2" stroke="#F3E3E7" />
        <line x1="30" y1="115" x2="215" y2="115" stroke="#8C4A5F" strokeWidth="1.5" />
        <line x1="55" y1="138" x2="55" y2="20" stroke="#8C4A5F" strokeWidth="1.5" />
        <circle cx="135" cy="72" r="42" fill="#E5C5D0" fillOpacity="0.45" stroke="#7A3E53" strokeWidth="2.2" />
        <circle cx="135" cy="72" r="3.5" fill="#7A3E53" />
        <line x1="135" y1="72" x2="171" y2="50" stroke="#7A3E53" strokeWidth="2" />
        <text x="150" y="54" fontSize="10" fontWeight="800" fill="#7A3E53">R</text>
        <text x="135" y="86" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#7A3E53">
          C(x₀, y₀)
        </text>
        <line x1="255" y1="112" x2="375" y2="40" stroke="#7A3E53" strokeWidth="2.5" />
        <circle cx="255" cy="112" r="4" fill="#7A3E53" />
        <circle cx="315" cy="76" r="4.5" fill="#8C4A5F" />
        <circle cx="375" cy="40" r="4" fill="#7A3E53" />
        <text x="255" y="128" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#7A3E53">A(x_A, y_A)</text>
        <text x="315" y="64" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#7A3E53">Ponto Médio M</text>
        <text x="370" y="28" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#7A3E53">B(x_B, y_B)</text>
        <text x="315" y="136" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#4A4045">
          d = √(Δx² + Δy²) • m_⊥ = -1/m
        </text>
      </svg>
    ),
  },

  Mecânica: {
    title: 'Esquema Visual: Cinemática de Frenagem, Trabalho e Conservação de Energia',
    caption:
      'Conversão de energia potencial gravitacional (E_p = m·g·h) em energia cinética (E_c = m·v²/2) e dissipação pelo trabalho da força de atrito (W_fat = -F_at·Δs).',
    keyTakeaway:
      'Sempre converta km/h para m/s dividindo por 3,6 antes de aplicar Torricelli (v² = v₀² + 2aΔs) ou Energia Cinética!',
    theorySummary:
      'Abrange o Movimento Uniformemente Variado (frenagens via Equação de Torricelli), Dinâmica e Leis de Newton, Teorema da Energia Cinética (W_res = ΔE_c), Conservação da Energia Mecânica e Potência Hidráulica/Mecânica (P = E/Δt, η = P_útil/P_total).',
    commonTrap:
      'Usar velocidade em km/h diretamente nas fórmulas de Torricelli ou Energia Cinética sem dividir por 3,6.',
    renderSvg: () => (
      <svg viewBox="0 0 420 155" className="w-full h-auto max-h-44" fill="none">
        <rect x="8" y="8" width="404" height="139" rx="14" fill="#FAF0F2" stroke="#F3E3E7" />
        <path d="M 40 35 L 155 115 L 380 115" stroke="#7A3E53" strokeWidth="2.5" fill="none" />
        <line x1="40" y1="35" x2="40" y2="115" stroke="#8C4A5F" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="28" y="78" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">h</text>
        <rect x="44" y="20" width="24" height="16" rx="4" fill="#7A3E53" />
        <text x="95" y="32" fontSize="9.5" fontWeight="800" fill="#7A3E53">E_p = m·g·h (v₀ = 0)</text>
        <rect x="175" y="99" width="28" height="16" rx="4" fill="#8C4A5F" />
        <line x1="208" y1="107" x2="245" y2="107" stroke="#7A3E53" strokeWidth="2" />
        <polygon points="245,103 253,107 245,111" fill="#7A3E53" />
        <text x="215" y="92" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#7A3E53">
          E_c = m·v²/2
        </text>
        <rect x="335" y="99" width="28" height="16" rx="4" fill="#E5C5D0" stroke="#7A3E53" strokeWidth="1.5" />
        <text x="349" y="90" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#4A4045">
          v_final = 0
        </text>
        <text x="265" y="134" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">
          |W_res| = F_at · Δs = ΔE_c
        </text>
      </svg>
    ),
  },

  Eletrodinâmica: {
    title: 'Esquema Visual: Circuitos Elétricos, Lei de Ohm e Potência Dissipada',
    caption:
      'Associação mista de resistores (R₁ em série com o paralelo R₂ // R₃) e relação P = U²/R em chuveiros elétricos sob tensão constante.',
    keyTakeaway:
      'Sob tensão constante (U = 220 V), potência e resistência são inversamente proporcionais (P = U²/R): menor resistência = maior corrente = modo Inverno (mais quente).',
    theorySummary:
      'Analisa circuitos em corrente contínua ou eficaz através da Primeira Lei de Ohm (U = R·i), associações de resistores em série (R_eq = ∑Rᵢ) e em paralelo (1/R_eq = ∑1/Rᵢ), potência elétrica (P = U·i = R·i² = U²/R) e consumo mensal de energia (E = P·Δt em kWh).',
    commonTrap:
      'Supor que para aquecer mais a água do chuveiro deve-se aumentar a resistência elétrica (na verdade, sob tensão constante, deve-se diminuir a resistência para aumentar a corrente e a potência P = U²/R).',
    renderSvg: () => (
      <svg viewBox="0 0 420 155" className="w-full h-auto max-h-44" fill="none">
        <rect x="8" y="8" width="404" height="139" rx="14" fill="#FAF0F2" stroke="#F3E3E7" />
        <line x1="45" y1="78" x2="95" y2="78" stroke="#7A3E53" strokeWidth="2" />
        <rect x="95" y="66" width="52" height="24" rx="5" fill="#FFFFFF" stroke="#7A3E53" strokeWidth="2" />
        <text x="121" y="82" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">R₁ (Série)</text>
        <line x1="147" y1="78" x2="185" y2="78" stroke="#7A3E53" strokeWidth="2" />
        <line x1="185" y1="45" x2="185" y2="111" stroke="#7A3E53" strokeWidth="2" />
        <line x1="185" y1="45" x2="215" y2="45" stroke="#7A3E53" strokeWidth="2" />
        <line x1="185" y1="111" x2="215" y2="111" stroke="#7A3E53" strokeWidth="2" />
        <rect x="215" y="33" width="56" height="24" rx="5" fill="#7A3E53" />
        <text x="243" y="49" textAnchor="middle" fontSize="10" fontWeight="800" fill="#FFFFFF">R₂</text>
        <rect x="215" y="99" width="56" height="24" rx="5" fill="#8C4A5F" />
        <text x="243" y="115" textAnchor="middle" fontSize="10" fontWeight="800" fill="#FFFFFF">R₃</text>
        <line x1="271" y1="45" x2="300" y2="45" stroke="#7A3E53" strokeWidth="2" />
        <line x1="271" y1="111" x2="300" y2="111" stroke="#7A3E53" strokeWidth="2" />
        <line x1="300" y1="45" x2="300" y2="111" stroke="#7A3E53" strokeWidth="2" />
        <line x1="300" y1="78" x2="330" y2="78" stroke="#7A3E53" strokeWidth="2" />
        <rect x="332" y="32" width="70" height="90" rx="8" fill="#FFFFFF" stroke="#F3E3E7" />
        <text x="367" y="54" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#7A3E53">U = R · i</text>
        <text x="367" y="78" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#7A3E53">P = U · i</text>
        <text x="367" y="102" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#7A3E53">P = U² / R</text>
      </svg>
    ),
  },

  Termologia: {
    title: 'Esquema Visual: Equilíbrio Térmico, Propagação de Calor e Ciclo de Carnot',
    caption:
      'Troca de calor sensível até atingir a temperatura de equilíbrio (∑Q = 0) e fluxo energético de uma máquina térmica entre Fonte Quente (T_Q) e Fonte Fria (T_F).',
    keyTakeaway:
      'Na calorimetria (Q = m·c·ΔT), a soma algébrica dos calores trocados é zero. Em máquinas térmicas de Carnot, converta sempre °C para Kelvin (K = °C + 273)!',
    theorySummary:
      'Reúne Calorimetria (calor sensível Q = m·c·ΔT, calor latente Q = m·L e equilíbrio térmico ∑Q = 0), mecanismos de transferência de calor (condução, convecção e irradiação) e Termodinâmica (1ª e 2ª Leis, máquinas térmicas e ciclo de Carnot).',
    commonTrap:
      'Calcular o rendimento de Carnot η = 1 - T_F/T_Q usando temperaturas em graus Celsius em vez de Kelvin.',
    renderSvg: () => (
      <svg viewBox="0 0 420 155" className="w-full h-auto max-h-44" fill="none">
        <rect x="8" y="8" width="404" height="139" rx="14" fill="#FAF0F2" stroke="#F3E3E7" />
        <rect x="28" y="45" width="76" height="58" rx="10" fill="#7A3E53" />
        <text x="66" y="71" textAnchor="middle" fontSize="10" fontWeight="800" fill="#FFFFFF">Corpo Quente</text>
        <text x="66" y="86" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#FAF0F2">T_Q (Cede Q)</text>
        <line x1="110" y1="74" x2="155" y2="74" stroke="#7A3E53" strokeWidth="2.5" />
        <polygon points="155,69 165,74 155,79" fill="#7A3E53" />
        <text x="136" y="64" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#7A3E53">Fluxo Q</text>
        <rect x="170" y="45" width="76" height="58" rx="10" fill="#FFFFFF" stroke="#7A3E53" strokeWidth="2" />
        <text x="208" y="71" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">Corpo Frio</text>
        <text x="208" y="86" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#8C4A5F">T_F (Recebe Q)</text>
        <rect x="268" y="28" width="130" height="98" rx="12" fill="#FFFFFF" stroke="#F3E3E7" />
        <text x="333" y="48" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">
          Calorimetria &amp; Carnot
        </text>
        <text x="333" y="68" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#4A4045">
          Q_cedido + Q_recebido = 0
        </text>
        <text x="333" y="88" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#4A4045">
          Q = m · c · ΔT
        </text>
        <text x="333" y="108" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#7A3E53">
          η = 1 - (T_F / T_Q) [em K]
        </text>
      </svg>
    ),
  },

  Ondulatória: {
    title: 'Esquema Visual: Comprimento de Onda (λ), Efeito Doppler e Cordas Vibrantes',
    caption:
      'Relação inversa entre frequência e comprimento de onda (v = λ·f), compressão das frentes de onda na aproximação (Doppler) e 1º harmônico (L = λ/2).',
    keyTakeaway:
      'A velocidade de uma onda depende apenas do meio! Na aproximação relativa entre fonte e observador, o som percebido tem maior frequência (mais agudo).',
    theorySummary:
      'Estuda a equação fundamental v = λ·f, fenômenos ondulatórios (reflexão, refração, difração, interferência, ressonância, polarização), Acústica (altura, intensidade, timbre), Efeito Doppler e ondas estacionárias em cordas e tubos sonoros.',
    commonTrap:
      'Confundir altura do som (frequência: agudo vs. grave) com intensidade sonora (amplitude/nível em decibéis: som forte vs. fraco).',
    renderSvg: () => (
      <svg viewBox="0 0 420 155" className="w-full h-auto max-h-44" fill="none">
        <rect x="8" y="8" width="404" height="139" rx="14" fill="#FAF0F2" stroke="#F3E3E7" />
        <line x1="30" y1="78" x2="255" y2="78" stroke="#8C4A5F" strokeWidth="1.4" strokeDasharray="3 3" />
        <path
          d="M 35 78 Q 65 20 95 78 T 155 78 T 215 78"
          stroke="#7A3E53"
          strokeWidth="2.8"
          fill="none"
        />
        <line x1="65" y1="32" x2="185" y2="32" stroke="#7A3E53" strokeWidth="1.8" />
        <text x="125" y="24" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">
          Comprimento de Onda (λ)
        </text>
        <text x="125" y="132" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#7A3E53">
          v = λ · f
        </text>
        <circle cx="330" cy="78" r="42" stroke="#8C4A5F" strokeWidth="1.4" />
        <circle cx="338" cy="78" r="28" stroke="#7A3E53" strokeWidth="1.6" />
        <circle cx="346" cy="78" r="14" stroke="#7A3E53" strokeWidth="2" />
        <circle cx="352" cy="78" r="3.5" fill="#7A3E53" />
        <text x="275" y="132" fontSize="9.5" fontWeight="700" fill="#8C4A5F">Grave (f &lt; f₀)</text>
        <text x="355" y="132" fontSize="9.5" fontWeight="800" fill="#7A3E53">Agudo (f &gt; f₀)</text>
      </svg>
    ),
  },

  Óptica: {
    title: 'Esquema Visual: Lentes Corretivas (Vergência), Espelhos e Fibra Óptica',
    caption:
      'Traçado de raios em reflexão interna total na fibra óptica (n₁ > n₂ e θ > L) e correção da miopia com lente divergente (V = 1/f < 0).',
    keyTakeaway:
      'Vergência em dioptrias (graus) exige distância focal f em METROS (V = 1/f). Para reflexão interna total na fibra óptica: n_núcleo > n_casca e θ_incidência > θ_limite!',
    theorySummary:
      'Compreende espelhos planos e esféricos (côncavo e convexo), refração da luz (Lei de Snell n₁·senθ₁ = n₂·senθ₂), reflexão interna total (fibras ópticas) e Óptica da Visão (miopia corrigida com lente divergente; hipermetropia/presbiopia com lente convergente).',
    commonTrap:
      'Esquecer de converter a distância focal de metros para centímetros (ou vice-versa) ao aplicar V = 1/f.',
    renderSvg: () => (
      <svg viewBox="0 0 420 155" className="w-full h-auto max-h-44" fill="none">
        <rect x="8" y="8" width="404" height="139" rx="14" fill="#FAF0F2" stroke="#F3E3E7" />
        <rect x="30" y="42" width="220" height="70" rx="8" fill="#FFFFFF" stroke="#7A3E53" strokeWidth="2" />
        <rect x="30" y="32" width="220" height="10" fill="#E5C5D0" />
        <rect x="30" y="112" width="220" height="10" fill="#E5C5D0" />
        <polyline
          points="30,95 85,42 155,112 225,42 250,66"
          stroke="#7A3E53"
          strokeWidth="2.5"
          fill="none"
        />
        <text x="140" y="25" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#7A3E53">
          Casca (n₂ menor) • Núcleo (n₁ maior)
        </text>
        <text x="140" y="139" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#7A3E53">
          Reflexão Interna Total: n₁ &gt; n₂ e θ &gt; L
        </text>
        <rect x="270" y="34" width="130" height="88" rx="10" fill="#FFFFFF" stroke="#7A3E53" strokeWidth="1.5" />
        <text x="335" y="55" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">
          Óptica da Visão
        </text>
        <text x="335" y="75" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#4A4045">
          Miopia → Divergente (f &lt; 0)
        </text>
        <text x="335" y="93" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#4A4045">
          Hipermet. → Convergente
        </text>
        <text x="335" y="111" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">
          V (di) = 1 / f (m)
        </text>
      </svg>
    ),
  },

  Eletromagnetismo: {
    title: 'Esquema Visual: Indução de Faraday, Transformadores e Força de Lorentz',
    caption:
      'Trajetória circular de carga em campo magnético uniforme (R = mv/qB) e acoplamento magnético variável entre bobina primária (N₁) e secundária (N₂).',
    keyTakeaway:
      'Só há tensão induzida quando o fluxo magnético VARIA no tempo (corrente alternada). Na força magnética perpendicular, a trajetória é circular de raio R = (m·v)/(|q|·B).',
    theorySummary:
      'Aborda o movimento de cargas em campo magnético uniforme (força magnética centrípeta F = |q|vBsenθ ⇒ R = mv/|q|B), a Lei de Faraday-Lenz da indução eletromagnética (ε = -N·ΔΦ/Δt) e transformadores de tensão (U₁/U₂ = N₁/N₂).',
    commonTrap:
      'Achar que um transformador ou carregador por indução funciona em corrente contínua estacionária (sem variação temporal de fluxo magnético não há indução!).',
    renderSvg: () => (
      <svg viewBox="0 0 420 155" className="w-full h-auto max-h-44" fill="none">
        <rect x="8" y="8" width="404" height="139" rx="14" fill="#FAF0F2" stroke="#F3E3E7" />
        <circle cx="105" cy="76" r="42" stroke="#7A3E53" strokeWidth="2.2" strokeDasharray="5 3" fill="#FFFFFF" />
        <circle cx="105" cy="34" r="5" fill="#7A3E53" />
        <line x1="105" y1="34" x2="142" y2="34" stroke="#7A3E53" strokeWidth="2" />
        <line x1="105" y1="34" x2="105" y2="66" stroke="#8C4A5F" strokeWidth="2" />
        <text x="148" y="38" fontSize="9.5" fontWeight="800" fill="#7A3E53">v</text>
        <text x="105" y="78" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#8C4A5F">F_mag</text>
        <text x="105" y="136" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">
          R = (m · v) / (|q| · B)
        </text>
        <rect x="235" y="36" width="140" height="76" rx="8" stroke="#7A3E53" strokeWidth="6" fill="none" />
        <rect x="225" y="50" width="20" height="48" rx="4" fill="#8C4A5F" />
        <rect x="365" y="56" width="20" height="36" rx="4" fill="#7A3E53" />
        <text x="305" y="78" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">
          ΔΦ_B / Δt ≠ 0
        </text>
        <text x="305" y="136" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">
          U₁ / U₂ = N₁ / N₂
        </text>
      </svg>
    ),
  },

  Estequiometria: {
    title: 'Esquema Visual: Proporção Molar, Grau de Pureza e Rendimento Reacional',
    caption:
      'Pipeline estequiométrico em 3 etapas: desconto de impurezas inertes (× pureza), conversão molar (n = m/M = V/V_m) e aplicação do rendimento (× η).',
    keyTakeaway:
      'Impurezas inertes não reagem! Multiplique a massa bruta pela pureza no início e multiplique a massa teórica pelo rendimento percentual ao final.',
    theorySummary:
      'Relaciona quantidades de reagentes e produtos através das Leis Ponderais (Lavoisier e Proust) e dos coeficientes da equação balanceada, incorporando grau de pureza dos reagentes, volume molar gasoso, reagente limitante/excesso e rendimento percentual.',
    commonTrap:
      'Esquecer de descontar a porcentagem de impurezas da amostra inicial ou dividir pelo rendimento em vez de multiplicar quando se quer descobrir a massa real de produto formado.',
    renderSvg: () => (
      <svg viewBox="0 0 420 155" className="w-full h-auto max-h-44" fill="none">
        <rect x="8" y="8" width="404" height="139" rx="14" fill="#FAF0F2" stroke="#F3E3E7" />
        <rect x="22" y="42" width="108" height="68" rx="10" fill="#FFFFFF" stroke="#7A3E53" strokeWidth="1.8" />
        <text x="76" y="64" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#7A3E53">1. Amostra Pura</text>
        <text x="76" y="82" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#4A4045">m_útil = m_bruta × p%</text>
        <text x="76" y="98" textAnchor="middle" fontSize="9" fill="#8C4A5F">Desconta impurezas</text>
        <text x="143" y="80" textAnchor="middle" fontSize="14" fontWeight="800" fill="#7A3E53">→</text>
        <rect x="156" y="42" width="108" height="68" rx="10" fill="#FFFFFF" stroke="#7A3E53" strokeWidth="1.8" />
        <text x="210" y="64" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#7A3E53">2. Regra de Mols</text>
        <text x="210" y="82" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#4A4045">n = m / M = V / V_m</text>
        <text x="210" y="98" textAnchor="middle" fontSize="9" fill="#8C4A5F">Coeficientes da equação</text>
        <text x="277" y="80" textAnchor="middle" fontSize="14" fontWeight="800" fill="#7A3E53">→</text>
        <rect x="290" y="42" width="108" height="68" rx="10" fill="#7A3E53" />
        <text x="344" y="64" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#FFFFFF">3. Produto Real</text>
        <text x="344" y="82" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#FAF0F2">m_real = m_teór × η%</text>
        <text x="344" y="98" textAnchor="middle" fontSize="9" fill="#E5C5D0">Aplica o rendimento</text>
      </svg>
    ),
  },

  Termoquímica: {
    title: 'Esquema Visual: Diagrama de Entalpia (ΔH), Lei de Hess e Energia de Ligação',
    caption:
      'Comparação energética entre Reagentes e Produtos em reações exotérmicas (ΔH < 0, libera calor) e endotérmicas (ΔH > 0, absorve calor).',
    keyTakeaway:
      'Na Lei de Hess, inverter a equação inverte o sinal de ΔH. Em energias de ligação: Quebra nos reagentes é (+) endotérmica e Formação nos produtos é (-) exotérmica!',
    theorySummary:
      'Avalia o balanço térmico das reações químicas por meio da entalpia de combustão/poder calorífico, da Lei de Hess (soma algébrica de etapas intermediárias) e das energias médias de ligação (quebra endotérmica + vs. formação exotérmica -).',
    commonTrap:
      'Fazer "Produtos menos Reagentes" quando o problema fornece energias de ligação (em energias de ligação, faz-se Ligações Quebradas nos Reagentes MENOS Ligações Formadas nos Produtos).',
    renderSvg: () => (
      <svg viewBox="0 0 420 155" className="w-full h-auto max-h-44" fill="none">
        <rect x="8" y="8" width="404" height="139" rx="14" fill="#FAF0F2" stroke="#F3E3E7" />
        <line x1="45" y1="130" x2="45" y2="22" stroke="#4A4045" strokeWidth="2" />
        <text x="38" y="20" fontSize="10" fontWeight="800" fill="#7A3E53">H</text>
        <line x1="60" y1="45" x2="165" y2="45" stroke="#7A3E53" strokeWidth="3" />
        <text x="112" y="36" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">
          Reagentes (H_R)
        </text>
        <line x1="215" y1="112" x2="335" y2="112" stroke="#7A3E53" strokeWidth="3" />
        <text x="275" y="128" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">
          Produtos (H_P)
        </text>
        <line x1="190" y1="45" x2="190" y2="106" stroke="#8C4A5F" strokeWidth="2.2" />
        <polygon points="185,104 190,112 195,104" fill="#8C4A5F" />
        <rect x="205" y="60" width="175" height="32" rx="8" fill="#FFFFFF" stroke="#7A3E53" />
        <text x="292" y="80" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">
          Exotérmica: ΔH = H_P - H_R &lt; 0
        </text>
      </svg>
    ),
  },

  Eletroquímica: {
    title: 'Esquema Visual: Pilha Galvânica (Ânodo → Cátodo) e Eletrólise de Faraday',
    caption:
      'Fluxo espontâneo de elétrons do Ânodo (menor E°_red, oxidação) para o Cátodo (maior E°_red, redução) e cálculo quantitativo Q = i·Δt.',
    keyTakeaway:
      'CRAO: Cátodo Reduz, Ânodo Oxida! Nunca multiplique o potencial padrão E° pelos coeficientes estequiométricos ao calcular ΔE° = E°_maior - E°_menor.',
    theorySummary:
      'Estuda pilhas galvânicas espontâneas (ΔE° = E°_red,maior - E°_red,menor > 0), proteção catódica por eletrodos de sacrifício (metal de menor E°_red oxida no lugar do ferro) e eletrólise quantitativa regida pela Lei de Faraday (Q = i·t = n_e·96.500 C).',
    commonTrap:
      'Multiplicar o valor de E° (em volts) pelo número de elétrons ao balancear a semirreação, ou esquecer a carga do íon (ex.: Al³⁺ exige 3 mols de elétrons por mol de Al) na eletrólise.',
    renderSvg: () => (
      <svg viewBox="0 0 420 155" className="w-full h-auto max-h-44" fill="none">
        <rect x="8" y="8" width="404" height="139" rx="14" fill="#FAF0F2" stroke="#F3E3E7" />
        <rect x="38" y="55" width="95" height="72" rx="8" fill="#FFFFFF" stroke="#8C4A5F" strokeWidth="2" />
        <rect x="68" y="38" width="22" height="65" rx="4" fill="#8C4A5F" />
        <text x="85" y="120" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#8C4A5F">
          Ânodo (-) Oxida
        </text>
        <rect x="275" y="55" width="95" height="72" rx="8" fill="#FFFFFF" stroke="#7A3E53" strokeWidth="2" />
        <rect x="312" y="38" width="22" height="65" rx="4" fill="#7A3E53" />
        <text x="323" y="120" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#7A3E53">
          Cátodo (+) Reduz
        </text>
        <path d="M 79 38 L 79 22 L 323 22 L 323 38" stroke="#7A3E53" strokeWidth="2" fill="none" />
        <rect x="155" y="12" width="96" height="22" rx="6" fill="#7A3E53" />
        <text x="203" y="26" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#FFFFFF">
          e⁻ → ΔE° &gt; 0
        </text>
        <path d="M 118 75 L 118 48 L 290 48 L 290 75" stroke="#8C4A5F" strokeWidth="5" fill="none" />
        <text x="204" y="92" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#4A4045">
          Eletrólise: Q = i · t = n_e · 96.500 C
        </text>
      </svg>
    ),
  },

  'Química Orgânica': {
    title: 'Esquema Visual: Funções Orgânicas, Esterificação e Carbono Quiral (C*)',
    caption:
      'Distinção estrutural entre Fenol (Ar-OH) e Álcool, formação de Amida (-CONH-) e Éster (-COO-), e identificação do carbono assimétrico quiral (4 ligantes distintos).',
    keyTakeaway:
      'Hidroxila (-OH) ligada diretamente ao anel benzênico é FENOL (caráter ácido), não álcool! E carbono quiral (C*) exige 4 grupos inteiramente diferentes presos a um carbono sp³.',
    theorySummary:
      'Foca no reconhecimento de grupos funcionais oxigenados e nitrogenados (álcool, fenol, enol, aldeído, cetona, ácido carboxílico, éster, éter, amina, amida), reações orgânicas clássicas (esterificação, hidrólise, saponificação, transesterificação) e isomeria plana/espacial (cis-trans e óptica).',
    commonTrap:
      'Classificar fenol como álcool aromático, ou dividir o grupo funcional amida (-CONH-) em "cetona + amina".',
    renderSvg: () => (
      <svg viewBox="0 0 420 155" className="w-full h-auto max-h-44" fill="none">
        <rect x="8" y="8" width="404" height="139" rx="14" fill="#FAF0F2" stroke="#F3E3E7" />
        <polygon
          points="75,36 105,53 105,87 75,104 45,87 45,53"
          fill="#FFFFFF"
          stroke="#7A3E53"
          strokeWidth="2.2"
        />
        <circle cx="75" cy="70" r="18" stroke="#7A3E53" strokeWidth="1.6" strokeDasharray="3 2" />
        <line x1="105" y1="53" x2="132" y2="38" stroke="#7A3E53" strokeWidth="2" />
        <text x="148" y="40" fontSize="11" fontWeight="800" fill="#7A3E53">OH (Fenol)</text>
        <text x="85" y="132" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#7A3E53">
          Éster: Ácido + Álcool
        </text>
        <circle cx="305" cy="74" r="16" fill="#7A3E53" />
        <text x="305" y="78" textAnchor="middle" fontSize="11" fontWeight="800" fill="#FFFFFF">C*</text>
        <line x1="305" y1="58" x2="305" y2="32" stroke="#7A3E53" strokeWidth="2" />
        <line x1="305" y1="90" x2="305" y2="114" stroke="#7A3E53" strokeWidth="2" />
        <line x1="289" y1="74" x2="255" y2="74" stroke="#7A3E53" strokeWidth="2" />
        <line x1="321" y1="74" x2="355" y2="74" stroke="#7A3E53" strokeWidth="2" />
        <text x="305" y="26" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">R₁ (-OH)</text>
        <text x="305" y="128" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">R₂ (-H)</text>
        <text x="234" y="78" textAnchor="middle" fontSize="10" fontWeight="800" fill="#8C4A5F">R₃ (-CH₃)</text>
        <text x="378" y="78" textAnchor="middle" fontSize="10" fontWeight="800" fill="#8C4A5F">R₄ (-COOH)</text>
      </svg>
    ),
  },

  Soluções: {
    title: 'Esquema Visual: Concentração, Diluição (C₁·V₁ = C₂·V₂) e Titulação',
    caption:
      'Conservação da quantidade de soluto ao adicionar solvente na diluição e equivalência estequiométrica ácido-base na titulação.',
    keyTakeaway:
      'Na diluição, a massa e o número de mols do soluto permanecem constantes (M₁·V₁ = M₂·V₂). Lembre-se também que em soluções aquosas diluídas 1 ppm ≈ 1 mg/L!',
    theorySummary:
      'Trabalha unidades de concentração (comum g/L, molaridade mol/L, título/porcentagem e ppm), diluição de soluções (M₁V₁ = M₂V₂), mistura de soluções e análise volumétrica por titulação ácido-base (n_H⁺ = n_OH⁻ no ponto de equivalência).',
    commonTrap:
      'Esquecer de converter miligramas para gramas (÷ 1.000) ou mililitros para litros (÷ 1.000) ao calcular a massa total de soluto em reservatórios.',
    renderSvg: () => (
      <svg viewBox="0 0 420 155" className="w-full h-auto max-h-44" fill="none">
        <rect x="8" y="8" width="404" height="139" rx="14" fill="#FAF0F2" stroke="#F3E3E7" />
        <rect x="45" y="48" width="68" height="68" rx="8" fill="#7A3E53" />
        <text x="79" y="78" textAnchor="middle" fontSize="10" fontWeight="800" fill="#FFFFFF">Estoque</text>
        <text x="79" y="94" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#FAF0F2">M₁ · V₁</text>
        <text x="148" y="82" textAnchor="middle" fontSize="11" fontWeight="800" fill="#7A3E53">+ H₂O →</text>
        <rect x="188" y="32" width="88" height="84" rx="10" fill="#E5C5D0" stroke="#7A3E53" strokeWidth="2" />
        <text x="232" y="70" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">Solução Final</text>
        <text x="232" y="88" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#4A4045">M₂ · V₂ (n₁ = n₂)</text>
        <rect x="295" y="36" width="108" height="80" rx="10" fill="#FFFFFF" stroke="#7A3E53" />
        <text x="349" y="58" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#7A3E53">Unidades Chave</text>
        <text x="349" y="78" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#4A4045">M = m / (MM · V)</text>
        <text x="349" y="98" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#8C4A5F">1 ppm ≈ 1 mg/L</text>
      </svg>
    ),
  },

  'Equilíbrio Químico': {
    title: 'Esquema Visual: Princípio de Le Chatelier e Escala Logarítmica de pH',
    caption:
      'Deslocamento de equilíbrio químico por pressão, temperatura e concentração (íons H⁺/OH⁻), e variação de 10× na acidez para cada unidade de pH.',
    keyTakeaway:
      'Como pH = -log[H⁺], diminuir 2 unidades no pH significa multiplicar a concentração de H⁺ por 10² = 100 vezes! E lembre-se: catalisador NÃO desloca o equilíbrio.',
    theorySummary:
      'Analisa sistemas reversíveis dinâmicos (v_direta = v_inversa), constantes K_c, K_p, K_a e K_ps, deslocamento de equilíbrio segundo Le Chatelier (concentração, pressão e temperatura), escala logarítmica de pH/pOH e hidrólise salina.',
    commonTrap:
      'Afirmar que pH = 3 é apenas "2 vezes mais ácido" que pH = 5 (como a escala é de potência de 10, a razão de [H⁺] é 10⁵⁻³ = 10² = 100 vezes!).',
    renderSvg: () => (
      <svg viewBox="0 0 420 155" className="w-full h-auto max-h-44" fill="none">
        <rect x="8" y="8" width="404" height="139" rx="14" fill="#FAF0F2" stroke="#F3E3E7" />
        <rect x="30" y="38" width="115" height="28" rx="6" fill="#7A3E53" />
        <rect x="145" y="38" width="70" height="28" fill="#8C4A5F" />
        <rect x="215" y="38" width="175" height="28" rx="6" fill="#E5C5D0" stroke="#7A3E53" />
        <text x="87" y="56" textAnchor="middle" fontSize="10" fontWeight="800" fill="#FFFFFF">Ácido (pH &lt; 7)</text>
        <text x="180" y="56" textAnchor="middle" fontSize="10" fontWeight="800" fill="#FFFFFF">pH = 7</text>
        <text x="302" y="56" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">Básico (pH &gt; 7)</text>
        <rect x="30" y="84" width="360" height="46" rx="10" fill="#FFFFFF" stroke="#F3E3E7" />
        <text x="210" y="104" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#7A3E53">
          [H⁺] = 10^(-pH) mol/L • ΔpH = 2 ⇒ Razão de acidez = 10² = 100×
        </text>
        <text x="210" y="121" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#8C4A5F">
          Le Chatelier: ↑Pressão desloca p/ menor volume gasoso • ↓Temp favorece lado exotérmico
        </text>
      </svg>
    ),
  },

  'Físico-Química': {
    title: 'Esquema Visual: Cinética Química, Decaimento Radioativo (t₁/₂) e Efeitos Coligativos',
    caption:
      'Curva exponencial de meia-vida (m = m₀ / 2ˣ), velocidade média reacional e ampliação da faixa líquida por crioscopia e ebulioscopia.',
    keyTakeaway:
      'A cada período de meia-vida (t₁/₂), a massa radioativa reduz-se exatamente à metade (m₀ → m₀/2 → m₀/4 → m₀/8 → m₀/16). Soluto não volátil diminui T_congelamento e aumenta T_ebulição!',
    theorySummary:
      'Integra Cinética Química (velocidade média, fatores que alteram a rapidez e energia de ativação com catalisador), Radioatividade (emissões α, β, γ e cálculo de meia-vida t₁/₂) e Propriedades Coligativas das soluções (tonoscopia, ebulioscopia, crioscopia e osmoscopia).',
    commonTrap:
      'Dividir a massa inicial pelo número de meias-vidas (ex.: 80 / 4 = 20 mg) em vez de dividir por 2⁴ = 16 (80 / 16 = 5,0 mg).',
    renderSvg: () => (
      <svg viewBox="0 0 420 155" className="w-full h-auto max-h-44" fill="none">
        <rect x="8" y="8" width="404" height="139" rx="14" fill="#FAF0F2" stroke="#F3E3E7" />
        {[
          { x: 32, w: 58, h: 84, label: 'm₀ (100%)' },
          { x: 112, w: 58, h: 42, label: 'm₀/2 (50%)' },
          { x: 192, w: 58, h: 21, label: 'm₀/4 (25%)' },
          { x: 272, w: 58, h: 11, label: 'm₀/8 (12,5%)' },
        ].map((bar, idx) => (
          <g key={idx}>
            <rect x={bar.x} y={116 - bar.h} width={bar.w} height={bar.h} rx="6" fill="#7A3E53" />
            <text x={bar.x + 29} y={132} textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#7A3E53">
              {bar.label}
            </text>
            {idx < 3 && (
              <text x={bar.x + 70} y="75" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#8C4A5F">
                ÷2
              </text>
            )}
          </g>
        ))}
        <text x="375" y="72" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A3E53">
          m = m₀ / 2ˣ
        </text>
        <text x="375" y="90" textAnchor="middle" fontSize="9" fontWeight="700" fill="#8C4A5F">
          x = t / t₁/₂
        </text>
      </svg>
    ),
  },
};

export const TopicIllustrationCard: React.FC<TopicIllustrationProps> = ({ question }) => {
  const meta = TOPIC_VISUALS[question.topic];
  const correctAlt = question.alternatives.find((a) => a.letter === question.correctAnswer);

  return (
    <div className="rounded-2xl bg-white border border-[#F3E3E7] p-4 sm:p-5 space-y-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-extrabold uppercase tracking-wider text-[#7A3E53]">
          🎨 {meta.title}
        </span>
        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#FAF0F2] text-[#8C4A5F] border border-[#F3E3E7]">
          ENEM {question.year} (Q.{question.questionNumber}) • {question.topic}
        </span>
      </div>

      {/* SVG Diagram + Question-Specific Visual Synthesis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        <div className="lg:col-span-7 rounded-xl overflow-hidden bg-[#FAF0F2]/40">
          {meta.renderSvg(question)}
        </div>

        {/* Question-specific visual callout box */}
        <div className="lg:col-span-5 rounded-xl bg-[#FAF0F2]/80 border border-[#F3E3E7] p-3.5 space-y-2.5">
          <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#7A3E53]">
            📌 Mapa Mental desta Questão (Q.{question.questionNumber}/{question.year})
          </div>

          <div className="space-y-1.5 text-xs text-[#4A4045]">
            <div className="p-2 rounded-lg bg-white border border-[#F3E3E7]">
              <span className="font-bold text-[#7A3E53]">Equação Principal: </span>
              <span className="font-mono font-bold text-[#4A4045]">
                {question.resolution.appliedFormulas[0]?.formula}
              </span>
            </div>

            <div className="p-2 rounded-lg bg-white border border-[#F3E3E7]">
              <span className="font-bold text-[#7A3E53]">Ponto de Partida: </span>
              <span>{question.resolution.numericalDemonstration[0]}</span>
            </div>

            <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">
              <span>Conclusão ({question.correctAnswer}): </span>
              <span>{correctAlt?.text}</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-[#8C4A5F] leading-relaxed">{meta.caption}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        <div className="p-3 rounded-xl bg-[#FAF0F2] border border-[#F3E3E7] text-xs text-[#4A4045] leading-relaxed">
          <strong className="font-extrabold text-[#7A3E53]">💡 Dica de Ouro para a Raphaaa: </strong>
          {meta.keyTakeaway}
        </div>
        <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-[#4A4045] leading-relaxed">
          <strong className="font-extrabold text-amber-900">⚠️ Pegadinha Clássica do ENEM: </strong>
          {meta.commonTrap}
        </div>
      </div>
    </div>
  );
};
