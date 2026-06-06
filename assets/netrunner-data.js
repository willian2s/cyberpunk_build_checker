window.NETRUNNER_CATEGORIES = [
  {
    id: "level-priority",
    title: "Prioridades por level",
    description: "Progressão baseada na build Netrunner da Game8, ajustada para o jogo base no level 50.",
    items: [
      { id: "lvl-01-start-attrs", name: "Level 1: base inicial", tags: ["atributos"], note: "Corpo 3 · Reflexos 4 · Habilidade Técnica 6 · Inteligência 6 · Moral 3." },
      { id: "lvl-01-10-attrs", name: "Level 1–10: chegar em Técnica 9, Inteligência 9 e Reflexos 7", tags: ["atributos", "prioridade"], note: "Siga a tabela da Game8 para level 10: Corpo 3 · Reflexos 7 · Técnica 9 · Inteligência 9 · Moral 3." },
      { id: "lvl-01-10-int-perks", name: "Level 1–10: abrir a base de quickhack", tags: ["perks", "Inteligência"], note: "Pegue Otimização e Olho no Céu primeiro. Depois pegue Cifra de Desligamento Forçado e Aviso: Risco de Explosão quando estiverem disponíveis." },
      { id: "lvl-01-10-tech-perks", name: "Level 1–10: iniciar suporte de cyberware", tags: ["perks", "Técnica"], note: "Pegue Glutão de Guerra e comece Tudo que é Cibernético. Isso prepara a build para mais cyberware e melhor sustain." },
      { id: "lvl-01-10-hacks", name: "Level 1–10: quickhacks básicos", tags: ["quickhacks"], note: "Use Ping, Reiniciar Óptica, Pane na Arma, Curto-Circuito, Superaquecimento e Contágio conforme encontrar versões melhores." },

      { id: "lvl-10-20-attrs", name: "Level 10–20: priorizar Inteligência até 15", tags: ["atributos", "prioridade"], note: "Inteligência vira prioridade absoluta para liberar Fila de Hacks, Exploit Integrado e preparação para Overclock." },
      { id: "lvl-10-20-int-queue", name: "Level 10–20: perks de fila e RAM", tags: ["perks", "Inteligência", "prioridade"], note: "Pegue Fila de Hacks, Ciclo de Feedback, Reciclador de Dados, Copiar e Colar, Contra-Hack, Exploit Integrado, Quebra-Gelo, Sobrecarga do Sistema e Especulação." },
      { id: "lvl-10-20-smart-start", name: "Level 10–20: iniciar armas inteligentes", tags: ["perks", "armas inteligentes"], note: "Comece Especialista em Aquisição se pretende usar Genjiroh ou Protótipo: Shingen Mark V como finalizadores." },
      { id: "lvl-10-20-tech-continue", name: "Level 10–20: continuar Técnica até 12 se precisar de cyberware", tags: ["atributos", "Técnica"], note: "Se estiver frágil ou sem capacidade de cyberware, adiante alguns pontos em Técnica antes de fechar Inteligência 20." },

      { id: "lvl-20-30-int-20", name: "Level 20–30: fechar Inteligência 20", tags: ["atributos", "core", "prioridade"], note: "Com Inteligência 20, a build entra no ponto forte: Overclock, fila avançada e combos de quickhack." },
      { id: "lvl-20-30-overclock", name: "Level 20–30: perks de Overclock", tags: ["perks", "Inteligência", "prioridade"], note: "Pegue Overclock, Surto de Energia, Corrida Contra a Mente e Sublimação para transformar vida em recurso ofensivo com sustain." },
      { id: "lvl-20-30-queue-final", name: "Level 20–30: perks finais da fila", tags: ["perks", "Inteligência", "prioridade"], note: "Pegue Aceleração da Fila, Fila Hack_Root, Priorização da Fila, Maestria da Fila e Transbordamento." },
      { id: "lvl-20-30-smart-final", name: "Level 20–30: fechar árvore de armas inteligentes", tags: ["perks", "armas inteligentes"], note: "Pegue Sub-rotinas de Precisão, Sem Escapatória, Transferência de Mira Travada, Prisma de Mira, Velocidade Terminal e Sinergia Inteligente." },
      { id: "lvl-20-30-cyberdeck", name: "Level 20–30: buscar cyberdeck melhor", tags: ["cyberdeck"], note: "Use o melhor cyberdeck disponível no seu nível. O alvo final é o Tetratronic Rippler MK.5." },

      { id: "lvl-30-40-tech-15", name: "Level 30–40: fechar Habilidade Técnica 15", tags: ["atributos", "Técnica", "prioridade"], note: "Técnica 15 aumenta a sustentação da build via cyberware, defesa, bônus e recuperação de RAM." },
      { id: "lvl-30-40-tech-perks", name: "Level 30–40: perks principais de Técnica", tags: ["perks", "Técnica", "cyberware"], note: "Finalize Tudo que é Cibernético e pegue Punk Renascentista, Atualização de Driver, Conhecedor de Chipware, Licença para Cromar e Garantia Estendida." },
      { id: "lvl-30-40-reflex-15", name: "Level 30–40: subir Reflexos até 15", tags: ["atributos", "mobilidade"], note: "Reflexos 15 entrega mobilidade para reposicionar, fugir de combate direto e continuar hackeando com segurança." },
      { id: "lvl-30-40-reflex-perks", name: "Level 30–40: perks de mobilidade", tags: ["perks", "Reflexos"], note: "Pegue Escorregadio, Arrancada e Arrancada Aérea. Dublê é opcional para veículos." },

      { id: "lvl-40-50-cool-15", name: "Level 40–50: subir Moral até 15", tags: ["atributos", "Moral", "stealth"], note: "Moral 15 fecha a parte furtiva da build, deixando você mais difícil de detectar e mais seguro fora de combate direto." },
      { id: "lvl-40-50-cool-perks", name: "Level 40–50: perks de Moral", tags: ["perks", "Moral"], note: "Pegue Passos Felinos, Ninjutsu, Corrida Shinobi, Morte Rastejante e Ato de Desaparecimento." },
      { id: "lvl-40-50-body-6", name: "Level 40–50: deixar Corpo 6", tags: ["atributos", "Corpo"], note: "Corpo 6 é o fechamento do jogo base para sobrevivência básica." },
      { id: "lvl-40-50-body-perks", name: "Level 40–50: perks básicos de Corpo", tags: ["perks", "Corpo", "opcional"], note: "Pegue Analgésico. Garoto da Virada é opcional se você sentir falta de sobrevivência." }
    ]
  },
  {
    id: "attributes",
    title: "Atributos finais — jogo base",
    description: "Distribuição final da Game8 para level 50 no jogo base, sem Phantom Liberty.",
    items: [
      { id: "attr-body-6", name: "Corpo 6", tags: ["jogo base"], note: "Apenas suporte de sobrevivência básica." },
      { id: "attr-int-20", name: "Inteligência 20", tags: ["principal", "prioridade"], note: "Núcleo da build: RAM, quickhacks, Overclock, fila de hacks e armas inteligentes." },
      { id: "attr-tech-15", name: "Habilidade Técnica 15", tags: ["principal", "cyberware"], note: "Aumenta capacidade e eficiência de cyberware, ajudando dano de quickhack e recuperação de RAM." },
      { id: "attr-reflex-15", name: "Reflexos 15", tags: ["mobilidade"], note: "Dash e Air Dash para reposicionar quando o combate direto ficar ruim." },
      { id: "attr-cool-15", name: "Moral 15", tags: ["stealth"], note: "Base furtiva da build: Ninjutsu, menor detecção e melhor controle antes do combate." }
    ]
  },
  {
    id: "intelligence-perks",
    title: "Vantagens · Inteligência",
    description: "Prioridade principal da build: quickhack queue, Overclock, combos e armas inteligentes.",
    items: [
      { id: "perk-optimization", name: "Otimização", tags: ["1 pt", "prioridade"] },
      { id: "perk-proximate-propagation", name: "Propagação Próxima", tags: ["secundário"] },
      { id: "perk-encryption", name: "Criptografia", tags: ["secundário"] },
      { id: "perk-subordination", name: "Subordinação", tags: ["secundário"] },
      { id: "perk-eye-in-the-sky", name: "Olho no Céu", tags: ["1 pt", "prioridade"] },
      { id: "perk-forcekill-cypher", name: "Cifra de Desligamento Forçado", tags: ["secundário"] },
      { id: "perk-warning-explosion-hazard", name: "Aviso: Risco de Explosão", tags: ["secundário"] },
      { id: "perk-hack-queue", name: "Fila de Hacks", tags: ["2 pt", "prioridade"] },
      { id: "perk-feedback-loop", name: "Ciclo de Feedback", tags: ["RAM", "prioridade"] },
      { id: "perk-data-recycler", name: "Reciclador de Dados", tags: ["RAM", "prioridade"] },
      { id: "perk-copy-paste", name: "Copiar e Colar", tags: ["secundário"] },
      { id: "perk-counter-a-hack", name: "Contra-Hack", tags: ["secundário"] },
      { id: "perk-embedded-exploit", name: "Exploit Integrado", tags: ["2 pt", "prioridade"] },
      { id: "perk-shadowrunner", name: "Corredor das Sombras", tags: ["secundário"] },
      { id: "perk-icepick", name: "Quebra-Gelo", tags: ["RAM", "prioridade"] },
      { id: "perk-system-overwhelm", name: "Sobrecarga do Sistema", tags: ["dano"] },
      { id: "perk-speculation", name: "Especulação", tags: ["RAM"] },
      { id: "perk-siphon", name: "Sifão", tags: ["Monofio"] },
      { id: "perk-acquisition-specialist", name: "Especialista em Aquisição", tags: ["2 pt", "armas inteligentes"] },
      { id: "perk-precision-subroutines", name: "Sub-rotinas de Precisão", tags: ["armas inteligentes"] },
      { id: "perk-no-escape", name: "Sem Escapatória", tags: ["armas inteligentes"] },
      { id: "perk-target-lock-transfer", name: "Transferência de Mira Travada", tags: ["3 pt", "armas inteligentes"] },
      { id: "perk-targeting-prism", name: "Prisma de Mira", tags: ["armas inteligentes"] },
      { id: "perk-terminal-velocity", name: "Velocidade Terminal", tags: ["armas inteligentes"] },
      { id: "perk-overclock", name: "Overclock", tags: ["3 pt", "prioridade"] },
      { id: "perk-power-surge", name: "Surto de Energia", tags: ["prioridade"] },
      { id: "perk-race-against-mind", name: "Corrida Contra a Mente", tags: ["prioridade"] },
      { id: "perk-sublimation", name: "Sublimação", tags: ["sobrevivência"] },
      { id: "perk-queue-acceleration", name: "Aceleração da Fila", tags: ["3 pt", "prioridade"] },
      { id: "perk-queue-hack-root", name: "Fila Hack_Root", tags: ["prioridade"] },
      { id: "perk-queue-prioritization", name: "Priorização da Fila", tags: ["prioridade"] },
      { id: "perk-finisher-live-wire", name: "Finalizador: Fio Vivo", tags: ["Monofio"] },
      { id: "perk-queue-mastery", name: "Maestria da Fila", tags: ["final", "prioridade"] },
      { id: "perk-spillover", name: "Transbordamento", tags: ["final"] },
      { id: "perk-smart-synergy", name: "Sinergia Inteligente", tags: ["final", "armas inteligentes"] },
      { id: "perk-blood-daemon", name: "Daemon de Sangue", tags: ["cross-branch", "sobrevivência"] },
      { id: "perk-recirculation", name: "Recirculação", tags: ["cross-branch", "RAM"] },
      { id: "perk-carhacker", name: "Hackeador de Carros", tags: ["veículo", "opcional"] }
    ]
  },
  {
    id: "tech-perks",
    title: "Vantagens · Habilidade Técnica",
    description: "Segunda prioridade da build: cyberware, bônus de status e suporte para dano/recuperação de RAM.",
    items: [
      { id: "perk-glutton-for-war", name: "Glutão de Guerra", tags: ["1 pt", "prioridade"] },
      { id: "perk-all-things-cyber", name: "Tudo que é Cibernético", tags: ["2 pt", "prioridade"] },
      { id: "perk-renaissance-punk", name: "Punk Renascentista", tags: ["cyberware"] },
      { id: "perk-driver-update", name: "Atualização de Driver", tags: ["cyberware"] },
      { id: "perk-chipware-connoisseur", name: "Conhecedor de Chipware", tags: ["cyberware", "prioridade"] },
      { id: "perk-license-to-chrome", name: "Licença para Cromar", tags: ["3 pt", "prioridade"] },
      { id: "perk-extended-warranty", name: "Garantia Estendida", tags: ["cyberware"] },
      { id: "perk-gearhead", name: "Maníaco por Máquinas", tags: ["veículo", "opcional"] }
    ]
  },
  {
    id: "reflex-perks",
    title: "Vantagens · Reflexos",
    description: "Mobilidade para reposicionar quando for detectado ou quando precisar quebrar linha de visão.",
    items: [
      { id: "perk-slippery", name: "Escorregadio", tags: ["1 pt", "prioridade"] },
      { id: "perk-dash", name: "Arrancada", tags: ["2 pt", "prioridade"] },
      { id: "perk-air-dash", name: "Arrancada Aérea", tags: ["3 pt", "prioridade"] },
      { id: "perk-stuntjock", name: "Dublê", tags: ["veículo", "opcional"] }
    ]
  },
  {
    id: "cool-perks",
    title: "Vantagens · Moral",
    description: "Parte furtiva da build: menor detecção, movimento agachado e vantagens para jogar devagar antes de iniciar os hacks.",
    items: [
      { id: "perk-feline-footwork", name: "Passos Felinos", tags: ["1 pt", "prioridade"] },
      { id: "perk-ninjutsu", name: "Ninjutsu", tags: ["3 pt", "prioridade"] },
      { id: "perk-shinobi-sprint", name: "Corrida Shinobi", tags: ["stealth"] },
      { id: "perk-creeping-death", name: "Morte Rastejante", tags: ["stealth", "prioridade"] },
      { id: "perk-vanishing-act", name: "Ato de Desaparecimento", tags: ["stealth"] }
    ]
  },
  {
    id: "body-perks",
    title: "Vantagens · Corpo",
    description: "Apenas suporte básico de sobrevivência para o fechamento Corpo 6 do jogo base.",
    items: [
      { id: "perk-painkiller", name: "Analgésico", tags: ["1 pt", "prioridade"] },
      { id: "perk-comeback-kid", name: "Garoto da Virada", tags: ["sobrevivência", "opcional"] }
    ]
  },
  {
    id: "cyberware",
    title: "Cyberwares — jogo base",
    description: "Cyberwares principais recomendados pela build, removendo opções exclusivas da DLC.",
    items: [
      { id: "cw-tetratronic-rippler", name: "Tetratronic Rippler MK.5", tags: ["Sistema Operacional", "prioridade"], note: "Cyberdeck final da build: +RAM e forte sinergia com Overclock, Reiniciar Óptica/Pane na Arma e Exploit Integrado." },
      { id: "cw-thermal-monowire", name: "Monofio Térmico", tags: ["Braços", "Monofio"], note: "Opção de emergência enquanto a RAM recupera. Funciona melhor com Sifão e Finalizador: Fio Vivo." },
      { id: "cw-kiroshi-sentry", name: "Óptica Kiroshi Sentry", tags: ["Rosto"] },
      { id: "cw-microgenerator", name: "Microgerador", tags: ["Mãos"] },
      { id: "cw-smart-link", name: "Smart Link", tags: ["Mãos", "armas inteligentes"], note: "Use se você quiser priorizar Genjiroh e Protótipo: Shingen Mark V." },
      { id: "cw-adrenaline-booster", name: "Impulsionador de Adrenalina", tags: ["Circulatório", "Monofio"] },
      { id: "cw-heal-on-kill", name: "Cura ao Abater", tags: ["Circulatório", "prioridade"], note: "Ajuda a sobreviver quando Overclock consumir vida." },
      { id: "cw-microrotors", name: "Microrrotores", tags: ["Circulatório", "Monofio"] },
      { id: "cw-reinforced-tendons", name: "Tendões Reforçados", tags: ["Pernas", "mobilidade"], note: "Pulo duplo para reposicionar atrás de cobertura." },
      { id: "cw-lynx-paws", name: "Patas de Lince", tags: ["Pernas", "stealth", "alternativa"] },
      { id: "cw-ram-upgrade", name: "Aprimoramento de RAM", tags: ["Córtex Frontal", "RAM"] },
      { id: "cw-ex-disk", name: "Ex-Disk", tags: ["Córtex Frontal", "RAM", "prioridade"] },
      { id: "cw-camillo-ram-manager", name: "Gerenciador de RAM Camillo", tags: ["Córtex Frontal", "RAM"] },
      { id: "cw-dense-marrow", name: "Medula Densa", tags: ["Esqueleto", "Monofio"] },
      { id: "cw-ram-recoup", name: "Recuperação de RAM", tags: ["Esqueleto", "RAM"] },
      { id: "cw-feen-x", name: "Feen-X", tags: ["Esqueleto", "RAM"] },
      { id: "cw-kerenzikov", name: "Kerenzikov", tags: ["Sistema Nervoso"] },
      { id: "cw-synaptic-accelerator", name: "Acelerador Sináptico", tags: ["Sistema Nervoso", "stealth"] },
      { id: "cw-subdermal-armor", name: "Armadura Subdérmica", tags: ["Tegumentar", "defesa"] },
      { id: "cw-pain-editor", name: "Editor de Dor", tags: ["Tegumentar", "defesa"] },
      { id: "cw-optical-camo", name: "Camuflagem Óptica", tags: ["Tegumentar", "stealth", "prioridade"] }
    ]
  },
  {
    id: "quickhacks",
    title: "Quickhacks",
    description: "Quickhacks centrais da build e seus combos principais.",
    items: [
      { id: "qh-memory-wipe", name: "Apagão de Memória", tags: ["furtivo", "iniciar combo"], note: "Use primeiro para reduzir rastreamento e manter os hacks seguintes não rastreáveis." },
      { id: "qh-contagion", name: "Contágio", tags: ["combate", "grupo"], note: "Combo principal contra grupos: Contágio → Superaquecimento." },
      { id: "qh-overheat", name: "Superaquecimento", tags: ["combate", "combo"], note: "Detona Contágio e aplica dano térmico forte." },
      { id: "qh-cyberware-malfunction", name: "Falha de Cyberware", tags: ["controle", "combo"], note: "Empilha vulnerabilidade antes de Curto-Circuito." },
      { id: "qh-short-circuit", name: "Curto-Circuito", tags: ["combate", "combo"], note: "Combo principal contra alvos fortes: Falha de Cyberware → Curto-Circuito." },
      { id: "qh-reboot-optics", name: "Reiniciar Óptica", tags: ["controle", "sinergia"], note: "Sinergia forte com Tetratronic Rippler e Exploit Integrado." },
      { id: "qh-weapon-glitch", name: "Pane na Arma", tags: ["controle", "sinergia"], note: "Sinergia forte com Tetratronic Rippler e Exploit Integrado." }
    ]
  },
  {
    id: "weapons",
    title: "Armas — jogo base",
    description: "Armas recomendadas na seção de jogo base da Game8.",
    items: [
      { id: "wp-genjiroh", name: "Genjiroh", tags: ["jogo base", "arma inteligente"], note: "Finalizador de suporte com boa sinergia com Recirculação." },
      { id: "wp-prototype-shingen-mark-v", name: "Protótipo: Shingen Mark V", tags: ["jogo base", "arma inteligente"], note: "Outra arma inteligente principal para recuperar RAM via Recirculação." }
    ]
  },
  {
    id: "playstyle",
    title: "Roteiro de uso",
    description: "Como jogar a build no jogo base, mantendo o foco em stealth e quickhacks.",
    items: [
      { id: "play-slow-stealth", name: "Jogar devagar e evitar tiroteio direto", tags: ["prioridade"], note: "A Game8 destaca que a build é muito forte antes de ser detectada, mas sofre em confronto direto." },
      { id: "play-scan-first", name: "Escanear o ambiente antes de iniciar combate", tags: ["prioridade"] },
      { id: "play-overclock", name: "Ativar Overclock antes de uploads pesados", tags: ["RAM", "prioridade"] },
      { id: "play-memory-wipe-first", name: "Abrir com Apagão de Memória quando quiser evitar rastreamento", tags: ["stealth", "combo"] },
      { id: "play-combo-contagion-overheat", name: "Combo de grupo: Contágio → Superaquecimento", tags: ["grupo"] },
      { id: "play-combo-malfunction-short", name: "Combo de alvo forte: Falha de Cyberware → Curto-Circuito", tags: ["alvo forte"] },
      { id: "play-monowire-ram", name: "Usar Monofio enquanto a RAM recupera", tags: ["Monofio"] },
      { id: "play-smart-finish", name: "Finalizar sobreviventes com arma inteligente", tags: ["armas inteligentes"] }
    ]
  }
];
