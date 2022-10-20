const killTeamNameBtn = document.getElementById("kill-team-name-btn");

const killTeamOutput = document.getElementById("kill-team-output");

const operativeNamesBtn = document.getElementById("operative-names-btn");

const operativeNameOutput1 = document.getElementById("operative-name-output1");
const operativeNameOutput2 = document.getElementById("operative-name-output2");
const operativeNameOutput3 = document.getElementById("operative-name-output3");
const operativeNameOutput4 = document.getElementById("operative-name-output4");
const operativeNameOutput5 = document.getElementById("operative-name-output5");
const operativeNameOutput6 = document.getElementById("operative-name-output6");
const operativeNameOutput7 = document.getElementById("operative-name-output7");
const operativeNameOutput8 = document.getElementById("operative-name-output8");
const operativeNameOutput9 = document.getElementById("operative-name-output9");
const operativeNameOutput10 = document.getElementById(
  "operative-name-output10"
);
const operativeNameOutput11 = document.getElementById(
  "operative-name-output11"
);
const operativeNameOutput12 = document.getElementById(
  "operative-name-output12"
);

const demeanoursBtn = document.getElementById("demeanours-btn");

const quirkOutput = document.getElementById("quirk-output");

const bkgroundOutput = document.getElementById("bkground-output");

const baseOutput = document.getElementById("base-output");

const baseTextA = document.getElementById("base-text-a");
const baseTextB = document.getElementById("base-text-b");
const baseTextC = document.getElementById("base-text-c");

// kill team name array

const killTeamNames = JSON.parse(localStorage.getItem("ktNames")) || [
  "Shiv's Ball-breakers",
  "85th Deck Battalion",
  "Hanger 8, Squad 3",
  "Quadrant 7, Squad 2",
  "Ebdens Breach-breakers",
  "Corinthe's 'Finest', 22nd platoon",
  "Flint's 'Scourge' warriors",
  "Dayev's Deck Bargers",
  "Shrinewalk Saints",
  "Bhorr's Gunners",
  "Ration-scrimpers",
  "Munition's Knuckle-busters",
  "7th Platoon, Gun-deckers",
  "Guardians of Zone 75",
  "Blood Dogs of Lastrati",
  "The 'Hounds' of Ophelia",
  "Landing Deck 12, Tac Troop",
  "Elysia's Pride",
  "Molov's Followers",
  "The 'Storm-bringers' of Hexos",
  "Ghoul Star 'Ghosts'",
  "2nd Breaching Division 'Hell on Wheels'",
  "Growler 'Yellow Jackets' Squadron 129",
  "'Mad Dog' Gunslingers",
  "Zadar's 'Bastards'",
  "Arc of Fire's 'Magnificent Bastards'",
  "32nd Headhunters",
  "Steam-deck Rocketeers",
  "102nd Blue Bloods",
  "The 'Siren's'",
  "Haam's 'Old Buoys'",
  "Old Aquaholics",
  "34th 'Seas the Day' troop",
];

// generate kill team button

let nameLength = 1;

killTeamNameBtn.addEventListener("click", function () {
  function shuffleArray(killTeamNames) {
    for (let i = killTeamNames.length - 1; i > 0; i--) {
      let randomPosition = Math.floor(Math.random() * (i + 1));
      let temp = killTeamNames[i];
      // swap elements
      killTeamNames[i] = killTeamNames[randomPosition];
      killTeamNames[randomPosition] = temp;
    }

    return killTeamNames;
  }

  console.log(shuffleArray(killTeamNames));

  killTeamOutput.textContent = shuffleArray(killTeamNames[0]);
});

// generate kill team FIRST name operatives:

const operatives = JSON.parse(localStorage.getItem("ktOperatives")) || [
  "Sheng",
  "Jonah",
  "Otwin",
  "Irma",
  "Romana",
  "'Legs'",
  "Kyrus",
  "Asa",
  "Zippora",
  "Ebram",
  "Jedidi",
  "Lepus",
  "Abiah",
  "Namah",
  "Redga",
  "Medega",
  "Kaalsan",
  "Birkis",
  "Siduri",
  "Netis",
  "Dadan",
  "Aces",
  "Kherith",
  "Gunde",
  "Lofty",
  "Eden",
  "Melita",
  "Eudie",
  "Bilah",
  "Jeshai",
  "Kairis",
  "Edreo",
  "'Shifty'",
  "Sai",
  "Paj",
  "Ougum",
];

// kill team END name array

// generate kill team FIRST name operatives:

const operativesEndName = JSON.parse(localStorage.getItem("ktEndNames")) || [
  "'the Shiv'",
  "Lang",
  "Kline",
  "Sher",
  "Sao",
  "Pymer",
  "Vynall",
  "Koiba",
  "'the Duchess'",
  "Kraal",
  "Heu",
  "Bhorr",
  "Annac",
  "Piaq",
  "'Smasher'",
  "Farz",
  "Nazill",
  "Vrax",
  "Khou",
  "Bhroil",
  "Dimt",
  "Usaga",
  "Dayev",
  "'the Slab'",
  "Botsoe",
  "Lannaq",
  "Salar",
  "Krann",
  "Nias",
  "'the Fist'",
  "Gulav",
  "Akav",
  "Azgir",
  "Gatu",
  "Zuga",
  "'the Blessed'",
];

operativeNamesBtn.addEventListener("click", function () {
  function shuffleOperatives(operatives) {
    for (let i = operatives.length - 1; i > 0; i--) {
      let randomPositionTwo = Math.floor(Math.random() * (i + 1));
      let tempTwo = operatives[i];
      // swap elements
      operatives[i] = operatives[randomPositionTwo];
      operatives[randomPositionTwo] = tempTwo;
    }

    return operatives;
  }

  console.log(shuffleOperatives(operatives));

  // end name function

  function shuffleEndName(operativesEndName) {
    for (let i = operativesEndName.length - 1; i > 0; i--) {
      let randomPositionSix = Math.floor(Math.random() * (i + 1));
      let tempSix = operativesEndName[i];
      // swap elements
      operativesEndName[i] = operativesEndName[randomPositionSix];
      operativesEndName[randomPositionSix] = tempSix;
    }

    return operativesEndName;
  }

  console.log(shuffleOperatives(operativesEndName));

  // operative names output

  operativeNameOutput1.innerHTML = `
  <p class="class-name"><span class="ident">Name:</span> 
 ${
   shuffleOperatives(operatives[0]) +
   " " +
   shuffleOperatives(operativesEndName[0])
 }
  </p>
  <p class="op-role">Sergeant-At-Arms</p>
  
  `;

  operativeNameOutput2.innerHTML = `
  <p class="class-name"><span class="ident">Name:</span>  
 ${
   shuffleOperatives(operatives[1]) +
   " " +
   shuffleOperatives(operativesEndName[1])
 }
  </p>
  <p class="op-role">Navis Axejack</p>
  
  `;

  operativeNameOutput3.innerHTML = `
  <p class="class-name"><span class="ident">Name:</span>  
 ${
   shuffleOperatives(operatives[2]) +
   " " +
   shuffleOperatives(operativesEndName[2])
 }
  </p>
  <p class="op-role">Navis Surveyor</p>
  
  `;

  operativeNameOutput4.innerHTML = `
  <p class="class-name"><span class="ident">Name:</span>  
 ${
   shuffleOperatives(operatives[3]) +
   " " +
   shuffleOperatives(operativesEndName[3])
 }
  </p>
  <p class="op-role">Navis Endurant</p>
  
  `;

  operativeNameOutput5.innerHTML = `
  <p class="class-name"><span class="ident">Name:</span>  
 ${
   shuffleOperatives(operatives[4]) +
   " " +
   shuffleOperatives(operativesEndName[4])
 }
  </p>
  <p class="op-role">Navis Void-Jammer</p>
  
  `;

  operativeNameOutput6.innerHTML = `
  <p class="class-name"><span class="ident">Name:</span>  
 ${
   shuffleOperatives(operatives[5]) +
   " " +
   shuffleOperatives(operativesEndName[5])
 }
  </p>
  <p class="op-role">Navis Grenadier</p>
  
  `;

  operativeNameOutput7.innerHTML = `
  <p class="class-name"><span class="ident">Name:</span>  
 ${
   shuffleOperatives(operatives[6]) +
   " " +
   shuffleOperatives(operativesEndName[6])
 }
  </p>
  <p class="op-role">Navis Grenadier (max 2)/Gunner</p>
  
  
  `;

  operativeNameOutput8.innerHTML = `
  <p class="class-name"><span class="ident">Name:</span>  
 ${
   shuffleOperatives(operatives[7]) +
   " " +
   shuffleOperatives(operativesEndName[7])
 }
  </p>
  <p class="op-role">Navis Hatchcutter</p>
  
  `;

  operativeNameOutput9.innerHTML = `
  <p class="class-name"><span class="ident">Name:</span>  
 ${
   shuffleOperatives(operatives[8]) +
   " " +
   shuffleOperatives(operativesEndName[8])
 }
  </p>
  <p class="op-role">Navis Gunner</p>
  
  `;

  operativeNameOutput10.innerHTML = `
  <p class="class-name"><span class="ident">Name:</span> 
 ${
   shuffleOperatives(operatives[9]) +
   " " +
   shuffleOperatives(operativesEndName[9])
 }
  </p>
  <p class="op-role">Navis Gunner</p>
  
  `;

  operativeNameOutput11.innerHTML = `
  <p class="class-name"><span class="ident">Name:</span>  
 ${
   shuffleOperatives(operatives[10]) +
   " " +
   shuffleOperatives(operativesEndName[10])
 }
  </p>
  <p class="op-role">Navis Gunner</p>
  
  `;

  operativeNameOutput12.innerHTML = `
  <p class="class-name"><span class="ident">Name:</span>  
 ${
   shuffleOperatives(operatives[11]) +
   " " +
   shuffleOperatives(operativesEndName[11])
 }
  </p>
  <p class="op-role">Navis Gunner</p>
  
  `;
});

// generate kill team demeanours

const quirks = JSON.parse(localStorage.getItem("ktQuirks")) || [
  {
    name: "Brawn over Brains:",
    text: "Members of this kill team concentrate all their efforts into fighting with overwhelming force and aggression.",
  },

  {
    name: "Envelop:",
    text: "This kill team makes extensive use of corridor networks and explosive-forced routes to surround enemy positions.",
  },

  {
    name: "Xenos Hunters:",
    text: "The warriors of this kill team have fought and won numerous battles against aliens of myrid races.",
  },

  {
    name: "Scorched Deck:",
    text: "When storming an enemy vessel, this kill team destroys all in its path, leaving nothing but wreaked equipment and bodies in its wake.",
  },

  {
    name: "Secure & Control:",
    text: "Professional and precise, this kill team focuses on key objectives, moving swiftly or holding ground fiercely as and when required.",
  },

  {
    name: "Brains over Brawn:",
    text: "This kill team make extensive use of hit and run tactics, traps, diversionary attacks and feints to defeat the enemy.",
  },
];

const background = JSON.parse(localStorage.getItem("ktBackground")) || [
  {
    name: "Improvisers:",
    text: "Consisting of many troops with a creative bent, this kill team is highly adaptable to unusual situations, contriving tools and equipment as needed.",
  },

  {
    name: "Grizzled Veterans:",
    text: "Little the enemy can do will surprise or strike fear into the warriors of this kill team, who have seen and killed worse.",
  },

  {
    name: "Zealots:",
    text: "Fanatical adherents to the faith of the Imperium, the Breachers of this kill team believe the Emperor blesses their every action and is with them always.",
  },

  {
    name: "Superstitious:",
    text: "The Armsmen of this kill team carry all manner of 'lucky' objects, and conduct myriad devotional rites and routines before every mission.",
  },

  {
    name: "Humourless Killers:",
    text: "Even other squads of imperial Navy Breachers give this kill team a wide berth, such is their reputation",
  },

  {
    name: "Diehards:",
    text: "Robust and tenacious, this kill team will have to be wiped outto the last to prevent them from achieving their objectives.",
  },
];

const baseOperations = JSON.parse(localStorage.getItem("ktBase")) || [
  {
    name: "Barracks:",
    text: "This kill team's barracks are equipped with everything it needs to prepare for the next mission.",
  },

  {
    name: "Secure Chamber:",
    text: "Whether on their own ship or an enemy's, this kill team has a secure backup chamber to resupply and rearm from, even as battle rages around them.",
  },

  {
    name: "Boarding Craft:",
    text: "After boarding a vessel, orbital station or space hulk, this kill team can return to the safety of its boarding craft to regroup and rearm.",
  },

  {
    name: "Escape Pod:",
    text: "After being forced to abandon ship, this kill team has improvised a base of operations out of its escape pod using the equipment stored within.",
  },

  {
    name: "Servo Haulers:",
    text: "The troops of this kill team are followed by a number of bespoke servohaulers bearing additional support equipment.",
  },

  {
    name: "Hanger Bay:",
    text: "Ready to deploy at a moment's notice, this kill team is stationed around boarding craft and gunships at all times.",
  },
];

demeanoursBtn.addEventListener("click", function () {
  // quirks

  function shuffleQuirks(quirks) {
    for (let i = quirks.length - 1; i > 0; i--) {
      let randomPositionThree = Math.floor(Math.random() * (i + 1));
      let tempThree = quirks[i];
      // swap elements
      quirks[i] = quirks[randomPositionThree];
      quirks[randomPositionThree] = tempThree;
    }
    return quirks;
  }
  console.log(shuffleQuirks(quirks));

  //   background

  function shuffleBackground(background) {
    for (let i = background.length - 1; i > 0; i--) {
      let randomPositionFour = Math.floor(Math.random() * (i + 1));
      let tempFour = background[i];
      // swap elements
      background[i] = background[randomPositionFour];
      background[randomPositionFour] = tempFour;
    }

    return background;
  }

  console.log(shuffleBackground(background));

  //   base of operations

  function shuffleBase(baseOperations) {
    for (let i = baseOperations.length - 1; i > 0; i--) {
      let randomPositionFive = Math.floor(Math.random() * (i + 1));
      let tempFive = baseOperations[i];
      //  swap elements
      baseOperations[i] = baseOperations[randomPositionFive];
      baseOperations[randomPositionFive] = tempFive;
    }
    return baseOperations;
  }

  console.log(shuffleBase(baseOperations));

  // outputs
  // quirks

  quirkOutput.innerHTML = `
  <p class="demeanour-type">${shuffleQuirks(quirks[0].name)}</p>
  `;
  // quirkOutput.textContent = shuffleQuirks(quirks[0].name);
  baseTextA.innerHTML = `
<p class="demeanour-padding">${shuffleQuirks(quirks[0].text)}</p>
  `;
  // background

  bkgroundOutput.innerHTML = `<p class="demeanour-type">${shuffleBackground(
    background[0].name
  )}</p>`;

  // bkgroundOutput.textContent = shuffleBackground(background[0].name);

  baseTextB.innerHTML = `
  <p class="demeanour-padding">${shuffleBackground(background[0].text)}</p>
    `;

  // base of ops

  baseOutput.innerHTML = `<p class="demeanour-type">${shuffleBase(
    baseOperations[0].name
  )}</p>`;

  // baseOutput.textContent = shuffleBase(baseOperations[0].name);
  baseTextC.innerHTML = `
<p class="demeanour-padding">${shuffleBase(baseOperations[0].text)}</p>
`;
  // baseText.textContent = shuffleBase(baseOperations[0].text);
});
