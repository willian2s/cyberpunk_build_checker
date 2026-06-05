window.NETRUNNER_CATEGORIES = [
  {
    id: "level-priority",
    title: "Prioridades por level",
    description: "Roteiro prático para montar a build Netrunner usando apenas o jogo base, até o level 50.",
    items: [
      { id: "lvl-01-10-int-9", name: "Level 1–10: subir Inteligência até 9", tags: ["prioridade", "early game"], note: "Comece pela árvore de Inteligência. O objetivo é liberar os primeiros recursos de quickhack e reduzir custo de RAM." },
      { id: "lvl-01-10-perks-int", name: "Level 1–10: perks de Inteligência", tags: ["perks", "prioridade"], note: "Pegue Otimização, Olho no Céu, Cifra de Desligamento Forçado, Aviso: Risco de Explosão e comece Fila de Hacks assim que liberar." },
      { id: "lvl-01-10-basic-hacks", name: "Level 1–10: quickhacks básicos", tags: ["quickhacks"], note: "Priorize Apagão de Memória, Curto-Circuito, Superaquecimento, Falha de Cyberware, Reiniciar Óptica e Ping conforme aparecerem." },

      { id: "lvl-10-20-int-15", name: "Level 10–20: subir Inteligência até 15", tags: ["prioridade"], note: "O objetivo desta faixa é deixar a fila de hacks consistente e preparar a build para Overclock." },
      { id: "lvl-10-20-perks-int", name: "Level 10–20: perks de fila e RAM", tags: ["perks", "prioridade", "RAM"], note: "Pegue Fila de Hacks, Ciclo de Feedback, Reciclador de Dados, Exploit Integrado, Quebra-Gelo, Sobrecarga do Sistema e Especulação." },
      { id: "lvl-10-20-tech-9", name: "Level 10–20: subir Habilidade Técnica até 9", tags: ["cyberware"], note: "Comece a melhorar capacidade de cyberware e sobrevivência para sustentar uploads mais agressivos." },
      { id: "lvl-10-20-perks-tech", name: "Level 10–20: perks iniciais de Habilidade Técnica", tags: ["perks", "cyberware"], note: "Pegue Glutão de Guerra, Tudo que é Cibernético e Punk Renascentista." },

      { id: "lvl-20-30-int-20", name: "Level 20–30: fechar Inteligência 20", tags: ["prioridade", "core"], note: "Esta é a maior virada da build: Overclock e os perks finais da fila passam a carregar o dano principal." },
      { id: "lvl-20-30-perks-overclock", name: "Level 20–30: perks de Overclock e fila avançada", tags: ["perks", "prioridade", "core"], note: "Pegue Overclock, Surto de Energia, Corrida Contra a Mente, Sublimação, Aceleração da Fila, Fila Hack_Root, Priorização da Fila, Maestria da Fila e Transbordamento." },
      { id: "lvl-20-30-perks-smart", name: "Level 20–30: perks de armas inteligentes", tags: ["perks", "armas inteligentes"], note: "Pegue Especialista em Aquisição, Sub-rotinas de Precisão, Sem Escapatória, Transferência de Mira Travada, Prisma de Mira, Velocidade Terminal e Sinergia Inteligente." },
      { id: "lvl-20-30-cyberdeck", name: "Level 20–30: trocar para cyberdeck melhor", tags: ["cyberdeck"], note: "Use o melhor cyberdeck disponível no seu nível; o Tetratronic Rippler é o alvo final." },

      { id: "lvl-30-40-tech-15", name: "Level 30–40: subir Habilidade Técnica até 15", tags: ["prioridade", "cyberware"], note: "O objetivo é consolidar capacidade de cyberware, defesa e upgrades para jogar com mais segurança." },
      { id: "lvl-30-40-perks-tech", name: "Level 30–40: perks avançados de cyberware", tags: ["perks", "prioridade", "cyberware"], note: "Pegue Atualização de Driver, Conhecedor de Chipware, Licença para Cromar e Garantia Estendida." },
      { id: "lvl-30-40-reflex-9", name: "Level 30–40: subir Reflexos até 9", tags: ["mobilidade"], note: "Pegue mobilidade suficiente para reposicionar durante Overclock e sair de combate direto." },
      { id: "lvl-30-40-perks-reflex", name: "Level 30–40: perks iniciais de Reflexos", tags: ["perks", "mobilidade"], note: "Pegue Escorregadio e Arrancada." },

      { id: "lvl-40-50-reflex-15", name: "Level 40–50: subir Reflexos até 15", tags: ["mobilidade"], note: "Finalize a mobilidade da build para entrar, reposicionar e sair de ângulos ruins." },
      { id: "lvl-40-50-perks-reflex", name: "Level 40–50: perks finais de Reflexos", tags: ["perks", "mobilidade"], note: "Pegue Arrancada Aérea. Depois use sobras para conforto em Constituição ou Sangue-Frio." },
      { id: "lvl-40-50-final-points", name: "Level 40–50: pontos finais em Constituição/Sangue-Frio", tags: ["ajuste final"], note: "Com pontos sobrando, priorize sobrevivência básica. Se quiser mais utilidade, adicione perks opcionais como Hackeador de Carros, Copiar e Colar ou Contra-Hack." }
    ]
  },
  {
    id: "attributes",
    title: "Atributos finais — jogo base",
    description: "Distribuição alcançável no level 50, sem Phantom Liberty e sem árvore Relic.",
    items: [
      { id: "attr-int-20", name: "Inteligência 20", tags: ["principal", "prioridade"], note: "Núcleo da build: quickhacks, RAM, Overclock e armas inteligentes." },
      { id: "attr-tech-15", name: "Habilidade Técnica 15", tags: ["principal", "cyberware"], note: "Sustenta capacidade de cyberware, defesa e qualidade dos implantes." },
      { id: "attr-reflex-15", name: "Reflexos 15", tags: ["mobilidade"], note: "Dash e Air Dash para reposicionar sem depender de resistência alta." },
      { id: "attr-body-4", name: "Constituição 4", tags: ["sobrevivência"], note: "Pontos sobrando para um pouco mais de vida e conforto." },
      { id: "attr-cool-4", name: "Sangue-Frio 4", tags: ["furtividade leve"], note: "Suficiente para apoio furtivo básico; não é uma build de stealth puro." }
    ]
  },
  {
    id: "intelligence-perks",
    title: "Vantagens · Inteligência",
    description: "Núcleo da build: fila de quickhacks, Overclock, combos e suporte para armas inteligentes.",
    items: [
      { id: "perk-optimization", name: "Otimização", tags: ["1 pt", "prioridade"] },
      { id: "perk-eye-in-the-sky", name: "Olho no Céu", tags: ["1 pt", "prioridade"] },
      { id: "perk-forcekill-cypher", name: "Cifra de Desligamento Forçado", tags: ["secundário"] },
      { id: "perk-warning-explosion-hazard", name: "Aviso: Risco de Explosão", tags: ["secundário"] },
      { id: "perk-hack-queue", name: "Fila de Hacks", tags: ["2 pt", "prioridade"] },
      { id: "perk-feedback-loop", name: "Ciclo de Feedback", tags: ["prioridade", "RAM"] },
      { id: "perk-data-recycler", name: "Reciclador de Dados", tags: ["prioridade", "RAM"] },
      { id: "perk-copy-paste", name: "Copiar e Colar", tags: ["secundário"] },
      { id: "perk-counter-a-hack", name: "Contra-Hack", tags: ["secundário"] },
      { id: "perk-embedded-exploit", name: "Exploit Integrado", tags: ["2 pt", "prioridade"] },
      { id: "perk-icepick", name: "Quebra-Gelo", tags: ["RAM", "prioridade"] },
      { id: "perk-system-overwhelm", name: "Sobrecarga do Sistema", tags: ["dano"] },
      { id: "perk-speculation", name: "Especulação", tags: ["RAM"] },
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
      { id: "perk-queue-mastery", name: "Maestria da Fila", tags: ["final", "prioridade"] },
      { id: "perk-spillover", name: "Transbordamento", tags: ["final"] },
      { id: "perk-smart-synergy", name: "Sinergia Inteligente", tags: ["final", "armas inteligentes"] },
      { id: "perk-blood-daemon", name: "Daemon de Sangue", tags: ["recuperação"] },
      { id: "perk-recirculation", name: "Recirculação", tags: ["RAM"] },
      { id: "perk-carhacker", name: "Hackeador de Carros", tags: ["opcional"] }
    ]
  },
  {
    id: "tech-perks",
    title: "Vantagens · Habilidade Técnica",
    description: "Suporte de cyberware para aumentar defesa, utilidade e sustentação da build no jogo base.",
    items: [
      { id: "perk-glutton-for-war", name: "Glutão de Guerra", tags: ["1 pt"] },
      { id: "perk-all-things-cyber", name: "Tudo que é Cibernético", tags: ["2 pt", "prioridade"] },
      { id: "perk-renaissance-punk", name: "Punk Renascentista", tags: ["prioridade"] },
      { id: "perk-driver-update", name: "Atualização de Driver", tags: ["cyberware"] },
      { id: "perk-chipware-connoisseur", name: "Conhecedor de Chipware", tags: ["cyberware", "prioridade"] },
      { id: "perk-license-to-chrome", name: "Licença para Cromar", tags: ["3 pt", "prioridade"] },
      { id: "perk-extended-warranty", name: "Garantia Estendida", tags: ["cyberware"] }
    ]
  },
  {
    id: "reflex-perks",
    title: "Vantagens · Reflexos",
    description: "Mobilidade para sobreviver, reposicionar e fugir enquanto os quickhacks fazem o trabalho.",
    items: [
      { id: "perk-slippery", name: "Escorregadio", tags: ["1 pt", "prioridade"] },
      { id: "perk-dash", name: "Arrancada", tags: ["2 pt", "prioridade"] },
      { id: "perk-air-dash", name: "Arrancada Aérea", tags: ["3 pt", "prioridade"] }
    ]
  },
  {
    id: "cyberware",
    title: "Cyberwares — jogo base",
    description: "Cyberwares recomendados sem depender de Phantom Liberty.",
    items: [
      { id: "cw-tetratronic-rippler", name: "Tetratronic Rippler MK.5", tags: ["Sistema Operacional", "prioridade"], note: "Alvo final da build: ótimo para Overclock, RAM e fila de quickhacks." },
      { id: "cw-monowire", name: "Monofio", tags: ["Braços", "opcional"], note: "Use como arma de emergência, mas sem Relic ele perde parte da sinergia da versão DLC." },
      { id: "cw-smart-link", name: "Smart Link", tags: ["Mãos", "armas inteligentes", "prioridade"], note: "Necessário para aproveitar melhor armas inteligentes." },
      { id: "cw-heal-on-kill", name: "Cura ao Abater", tags: ["Circulatório", "prioridade"], note: "Ajuda a sobreviver durante Overclock." },
      { id: "cw-biomonitor", name: "Biomonitor", tags: ["Circulatório", "sobrevivência"] },
      { id: "cw-blood-pump", name: "Bomba de Sangue", tags: ["Circulatório", "sobrevivência"] },
      { id: "cw-ram-upgrade", name: "Aprimoramento de RAM", tags: ["Córtex Frontal", "RAM"] },
      { id: "cw-ex-disk", name: "Ex-Disk", tags: ["Córtex Frontal", "RAM", "prioridade"] },
      { id: "cw-camillo-ram-manager", name: "Gerenciador de RAM Camillo", tags: ["Córtex Frontal", "RAM"] },
      { id: "cw-memory-boost", name: "Impulso de Memória", tags: ["Córtex Frontal", "RAM"] },
      { id: "cw-kiroshi", name: "Óptica Kiroshi", tags: ["Rosto"] },
      { id: "cw-reinforced-tendons", name: "Tendões Reforçados", tags: ["Pernas", "mobilidade"], note: "Pulo duplo para reposicionar." },
      { id: "cw-optical-camo", name: "Camuflagem Óptica", tags: ["Tegumentar", "furtividade"] },
      { id: "cw-subdermal-armor", name: "Armadura Subdérmica", tags: ["Tegumentar", "defesa"] },
      { id: "cw-synaptic-accelerator", name: "Acelerador Sináptico", tags: ["Sistema Nervoso", "furtividade"] }
    ]
  },
  {
    id: "quickhacks",
    title: "Quickhacks",
    description: "Quickhacks centrais e combos principais da build no jogo base.",
    items: [
      { id: "qh-memory-wipe", name: "Apagão de Memória", tags: ["furtivo", "iniciar combo"], note: "Ajuda a reduzir rastreamento e preparar uploads seguros." },
      { id: "qh-contagion", name: "Contágio", tags: ["combate", "grupo"], note: "Use contra grupos e combine com Superaquecimento." },
      { id: "qh-overheat", name: "Superaquecimento", tags: ["combate", "combo"], note: "Dano térmico forte e boa combinação com Contágio." },
      { id: "qh-cyberware-malfunction", name: "Falha de Cyberware", tags: ["controle", "combo"], note: "Empilha vulnerabilidade e prepara Curto-Circuito." },
      { id: "qh-short-circuit", name: "Curto-Circuito", tags: ["combate", "combo"], note: "Ótimo contra alvos fortes, drones e inimigos mecanizados." },
      { id: "qh-reboot-optics", name: "Reiniciar Óptica", tags: ["controle", "furtividade"] },
      { id: "qh-weapon-glitch", name: "Pane na Arma", tags: ["controle", "sobrevivência"] },
      { id: "qh-ping", name: "Ping", tags: ["utilidade"] }
    ]
  },
  {
    id: "weapons",
    title: "Armas — jogo base",
    description: "Armas de suporte disponíveis sem Phantom Liberty; o dano principal continua vindo dos quickhacks.",
    items: [
      { id: "wp-genjiroh", name: "Genjiroh", tags: ["jogo base", "arma inteligente"] },
      { id: "wp-prototype-shingen-mark-v", name: "Protótipo: Shingen Mark V", tags: ["jogo base", "arma inteligente"] },
      { id: "wp-yinglong", name: "Yinglong", tags: ["jogo base", "SMG inteligente"] },
      { id: "wp-divided-we-stand", name: "Divided We Stand", tags: ["jogo base", "rifle inteligente"] },
      { id: "wp-l-69-zhuo", name: "L-69 Zhuo", tags: ["jogo base", "shotgun inteligente"] }
    ]
  },
  {
    id: "playstyle",
    title: "Roteiro de uso",
    description: "Lembretes rápidos para jogar com a build sem depender da DLC.",
    items: [
      { id: "play-scan-first", name: "Escanear e marcar inimigos antes de entrar", tags: ["prioridade"] },
      { id: "play-stealth", name: "Evitar combate direto prolongado", tags: ["prioridade"], note: "A build é forte, mas não é um tanque." },
      { id: "play-overclock", name: "Ativar Overclock antes dos uploads pesados", tags: ["RAM", "prioridade"] },
      { id: "play-combo-contagion-overheat", name: "Combo: Contágio → Superaquecimento", tags: ["grupo"] },
      { id: "play-combo-malfunction-short", name: "Combo: Falha de Cyberware → Curto-Circuito", tags: ["alvo forte"] },
      { id: "play-smart-finish", name: "Finalizar sobreviventes com arma inteligente", tags: ["armas inteligentes"] }
    ]
  }
];
