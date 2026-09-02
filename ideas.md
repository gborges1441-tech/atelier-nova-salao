# Atelier Nova — Direção de Design

## Três caminhos considerados

### Theme Name: Luxo editorial noturno
**Very Brief Intro:** Um estúdio de beleza tratado como uma marca de moda: preto mineral, luz recortada, gestos precisos e uma narrativa de transformação silenciosa.
**Probability:** 0.07

### Theme Name: Jardim solar contemporâneo
**Very Brief Intro:** Uma leitura luminosa e botânica do autocuidado, com areia, verde-sálvia, cerâmica e fotografia natural de textura tátil.
**Probability:** 0.04

### Theme Name: Clube cromático pop
**Very Brief Intro:** Um salão energético e expressivo, com blocos de cor, tipografia condensada e movimento mais performático para um público urbano.
**Probability:** 0.08

## Abordagem escolhida: Luxo editorial noturno

### Design Movement
Direção inspirada no **luxo silencioso editorial** e na fotografia de campanha de beleza, cruzando a precisão de uma revista de moda com a atmosfera tátil de um estúdio de ofício.

### Core Principles
1. **O ritual antes do resultado:** mostrar gestos, matéria e cuidado antes de prometer uma transformação.
2. **Contraste com intenção:** usar a escuridão como moldura para destacar brilho, pele, cabelo e acabamento.
3. **Assimetria controlada:** fugir do layout centralizado e criar uma leitura com respiro, tensão e foco direcional.
4. **Conversão sem ruído:** cada CTA deve reduzir a ansiedade da decisão e conduzir ao próximo passo com clareza.

### Color Philosophy
O preto mineral cria silêncio e exclusividade, sem cair em um visual tecnológico. O ameixa profundo funciona como assinatura sensorial: é a cor do esmalte, da noite e da confiança. O âmbar aparece apenas onde existe ação ou toque humano, aquecendo os pontos de decisão. Um lavanda acinzentado discreto equilibra a paleta e evita que o resultado fique pesado.

### Layout Paradigm
A página funciona como uma sequência editorial de lâminas: hero cinematográfico, faixas de manifesto, módulos de serviço em camadas e uma agenda que entra como um cartão de atendimento. Conteúdo importante alterna entre colunas deslocadas, imagens recortadas e blocos que atravessam a largura para criar ritmo de campanha, em vez de uma sucessão de cards iguais.

### Signature Elements
- **Linha de coordenada:** números pequenos, labels e linhas finas que dão à página o caráter de um caderno de direção criativa.
- **Reflexo ameixa:** um halo/gradiente curto e controlado que aparece em hover, foco e transições de imagens.
- **Selo Nova:** símbolo abstrato de uma lâmina de cabelo e uma meia-lua de unha, usado no cabeçalho, favicon e blocos de agenda.

### Interaction Philosophy
Interações devem parecer físicas e deliberadas: imagens respondem com um deslocamento mínimo, botões têm compressão sutil e o cursor pode revelar uma camada de detalhe sem roubar a atenção. Em vez de esconder informação em efeitos, o movimento deve reforçar hierarquia e orientar a próxima ação. Tudo permanece navegável por teclado e respeita `prefers-reduced-motion`.

### Animation
Entradas de seção usam fade + deslocamento vertical curto, com stagger entre elementos de 40–70 ms. Imagens fazem zoom máximo de 1.025 em hover e voltam suavemente. O menu mobile entra como painel de tecido escuro a partir da lateral, com duração abaixo de 300 ms. O ticker de benefícios se move lentamente e pausa no hover/foco. Nada anima largura, altura ou layout; apenas transform e opacity.

### Typography System
- **Display:** Cormorant Garamond, em pesos 500–600, com itálico pontual para palavras que falam de gesto, brilho e tempo.
- **Interface/body:** Manrope, pesos 400–700, para leitura, navegação, preço e CTA.
- **Hierarquia:** headlines grandes e respiradas; labels em caixa alta com tracking amplo; corpo curto, no máximo 65 caracteres por linha em módulos editoriais.

### Brand Essence
**Atelier Nova é o estúdio para quem quer sair do automático: cabelo e unhas tratados como assinatura pessoal, com técnica silenciosa e tempo bem gasto.**

Personalidade: **preciso, sensorial, confiante**.

### Brand Voice
Headlines soam como convites editoriais, nunca como promessas exageradas. CTAs são específicos e tranquilizadores, explicando o que acontece após o clique. Microcopy é curta, humana e cuidadosa.

Exemplos:
- “Seu próximo visual começa antes do espelho.”
- “Agendar uma conversa de 15 min →”

### Wordmark & Logo
O wordmark “ATELIER NOVA” deve ser desenhado com serifas de alto contraste, espaçamento amplo e o “A” aberto como uma lâmina curva. O símbolo é uma meia-lua incompleta atravessada por uma linha fina, evocando simultaneamente a curva de uma unha e o movimento de uma mecha. O símbolo será usado sem texto no header e favicon.

### Signature Brand Color
**Ameixa Nova — `#6F173A`**, um vinho escuro com profundidade suficiente para viver sobre preto e energia suficiente para marcar ações, estados ativos e detalhes de acabamento.

## Mensagem, oferta e retenção

- Oferta de entrada: **Nova Start**, um diagnóstico de 15 minutos que reduz a fricção de primeira visita e direciona cabelo ou manicure.
- CTA primário: **Agendar meu diagnóstico**.
- CTA secundário: **Ver o menu de serviços**.
- Prova de valor: processo em três passos — conversa, curadoria, acabamento — sem avaliações inventadas ou depoimentos fabricados.
- Retenção: convite para entrar na **Lista Nova**, com prioridade para horários, curadoria sazonal e lembretes de manutenção.
- Rodapé: WhatsApp e Instagram como caminhos diretos, com endereço e horários explícitos.

## Regra de decisão
Quando surgir uma escolha visual, de copy ou de interação, perguntar: **“Isso reforça ou dilui a sensação de ritual preciso, luxo silencioso e próxima ação clara?”**

## Salto audiovisual — decisão desta rodada

A versão anterior acertou a direção editorial, mas ficou com comportamento de landing page estática. A nova versão deve operar como uma campanha audiovisual: o primeiro contato precisa ter uma cena em movimento, ritmo e progressão visual, não apenas uma fotografia hero.

A referência Moto usa o vídeo como prova de valor e como objeto de desejo: o produto aparece em um palco, a página cria expectativa antes de explicar, e os blocos seguintes mudam de escala e contexto para manter retenção. Para o Atelier Nova, a adaptação será um filme curto em loop com cabelo, mãos, brilho de esmalte e gesto de atendimento; o vídeo será silencioso, com fallback de imagem, cobertura escura para leitura e uma indicação de “sound off / motion on” sem exigir áudio.

A narrativa passa a ter quatro atos: **atrair** com a cena hero; **aproximar** com macro de textura e dados de ritual; **provar** com uma sequência de três gestos de serviço; e **converter** com a Nova Start entrando como um cartão de reserva. O movimento será intenso apenas na entrada e nas transições principais, com parallax e zoom muito sutis nas demais áreas. A ambição é parecer uma campanha de marca premium, não uma página com efeitos aplicados por cima.

O vídeo deve ser curto, verticalmente seguro, com o foco visual concentrado à direita para preservar a copy à esquerda. O mobile terá crop próprio e poster estático para conexões lentas. A preferência por redução de movimento desativa vídeo e parallax não essencial, mantendo a mesma hierarquia e CTA.
