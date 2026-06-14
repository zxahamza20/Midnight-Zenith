 const spaceCards = [
  // --- Category: Solar System ---
  { 
    id: 1, 
    question: "What is the hottest planet in our solar system?", 
    answer: "Venus", 
    category: "Solar System", 
    difficulty: "Easy",
    image: "images/venus.jpg" 
  },
  { 
    id: 2, 
    question: "Which planet has the most extensive ring system?", 
    answer: "Saturn", 
    category: "Solar System", 
    difficulty: "Easy",
    image: "images/saturn.jpg" 
  },
  { 
    id: 3, 
    question: "What is the largest planet in our solar system?", 
    answer: "Jupiter", 
    category: "Solar System", 
    difficulty: "Easy",
    image: "images/jupiter.jpg" 
  },
  { 
    id: 4, 
    question: "Which planet is known as the 'Red Planet'?", 
    answer: "Mars", 
    category: "Solar System", 
    difficulty: "Easy",
    image: "images/mars.jpg" 
  },
  { 
    id: 5, 
    question: "What celestial body did the IAU reclassify as a dwarf planet in 2006?", 
    answer: "Pluto", 
    category: "Solar System", 
    difficulty: "Medium",
    image: "images/pluto.jpg" 
  },
  { 
    id: 6, 
    question: "What is the name of the largest moon of Saturn, known for its dense atmosphere?", 
    answer: "Titan", 
    category: "Solar System", 
    difficulty: "Medium",
    image: "images/titan.jpg" 
  },
  { 
    id: 7, 
    question: "Between which two planets is the main Asteroid Belt located?", 
    answer: "Mars and Jupiter", 
    category: "Solar System", 
    difficulty: "Hard",
    image: "images/asteroid-belt.jpg" 
  },

  // --- Category: Stars & Nebulae ---
  { 
    id: 8, 
    question: "What is the closest star to Earth?", 
    answer: "The Sun", 
    category: "Stars & Nebulae", 
    difficulty: "Easy",
    image: "images/sun.jpg" 
  },
  { 
    id: 9, 
    question: "What is a giant cloud of dust and gas in space where new stars are born called?", 
    answer: "A Nebula", 
    category: "Stars & Nebulae", 
    difficulty: "Easy",
    image: "images/nebula.jpg" 
  },
  { 
    id: 10, 
    question: "What type of star is created when a massive star collapses and explodes in a massive blast?", 
    answer: "A Supernova", 
    category: "Stars & Nebulae", 
    difficulty: "Medium",
    image: "images/supernova.jpg" 
  },
  { 
    id: 11, 
    question: "What color are the hottest stable stars in the universe?", 
    answer: "Blue", 
    category: "Stars & Nebulae", 
    difficulty: "Medium",
    image: "images/giant-stars.jpg" 
  },
  { 
    id: 12, 
    question: "What dense remnant is left behind after a standard supernova explosion compression?", 
    answer: "A Neutron Star", 
    category: "Stars & Nebulae", 
    difficulty: "Hard",
    image: "images/neutron-star.jpg" 
  },
  { 
    id: 13, 
    question: "Which nearby star system is historically known to be the closest tracking system to our Sun?", 
    answer: "Alpha Centauri", 
    category: "Stars & Nebulae", 
    difficulty: "Medium",
    image: "images/alpha-centauri.jpg" 
  },
  { 
    id: 14, 
    question: "What is the specific core process that stars use to generate light and heat energy?", 
    answer: "Nuclear Fusion", 
    category: "Stars & Nebulae", 
    difficulty: "Hard",
    image: "images/nuclear-fusion.jpg" 
  },

  // --- Category: Cosmology ---
  { 
    id: 15, 
    question: "What is the name of the galaxy that contains our Solar System?", 
    answer: "The Milky Way", 
    category: "Cosmology", 
    difficulty: "Easy",
    image: "images/milky-way.jpg" 
  },
  { 
    id: 16, 
    question: "What is the leading scientific theory explaining the origin and initial expansion of our universe?", 
    answer: "The Big Bang Theory", 
    category: "Cosmology", 
    difficulty: "Easy",
    image: "images/big-bang.jpg" 
  },
  { 
    id: 17, 
    question: "Is the universe expanding, static, or shrinking over historical epochs?", 
    answer: "Expanding", 
    category: "Cosmology", 
    difficulty: "Easy",
    image: "images/universe-expansion.jpg" 
  },
  { 
    id: 18, 
    question: "What invisible substance is hypothesized to account for roughly 85% of all matter in the universe?", 
    answer: "Dark Matter", 
    category: "Cosmology", 
    difficulty: "Medium",
    image: "images/dark-matter.jpg" 
  },
  { 
    id: 19, 
    question: "What mysterious force is believed to be driving the accelerated expansion speed of the universe?", 
    answer: "Dark Energy", 
    category: "Cosmology", 
    difficulty: "Medium",
    image: "images/dark-energy.jpg" 
  },
  { 
    id: 20, 
    question: "What faint cosmic glow left over from the Big Bang is detected uniformally across all space directions?", 
    answer: "Cosmic Microwave Background (CMB)", 
    category: "Cosmology", 
    difficulty: "Hard",
    image: "images/cmb.jpg" 
  },
  { 
    id: 21, 
    question: "What is the nearest large spiral galaxy neighborhood neighbor to the Milky Way?", 
    answer: "Andromeda", 
    category: "Cosmology", 
    difficulty: "Hard",
    image: "images/andromeda.jpg" 
  },

  // --- Category: Black Holes ---
  { 
    id: 22, 
    question: "What is the boundary surrounding a black hole from which absolutely nothing can escape?", 
    answer: "The Event Horizon", 
    category: "Black Holes", 
    difficulty: "Medium",
    image: "images/event-horizon.jpg" 
  },
  { 
    id: 23, 
    question: "What is the infinitely dense point at the absolute center of a black hole called?", 
    answer: "A Singularity", 
    category: "Black Holes", 
    difficulty: "Medium",
    image: "images/singularity.jpg" 
  },
  { 
    id: 24, 
    question: "What term describes the theoretical stretching of objects into long, thin shapes near a black hole?", 
    answer: "Spaghettification", 
    category: "Black Holes", 
    difficulty: "Medium",
    image: "images/spaghettification.jpg" 
  },
  { 
    id: 25, 
    question: "What is the name of the supermassive black hole at the center of our Milky Way galaxy?", 
    answer: "Sagittarius A*", 
    category: "Black Holes", 
    difficulty: "Hard",
    image: "images/sagittarius-a-star.jpg" 
  },
  { 
    id: 26, 
    question: "What type of radiation is theoretically emitted by black holes due to quantum effects near the horizon?", 
    answer: "Hawking Radiation", 
    category: "Black Holes", 
    difficulty: "Hard",
    image: "images/hawking-radiation.jpg" 
  },
  { 
    id: 27, 
    question: "What are black holes that form from the collapsed remnants of massive stars called?", 
    answer: "Stellar Black Holes", 
    category: "Black Holes", 
    difficulty: "Medium",
    image: "images/stellar-black-holes.jpg" 
  },
  { 
    id: 28, 
    question: "What is the bright rotating disk of hot matter swirling rapidly around a black hole called?", 
    answer: "An Accretion Disk", 
    category: "Black Holes", 
    difficulty: "Hard",
    image: "images/accretion-disk.jpg" 
  }
];

export default spaceCards;