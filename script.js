// =========================
// IGNI CIRCUS V4
// PARTIE 1 - DONNEES
// =========================

let game = {
  mageLevel: 1,
  xp: 0,
  xpNeeded: 75,

  gold: 0,

  kills: 0,
  liamKills: 0,
  ferroxKills: 0,

  liamSouls: 0,

  currentZone: 0,

  clickDamage: 1,
  autoDamage: 0,

  enemyLevel: 1,
  enemyHp: 25,
  enemyMaxHp: 25,
  enemyName: "Petite salamandre",

  dungeonHp: 100,
  dungeonMaxHp: 100,

  upgrades: {
    flame: 0,
    circle: 0,
    inferno: 0,
    autoRune: 0,
    critRune: 0,
    liamHunter: 0
  },

  items: {
    stick: 0,
    cape: 0,
    ring: 0,
    eye: 0,
    crown: 0,
    boots: 0,
    grimoire: 0,
    mask: 0,
    orb: 0,
    contract: 0
  },

  pets: {
    chat: 0,
    salamander: 0,
    dragon: 0,

    zinotroll: 0,
    zinotracteur: 0,
    zinooeuf: 0
  },

  prestige: {
    damage: 0,
    xp: 0,
    gold: 0,
    base: 0,
    drop: 0
  },

  cards: {},
  achievements: {}
};

// =========================
// ZONES
// =========================

const zones = [

{
name:"Plaine des Salamandres",
unlock:0,
hpMultiplier:1,
goldMultiplier:1,
xpMultiplier:1,
liamName:"Liam"
},

{
name:"Grottes Zinogrotte",
unlock:10,
hpMultiplier:3,
goldMultiplier:2,
xpMultiplier:2,
liamName:"Liam Mineur"
},

{
name:"Ferme Zinofarm",
unlock:25,
hpMultiplier:8,
goldMultiplier:4,
xpMultiplier:4,
liamName:"Liam Agriculteur"
},

{
name:"Cirque Zinocircus",
unlock:50,
hpMultiplier:15,
goldMultiplier:8,
xpMultiplier:8,
liamName:"Liam le Magnifique"
},

{
name:"Ruines Zinotroll",
unlock:100,
hpMultiplier:35,
goldMultiplier:15,
xpMultiplier:15,
liamName:"Liam Cosmique"
},

{
name:"Désert de Liam",
unlock:150,
hpMultiplier:75,
goldMultiplier:25,
xpMultiplier:25,
liamName:"Liam Doré"
},

{
name:"Marais du Mauvais Oeil",
unlock:250,
hpMultiplier:150,
goldMultiplier:40,
xpMultiplier:40,
liamName:"Liam Borgne"
},

{
name:"Temple de Sierra",
unlock:400,
hpMultiplier:350,
goldMultiplier:80,
xpMultiplier:80,
liamName:"Liam Ascendant"
},

{
name:"Royaume du Zinochat",
unlock:600,
hpMultiplier:700,
goldMultiplier:150,
xpMultiplier:150,
liamName:"Liam Royal"
},

{
name:"Fin du Zinoverse",
unlock:1000,
hpMultiplier:1500,
goldMultiplier:300,
xpMultiplier:300,
liamName:"ZINOCATASTROPHE"
}

];

// =========================
// PHRASES
// =========================

const zinoQuotes = [
"Zinogrotte",
"Zinochat",
"Zinofarm",
"Zinocircus",
"Zinotroll"
];

const liamQuotes = [
"C'est grave",
"Je suis innocent",
"Pourquoi moi ?",
"C'est très grave",
"Appelez mon avocat",
"Je suis pas une salamandre"
];

const thaddeusQuotes = [
"J'ai qu'un oeil, mais le bon !",
"Je vais pas te jeter le mauvais oeil.",
"Quelqu'un a vu mon oeil ?"
];

const sierraQuotes = [
"La folie",
"Saute d'un pont",
"iiiiigniiii ciiiiircus"
];

// =========================
// CARTES
// =========================

const cardList = [

{
id:"petite_salamandre",
name:"Carte Petite Salamandre",
rarity:"common",
bonus:"+1% dégâts",
type:"damage",
value:1
},

{
id:"liam",
name:"Carte Liam",
rarity:"rare",
bonus:"+3% dégâts",
type:"damage",
value:3
},

{
id:"thaddeus",
name:"Carte Thaddeus",
rarity:"rare",
bonus:"+3% or",
type:"gold",
value:3
},

{
id:"sierra",
name:"Carte Sierra",
rarity:"rare",
bonus:"+3% xp",
type:"xp",
value:3
},

{
id:"zinogrotte",
name:"Carte Zinogrotte",
rarity:"epic",
bonus:"+5% dégâts",
type:"damage",
value:5
},

{
id:"zinochat",
name:"Carte Zinochat",
rarity:"epic",
bonus:"+5% or",
type:"gold",
value:5
},

{
id:"zinofarm",
name:"Carte Zinofarm",
rarity:"epic",
bonus:"+5% xp",
type:"xp",
value:5
},

{
id:"liam_dore",
name:"Carte Liam Doré",
rarity:"legendary",
bonus:"+10% dégâts",
type:"damage",
value:10
},

{
id:"ferrox1",
name:"Carte Élève Ferrox 1",
rarity:"common",
bonus:"+1% dégâts",
type:"damage",
value:1
},

{
id:"ferrox2",
name:"Carte Élève Ferrox 2",
rarity:"rare",
bonus:"+2% dégâts",
type:"damage",
value:2
},

{
id:"ferrox3",
name:"Carte Élève Ferrox 3",
rarity:"rare",
bonus:"+2% dégâts",
type:"damage",
value:2
},

{
id:"ferrox4",
name:"Carte Élève Ferrox 4",
rarity:"epic",
bonus:"+4% dégâts",
type:"damage",
value:4
},

{
id:"ferrox_prefet",
name:"Carte Préfet Ferrox",
rarity:"legendary",
bonus:"+8% dégâts",
type:"damage",
value:8
},

{
id:"ferrox_directeur",
name:"Carte Directeur Ferrox",
rarity:"mythic",
bonus:"+20% dégâts",
type:"damage",
value:20
}

];

// =========================
// SUCCES
// =========================

const achievements = [

{
id:"kill10",
name:"10 ennemis grillés",
check:()=>game.kills>=10
},

{
id:"kill100",
name:"100 ennemis grillés",
check:()=>game.kills>=100
},

{
id:"kill1000",
name:"1000 ennemis grillés",
check:()=>game.kills>=1000
},

{
id:"liam1",
name:"Premier Liam vaincu",
check:()=>game.liamKills>=1
},

{
id:"liam10",
name:"10 Liam vaincus",
check:()=>game.liamKills>=10
},

{
id:"liam100",
name:"100 Liam vaincus",
check:()=>game.liamKills>=100
},

{
id:"ferrox100",
name:"100 Ferrox battus",
check:()=>game.ferroxKills>=100
},

{
id:"ferrox500",
name:"500 Ferrox battus",
check:()=>game.ferroxKills>=500
},

{
id:"ferrox1000",
name:"Directeur Ferrox vaincu",
check:()=>game.ferroxKills>=1000
}

];
// =========================
// PARTIE 2
// COMBAT / ZONES / LIAM
// =========================

function showTab(tab) {

  document
    .querySelectorAll(".tab")
    .forEach(t => t.classList.remove("active"));

  document
    .getElementById(tab)
    .classList.add("active");

  if (tab === "shop") {
    randomQuote(
      "thaddeusQuote",
      thaddeusQuotes
    );
  }

  if (tab === "prestige") {
    randomQuote(
      "sierraQuote",
      sierraQuotes
    );
  }

  renderAll();
}

function randomQuote(id, list) {

  document.getElementById(id).textContent =
    list[Math.floor(Math.random() * list.length)];
}

function maxUnlockedZone() {

  let max = 0;

  zones.forEach((zone, index) => {

    if (game.liamKills >= zone.unlock) {
      max = index;
    }

  });

  return max;
}

function changeZone(index) {

  if (index > maxUnlockedZone()) {

    alert("Zone verrouillée !");
    return;
  }

  game.currentZone = index;
  game.enemyLevel = 1;

  spawnEnemy();
  saveGame();
}

function isLiamFight() {

  return game.enemyLevel % 10 === 0;
}

function getClickDamage() {

  return Math.floor(
    game.clickDamage *
    (1 + getDamageBonus() / 100)
  );
}

function castIgniCircus() {

  animateFire();

  let damage = getClickDamage();

  let critChance =
    0.08 +
    game.upgrades.critRune * 0.02 +
    game.items.orb * 0.05;

  let crit =
    Math.random() < critChance;

  if (crit) {
    damage *= 2;
  }

  if (isLiamFight()) {

    damage *=
      1 +
      game.upgrades.liamHunter * 0.10;
  }

  damageEnemy(
    damage,
    crit
  );
}

function damageEnemy(
  amount,
  crit = false
) {

  game.enemyHp -= amount;

  createFloatText(
    crit
      ? "CRIT -" + Math.floor(amount)
      : "-" + Math.floor(amount)
  );

  const enemy =
    document.getElementById("enemy");

  enemy.classList.add("enemyHit");

  setTimeout(() => {

    enemy.classList.remove("enemyHit");

  }, 100);

  if (game.enemyHp <= 0) {

    killEnemy();
  }

  updateDisplay();
}

function killEnemy() {

  const zone =
    zones[game.currentZone];

  let goldGain =
    Math.floor(
      (
        5 +
        game.enemyLevel * 3
      ) *
      zone.goldMultiplier
    );

  let xpGain =
    Math.floor(
      (
        8 +
        game.enemyLevel * 5
      ) *
      zone.xpMultiplier
    );

  if (isLiamFight()) {

    goldGain *= 7;
    xpGain *= 7;

    game.liamKills++;

    document.body
      .classList
      .add("shake");

    setTimeout(() => {

      document.body
        .classList
        .remove("shake");

    }, 250);
  }

  goldGain =
    Math.floor(
      goldGain *
      (
        1 +
        getGoldBonus() / 100
      )
    );

  xpGain =
    Math.floor(
      xpGain *
      (
        1 +
        getXpBonus() / 100
      )
    );

  game.gold += goldGain;
  game.xp += xpGain;
  game.kills++;

  wizardTalk();

  tryCardDrop();

  while (
    game.xp >= game.xpNeeded
  ) {

    game.xp -= game.xpNeeded;

    game.mageLevel++;

    game.clickDamage += 1;

    game.xpNeeded =
      Math.floor(
        game.xpNeeded * 1.38
      );
  }

  game.enemyLevel++;

  spawnEnemy();

  checkAchievements();
}

function spawnEnemy() {

  const zone =
    zones[game.currentZone];

  const enemyImg =
    document.getElementById("enemy");

  const bubble =
    document.getElementById("liamBubble");

  let baseHp =
    Math.floor(
      (
        25 +
        game.enemyLevel * 22
      ) *
      zone.hpMultiplier
    );

  if (isLiamFight()) {

    game.enemyName =
      zone.liamName;

    game.enemyMaxHp =
      Math.floor(
        baseHp * 8
      );

    enemyImg.src =
      "liam.png";

    bubble.textContent =
      liamQuotes[
        Math.floor(
          Math.random() *
          liamQuotes.length
        )
      ];

    bubble.classList.remove(
      "hidden"
    );

  } else {

    game.enemyName =
      zone.name +
      " #" +
      game.enemyLevel;

    game.enemyMaxHp =
      baseHp;

    enemyImg.src =
      "salamandre.png";

    bubble.classList.add(
      "hidden"
    );
  }

  game.enemyHp =
    game.enemyMaxHp;

  updateDisplay();
}

function wizardTalk() {

  const bubble =
    document.getElementById(
      "wizardBubble"
    );

  bubble.textContent =
    zinoQuotes[
      Math.floor(
        Math.random() *
        zinoQuotes.length
      )
    ];

  bubble.classList.remove(
    "hidden"
  );

  setTimeout(() => {

    bubble.classList.add(
      "hidden"
    );

  }, 1600);
}

function animateFire() {

  const fire =
    document.getElementById(
      "fireCircle"
    );

  fire.classList.remove(
    "fireActive"
  );

  void fire.offsetWidth;

  fire.classList.add(
    "fireActive"
  );
}

function createFloatText(text) {

  const container =
    document.getElementById(
      "floatingTexts"
    );

  const div =
    document.createElement("div");

  div.className =
    "floatText";

  div.textContent =
    text;

  container.appendChild(div);

  setTimeout(() => {

    div.remove();

  }, 1000);
}
// =========================
// PARTIE 3
// DONJON FERROX
// =========================

function getDungeonTier() {

  if (game.ferroxKills >= 1000) {
    return "directeur_suprême";
  }

  if (game.ferroxKills >= 500) {
    return "directeur";
  }

  if (game.ferroxKills >= 400) {
    return "prefet";
  }

  if (game.ferroxKills >= 300) {
    return "4e";
  }

  if (game.ferroxKills >= 200) {
    return "3e";
  }

  if (game.ferroxKills >= 100) {
    return "2e";
  }

  return "1e";
}

function setupDungeonEnemy() {

  const tier =
    getDungeonTier();

  const img =
    document.getElementById(
      "dungeonEnemy"
    );

  let name = "";
  let hp = 100;

  switch (tier) {

    case "1e":

      name =
        "Élève Ferrox 1ère année";

      hp =
        100 +
        game.ferroxKills * 2;

      img.src =
        "ferrox_1.png";

      break;

    case "2e":

      name =
        "Élève Ferrox 2ème année";

      hp =
        1000 +
        game.ferroxKills * 3;

      img.src =
        "ferrox_2.png";

      break;

    case "3e":

      name =
        "Élève Ferrox 3ème année";

      hp =
        3500 +
        game.ferroxKills * 5;

      img.src =
        "ferrox_3.png";

      break;

    case "4e":

      name =
        "Élève Ferrox 4ème année";

      hp =
        10000 +
        game.ferroxKills * 8;

      img.src =
        "ferrox_4.png";

      break;

    case "prefet":

      name =
        "Préfet Ferrox";

      hp =
        50000 +
        game.ferroxKills * 20;

      img.src =
        "ferrox_prefet.png";

      break;

    case "directeur":

      name =
        "Directeur Ferrox";

      hp =
        150000 +
        game.ferroxKills * 35;

      img.src =
        "ferrox_directeur.png";

      break;

    case "directeur_suprême":

      name =
        "Directeur Suprême Ferrox";

      hp =
        500000 +
        game.ferroxKills * 100;

      img.src =
        "ferrox_directeur.png";

      break;
  }

  game.dungeonMaxHp = hp;
  game.dungeonHp = hp;

  document.getElementById(
    "dungeonEnemyName"
  ).textContent = name;

  document.getElementById(
    "ferroxTier"
  ).textContent = name;

  updateDungeonDisplay();
}

function attackDungeon() {

  let damage =
    getClickDamage() +
    game.autoDamage;

  game.dungeonHp -= damage;

  if (game.dungeonHp <= 0) {

    killDungeonEnemy();
  }

  updateDungeonDisplay();
}

function killDungeonEnemy() {

  game.ferroxKills++;

  let rewardXp =
    50 +
    game.ferroxKills * 5;

  let rewardGold =
    25 +
    game.ferroxKills * 2;

  game.xp += rewardXp;
  game.gold += rewardGold;

  if (
    game.ferroxKills === 400
  ) {

    game.liamSouls += 1;

    alert(
      "Préfet Ferrox vaincu ! +1 Âme de Liam"
    );
  }

  if (
    game.ferroxKills === 500
  ) {

    game.liamSouls += 3;

    alert(
      "Directeur Ferrox vaincu ! +3 Âmes de Liam"
    );
  }

  if (
    game.ferroxKills === 1000
  ) {

    game.liamSouls += 10;

    alert(
      "DIRECTEUR SUPRÊME VAINCU ! +10 Âmes de Liam"
    );
  }

  tryDungeonCardDrop();

  setupDungeonEnemy();

  checkAchievements();

  updateDisplay();
}

function tryDungeonCardDrop() {

  let roll =
    Math.random() * 100;

  if (
    game.ferroxKills < 100
  ) {

    if (
      roll < 2 &&
      !game.cards.ferrox1
    ) {

      game.cards.ferrox1 = true;

      alert(
        "Carte Ferrox 1 obtenue !"
      );
    }

    return;
  }

  if (
    game.ferroxKills < 200
  ) {

    if (
      roll < 1.5 &&
      !game.cards.ferrox2
    ) {

      game.cards.ferrox2 = true;

      alert(
        "Carte Ferrox 2 obtenue !"
      );
    }

    return;
  }

  if (
    game.ferroxKills < 300
  ) {

    if (
      roll < 1 &&
      !game.cards.ferrox3
    ) {

      game.cards.ferrox3 = true;

      alert(
        "Carte Ferrox 3 obtenue !"
      );
    }

    return;
  }

  if (
    game.ferroxKills < 400
  ) {

    if (
      roll < 0.7 &&
      !game.cards.ferrox4
    ) {

      game.cards.ferrox4 = true;

      alert(
        "Carte Ferrox 4 obtenue !"
      );
    }

    return;
  }

  if (
    game.ferroxKills < 500
  ) {

    if (
      roll < 0.3 &&
      !game.cards.ferrox_prefet
    ) {

      game.cards.ferrox_prefet = true;

      alert(
        "Carte Préfet Ferrox obtenue !"
      );
    }

    return;
  }

  if (
    roll < 0.05 &&
    !game.cards.ferrox_directeur
  ) {

    game.cards.ferrox_directeur = true;

    alert(
      "Carte Directeur Ferrox obtenue !"
    );
  }
}

function updateDungeonDisplay() {

  const hpPercent =
    Math.max(
      0,
      game.dungeonHp /
      game.dungeonMaxHp
    ) * 100;

  document.getElementById(
    "dungeonHp"
  ).textContent =
    Math.floor(
      game.dungeonHp
    );

  document.getElementById(
    "dungeonMaxHp"
  ).textContent =
    game.dungeonMaxHp;

  document.getElementById(
    "dungeonHpBar"
  ).style.width =
    hpPercent + "%";

  document.getElementById(
    "ferroxKills"
  ).textContent =
    game.ferroxKills;
}
// =========================
// PARTIE 4
// BOUTIQUE + PETS
// =========================

function getUpgradeCosts() {

  return {

    flame:
      Math.floor(
        80 *
        Math.pow(
          1.38,
          game.upgrades.flame
        )
      ),

    circle:
      Math.floor(
        350 *
        Math.pow(
          1.48,
          game.upgrades.circle
        )
      ),

    inferno:
      Math.floor(
        3500 *
        Math.pow(
          2,
          game.upgrades.inferno
        )
      ),

    autoRune:
      Math.floor(
        900 *
        Math.pow(
          1.6,
          game.upgrades.autoRune
        )
      ),

    critRune:
      Math.floor(
        2500 *
        Math.pow(
          1.8,
          game.upgrades.critRune
        )
      ),

    liamHunter:
      Math.floor(
        5000 *
        Math.pow(
          2,
          game.upgrades.liamHunter
        )
      )
  };
}

function buyUpgrade(type) {

  const costs =
    getUpgradeCosts();

  if (
    game.gold <
    costs[type]
  ) {

    alert(
      "Pas assez de pièces de feu !"
    );

    return;
  }

  game.gold -=
    costs[type];

  game.upgrades[type]++;

  if (
    type === "flame"
  ) {

    game.clickDamage += 1;
  }

  if (
    type === "circle"
  ) {

    game.clickDamage += 5;
  }

  if (
    type === "inferno"
  ) {

    game.clickDamage =
      Math.floor(
        game.clickDamage *
        1.25
      );
  }

  recalcAutoDamage();

  updateDisplay();
}

// =========================
// ITEMS
// =========================

function getItemCosts() {

  return {

    stick:
      Math.floor(
        500 *
        Math.pow(
          1.85,
          game.items.stick
        )
      ),

    cape:
      Math.floor(
        1800 *
        Math.pow(
          1.9,
          game.items.cape
        )
      ),

    ring:
      Math.floor(
        4000 *
        Math.pow(
          2,
          game.items.ring
        )
      ),

    eye:
      Math.floor(
        9000 *
        Math.pow(
          2,
          game.items.eye
        )
      ),

    crown:
      Math.floor(
        25000 *
        Math.pow(
          2.25,
          game.items.crown
        )
      ),

    boots:
      Math.floor(
        14000 *
        Math.pow(
          2,
          game.items.boots
        )
      ),

    grimoire:
      Math.floor(
        32000 *
        Math.pow(
          2.1,
          game.items.grimoire
        )
      ),

    mask:
      Math.floor(
        45000 *
        Math.pow(
          2.2,
          game.items.mask
        )
      ),

    orb:
      Math.floor(
        60000 *
        Math.pow(
          2.2,
          game.items.orb
        )
      ),

    contract:
      Math.floor(
        100000 *
        Math.pow(
          2.4,
          game.items.contract
        )
      )
  };
}

function buyItem(item) {

  const costs =
    getItemCosts();

  if (
    game.gold <
    costs[item]
  ) {

    alert(
      "Pas assez de pièces de feu !"
    );

    return;
  }

  game.gold -=
    costs[item];

  game.items[item]++;

  if (
    item === "stick"
  ) {

    game.clickDamage += 10;
  }

  if (
    item === "cape"
  ) {

    game.clickDamage += 30;
  }

  recalcAutoDamage();

  updateDisplay();
}

// =========================
// PETS
// =========================

function getPetCosts() {

  return {

    chat:
      Math.floor(
        1200 *
        Math.pow(
          1.6,
          game.pets.chat
        )
      ),

    salamander:
      Math.floor(
        5000 *
        Math.pow(
          1.7,
          game.pets.salamander
        )
      ),

    dragon:
      Math.floor(
        25000 *
        Math.pow(
          1.85,
          game.pets.dragon
        )
      ),

    zinotroll:
      Math.floor(
        120000 *
        Math.pow(
          2,
          game.pets.zinotroll
        )
      ),

    zinotracteur:
      Math.floor(
        350000 *
        Math.pow(
          2.1,
          game.pets.zinotracteur
        )
      ),

    zinooeuf:
      Math.floor(
        1000000 *
        Math.pow(
          2.25,
          game.pets.zinooeuf
        )
      )
  };
}

function buyPet(pet) {

  const costs =
    getPetCosts();

  if (
    game.gold <
    costs[pet]
  ) {

    alert(
      "Pas assez de pièces de feu !"
    );

    return;
  }

  game.gold -=
    costs[pet];

  game.pets[pet]++;

  recalcAutoDamage();

  updateDisplay();
}

// =========================
// AUTO DAMAGE
// =========================

function recalcAutoDamage() {

  game.autoDamage =

    game.upgrades.autoRune * 5 +

    game.pets.chat * 10 +

    game.pets.salamander * 40 +

    game.pets.dragon * 180 +

    game.pets.zinotroll * 600 +

    game.pets.zinotracteur * 1500 +

    game.items.mask * 100;
}

// =========================
// BONUS
// =========================

function getDamageBonus() {

  return (

    game.items.ring * 10 +

    game.items.crown * 50 +

    game.prestige.damage * 5 +

    getCardBonus(
      "damage"
    )

  );
}

function getGoldBonus() {

  return (

    game.items.boots * 25 +

    game.pets.zinotracteur * 10 +

    game.prestige.gold * 5 +

    getCardBonus(
      "gold"
    )

  );
}

function getXpBonus() {

  return (

    game.items.eye * 25 +

    game.items.grimoire * 50 +

    game.prestige.xp * 5 +

    getCardBonus(
      "xp"
    )

  );
}
// =========================
// PARTIE 5
// CARTES / SUCCES / PRESTIGE
// SAUVEGARDE / AFFICHAGE
// =========================

function getCardBonus(type) {

  let bonus = 0;

  cardList.forEach(card => {

    if (
      game.cards[card.id] &&
      card.type === type
    ) {

      bonus += card.value;
    }

  });

  return bonus;
}

function cardsFound() {

  return Object
    .values(game.cards)
    .filter(Boolean)
    .length;
}

function totalPets() {

  return (
    game.pets.chat +
    game.pets.salamander +
    game.pets.dragon +
    game.pets.zinotroll +
    game.pets.zinotracteur +
    game.pets.zinooeuf
  );
}

function tryCardDrop() {

  let roll =
    Math.random() * 100;

  let bonusDrop =
    game.items.contract +
    game.prestige.drop * 0.5 +
    game.pets.zinooeuf * 5;

  let rarity = null;

  if (roll < 0.01 + bonusDrop * 0.02)
    rarity = "mythic";

  else if (roll < 0.1 + bonusDrop * 0.08)
    rarity = "legendary";

  else if (roll < 0.5 + bonusDrop * 0.15)
    rarity = "epic";

  else if (roll < 2 + bonusDrop * 0.4)
    rarity = "rare";

  else if (roll < 8 + bonusDrop)
    rarity = "common";

  if (!rarity) return;

  const possibleCards =
    cardList.filter(
      c => c.rarity === rarity
    );

  const card =
    possibleCards[
      Math.floor(
        Math.random() *
        possibleCards.length
      )
    ];

  if (!game.cards[card.id]) {

    game.cards[card.id] = true;

    alert(
      "Nouvelle carte : " +
      card.name
    );

  } else {

    game.gold += 50;
  }
}

function checkAchievements() {

  achievements.forEach(a => {

    if (
      !game.achievements[a.id] &&
      a.check()
    ) {

      game.achievements[a.id] = true;

      game.gold += 250;

      alert(
        "Succès débloqué : " +
        a.name
      );
    }

  });
}

function prestige() {

  if (
    game.mageLevel < 50
  ) {

    alert(
      "Niveau 50 requis."
    );

    return;
  }

  const gainedSouls =
    Math.floor(
      game.mageLevel / 25
    ) +
    Math.floor(
      game.liamKills / 2
    );

  game.liamSouls +=
    gainedSouls;

  game.mageLevel = 1;
  game.xp = 0;
  game.xpNeeded = 75;

  game.gold = 0;

  game.kills = 0;
  game.liamKills = 0;

  game.enemyLevel = 1;

  game.clickDamage =
    1 +
    game.prestige.base * 2;

  game.autoDamage = 0;

  game.upgrades = {
    flame:0,
    circle:0,
    inferno:0,
    autoRune:0,
    critRune:0,
    liamHunter:0
  };

  game.items = {
    stick:0,
    cape:0,
    ring:0,
    eye:0,
    crown:0,
    boots:0,
    grimoire:0,
    mask:0,
    orb:0,
    contract:0
  };

  game.pets = {
    chat:0,
    salamander:0,
    dragon:0,
    zinotroll:0,
    zinotracteur:0,
    zinooeuf:0
  };

  spawnEnemy();

  alert(
    "Renaissance ! +" +
    gainedSouls +
    " Âmes de Liam"
  );
}

function buyPrestige(type) {

  const costs = {
    damage:
      1 +
      game.prestige.damage,

    xp:
      1 +
      game.prestige.xp,

    gold:
      1 +
      game.prestige.gold,

    base:
      2 +
      game.prestige.base * 2,

    drop:
      3 +
      game.prestige.drop * 3
  };

  if (
    game.liamSouls <
    costs[type]
  ) {

    alert(
      "Pas assez d'âmes."
    );

    return;
  }

  game.liamSouls -=
    costs[type];

  game.prestige[type]++;
}

function renderZones() {

  const list =
    document.getElementById(
      "zoneList"
    );

  if (!list) return;

  list.innerHTML = "";

  zones.forEach(
    (zone,index) => {

    const unlocked =
      index <= maxUnlockedZone();

    const div =
      document.createElement("div");

    div.className =
      "zoneCard";

    div.innerHTML = `
      <h3>${zone.name}</h3>
      <p>Déblocage : ${zone.unlock} Liam</p>
      <button onclick="changeZone(${index})">
      ${unlocked ? "Voyager" : "Verrouillé"}
      </button>
    `;

    list.appendChild(div);

  });
}

function renderCards() {

  const list =
    document.getElementById(
      "cardList"
    );

  if (!list) return;

  list.innerHTML = "";

  cardList.forEach(card => {

    const owned =
      game.cards[card.id];

    const div =
      document.createElement("div");

    div.className =
      "card " +
      card.rarity;

    div.innerHTML = owned

    ? `
      <h3>${card.name}</h3>
      <p>${card.bonus}</p>
      <p>${card.rarity}</p>
    `

    : `
      <h3>???</h3>
      <p>Carte inconnue</p>
    `;

    list.appendChild(div);

  });
}

function renderAchievements() {

  const list =
    document.getElementById(
      "achievementList"
    );

  if (!list) return;

  list.innerHTML = "";

  achievements.forEach(a => {

    const div =
      document.createElement("div");

    div.className =
      game.achievements[a.id]
      ? "achievement unlocked"
      : "achievement";

    div.textContent =
      game.achievements[a.id]
      ? "✅ " + a.name
      : "🔒 " + a.name;

    list.appendChild(div);

  });
}

function renderAll() {

  renderZones();
  renderCards();
  renderAchievements();
}

function updateDisplay() {

  const hpPercent =
    Math.max(
      0,
      game.enemyHp /
      game.enemyMaxHp
    ) * 100;

  document.getElementById(
    "enemyHpBar"
  ).style.width =
    hpPercent + "%";

  document.getElementById(
    "enemyHp"
  ).textContent =
    Math.floor(
      game.enemyHp
    );

  document.getElementById(
    "enemyMaxHp"
  ).textContent =
    game.enemyMaxHp;

  document.getElementById(
    "enemyName"
  ).textContent =
    game.enemyName;

  document.getElementById(
    "zoneName"
  ).textContent =
    zones[
      game.currentZone
    ].name;

  document.getElementById(
    "mageLevel"
  ).textContent =
    game.mageLevel;

  document.getElementById(
    "xp"
  ).textContent =
    game.xp;

  document.getElementById(
    "xpNeeded"
  ).textContent =
    game.xpNeeded;

  document.getElementById(
    "gold"
  ).textContent =
    game.gold;

  document.getElementById(
    "kills"
  ).textContent =
    game.kills;

  document.getElementById(
    "liamKills"
  ).textContent =
    game.liamKills;

  document.getElementById(
    "liamSouls"
  ).textContent =
    game.liamSouls;

  document.getElementById(
    "clickDamage"
  ).textContent =
    getClickDamage();

  document.getElementById(
    "autoDamage"
  ).textContent =
    game.autoDamage;

  document.getElementById(
    "cardsFound"
  ).textContent =
    cardsFound();

  document.getElementById(
    "cardsTotal"
  ).textContent =
    cardList.length;
  const upgrades = getUpgradeCosts();
  document.getElementById("flameCost").textContent = upgrades.flame;
  document.getElementById("circleCost").textContent = upgrades.circle;
  document.getElementById("infernoCost").textContent = upgrades.inferno;
  document.getElementById("autoRuneCost").textContent = upgrades.autoRune;
  document.getElementById("critRuneCost").textContent = upgrades.critRune;
  document.getElementById("liamHunterCost").textContent = upgrades.liamHunter;

  const items = getItemCosts();
  document.getElementById("stickCost").textContent = items.stick;
  document.getElementById("capeCost").textContent = items.cape;
  document.getElementById("ringCost").textContent = items.ring;
  document.getElementById("eyeCost").textContent = items.eye;
  document.getElementById("crownCost").textContent = items.crown;
  document.getElementById("bootsCost").textContent = items.boots;
  document.getElementById("grimoireCost").textContent = items.grimoire;
  document.getElementById("maskCost").textContent = items.mask;
  document.getElementById("orbCost").textContent = items.orb;
  document.getElementById("contractCost").textContent = items.contract;

  const pets = getPetCosts();
  document.getElementById("chatCost").textContent = pets.chat;
  document.getElementById("salamanderCost").textContent = pets.salamander;
  document.getElementById("dragonCost").textContent = pets.dragon;
  document.getElementById("zinotrollCost").textContent = pets.zinotroll;
  document.getElementById("zinotracteurCost").textContent = pets.zinotracteur;
  document.getElementById("zinooeufCost").textContent = pets.zinooeuf;

  document.getElementById("chatLevel").textContent = game.pets.chat;
  document.getElementById("salamanderLevel").textContent = game.pets.salamander;
  document.getElementById("dragonLevel").textContent = game.pets.dragon;
  document.getElementById("zinotrollLevel").textContent = game.pets.zinotroll;
  document.getElementById("zinotracteurLevel").textContent = game.pets.zinotracteur;
  document.getElementById("zinooeufLevel").textContent = game.pets.zinooeuf;
  updateDungeonDisplay();
  renderAll();
  
}

function saveGame() {

  localStorage.setItem(
    "igniCircusV4",
    JSON.stringify(game)
  );
}

function loadGame() {

  const save =
    localStorage.getItem(
      "igniCircusV4"
    );

  if (save) {

    game =
      JSON.parse(save);
  }

  recalcAutoDamage();

  spawnEnemy();

  setupDungeonEnemy();

  updateDisplay();
}

function resetGame() {

  if (
    confirm(
      "Supprimer la sauvegarde ?"
    )
  ) {

    localStorage.removeItem(
      "igniCircusV4"
    );

    location.reload();
  }
}

// =========================
// LANCEMENT
// =========================

setInterval(() => {

  if (
    game.autoDamage > 0
  ) {

    damageEnemy(
      game.autoDamage
    );
  }

}, 1000);

setInterval(
  saveGame,
  5000
);

loadGame();
// =========================
// CLASSEMENT SUPABASE
// =========================

const SUPABASE_URL = "https://eehpnfsttpxyevthvblb.supabase.co";
const SUPABASE_KEY = "sb_publishable_DGBMBcARMNbU0Fp2uZU39g__25YyhU0";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

let playerName = localStorage.getItem("igniPlayerName");

if (!playerName) {
  playerName = prompt("Choisis ton pseudo pour le classement :") || "Joueur";
  localStorage.setItem("igniPlayerName", playerName);
}

async function uploadScore() {
  const score = {
    pseudo: playerName,
    niveau: game.mageLevel,
    liam: game.liamKills,
    ferrox: game.ferroxKills,
    carte: cardsFound(),
    prestige: game.liamSouls,
    updated_at: new Date().toISOString()
  };

  const { data: existing } = await supabaseClient
    .from("leaderboard")
    .select("id")
    .eq("pseudo", playerName)
    .limit(1);

  if (existing && existing.length > 0) {
    await supabaseClient
      .from("leaderboard")
      .update(score)
      .eq("id", existing[0].id);
  } else {
    await supabaseClient
      .from("leaderboard")
      .insert(score);
  }

  alert("Score envoyé !");
  loadLeaderboard();
}

async function loadLeaderboard() {
  const { data, error } = await supabaseClient
    .from("leaderboard")
    .select("*")
    .order("niveau", { ascending: false })
    .limit(25);

  const list = document.getElementById("leaderboardList");

  if (error) {
    list.innerHTML = "<p>Erreur de chargement du classement.</p>";
    return;
  }

  list.innerHTML = "";

  data.forEach((player, index) => {
    const div = document.createElement("div");
    div.className = "achievement unlocked";

    div.innerHTML = `
      <h3>#${index + 1} — ${player.pseudo}</h3>
      <p>Niveau : ${player.niveau}</p>
      <p>Liam vaincus : ${player.liam}</p>
      <p>Ferrox vaincus : ${player.ferrox}</p>
      <p>Cartes : ${player.carte}</p>
      <p>Âmes de Liam : ${player.prestige}</p>
    `;

    list.appendChild(div);
  });
}

const oldSaveGame = saveGame;

saveGame = function() {
  oldSaveGame();
  uploadScore();
};