# Web Development Project 2 - *Midnight Zenith*

Submitted by: **Hamza Munis**

This web app: **Midnight Zenith is an interactive, space-themed flashcard app designed to test users on their knowledge of space trivia. It categorizes cards (Solar System, Stars & Nebulae, Cosmology, and Black Holes) with responsive bento-grid inspired cards that flip over to reveal answers, track historical card exploration, and randomize selections smoothly.**

Time spent: **18** hours spent in total

## Required Features

The following **required** functionality is completed:


- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contain images in addition to or in place of text
  - [x] Some or all cards have images in place of or in addition to text
- [x] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:

* [x] **Discovered Progress Tracker:** New cards or cards that appear the first time have a green New! tag oabove the image and a purple discovered tag when it appears a second time and onwards
  - [x] There is a total discovered count below the total count which shows how many cards have been discovered
* [x] **Category Filter:** Above the cards there is a filter which sorts the cards into their different categories, like solar system, cosmology, and so on then displays only that category when the respective bubble is clicked on
  - [x] 4 Categories; Solar system (yellow), Stars and Nebulae (teal), Cosmology (purple), Black Holes (red)
  - [x] The cards color matches the category filter bubble color in the filter bar and inside the card itself
  - [x] There is a count above the discovered count which displays the count of cards in that filtered category deck so for example cosmology filter category has 7 cards
* [x] **Difficulty tag:** Added a difficulty tag on the cards, green easy tag, yellow medium tag, and red hard tag, based on the question difficulty

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='./src/assets/demo-walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with kap (MacOS)  

### Production Screenshots

**Filter: All Category: Solar System**
<img src='https://i.imgur.com/gF6diaY.jpeg' title='Filter: All Category: Solar System' width='100%' alt='Filter: All Category: Solar System' />

**Filter: All Category: Solar System (flipped card example)**
<img src='https://i.imgur.com/O5rD1rS.jpeg' title='Filter: All Category: Solar System (flipped card example)' width='100%' alt='Filter: All Category: Solar System (flipped card example)' />

**Filter: All Category: Stars and Nebulae**
<img src='https://i.imgur.com/aCRn4oj.jpeg' title='Filter: All Category: Stars and Nebulae' width='100%' alt='Filter: All Category: Stars and Nebulae' />

**Filter: All Category: Cosmology**
<img src='https://i.imgur.com/cyLwetF.jpeg' title='Filter: All Category: Cosmology' width='100%' alt='Filter: All Category: Cosmology' />

**Filter: All Category: Black Holes**
<img src='https://i.imgur.com/9OY2sie.jpeg' title='Filter: All Category: Black Holes' width='100%' alt='Filter: All Category: Black Holes' />

**Filter: Solar System**
<img src='https://i.imgur.com/rnEHfnn.jpeg' title='Filter: Solar System' width='100%' alt='Filter: Solar System' />

**Filter: Solar System (flipped card exmaple)**
<img src='https://i.imgur.com/Wxd4eXu.jpeg' title='Filter: Solar System (flipped card exmaple)' width='100%' alt='Filter: Solar System (flipped card exmaple)' />

**Filter: Stars and Nebulae**
<img src='https://i.imgur.com/5Q8emSm.jpeg' title='Filter: Stars and Nebulae' width='100%' alt='Filter: Stars and Nebulae' />

**Filter: Stars and Nebulae (flipped card exmaple)**
<img src='https://i.imgur.com/2PcVmIC.jpeg' title='Filter: Stars and Nebulae (flipped card exmaple)' width='100%' alt='Filter: Stars and Nebulae (flipped card exmaple)' />

**Filter: Cosmology**
<img src='https://i.imgur.com/mkse6CH.jpeg' title='Filter: Cosmology' width='100%' alt='Filter: Cosmology' />

**Filter: Cosmology (flipped card exmaple)**
<img src='https://i.imgur.com/8qUiSAG.jpeg' title='Filter: Cosmology (flipped card exmaple)' width='100%' alt='Filter: Cosmology (flipped card exmaple)' />

**Filter: Black Holes**
<img src='https://i.imgur.com/9wTFBPy.jpeg' title='Filter: Black Holes' width='100%' alt='Filter: Black Holes' />

**Filter: Black Holes (flipped card exmaple)**
<img src='https://i.imgur.com/WtwLye1.jpeg' title='Filter: Black Holes (flipped card exmaple)' width='100%' alt='Filter: Black Holes (flipped card exmaple)' />

## Notes

1. Vite Public Directory Root Pathing: Configuring local images initially caused routing mismatches when assuming relative structural path chains (Midnight-Zenith/public/...). This was solved by understanding that Vite automatically mounts and maps the root / URL string endpoint straight onto the public/ directory, requiring absolute paths starting cleanly from /images/.

2. Aspect Ratio Clipping vs Container Layouts: Using standard container bounding frames with object-fit: cover frequently cut off or cropped crucial sections of the space images. Stripping the parent container wrappers entirely, allowing the inner image to render fluidly with proportionate auto-scaling width parameters, and setting a rigid height using object-fit: contain ensured the whole image remains visible inside the card boundaries with zero edge loss.

3. Background Bleed at Rounded Corners: When using object-fit: contain, dark letterbox margins or container backgrounds (background: rgba(0, 0, 0, 0.4)) would peek through the rounded corners (border-radius: 12px). Setting the background explicitly to transparent and shifting the corner rounding logic directly onto the <img> element forced the main card background to bleed through smoothly, eliminating visual anomalies.

4. Answer Leak/Flicker on Filter Change: A race condition occurred when a category filter button was clicked while a flashcard was currently flipped over to its back face. React instantly replaced the dataset element with the new category's index item before the CSS 3D matrix transition could finish turning forward, exposing the next card's answer for a brief moment. This was fixed by implementing an ephemeral isTransitioningFilter safety hook inside App.jsx, which dynamically forwards an explicit .suppress-flip layout wrapper to kill transition delays and lock back-face opacity to zero during state shifts.

5. Browser Icon Caching: Updating the site favicon resulted in an aggressive local browser cache lock, leading to a missing generic globe fallback icon. Identifying file system case-sensitivity issues and manually performing a hard refresh on the direct asset path resolved the resource handshake mismatch.

6. State Synchronization and Out-of-Bounds Handling on Filter Changes: When a user clicks a category filter, the active data array (`filteredCards`) changes instantly. If the user was previously viewing card index 15 in the "All" deck, switching to a category with only 7 cards would cause an immediate layout crash (`Cannot read properties of undefined`) because the `currentIndex` would point out of bounds. This required synchronizing filter selections to safely reset the array index pointer (`setCurrentIndex(0)`) inside the state update transaction before the component attempted to re-render the card details.

7. Duplication of Context with Randomization Realignment: Implementing a pure random number generator (`Math.floor(Math.random() * poolSize)`) for the next button introduces a chance of selecting the same card index twice in a row. For a user, clicking a button to see a "next" card and seeing nothing change creates the illusion of a frozen or unresponsive UI. Overcoming this layout logic block required checking if a single-item pool exists, or building structural safety loops to guarantee that consecutive states update to a fresh index value.

8. CSS 3D Transform and Overflow Clipping Conflicts: To make local images look clean, an initial design intuition used `overflow: hidden` on the main card container to clip child elements. However, in CSS 3D contexts (`preserve-3d`), setting any variant of `overflow: hidden` or an aggressive `backdrop-filter` on certain wrapper layers collapses the component's Z-axis perspective flattening the flip effect entirely. The layout had to be refactored by removing arbitrary overflow constraints from the parent structures and manually curving the individual component asset layers instead.

9. Deterministic Progressive State Scaling for Sets: Tracking the unique historical progression of discovered cards across random cycles required a data structure that prevents tracking duplicates. Passing a standard JavaScript Array into `discoveredCardIds` would result in a bloated footprint as the user cycles through cards. Leveraging a native ES6 `Set` structure (`new Set([...prev, id])`) ensured that item entries remain fundamentally unique, allowing an accurate, lightweight count of unique exploration progress.

10. Font Shifting and Layout Jitter Across Different Asset Proportions: Because different space imagery has entirely distinct original aspect ratios (some wide and landscape, others tight and squarish), the text elements below the images originally experienced "layout jitter"—bouncing up and down as new cards loaded. This was resolved by designing strict max-height constraints and leveraging absolute boundaries to isolate the structural flow of text from the shifting aspect footprints of the physical graphics asset files.

## License

    Copyright [2026] [Hamza Munis]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

# Web Development Project 3 - *Midnight Zenith - Part 2*

Submitted by: **Hamza Munis**

This web app: **Midnight Zenith is an interactive, space-themed flashcard app designed to test users on their knowledge of space trivia. It categorizes cards (Solar System, Stars & Nebulae, Cosmology, and Black Holes) with responsive bento-grid inspired cards that flip over to reveal answers, track historical card exploration, and randomize selections smoothly. It also allows the user to submit theirr guess before flipping the card to see the answer, and user can now mark the cards as mastered to add to a seperarte list. tradionall next and prev buttons work sequentially but shuffle implements the random generation logic. There are multiple counters like cards left in pool, streaks, and mastered cards along with prev counters.**

Time spent: **12** hours spent in total (18 in part 1, 12 in part 2, 30 in total)

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  -  Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [x] **The user can navigate through an ordered list of cardss**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list (for example, graying out and no longer being available to click), not allowing for wrap-around navigation

The following **optional** features are implemented:


- [x] Users can use a shuffle button to randomize the order of the cards
  - Cards should remain in the same sequence (**NOT** randomized) unless the shuffle button is clicked 
  - Cards should change to a random sequence once the shuffle button is clicked
- [x] A user’s answer may be counted as correct even when it is slightly different from the target answer
  - Answers are considered correct even if they only partially match the answer on the card 
  - Examples: ignoring uppercase/lowercase discrepancies, ignoring punctuation discrepancies, matching only for a particular part of the answer rather than the whole answer
- [x] A counter displays the user’s current and longest streak of correct responses
  - The current counter increments when a user guesses an answer correctly
  - The current counter resets to 0 when a user guesses an answer incorrectly
  - A separate counter tracks the longest streak, updating if the value of the current streak counter exceeds the value of the longest streak counter 
- [x] A user can mark a card that they have mastered and have it removed from the pool of displayed cards
  - The user can mark a card to indicate that it has been mastered
  - Mastered cards are removed from the pool of displayed cards and added to a list of mastered cards


The following **additional** features are implemented:

* [x] N/A

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://i.imgur.com/q7JFMB3.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with kap (MacOS)

### Production Screenshots

<img src='https://i.imgur.com/od9m6hR.jpeg' title='' width='100%' alt='image' />
<img src='https://i.imgur.com/8ZIEPQQ.jpeg' title='' width='100%' alt='image' />
<img src='https://i.imgur.com/zfKJi6W.jpeg' title='' width='100%' alt='image' />
<img src='https://i.imgur.com/oseKKeM.jpeg' title='' width='100%' alt='image' />
<img src='https://i.imgur.com/E9mQxvI.jpeg' title='' width='100%' alt='image' />
<img src='https://i.imgur.com/hamoeMT.jpeg' title='' width='100%' alt='image' />
<img src='https://i.imgur.com/UdrpglR.jpeg' title='' width='100%' alt='image' />
<img src='https://i.imgur.com/FZgZRfK.jpeg' title='' width='100%' alt='image' />
<img src='https://i.imgur.com/eG6ceCP.jpeg' title='' width='100%' alt='image' />
<img src='https://i.imgur.com/odxTGSr.jpeg' title='' width='100%' alt='image' />

## Notes

1. **State Syncing & Race Conditions (Transitions vs. Data)**
Answer Leak/Flicker on Filter Changes: A prominent race condition occurred when a user clicked a category filter button while a flashcard was still flipped over to its back face. React would immediately update the active item index to the new dataset before the CSS 3D matrix transition could finish turning forward, exposing the next card's answer briefly. This required introducing an isTransitioningFilter safety hook inside App.jsx to dynamically forward a .suppress-flip class, dropping transition delays and locking back-face visibility to zero during state shifts.

Instant Text Flashing on Next Card: When moving to the next card via sequential navigation, updating the indices instantly caused the next card's text to flash on screen before the card could visually reset. To preserve smooth card rotation, a setTimeout of 300ms was re-engineered to allow the old card to visually hide or flip forward before updating currentCard.answer and currentCard.question.

2. **Logic Guardrails and Strict Game Sequencing**
Restricting Flips Until Guessed: Implementing a strict rule ensuring that a user cannot flip a card to see the answer until they have submitted a guess at least once. This required adding a hasSubmittedGuess tracking variable across navigation endpoints and passing it down to block click execution on the Card component.

Conditional Mastery Restrictions: The game required that users cannot mark a card as mastered unless they have successfully guessed it correct at least once. The system had to conditionally disable the button and alter its state based on evaluating the current card's guessFeedback.

Streak Lock Controls: Managing the streak counter to ensure that correcting a previously wrong guess would not increment the active streak, meaning streaks reset to 0 upon failure and stay locked until a completely fresh card is loaded.

3. **Pointer-Events and Interactive UI Bugs**
Broken "Not-Allowed" Cursor on Disabled Buttons: When buttons like "Mark as Mastered" were disabled, the custom not-allowed cursor indicator failed to show up on mouse hover. This occurred because pointer-events: none; was applied to the disabled state, telling the browser to completely ignore mouse communication. The workaround involved switching the configuration to pointer-events: auto !important; to ensure native click restrictions remained secure while restoring hover tracking and cursor visualization safely.

4. **String Extraction and Fuzzy Matching**
Lenient Text Submissions: Raw text comparisons would cause clean answers to register as incorrect due to casing or punctuation differences. A continuous answer checker had to be built using fuzzy logic tweaks that actively ignored minor punctuation nodes (hyphens, periods, apostrophes) and capitalization mismatches to provide forgiving user feedback.

5. **Unable to implement additional features**
I tried very hard to implement two new features, one was a timed mode where user would have 12 seconds to guess the answer or else the card would lock on incorrect and user would have to move on. The second feature was ranks, such as discovering one card from each filter category, making 25 mistakes, mastering 5, 10, 15 etc cards and mastering all the categories or atleast one category completely. I was unable to implement these in the end because of time contraints and other emergencies and my code kept breaking between styling and adding new layout so I had to give up for now. 

6. **Issues with styling and logic for some features**
I also had some issues with syncing the styles for all the buttons because fixing one would break the other and sryles overlapped to create a new very ugly style. 

## License

    Copyright [2026] [Hamza Munis]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.