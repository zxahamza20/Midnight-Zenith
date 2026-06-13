 const spaceCards = [
  // --- Category: Solar System (7 Cards) ---
  { 
    id: 1, 
    question: "What is the hottest planet in our solar system?", 
    answer: "Venus", 
    category: "Solar System", 
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=600" 
  },
  { 
    id: 2, 
    question: "Which planet has the most extensive ring system?", 
    answer: "Saturn", 
    category: "Solar System", 
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600" 
  },
  { 
    id: 3, 
    question: "What is the largest planet in our solar system?", 
    answer: "Jupiter", 
    category: "Solar System", 
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=600" 
  },
  { 
    id: 4, 
    question: "Which planet is known as the 'Red Planet'?", 
    answer: "Mars", 
    category: "Solar System", 
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1614722894747-a83421e2b9c9?w=600" 
  },
  { 
    id: 5, 
    question: "What celestial body did the IAU reclassify as a dwarf planet in 2006?", 
    answer: "Pluto", 
    category: "Solar System", 
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1614314107204-d72096f2a58f?w=600" 
  },
  { 
    id: 6, 
    question: "What is the name of the largest moon of Saturn, known for its dense atmosphere?", 
    answer: "Titan", 
    category: "Solar System", 
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=600" 
  },
  { 
    id: 7, 
    question: "Between which two planets is the main Asteroid Belt located?", 
    answer: "Mars and Jupiter", 
    category: "Solar System", 
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1614314107204-d72096f2a58f?w=600" 
  },

  // --- Category: Stars & Nebulae (7 Cards) ---
  { 
    id: 8, 
    question: "What is the closest star to Earth?", 
    answer: "The Sun", 
    category: "Stars & Nebulae", 
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=600" 
  },
  { 
    id: 9, 
    question: "What is a giant cloud of dust and gas in space where new stars are born called?", 
    answer: "A Nebula", 
    category: "Stars & Nebulae", 
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600" 
  },
  { 
    id: 10, 
    question: "What type of star is created when a massive star collapses and explodes in a massive blast?", 
    answer: "A Supernova", 
    category: "Stars & Nebulae", 
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600" 
  },
  { 
    id: 11, 
    question: "What color are the hottest stable stars in the universe?", 
    answer: "Blue", 
    category: "Stars & Nebulae", 
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600" 
  },
  { 
    id: 12, 
    question: "What dense remnant is left behind after a standard supernova explosion compression?", 
    answer: "A Neutron Star", 
    category: "Stars & Nebulae", 
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=600" 
  },
  { 
    id: 13, 
    question: "Which nearby star system is historically known to be the closest tracking system to our Sun?", 
    answer: "Alpha Centauri", 
    category: "Stars & Nebulae", 
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=600" 
  },
  { 
    id: 14, 
    question: "What is the specific core process that stars use to generate light and heat energy?", 
    answer: "Nuclear Fusion", 
    category: "Stars & Nebulae", 
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=600" 
  },

  // --- Category: Cosmology (7 Cards) ---
  { 
    id: 15, 
    question: "What is the name of the galaxy that contains our Solar System?", 
    answer: "The Milky Way", 
    category: "Cosmology", 
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?w=600" 
  },
  { 
    id: 16, 
    question: "What is the leading scientific theory explaining the origin and initial expansion of our universe?", 
    answer: "The Big Bang Theory", 
    category: "Cosmology", 
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600" 
  },
  { 
    id: 17, 
    question: "Is the universe currently expanding, static, or shrinking over historical epochs?", 
    answer: "Expanding", 
    category: "Cosmology", 
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=600" 
  },
  { 
    id: 18, 
    question: "What invisible substance is hypothesized to account for roughly 85% of all matter in the universe?", 
    answer: "Dark Matter", 
    category: "Cosmology", 
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600" 
  },
  { 
    id: 19, 
    question: "What mysterious force is believed to be driving the accelerated expansion speed of the universe?", 
    answer: "Dark Energy", 
    category: "Cosmology", 
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=600" 
  },
  { 
    id: 20, 
    question: "What faint cosmic glow left over from the Big Bang is detected uniformally across all space directions?", 
    answer: "Cosmic Microwave Background (CMB)", 
    category: "Cosmology", 
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600" 
  },
  { 
    id: 21, 
    question: "What is the nearest large spiral galaxy neighborhood neighbor to the Milky Way?", 
    answer: "Andromeda", 
    category: "Cosmology", 
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?w=600" 
  },

  // --- Category: Black Holes (7 Cards) ---
  { 
    id: 22, 
    question: "What is the boundary surrounding a black hole from which absolutely nothing can escape?", 
    answer: "The Event Horizon", 
    category: "Black Holes", 
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1504333638930-c8787321eff0?w=600" 
  },
  { 
    id: 23, 
    question: "What is the infinitely dense point at the absolute center of a black hole called?", 
    answer: "A Singularity", 
    category: "Black Holes", 
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1504333638930-c8787321eff0?w=600" 
  },
  { 
    id: 24, 
    question: "What term describes the theoretical stretching of objects into long, thin shapes near a black hole?", 
    answer: "Spaghettification", 
    category: "Black Holes", 
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=600" 
  },
  { 
    id: 25, 
    question: "What is the name of the supermassive black hole at the center of our Milky Way galaxy?", 
    answer: "Sagittarius A*", 
    category: "Black Holes", 
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=600" 
  },
  { 
    id: 26, 
    question: "What type of radiation is theoretically emitted by black holes due to quantum effects near the horizon?", 
    answer: "Hawking Radiation", 
    category: "Black Holes", 
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=600" 
  },
  { 
    id: 27, 
    question: "What are black holes that form from the collapsed remnants of massive stars called?", 
    answer: "Stellar Black Holes", 
    category: "Black Holes", 
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600" 
  },
  { 
    id: 28, 
    question: "What is the bright rotating disk of hot matter swirling rapidly around a black hole called?", 
    answer: "An Accretion Disk", 
    category: "Black Holes", 
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600" 
  }
];

export default spaceCards;