# Plataforma de Estudos e Simulado ENEM (Exatas) — Raphaela

Aplicação web personalizada de preparação intensiva para o **ENEM (Área de Exatas: Matemática, Física e Química)** das edições de **2021, 2022 e 2023**, com Design System em paleta Rosa Blush (`#7A3E53`, `#8C4A5F`, `#FAF0F2`) e ilustrações em estilo *line-art* de gatinhos.

## ✨ Funcionalidades Principais

- **Painel da Raphaela & Filtros Inteligentes:**
  - Filtragem por **Edição** (`2021`, `2022`, `2023`), **Disciplina** (*Matemática*, *Física*, *Química*), **Tópico específico** (22 tópicos mapeados), **Complexidade** e **Busca Textual**.
- **Central de Estudos Ilustrada (`Modo Estudos`):**
  - Acesso direto ao estudo detalhado de todas as **66 questões** e suas resoluções completas.
  - **Esquemas Visuais e Ilustrações Didáticas em SVG** exclusivas para cada tópico e mapa mental de cada questão.
  - **Marcação de Porcentagem de Estudo por Matéria:** acompanhamento visual em barra de progresso (`%`) para *Matemática*, *Física*, *Química* e progresso geral, além de bloco de anotações pessoais salvo no navegador.
- **Modo Prova / Simulado (`Modo Prova Active`):**
  - **Ocultação estrita do gabarito** e das resoluções durante a realização da prova.
  - **Temporizador configurável:** regressivo (padrão oficial de 3 min/questão ajustável), progressivo ou livre.
  - **Ferramentas de prova:** seleção interativa (`A`–`E`), recurso de *tesoura* para riscar alternativas descartadas e marcação para revisão.
- **Correção e Feedback Detalhado:**
  - Liberação imediata pós-submissão com diagnóstico por disciplina, ritmo médio por questão e resolução comentada em 3 pilares:
    1. **Demonstração Numérica / Cálculo** passo a passo;
    2. **Fórmulas Aplicadas** destacadas;
    3. **Raciocínio Lógico** e análise de distratores.

## 🚀 Como Executar Localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
```

