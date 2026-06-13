// src/components/spaceCards.jsx
const spaceCards = [
  // --- Category: Solar System (7 Cards) ---
  { id: 1, question: "What is the hottest planet in our solar system?", answer: "Venus", category: "Solar System", image: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=600" },
  { id: 2, question: "Which planet has the most extensive ring system?", answer: "Saturn", category: "Solar System", image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600" },
  { id: 3, question: "What is the largest planet in our solar system?", answer: "Jupiter", category: "Solar System", image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=600" },
  { id: 4, question: "Which planet is known as the 'Red Planet'?", answer: "Mars", category: "Solar System", image: "https://images.unsplash.com/photo-1614722894747-a83421e2b9c9?w=600" },
  { id: 5, question: "What celestial body did the IAU reclassify as a dwarf planet in 2006?", answer: "Pluto", category: "Solar System", image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=600" },
  { id: 6, question: "Which planet rotates on its side, with its axis pointing almost directly at the Sun?", answer: "Uranus", category: "Solar System", image: "https://images.unsplash.com/photo-1614314107202-d688651c9d81?w=600" },
  { id: 7, question: "What is the name of Earth's only natural satellite?", answer: "The Moon", category: "Solar System", image: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?w=600" },

  // --- Category: Stars & Nebulae (7 Cards) ---
  { id: 8, question: "What process powers stars by converting hydrogen into helium?", answer: "Nuclear Fusion", category: "Stars & Nebulae", image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600" },
  { id: 9, question: "What is a massive, glowing cloud of gas and dust in space where new stars are born?", answer: "A Nebula", category: "Stars & Nebulae", image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600" },
  { id: 10, question: "What type of star is extremely small and dense, composed almost entirely of neutrons?", answer: "A Neutron Star", category: "Stars & Nebulae", image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600" },
  { id: 11, question: "What do you call the explosive death of a high-mass star?", answer: "A Supernova", category: "Stars & Nebulae", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600" },
  { id: 12, question: "What are the remains of low-mass stars that have exhausted their nuclear fuel called?", answer: "White Dwarfs", category: "Stars & Nebulae", image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=600" },
  { id: 13, question: "What color are the coolest stars in terms of surface temperature?", answer: "Red", category: "Stars & Nebulae", image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600" },
  { id: 14, question: "What is the name of the constellation containing the group of stars nicknamed the Big Dipper?", answer: "Ursa Major", category: "Stars & Nebulae", image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=600" },

  // --- Category: Cosmology (7 Cards) ---
  { id: 15, question: "What is the approximate age of the universe?", answer: "13.8 billion years", category: "Cosmology", image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=600" },
  { id: 16, question: "What type of galaxy is the Milky Way?", answer: "A Spiral Galaxy", category: "Cosmology", image: "https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?w=600" },
  { id: 17, question: "What is the name of the closest major spiral galaxy to the Milky Way?", answer: "Andromeda", category: "Cosmology", image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=600" },
  { id: 18, question: "What hypothetical invisible matter makes up roughly 27% of the universe?", answer: "Dark Matter", category: "Cosmology", image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=600" },
  { id: 19, question: "What is the mysterious force responsible for the accelerating expansion of the universe?", answer: "Dark Energy", category: "Cosmology", image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=600" },
  { id: 20, question: "What theory describes the rapid expansion of space from an infinitely dense point?", answer: "The Big Bang Theory", category: "Cosmology", image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600" },
  { id: 21, question: "What cosmic radiation is considered left-over heat from the Big Bang?", answer: "Cosmic Microwave Background (CMB)", category: "Cosmology", image: "https://images.unsplash.com/photo-1539321908154-04927596764d?w=600" },

  // --- Category: Black Holes (7 Cards) ---
  { id: 22, question: "What boundary around a black hole prevents anything from escaping?", answer: "The Event Horizon", category: "Black Holes", image: "https://images.unsplash.com/photo-1627556704353-016cca9162a2?w=600" },
  { id: 23, question: "What is the infinitely dense point at the absolute center of a black hole called?", answer: "A Singularity", category: "Black Holes", image: "https://images.unsplash.com/photo-1504333638930-c8787321eff0?w=600" },
  { id: 24, question: "What term describes the theoretical stretching of objects into long, thin shapes near a black hole?", answer: "Spaghettification", category: "Black Holes", image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=600" },
  { id: 25, question: "What is the name of the supermassive black hole at the center of our Milky Way galaxy?", answer: "Sagittarius A*", category: "Black Holes", image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=600" },
  { id: 26, question: "What type of radiation is theoretically emitted by black holes due to quantum effects near the horizon?", answer: "Hawking Radiation", category: "Black Holes", image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=600" },
  { id: 27, question: "What are black holes that form from the collapsed remnants of massive stars called?", answer: "Stellar Black Holes", category: "Black Holes", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600" },
  { id: 28, question: "What do astronomers look for to detect a dormant black hole?", answer: "Gravitational effects on nearby stars", category: "Black Holes", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600" }

  
];

export default spaceCards;