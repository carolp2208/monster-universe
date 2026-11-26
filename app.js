const BASE_CHARACTERS = [
  {
    id: 'rayssa',
    code: '#01',
    name: 'RAYSSA',
    title: 'THE CARNAVAL QUEEN',
    level: 1,
    accent: '#58e0b8',
    nameColor: '#f4d03f',
    flavor: 'RIO PUNCH',
    stats: { hp: 5, atk: 5, def: 4, spd: 7 },
    abilityName: 'CARNAVAL BEAT',
    abilityDesc: 'BONUS ENERGY AND SPEED WITH AN UPBEAT SONG!',
    catchphrase: "LET'S DANCE ?",
    badges: [
      { key: 'dancer', label: 'RITMO' },
      { key: 'claws', label: 'GARRA' },
      { key: 'feather', label: 'PLUMA' }
    ],
    img: 'Grafic_elements.pngs/Rayssa.png'
  },
  {
    id: 'rosie',
    code: '#02',
    name: 'ROSIE',
    title: 'THE WHIMSICAL REBEL',
    level: 1,
    accent: '#f45b9c',
    nameColor: '#f45b9c',
    flavor: 'ULTRA ROSA',
    stats: { hp: 6, atk: 4, def: 7, spd: 5 },
    abilityName: 'ROSE MAGIC',
    abilityDesc: 'UNLEASHES A FLURRY OF MAGICAL ROSES!',
    catchphrase: 'NEED A TOUCH OF MAGIC?',
    badges: [
      { key: 'sparkle', label: 'BRILHO' },
      { key: 'claws', label: 'GARRA' },
      { key: 'rose', label: 'PETALAS' }
    ],
    img: 'Grafic_elements.pngs/Rosie.png'
  },
  {
    id: 'kabo',
    code: '#03',
    name: 'KABO',
    title: 'ENERGY REBEL',
    level: 1,
    accent: '#a2d627',
    nameColor: '#a2d627',
    flavor: 'ORIGINAL',
    stats: { hp: 7, atk: 5, def: 3, spd: 7 },
    abilityName: 'ENERGY BOOST',
    abilityDesc: 'OVERCHARGES CORE ADRENALINE FOR EXPLOSIVE SPEED AND STRIKES!',
    catchphrase: "YOU'RE IN A RUSH?",
    badges: [
      { key: 'runner', label: 'SPRINT' },
      { key: 'claws', label: 'GARRA' },
      { key: 'atom', label: 'NUCLEO' }
    ],
    img: 'Grafic_elements.pngs/Kabo.png'
  },
  {
    id: 'kira',
    code: '#04',
    name: 'KIRA',
    title: 'THE ICE EMPRESS',
    level: 1,
    accent: '#dce4ec',
    nameColor: '#dce4ec',
    flavor: 'ULTRA WHITE',
    stats: { hp: 5, atk: 4, def: 7, spd: 5 },
    abilityName: 'ULTRA CHILL',
    abilityDesc: 'INCREASES EVASION AND HP FOR A SHORT PERIOD.',
    catchphrase: "YOU'RE COLD?",
    badges: [
      { key: 'snowflake', label: 'NEVASCA' },
      { key: 'claws', label: 'GARRA' },
      { key: 'thermo', label: 'ZERO' }
    ],
    img: 'Grafic_elements.pngs/Kira.png'
  },
  {
    id: 'jax',
    code: '#05',
    name: 'JAX',
    title: 'THE VOLTAGE REBEL',
    level: 1,
    accent: '#2fd4ff',
    nameColor: '#2fd4ff',
    flavor: 'BLUE HAWAIIAN',
    stats: { hp: 6, atk: 7, def: 3, spd: 5 },
    abilityName: 'VOLTAGE SURGE',
    abilityDesc: 'UNLEASHES A SURGE OF HIGH-VOLTAGE ELECTRIC ENERGY.',
    catchphrase: 'CAN YOU FEEL THE SPARKS?',
    badges: [
      { key: 'bolt', label: 'VOLTAGEM' },
      { key: 'claws', label: 'GARRA' },
      { key: 'sparkblade', label: 'LAMINA' }
    ],
    img: 'Grafic_elements.pngs/Jax.png'
  },
  {
    id: 'mateo',
    code: '#06',
    name: 'MATEO',
    title: 'THE FESTIVAL SPIRIT',
    level: 1,
    accent: '#f39c38',
    nameColor: '#48c9b0',
    flavor: 'MANGO LOCO',
    stats: { hp: 5, atk: 7, def: 4, spd: 5 },
    abilityName: 'FESTIVAL SPIRIT',
    abilityDesc: 'UNLEASHES A FLURRY OF FESTIVE ENERGY THAT BOOSTS ALLIES STATUS.',
    catchphrase: 'TIME TO CELEBRATE!',
    badges: [
      { key: 'skull', label: 'ESPIRITO' },
      { key: 'claws', label: 'GARRA' },
      { key: 'marigold', label: 'SOLAR' }
    ],
    img: 'Grafic_elements.pngs/Mateo.png'
  }
];

const BADGE_SVGS = {
  dancer: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="13" cy="5" r="2"/><path d="M10 9l4-1 3 3-2 2-2-2-1 4 3 4h-2.5l-2-3-2 3H7l2.5-4.5L10 9z"/><path d="M5 6v4a1.5 1.5 0 1 1-1-1.4V5l3-.8v1.5L5 6z"/></svg>`,
  claws: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 4c2.5 5 3.5 10 3 16 1.5-5 1-11-1.2-16H5zm6-1c2.5 5.5 3.5 11 3 18 1.5-5.5 1-12-1.2-18H11zm6 1c2.2 5 3 10 2.5 16 1.4-5 1-11-1-16H17z"/></svg>`,
  feather: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19 4C12 4 6 10 5 20c5-1 11-7 14-16z"/><path d="M5 20L16 7"/></svg>`,
  sparkle: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2L12 2z"/></svg>`,
  rose: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="10" r="5"/><path d="M12 7c1.8 0 3 1.2 3 3s-1.2 3-3 3-3-1.2-3-3"/><path d="M12 15v6M12 18c-2.5 0-4-1.5-4-1.5M12 19c2.5 0 4-1.5 4-1.5"/></svg>`,
  runner: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="15" cy="4.5" r="2"/><path d="M10 8.5l4-1 3.5 3-1.8 1.8-2.2-1.8-1.5 3 3.5 3.5-1.5 3-2.5-2.8-3 2.8-1.5-1.6 3.2-3.4 1.3-3.5-2.2 1.2-1.3-1.7 3-2.5z"/></svg>`,
  atom: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="2" fill="currentColor"/><ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(30 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(-30 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(90 12 12)"/></svg>`,
  snowflake: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1"/><path d="M9.5 4.5L12 7l2.5-2.5M9.5 19.5L12 17l2.5 2.5M4.5 9.5L7 12l-2.5 2.5M19.5 9.5L17 12l2.5 2.5"/></svg>`,
  thermo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 14.76V5a2 2 0 1 0-4 0v9.76a4 4 0 1 0 4 0z"/><circle cx="12" cy="17.5" r="1.5" fill="currentColor"/><path d="M12 10v6"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L4 14h6.5L9 22l11-12h-6.5L13 2z"/></svg>`,
  sparkblade: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 3l3 3-11 11-3-3L18 3z"/><path d="M5 16l3 3M4 20l2-2"/></svg>`,
  skull: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3a7 7 0 0 0-5 11.9V18a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3.1A7 7 0 0 0 12 3z"/><circle cx="9.5" cy="11" r="1.3" fill="currentColor"/><circle cx="14.5" cy="11" r="1.3" fill="currentColor"/><path d="M10 17v3M14 17v3"/></svg>`,
  marigold: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="3" fill="currentColor"/><circle cx="12" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="12" r="2.5"/><circle cx="7.8" cy="7.8" r="2.2"/><circle cx="16.2" cy="16.2" r="2.2"/><circle cx="16.2" cy="7.8" r="2.2"/><circle cx="7.8" cy="16.2" r="2.2"/></svg>`
};

const FLAVOR_ACCENTS = {
  NITRO: '#a2d627',
  ORIGINAL: '#a2d627',
  ULTRA: '#dce4ec',
  PUNCH: '#f45b9c',
  ASSAULT: '#2fd4ff'
};

let characters = [...BASE_CHARACTERS];
let energy = 100;
const PACK_COST = 20;
const unlockedIds = new Set();
let isDecrypting = false;
let sfxEnabled = true;
let activeDossierId = null;

// =========================================================
// SINTETIZADOR DE ÁUDIO CYBERPUNK (WEB AUDIO API)
// =========================================================
let audioCtx = null;
function playCyberTone(freq, type = 'sawtooth', duration = 0.08, vol = 0.06) {
  if (!sfxEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(vol, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}

// =========================================================
// 1. CHUVA DE CÓDIGO MATRIX NO FUNDO
// =========================================================
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');
const glyphSet = '01ABCDEF#$%&*<>[]{}404_ERR_MONSTER_SYS';
const fontSize = 14;
let columns = 0;
let drops = [];

function resizeMatrix() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(1);
}
resizeMatrix();
window.addEventListener('resize', resizeMatrix);

function renderMatrix() {
  ctx.fillStyle = 'rgba(2, 3, 2, 0.16)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = `${fontSize}px "Share Tech Mono", monospace`;

  for (let i = 0; i < drops.length; i++) {
    const ch = glyphSet[Math.floor(Math.random() * glyphSet.length)];
    const r = Math.random();
    if (r > 0.95) ctx.fillStyle = '#a2d627';
    else if (r > 0.82) ctx.fillStyle = '#cfd1cd';
    else ctx.fillStyle = '#2f6f0b';

    ctx.fillText(ch, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.97) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(renderMatrix, 48);

// =========================================================
// 2. RELÓGIO, LOGS DO TERMINAL E POP-UPS DE ERRO INTERATIVOS
// =========================================================
const liveClock = document.getElementById('live-clock');
const hexStream = document.getElementById('hex-stream');
setInterval(() => {
  const now = new Date();
  if (liveClock) liveClock.textContent = now.toTimeString().split(' ')[0];
  if (hexStream) {
    hexStream.textContent = 'MEM: 0x' + Math.floor(Math.random() * 65535).toString(16).toUpperCase().padStart(4, '0');
  }
}, 1000);

const KERNEL_LOGS = [
  '> [OK] KERNEL_MONSTER_OS CARREGADO',
  '> [WARN] INTRUSAO DETETADA NO SETOR 404',
  '> [SYS] A DESENCRIPTAR ASSINATURAS: RAYSSA, ROSIE, KABO...',
  '> [ERR_0x8F] FLUTUACAO DE ENERGIA NO NUCLEO',
  '> [SYS] A DESENCRIPTAR ASSINATURAS: KIRA, JAX, MATEO...',
  '> [READY] TERMINAL PRONTO PARA EXTRACAO NEURAL'
];

const consoleStream = document.getElementById('console-stream');
let logPtr = 0;
function appendKernelLog() {
  if (!consoleStream) return;
  const div = document.createElement('div');
  const txt = KERNEL_LOGS[logPtr % KERNEL_LOGS.length];
  div.className = 'log-line' + (txt.includes('WARN') || txt.includes('ERR') ? ' warn' : '');
  div.textContent = txt;
  consoleStream.appendChild(div);
  if (consoleStream.children.length > 4) {
    consoleStream.removeChild(consoleStream.firstChild);
  }
  logPtr++;
}
appendKernelLog();
appendKernelLog();
appendKernelLog();
setInterval(appendKernelLog, 1700);

const sysAlertBar = document.getElementById('sys-alert-bar');
const errCodeEl = document.getElementById('err-code');
const glitchFlash = document.getElementById('glitch-flash');
const glitchTriggerBtn = document.getElementById('glitch-trigger-btn');

const errorPopup = document.getElementById('error-popup');
const popupErrTitle = document.getElementById('popup-err-title');
const popupErrBody = document.getElementById('popup-err-body');
const closeErrPopup = document.getElementById('close-err-popup');
const interceptErrBtn = document.getElementById('intercept-err-btn');

const ERROR_EVENTS = [
  { code: '[ERR_0x404_BREACH]', title: '[CRITICAL_ERR // 0x404]', body: 'BRECHA NA FIREWALL MONSTER_NET. INTERCETA O PACOTE DE DADOS PARA GANHAR +15 PWR.' },
  { code: '[WARN_0x91C_SURGE]', title: '[ENERGY_SURGE // 0x91C]', body: 'SOBRECARGA DETETADA NA REDE NITRO. CAPTURA A ANOMALIA ANTES QUE DISSIPAR.' },
  { code: '[ERR_0x00F_GLITCH]', title: '[MEMORY_LEAK // 0x00F]', body: 'FRAGMENTO ENCRIPTADO EXPOSTO NA MEMORIA. EXTRAI +15 PWR AGORA.' }
];

function triggerGlitchPulse(customCode) {
  glitchFlash.classList.remove('active');
  void glitchFlash.offsetWidth;
  glitchFlash.classList.add('active');

  sysAlertBar.classList.add('error-state');
  if (customCode) errCodeEl.textContent = customCode;
  playCyberTone(140, 'sawtooth', 0.14, 0.08);

  setTimeout(() => {
    sysAlertBar.classList.remove('error-state');
  }, 450);
}

glitchTriggerBtn.addEventListener('click', () => {
  const ev = ERROR_EVENTS[Math.floor(Math.random() * ERROR_EVENTS.length)];
  triggerGlitchPulse(ev.code);
  showErrorPopup(ev);
});

function showErrorPopup(ev) {
  popupErrTitle.textContent = ev.title;
  popupErrBody.textContent = ev.body;
  errorPopup.classList.remove('hidden');
}

closeErrPopup.addEventListener('click', () => {
  errorPopup.classList.add('hidden');
  playCyberTone(320, 'square', 0.05, 0.04);
});

interceptErrBtn.addEventListener('click', () => {
  energy += 15;
  errorPopup.classList.add('hidden');
  triggerGlitchPulse('[SYS_INTERCEPT_OK]');
  playCyberTone(680, 'sine', 0.12, 0.08);
  updateUI();
});

setInterval(() => {
  const ev = ERROR_EVENTS[Math.floor(Math.random() * ERROR_EVENTS.length)];
  errCodeEl.textContent = ev.code;
  if (Math.random() > 0.45 && errorPopup.classList.contains('hidden')) {
    triggerGlitchPulse(ev.code);
    showErrorPopup(ev);
  }
}, 14000);

// =========================================================
// 3. NAVEGAÇÃO ENTRE INTRODUÇÃO E APLICAÇÃO
// =========================================================
const introScreen = document.getElementById('intro-screen');
const mainApp = document.getElementById('main-app');
const enterAppBtn = document.getElementById('enter-app-btn');
const backIntroBtn = document.getElementById('back-intro-btn');
const infoBtn = document.getElementById('info-btn');
const audioToggleBtn = document.getElementById('audio-toggle-btn');

enterAppBtn.addEventListener('click', () => {
  triggerGlitchPulse('[BOOT_APP_OK]');
  playCyberTone(520, 'square', 0.1, 0.07);
  introScreen.classList.add('hidden');
  mainApp.classList.remove('hidden');
  window.scrollTo(0, 0);
});

function goIntro() {
  playCyberTone(380, 'square', 0.08, 0.05);
  mainApp.classList.add('hidden');
  introScreen.classList.remove('hidden');
  window.scrollTo(0, 0);
}

backIntroBtn.addEventListener('click', goIntro);
infoBtn.addEventListener('click', goIntro);

audioToggleBtn.addEventListener('click', () => {
  sfxEnabled = !sfxEnabled;
  audioToggleBtn.textContent = sfxEnabled ? 'SFX: ON' : 'SFX: OFF';
  if (sfxEnabled) playCyberTone(600, 'sine', 0.06, 0.05);
});

const navBtns = document.querySelectorAll('.nav-btn');
const views = document.querySelectorAll('.view');

function switchTab(targetId) {
  navBtns.forEach(b => b.classList.toggle('active', b.dataset.target === targetId));
  views.forEach(v => v.classList.toggle('active', v.id === targetId));
}

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    playCyberTone(440, 'triangle', 0.05, 0.05);
    switchTab(btn.dataset.target);
  });
});

// =========================================================
// 4. SISTEMA DE DESENCRIPTAÇÃO DE CÁPSULA & ROSTER
// =========================================================
const energyDisplay = document.getElementById('energy-count');
const openPackBtn = document.getElementById('open-pack-btn');
const rechargeBtn = document.getElementById('recharge-btn');
const packTrigger = document.getElementById('pack-trigger');
const packHint = document.getElementById('pack-hint');
const decryptWrap = document.getElementById('decrypt-progress-wrap');
const decryptFill = document.getElementById('decrypt-fill');
const decryptStatus = document.getElementById('decrypt-status');

const rosterGrid = document.getElementById('roster-grid');
const progressText = document.getElementById('collection-progress');

const creatorLockTag = document.getElementById('creator-lock-tag');
const creatorLockedMsg = document.getElementById('creator-locked-msg');
const creatorForm = document.getElementById('creator-form');

function updateUI() {
  energyDisplay.textContent = energy;
  const outOfEnergy = energy < PACK_COST;
  openPackBtn.disabled = outOfEnergy || isDecrypting;
  rechargeBtn.classList.toggle('hidden', !outOfEnergy);

  const baseUnlockedCount = BASE_CHARACTERS.filter(c => unlockedIds.has(c.id)).length;
  progressText.textContent = `${unlockedIds.size} / ${characters.length}`;

  const allBaseUnlocked = baseUnlockedCount >= BASE_CHARACTERS.length;
  if (allBaseUnlocked) {
    creatorLockTag.textContent = 'DESBLOQUEADO';
    creatorLockedMsg.classList.add('hidden');
    creatorForm.classList.remove('hidden');
  } else {
    creatorLockTag.textContent = `${baseUnlockedCount}/6 AGENTES`;
  }

  renderRoster();
}

function renderRoster() {
  rosterGrid.innerHTML = '';
  characters.forEach(char => {
    const isUnlocked = unlockedIds.has(char.id);
    const slot = document.createElement('div');
    slot.className = `agent-slot hud-cut ${isUnlocked ? 'unlocked' : 'locked'}`;
    if (isUnlocked) {
      slot.style.setProperty('--slot-accent', char.accent);
    }

    const visualHtml = char.img
      ? `<img src="${char.img}" alt="${char.name}" onerror="this.style.display='none'">`
      : `<div class="custom-avatar-badge" style="color:${char.accent}">${char.code}</div>`;

    slot.innerHTML = `
      <div class="slot-thumb">${visualHtml}</div>
      <div class="slot-name">${isUnlocked ? char.name : '[ERR_LOCKED]'}</div>
      <div class="slot-sub">${isUnlocked ? char.title : 'ENCRIPTADO'}</div>
    `;

    if (isUnlocked) {
      slot.addEventListener('click', () => {
        playCyberTone(560, 'sine', 0.06, 0.05);
        openCardModal(char);
      });
    }
    rosterGrid.appendChild(slot);
  });
}

function startCapsuleDecryption() {
  if (isDecrypting) return;
  if (energy < PACK_COST) {
    triggerGlitchPulse('[ERR_LOW_PWR]');
    return;
  }

  isDecrypting = true;
  energy -= PACK_COST;
  updateUI();

  packTrigger.classList.add('decrypting');
  packHint.classList.add('hidden');
  decryptWrap.classList.remove('hidden');

  let pct = 0;
  const timer = setInterval(() => {
    pct += 14;
    if (pct > 100) pct = 100;
    decryptFill.style.width = `${pct}%`;
    decryptStatus.textContent = `A QUEBRAR FIREWALL... ${pct}%`;
    playCyberTone(220 + pct * 5, 'sawtooth', 0.05, 0.05);

    if (pct >= 100) {
      clearInterval(timer);
      setTimeout(() => {
        packTrigger.classList.remove('decrypting');
        decryptWrap.classList.add('hidden');
        packHint.classList.remove('hidden');
        decryptFill.style.width = '0%';
        isDecrypting = false;

        const lockedPool = BASE_CHARACTERS.filter(c => !unlockedIds.has(c.id));
        const pool = lockedPool.length > 0 && Math.random() > 0.2 ? lockedPool : BASE_CHARACTERS;
        const chosen = pool[Math.floor(Math.random() * pool.length)];

        unlockedIds.add(chosen.id);
        triggerGlitchPulse('[EXTRACT_SUCCESS]');
        playCyberTone(780, 'square', 0.16, 0.08);
        updateUI();
        openCardModal(chosen);
      }, 220);
    }
  }, 110);
}

openPackBtn.addEventListener('click', startCapsuleDecryption);
packTrigger.addEventListener('click', startCapsuleDecryption);

rechargeBtn.addEventListener('click', () => {
  energy += 100;
  triggerGlitchPulse('[OVERCLOCK_+100]');
  playCyberTone(640, 'triangle', 0.14, 0.08);
  updateUI();
});

// =========================================================
// UPLOAD E PRÉ-VISUALIZAÇÃO DE IMAGEM NO CRIADOR DE AGENTES
// =========================================================
const customImageInput = document.getElementById('custom-image-input');
const imageUploadZone = document.getElementById('image-upload-zone');
const imageUploadPlaceholder = document.getElementById('image-upload-placeholder');
const imagePreviewWrap = document.getElementById('image-preview-wrap');
const customImagePreview = document.getElementById('custom-image-preview');
const customImageName = document.getElementById('custom-image-name');
const removeCustomImgBtn = document.getElementById('remove-custom-img-btn');

let uploadedAgentImage = '';

function resetCustomImageUpload() {
  uploadedAgentImage = '';
  if (customImageInput) customImageInput.value = '';
  if (customImagePreview) customImagePreview.src = '';
  if (imagePreviewWrap) imagePreviewWrap.classList.add('hidden');
  if (imageUploadPlaceholder) imageUploadPlaceholder.classList.remove('hidden');
}

function handleAgentImageFile(file) {
  if (!file || !file.type.startsWith('image/')) {
    triggerGlitchPulse('[ERR_INVALID_IMG]');
    return;
  }

  const reader = new FileReader();
  reader.onload = (event) => {
    const imgObj = new Image();
    imgObj.onload = () => {
      const MAX_DIM = 820;
      let width = imgObj.width;
      let height = imgObj.height;

      if (width > MAX_DIM || height > MAX_DIM) {
        if (width > height) {
          height = Math.round((height * MAX_DIM) / width);
          width = MAX_DIM;
        } else {
          width = Math.round((width * MAX_DIM) / height);
          height = MAX_DIM;
        }
      }

      const offCanvas = document.createElement('canvas');
      offCanvas.width = width;
      offCanvas.height = height;
      const offCtx = offCanvas.getContext('2d');
      offCtx.drawImage(imgObj, 0, 0, width, height);

      const outputMime = file.type === 'image/jpeg' ? 'image/jpeg' : 'image/png';
      uploadedAgentImage = outputMime === 'image/jpeg'
        ? offCanvas.toDataURL('image/jpeg', 0.88)
        : offCanvas.toDataURL('image/png');

      customImagePreview.src = uploadedAgentImage;
      customImageName.textContent = file.name.toUpperCase();
      imageUploadPlaceholder.classList.add('hidden');
      imagePreviewWrap.classList.remove('hidden');
      playCyberTone(640, 'sine', 0.08, 0.06);
    };
    imgObj.src = event.target.result;
  };
  reader.readAsDataURL(file);
}

if (imageUploadZone && customImageInput) {
  imageUploadZone.addEventListener('click', (e) => {
    if (e.target.closest('#remove-custom-img-btn')) return;
    customImageInput.click();
  });

  imageUploadZone.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      customImageInput.click();
    }
  });

  imageUploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    imageUploadZone.classList.add('drag-over');
  });

  imageUploadZone.addEventListener('dragleave', () => {
    imageUploadZone.classList.remove('drag-over');
  });

  imageUploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    imageUploadZone.classList.remove('drag-over');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleAgentImageFile(e.dataTransfer.files[0]);
    }
  });

  customImageInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handleAgentImageFile(e.target.files[0]);
    }
  });
}

if (removeCustomImgBtn) {
  removeCustomImgBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    resetCustomImageUpload();
    playCyberTone(300, 'square', 0.05, 0.04);
  });
}

creatorForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameVal = document.getElementById('custom-name').value.trim().toUpperCase();
  const titleVal = document.getElementById('custom-title').value.trim().toUpperCase();
  const flavorVal = document.getElementById('custom-flavor').value;
  const abilityVal = document.getElementById('custom-ability').value.trim().toUpperCase();
  const descVal = document.getElementById('custom-desc').value.trim().toUpperCase();
  if (!nameVal || !titleVal || !abilityVal || !descVal) return;

  const newId = 'custom_' + Date.now();
  const nextNum = characters.length + 1;
  const chosenAccent = FLAVOR_ACCENTS[flavorVal] || '#a2d627';

  const newChar = {
    id: newId,
    code: nextNum < 10 ? `#0${nextNum}` : `#${nextNum}`,
    name: nameVal,
    title: titleVal,
    level: 1,
    accent: chosenAccent,
    nameColor: chosenAccent,
    flavor: flavorVal,
    stats: {
      hp: Math.floor(4 + Math.random() * 4),
      atk: Math.floor(4 + Math.random() * 4),
      def: Math.floor(4 + Math.random() * 4),
      spd: Math.floor(4 + Math.random() * 4)
    },
    abilityName: abilityVal,
    abilityDesc: descVal,
    catchphrase: 'READY TO OVERCHARGE?',
    badges: [
      { key: 'bolt', label: 'VOLTAGEM' },
      { key: 'claws', label: 'GARRA' },
      { key: 'atom', label: 'NUCLEO' }
    ],
    img: uploadedAgentImage
  };

  characters.push(newChar);
  unlockedIds.add(newId);
  creatorForm.reset();
  resetCustomImageUpload();
  triggerGlitchPulse('[AGENT_COMPILED]');
  playCyberTone(820, 'square', 0.16, 0.08);
  updateUI();
  openCardModal(newChar);
});

// =========================================================
// 5. MODAL: PAINEL DE PERSONAGEM (SHOWCASE PREMIUM + SWIPE)
// =========================================================
const modal = document.getElementById('card-modal');
const inspectCard = document.getElementById('inspect-card');
const holoSheen = document.getElementById('holo-sheen');
const closeModalBackdrop = document.getElementById('close-modal');
const dossierRosterBtn = document.getElementById('dossier-roster-btn');
const dossierHomeBtn = document.getElementById('dossier-home-btn');
const dossierPrevBtn = document.getElementById('dossier-prev-btn');
const dossierNextBtn = document.getElementById('dossier-next-btn');

function renderSegmentedBar(containerId, valId, value, max = 7) {
  const el = document.getElementById(containerId);
  const valEl = document.getElementById(valId);
  if (valEl) valEl.textContent = `${value}/${max}`;
  el.innerHTML = '';
  for (let i = 1; i <= max; i++) {
    const seg = document.createElement('span');
    seg.className = 'seg-block' + (i <= value ? ' filled' : '');
    el.appendChild(seg);
  }
}

function openCardModal(char) {
  activeDossierId = char.id;

  inspectCard.style.setProperty('--char-accent', char.accent);
  inspectCard.style.setProperty('--char-name-color', char.nameColor || char.accent);

  document.getElementById('card-code').textContent = char.code || '#01';
  document.getElementById('card-watermark').textContent = char.code || '#01';
  document.getElementById('card-flavor').textContent = char.flavor || 'ORIGINAL';
  document.getElementById('card-name').textContent = char.name;
  document.getElementById('card-title').textContent = char.title;

  const lvNum = Number(char.level || 1);
  document.getElementById('card-level').textContent = lvNum < 10 ? `0${lvNum}` : `${lvNum}`;

  renderSegmentedBar('bar-hp', 'val-hp', char.stats.hp, 7);
  renderSegmentedBar('bar-atk', 'val-atk', char.stats.atk, 7);
  renderSegmentedBar('bar-def', 'val-def', char.stats.def, 7);
  renderSegmentedBar('bar-spd', 'val-spd', char.stats.spd, 7);

  document.getElementById('card-ability-name').textContent = char.abilityName;
  document.getElementById('card-ability-desc').textContent = char.abilityDesc;
  document.getElementById('card-catchphrase').textContent = `"${char.catchphrase.replace(/^["']|["']$/g, '')}"`;

  // Renderiza os 3 emblemas SVG com legenda
  const emblemsWrap = document.getElementById('card-emblems');
  emblemsWrap.innerHTML = '';
  const badgeList = char.badges || [
    { key: 'sparkle', label: 'ENERGIA' },
    { key: 'claws', label: 'GARRA' },
    { key: 'atom', label: 'NUCLEO' }
  ];
  badgeList.forEach(item => {
    const key = typeof item === 'string' ? item : item.key;
    const label = typeof item === 'string' ? item : item.label;
    const badge = document.createElement('div');
    badge.className = 'emblem-badge';
    badge.innerHTML = `
      ${BADGE_SVGS[key] || BADGE_SVGS.sparkle}
      <span class="emblem-label">${label}</span>
    `;
    emblemsWrap.appendChild(badge);
  });

  // Ilustração corpo inteiro à direita
  const imgEl = document.getElementById('card-img');
  const silEl = document.getElementById('custom-silhouette');
  if (char.img) {
    silEl.classList.add('hidden');
    imgEl.style.display = 'block';
    imgEl.src = char.img;
    imgEl.onerror = () => {
      imgEl.style.display = 'none';
      silEl.classList.remove('hidden');
      document.getElementById('custom-sil-code').textContent = char.code;
    };
  } else {
    imgEl.style.display = 'none';
    silEl.classList.remove('hidden');
    document.getElementById('custom-sil-code').textContent = char.code;
  }

  inspectCard.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
  modal.classList.remove('hidden');
}

function closeCardModal() {
  modal.classList.add('hidden');
  playCyberTone(300, 'sine', 0.05, 0.04);
}

function stepUnlockedDossier(direction) {
  const unlockedList = characters.filter(c => unlockedIds.has(c.id));
  if (unlockedList.length <= 1) {
    playCyberTone(220, 'sawtooth', 0.06, 0.05);
    return;
  }
  const idx = unlockedList.findIndex(c => c.id === activeDossierId);
  const nextIdx = (idx + direction + unlockedList.length) % unlockedList.length;
  playCyberTone(direction > 0 ? 580 : 480, 'sine', 0.06, 0.05);
  openCardModal(unlockedList[nextIdx]);
}

closeModalBackdrop.addEventListener('click', closeCardModal);
dossierHomeBtn.addEventListener('click', closeCardModal);

dossierRosterBtn.addEventListener('click', () => {
  closeCardModal();
  switchTab('view-roster');
});

dossierPrevBtn.addEventListener('click', () => stepUnlockedDossier(-1));
dossierNextBtn.addEventListener('click', () => stepUnlockedDossier(1));

// Inclinação 3D Holográfica + Swipe Lateral no Telemóvel
let touchStartX = 0;
function handleCardTilt(clientX, clientY) {
  const rect = inspectCard.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5;
  const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;

  inspectCard.style.transform = `perspective(850px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  holoSheen.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.16), transparent 62%)`;
  holoSheen.style.opacity = '1';
}

function resetCardTilt() {
  inspectCard.style.transform = 'perspective(850px) rotateX(0deg) rotateY(0deg)';
  holoSheen.style.opacity = '0';
}

inspectCard.addEventListener('mousemove', e => handleCardTilt(e.clientX, e.clientY));
inspectCard.addEventListener('touchstart', e => {
  if (e.touches.length > 0) touchStartX = e.touches[0].clientX;
}, { passive: true });

inspectCard.addEventListener('touchmove', e => {
  if (e.touches.length > 0) handleCardTilt(e.touches[0].clientX, e.touches[0].clientY);
}, { passive: true });

inspectCard.addEventListener('mouseleave', resetCardTilt);
inspectCard.addEventListener('touchend', e => {
  resetCardTilt();
  if (e.changedTouches && e.changedTouches.length > 0) {
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(deltaX) > 55) {
      stepUnlockedDossier(deltaX < 0 ? 1 : -1);
    }
  }
});

updateUI();