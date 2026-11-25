# Bizu do Operador SARP

Aplicativo de apoio ao operador de SARP Categoria 0 (DJI Mavic 3 Pro, Air 2S e Mini 2). Funciona no celular, no tablet e no computador, com e sem internet.

**Acesse:** https://rhino-g28.github.io/bizu-sarp/

| | |
|---|---|
| **Versão** | 1.3 |
| **Atualizado em** | 21/11/2026 |
| **Desenvolvido por** | Sgt Emanuel Santos |
| **Direitos autorais** | © 2026 Sgt Emanuel Santos |

## O que o app tem

- Ficha de Gerenciamento do Risco (FGR) com cálculo e PDF
- Check list de voo por fase (montagem, pré-voo, intervoo, pós-voo, desmontagem) para cada modelo
- Aprender: conhecimentos gerais, teoria de voo (com os sensores ilustrados), tráfego aéreo (classes do espaço aéreo, serviços ATS e alerta, espaços condicionados, FRZ de aeródromo e heliponto, sinais luminosos da torre, fraseologia, comparação VLOS, EVLOS, BVLOS e FPV com cenas animadas, modelos DJI com projeto autorizado pela ANAC, altura AGL com calculadora, operação aérea especial e mapa do espaço aéreo do DECEA) e glossário com mais de 150 siglas
- Pilotagem: comandos do controle em Modo 2, régua de alturas dos obstáculos, sensores, AirSense (ADS-B), Home Point, manobras da FRVI e manobras de filmagem
- Voo BVLOS: requisitos, prazos, vigilância do espaço aéreo e checklist
- Registro de panes, conduta em pane e rascunho de RELPREV
- Relatório de voo em PDF
- Ficha de avaliação de voo (FRVI) por instruendo, com cópia de segurança
- Meteorologia (brief MET e links), normas e acesso ao espaço aéreo atualizados pela ICA 100-40 de 2026 (SARPAS e app SARPAS Lite), quem cuida de quê (ANAC, ANATEL, DECEA, JJAER e Exército), categorias de operação, cadastro SARP SMEM × ARP não SMEM, responsabilidades por função e quadro da EB70-N-13.001 com o que vale para o operador

## Condições de uso

1. **Uso livre para instrução e consulta**, em qualquer OM, sem custo.
2. **Não é permitido alterar o conteúdo** nem **redistribuir versões modificadas**, no todo ou em parte.
3. Compartilhe sempre **o link oficial acima** ou o arquivo **sem alterações**.
4. Mantenha a identificação do autor, a versão e este aviso.
5. Para pedir uma correção, sugerir melhoria ou solicitar autorização para outro uso, fale com o autor.

A organização, o texto, o código e as ilustrações são do autor. Normas, fichas de avaliação, manuais e demais documentos citados pertencem às respectivas fontes oficiais (DECEA, ANAC, CIAvEx, DJI e outras) e são referenciados apenas para consulta.

## Aviso importante

Este é um **material de apoio**. Ele **não substitui** manuais, normas, instruções e ordens oficiais, nem a orientação do instrutor. Em caso de divergência, vale sempre o documento oficial mais recente.

## Privacidade

Os dados preenchidos (check list, fichas, contatos, relatórios) ficam **só no aparelho** de quem usa. Nada é enviado pela internet. Limpar os dados do navegador apaga essas informações; na Ficha de avaliação use **Exportar fichas** para guardar uma cópia.

## Como instalar no celular

- **Android (Chrome):** abra o link › menu **⋮** › **Adicionar à tela inicial**.
- **iPhone (Safari):** abra o link › **Compartilhar** › **Adicionar à Tela de Início**.
- **Computador (Chrome ou Edge):** abra o link › ícone de instalar na barra de endereço.

Depois de instalado, o app abre sem internet. Quando houver versão nova, ela é baixada sozinha na próxima vez que o app for aberto com internet.

## Arquivos deste repositório

| Arquivo | Para que serve |
|---|---|
| `index.html` | O aplicativo completo |
| `sw.js` | Faz o app funcionar sem internet |
| `manifest.json` | Nome, ícone e cores do app instalado |
| `icon-192.png`, `icon-512.png` | Ícones |
| `README.md` | Este arquivo |

## Histórico de versões

| Versão | Data | Principais mudanças |
|---|---|---|
| 1.3 | 23/11/2026 | Nova aba Voo BVLOS (pode ou não, linha do tempo do pedido, vigilância por classe do espaço aéreo, checklist e o que fazer se der errado); planejamento da área de voo com mapa real (mapa, satélite e relevo), camadas do DECEA (GeoAISWEB), desenho de círculo, retângulo ou polígono com área e coordenadas, atalho para o mapa público do DASA e para NOTAM, cartas e METAR do aeródromo; precisa de internet; quadro de classificação do Exército conferido; setas nos pinos do Modo 2; local de pouso em laranja no acionamento dos rotores; categoria certificada no verificador; perfil da FRZ do aeródromo (ZAD) com avião em aproximação; verificador de categoria redesenhado; destaque na operação aérea especial; Altura AGL com o caso de decolar do topo do morro; normas do EB de 2026 (SIPAAerEx EB20-N-03.003, logística SARP do COLOG EB40-N-40.402 e outras) e “Aconteceu algo?” atualizado; menos repetição entre cards; DJI Air 2S no lugar do Mavic Air 2, com os dados do manual (vento 10,7 m/s, RTH de segurança após 6 s, modo Cine, sensores, LEDs e AirSense); novos cards: Quem cuida de quê (ANAC, ANATEL, DECEA, JJAER e Exército), Categorias aberta, específica e certificada com verificador, cadastro SARP SMEM × ARP não SMEM (SISANT), Quem responde pelo quê (OM, piloto, observador, equipe, Cmt e Of Prevenção), Altura AGL com calculadora (prédio e morro) e Operação aérea especial com verificador; Comparação VLOS, EVLOS, BVLOS e FPV com quatro cenas animadas e tabela com altura, distância e o que dizem ANAC (RBAC 100), DECEA (ICA 100-40) e Exército (EB70-N-13.001); modelos DJI com projeto autorizado pela ANAC (VLOS, EVLOS e BVLOS) e a lista completa da ANAC; correção: FPV só conta como BVLOS sem observador; cores com mais contraste (WCAG AA); animações pausam fora da tela para poupar bateria; descrições das figuras para leitor de tela; PDFs sem as abas de navegação; planejamento da área de voo em 4 etapas (Área, Camadas, Dados, Conferir) com aviso e atalhos quando o mapa não carrega e zoom automático no círculo; foto própria no topo das seções Voo, Aprender e Instrutor; botão Início do mesmo tamanho dos demais; conferência geral: contraste do modo escuro (FGR, áreas do espaço aéreo, categorias, botões verdes), link do RINDAT em https; "Estou apto a voar?" antes da FGR (N Op 2.2.4 e 2.5); nova aba Voo 6 Caderneta do operador (voos, horas, baterias, limite do Quadro 2-1, planilha CSV); visual mais moderno (títulos e números); BVLOS: "Quem vigia o céu em volta" refeito em 4 camadas (segregar, coordenar, vigiar, alertar) com figura animada militares x radar (drone e helicóptero realistas, sobre foto aérea, piloto marcado com o controle); Altura AGL com foto real (nos morros a foto é o próprio morro, ajustada às alturas); check list (montagem): "Como baixar o mapa offline" no controle, por modelo; planejamento: aeródromos e helipontos mais perto da área desenhada (base OurAirports, com distância e direção); registro no SARPAS em até 24 h após o voo (ICA art. 57 §3º); motivos de recusa do SARPAS (art. 56); planejamento da missão em 6 etapas; reconhecimento do local; apps SunCalc/Sun Surveyor, Google Earth, Flightradar24 e Hover; índice "Nesta aba" nas abas longas e botão de voltar ao topo; nova aba Voo "0 Planejar" (planejamento da missão, mapa, aeródromos próximos e Altura AGL saíram de Tráfego); busca geral no app (botão Buscar e tecla /); seções na ordem Aprender, Voo, Instrutor; aviso automático de nova versão; fotos recomprimidas (app ~0,5 MB menor); tela "Sobre o app"; Vento × drone na Meteorologia; limite de vento do Mini 2 corrigido (8,5 a 10,5 m/s); impressão do planejamento em 2 folhas A4 paisagem (folha 1: mapa grande com grade; folha 2: área, aeródromos, dados da missão com altura segura, altura e ponto do RTH e pousos secundários, e reconhecimento do local para anexar ao relatório; mapa impresso como imagem, compatível com Firefox; PDF com o nome "Planejamento da área de voo") |
| 1.2 | 02/11/2026 | Tela de Início; abas em três seções (Voo, Aprender, Instrutor) com barra embaixo no celular; novas abas Conhecimentos gerais, Teoria de voo, Tráfego aéreo e Glossário; quadro AirSense (ADS-B); régua de alturas e figuras com fotos e animação; controle DJI RC e drone em foto real; FRZ de aeródromo e heliponto (ICA 100-40 de 2026) com avião e helicóptero animados; sinais luminosos da torre; espaços condicionados; quadro da EB70-N-13.001 (Port 333-COTER/2023); prazos do SARPAS e legislação atualizados para a ICA 100-40 de 2026; legendas das fotos em caixa escura |
| 1.1 | 31/10/2026 | Fotos ilustrativas nas manobras, setas do trajeto, rotores girando (manobras e régua), pinos do controle animados nas manobras de filmagem, novos ícones do pedido de voo, fichas da FRVI por instruendo com cópia de segurança |
| 1.0 | 30/10/2026 | Primeira versão publicada com identificação de autoria e condições de uso |
