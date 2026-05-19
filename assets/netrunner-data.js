window.NETRUNNER_CATEGORIES = [
  {
    id: "attributes",
    title: "Atributos",
    description: "Alvos de atributo para a build, incluindo a progressão com Phantom Liberty.",
    items: [
      { id: "attr-int-20", name: "Intelligence 20", tags: ["principal", "nível 50/60"], note: "Prioridade máxima: RAM, quickhacks e Monowire." },
      { id: "attr-tech-15", name: "Technical Ability 15", tags: ["principal", "cyberware"], note: "Aumenta suporte de cyberware, dano e recuperação de RAM." },
      { id: "attr-reflex-15", name: "Reflexes 15", tags: ["mobilidade"], note: "Dash e Air Dash para reposicionar." },
      { id: "attr-cool-15", name: "Cool 15", tags: ["stealth"], note: "Ninjutsu e furtividade." },
      { id: "attr-body-16", name: "Body 16", tags: ["Phantom Liberty", "sobrevivência"], note: "Pontos extras do nível 60 para vida e Adrenaline Rush." }
    ]
  },
  {
    id: "intelligence-perks",
    title: "Perks · Intelligence",
    description: "Núcleo da build: quickhack queue, Overclock, combos e suporte para Smart Weapons.",
    items: [
      { id: "perk-optimization", name: "Optimization", tags: ["1 pt"] },
      { id: "perk-proximate-propagation", name: "Proximate Propagation", tags: ["secundário"] },
      { id: "perk-encryption", name: "Encryption", tags: ["secundário"] },
      { id: "perk-subordination", name: "Subordination", tags: ["secundário"] },
      { id: "perk-eye-in-the-sky", name: "Eye in the Sky", tags: ["1 pt"] },
      { id: "perk-forcekill-cypher", name: "Forcekill Cypher", tags: ["secundário"] },
      { id: "perk-warning-explosion-hazard", name: "Warning: Explosion Hazard", tags: ["secundário"] },
      { id: "perk-hack-queue", name: "Hack Queue", tags: ["2 pt", "prioridade"] },
      { id: "perk-feedback-loop", name: "Feedback Loop", tags: ["secundário"] },
      { id: "perk-data-recycler", name: "Data Recycler", tags: ["secundário"] },
      { id: "perk-copy-paste", name: "Copy-Paste", tags: ["secundário"] },
      { id: "perk-counter-a-hack", name: "Counter-A-Hack", tags: ["secundário"] },
      { id: "perk-embedded-exploit", name: "Embedded Exploit", tags: ["2 pt", "prioridade"] },
      { id: "perk-shadowrunner", name: "Shadowrunner", tags: ["secundário"] },
      { id: "perk-icepick", name: "Icepick", tags: ["secundário"] },
      { id: "perk-system-overwhelm", name: "System Overwhelm", tags: ["secundário"] },
      { id: "perk-speculation", name: "Speculation", tags: ["secundário"] },
      { id: "perk-siphon", name: "Siphon", tags: ["Monowire"] },
      { id: "perk-acquisition-specialist", name: "Acquisition Specialist", tags: ["2 pt", "Smart Weapons"] },
      { id: "perk-precision-subroutines", name: "Precision Subroutines", tags: ["secundário"] },
      { id: "perk-no-escape", name: "No Escape", tags: ["secundário"] },
      { id: "perk-target-lock-transfer", name: "Target Lock Transfer", tags: ["3 pt", "Smart Weapons"] },
      { id: "perk-targeting-prism", name: "Targeting Prism", tags: ["secundário"] },
      { id: "perk-terminal-velocity", name: "Terminal Velocity", tags: ["secundário"] },
      { id: "perk-overclock", name: "Overclock", tags: ["3 pt", "prioridade"] },
      { id: "perk-power-surge", name: "Power Surge", tags: ["secundário"] },
      { id: "perk-race-against-mind", name: "Race Against Mind", tags: ["secundário"] },
      { id: "perk-sublimation", name: "Sublimation", tags: ["secundário"] },
      { id: "perk-queue-acceleration", name: "Queue Acceleration", tags: ["3 pt", "prioridade"] },
      { id: "perk-queue-hack-root", name: "Queue Hack_Root", tags: ["secundário"] },
      { id: "perk-queue-prioritization", name: "Queue Prioritization", tags: ["secundário"] },
      { id: "perk-finisher-live-wire", name: "Finisher: Live Wire", tags: ["Monowire"] },
      { id: "perk-queue-mastery", name: "Queue Mastery", tags: ["final", "prioridade"] },
      { id: "perk-spillover", name: "Spillover", tags: ["final"] },
      { id: "perk-smart-synergy", name: "Smart Synergy", tags: ["final", "Smart Weapons"] },
      { id: "perk-blood-daemon", name: "Blood Daemon", tags: ["cross-branch"] },
      { id: "perk-recirculation", name: "Recirculation", tags: ["cross-branch", "RAM"] },
      { id: "perk-carhacker", name: "Carhacker", tags: ["veículo"] }
    ]
  },
  {
    id: "other-perks",
    title: "Perks · Outros atributos",
    description: "Perks complementares de Technical Ability, Reflexes, Cool e Body.",
    items: [
      { id: "perk-glutton-for-war", name: "Glutton for War", tags: ["Technical", "1 pt"] },
      { id: "perk-all-things-cyber", name: "All Things Cyber", tags: ["Technical", "2 pt", "prioridade"] },
      { id: "perk-renaissance-punk", name: "Renaissance Punk", tags: ["Technical"] },
      { id: "perk-driver-update", name: "Driver Update", tags: ["Technical"] },
      { id: "perk-chipware-connoisseur", name: "Chipware Connoisseur", tags: ["Technical"] },
      { id: "perk-license-to-chrome", name: "License to Chrome", tags: ["Technical", "3 pt", "prioridade"] },
      { id: "perk-extended-warranty", name: "Extended Warranty", tags: ["Technical"] },
      { id: "perk-gearhead", name: "Gearhead", tags: ["Technical", "veículo"] },
      { id: "perk-slippery", name: "Slippery", tags: ["Reflexes", "1 pt"] },
      { id: "perk-dash", name: "Dash", tags: ["Reflexes", "2 pt", "mobilidade"] },
      { id: "perk-air-dash", name: "Air Dash", tags: ["Reflexes", "3 pt", "mobilidade"] },
      { id: "perk-stuntjock", name: "Stuntjock", tags: ["Reflexes", "veículo"] },
      { id: "perk-feline-footwork", name: "Feline Footwork", tags: ["Cool", "1 pt"] },
      { id: "perk-ninjutsu", name: "Ninjutsu", tags: ["Cool", "3 pt", "stealth"] },
      { id: "perk-shinobi-sprint", name: "Shinobi Sprint", tags: ["Cool", "opcional sem DLC"] },
      { id: "perk-creeping-death", name: "Creeping Death", tags: ["Cool", "stealth"] },
      { id: "perk-vanishing-act", name: "Vanishing Act", tags: ["Cool", "opcional sem DLC"] },
      { id: "perk-painkiller", name: "Painkiller", tags: ["Body", "1 pt"] },
      { id: "perk-comeback-kid", name: "Comeback Kid", tags: ["Body", "opcional sem DLC"] },
      { id: "perk-adrenaline-rush", name: "Adrenaline Rush", tags: ["Body", "3 pt", "Phantom Liberty"] },
      { id: "perk-juggernaut", name: "Juggernaut", tags: ["Body", "Phantom Liberty"] },
      { id: "perk-unstoppable-force", name: "Unstoppable Force", tags: ["Body", "Phantom Liberty"] },
      { id: "perk-calm-mind", name: "Calm Mind", tags: ["Body", "Phantom Liberty"] },
      { id: "perk-fury-road", name: "Fury Road", tags: ["opcional sem DLC"] }
    ]
  },
  {
    id: "relic",
    title: "Relic · Phantom Liberty",
    description: "Prioridade da árvore Relic para quem tem a expansão Phantom Liberty.",
    items: [
      { id: "relic-jailbreak", name: "Jailbreak", tags: ["1º", "Monowire", "DLC"], note: "Libera slot adicional de quickhack no Monowire." },
      { id: "relic-data-tunneling", name: "Data Tunneling", tags: ["1º branch", "Monowire", "DLC"], note: "Espalha o quickhack do Monowire para outros inimigos." },
      { id: "relic-emergency-cloaking", name: "Emergency Cloaking", tags: ["2º", "DLC"] },
      { id: "relic-sensory-protocol", name: "Sensory Protocol", tags: ["2º branch", "DLC"] },
      { id: "relic-vulnerability-analytics", name: "Vulnerability Analytics", tags: ["3º", "DLC"] },
      { id: "relic-machine-learning", name: "Machine Learning", tags: ["3º branch", "DLC"] }
    ]
  },
  {
    id: "cyberware",
    title: "Cyberwares",
    description: "Cyberwares recomendados por slot para RAM, furtividade, sobrevivência e Monowire.",
    items: [
      { id: "cw-tetratronic-rippler", name: "Tetratronic Rippler MK.5", tags: ["Operating System", "prioridade"], note: "+5 RAM e sinergia com Overclock e quickhack queue." },
      { id: "cw-thermal-monowire", name: "Thermal Monowire", tags: ["Arms", "Monowire"], note: "Opção recomendada para recuperar RAM e finalizar inimigos." },
      { id: "cw-kiroshi-sentry", name: "Kiroshi \"Sentry\" Optics", tags: ["Face"] },
      { id: "cw-microgenerator", name: "Microgenerator", tags: ["Hands"] },
      { id: "cw-smart-link", name: "Smart Link", tags: ["Hands", "alternativa", "Smart Weapons"], note: "Use se seu foco for Smart Weapons." },
      { id: "cw-adrenaline-booster", name: "Adrenaline Booster", tags: ["Circulatory"] },
      { id: "cw-heal-on-kill", name: "Heal-on-Kill", tags: ["Circulatory", "prioridade"], note: "Ajuda a sobreviver durante Overclock." },
      { id: "cw-microrotors", name: "Microrotors", tags: ["Circulatory", "Monowire"] },
      { id: "cw-reinforced-tendons", name: "Reinforced Tendons", tags: ["Legs", "mobilidade"], note: "Double jump para reposicionar." },
      { id: "cw-lynx-paws", name: "Lynx Paws", tags: ["Legs", "alternativa", "stealth"], note: "Alternativa mais furtiva." },
      { id: "cw-ram-upgrade", name: "RAM Upgrade", tags: ["Frontal Cortex", "RAM"] },
      { id: "cw-ex-disk", name: "Ex-Disk", tags: ["Frontal Cortex", "RAM", "prioridade"] },
      { id: "cw-camillo-ram-manager", name: "Camillo RAM Manager", tags: ["Frontal Cortex", "RAM"] },
      { id: "cw-bioconductor", name: "Bioconductor", tags: ["Frontal Cortex", "alternativa"], note: "Mais dano de quickhack, mas reduz RAM máxima." },
      { id: "cw-dense-marrow", name: "Dense Marrow", tags: ["Skeleton", "Monowire"] },
      { id: "cw-ram-recoup", name: "RAM Recoup", tags: ["Skeleton", "RAM"] },
      { id: "cw-feen-x", name: "Feen-X", tags: ["Skeleton", "RAM regen"] },
      { id: "cw-kerenzikov", name: "Kerenzikov", tags: ["Nervous System"] },
      { id: "cw-synaptic-accelerator", name: "Synaptic Accelerator", tags: ["Nervous System", "stealth"] },
      { id: "cw-subdermal-armor", name: "Subdermal Armor", tags: ["Integumentary"] },
      { id: "cw-pain-editor", name: "Pain Editor", tags: ["Integumentary"] },
      { id: "cw-optical-camo", name: "Optical Camo", tags: ["Integumentary", "stealth", "prioridade"] }
    ]
  },
  {
    id: "quickhacks",
    title: "Quickhacks",
    description: "Quickhacks centrais e combos principais da build.",
    items: [
      { id: "qh-memory-wipe", name: "Memory Wipe", tags: ["Covert", "iniciar combo"], note: "Quickhacks na sequência ficam sem rastreamento." },
      { id: "qh-contagion", name: "Contagion", tags: ["Combat", "combo"], note: "Use antes de Overheat para explodir grupos." },
      { id: "qh-overheat", name: "Overheat", tags: ["Combat", "combo"], note: "Detona Contagion e aplica dano térmico." },
      { id: "qh-cyberware-malfunction", name: "Cyberware Malfunction", tags: ["Control", "combo"], note: "Empilha vulnerabilidade e prepara Short Circuit." },
      { id: "qh-short-circuit", name: "Short Circuit", tags: ["Combat", "combo"], note: "Escala dano com stacks de Cyberware Malfunction." }
    ]
  },
  {
    id: "weapons",
    title: "Armas",
    description: "Armas de suporte; o dano principal da build vem dos quickhacks.",
    items: [
      { id: "wp-genjiroh", name: "Genjiroh", tags: ["Base game", "Smart Weapon"] },
      { id: "wp-prototype-shingen-mark-v", name: "Prototype: Shingen Mark V", tags: ["Base game", "Smart Weapon"] },
      { id: "wp-crimestopper", name: "Crimestopper", tags: ["Phantom Liberty", "Smart Pistol"] },
      { id: "wp-pizdets", name: "Pizdets", tags: ["Phantom Liberty", "Smart SMG"] },
      { id: "wp-hercules-3ax", name: "Hercules 3AX", tags: ["Phantom Liberty", "Smart Assault Rifle"] }
    ]
  },
  {
    id: "playstyle",
    title: "Roteiro de uso",
    description: "Lembretes rápidos para jogar com a build.",
    items: [
      { id: "play-stealth", name: "Evitar combate direto", tags: ["prioridade"], note: "A build brilha derrubando grupos antes de ser detectado." },
      { id: "play-overclock", name: "Ativar Overclock antes dos uploads pesados", tags: ["RAM", "prioridade"] },
      { id: "play-combo-contagion-overheat", name: "Combo: Contagion → Overheat", tags: ["grupo"] },
      { id: "play-combo-malfunction-short", name: "Combo: Cyberware Malfunction → Short Circuit", tags: ["alvo forte"] },
      { id: "play-monowire-ram", name: "Usar Monowire para acelerar recuperação de RAM", tags: ["Monowire"] },
      { id: "play-smart-finish", name: "Finalizar sobreviventes com Smart Weapon", tags: ["Smart Weapons"] }
    ]
  }
];
