# Cisco CCST Flashcard App

## Description
This application is a flashcard app designed to help users study Cisco's CCST concepts. Each card contains a pair of information (e.g., a question and an answer). Users can click on the card to flip between the question and answer, track their progress, and keep a score of correct and incorrect answers.

## Features
- [x] The title of the card set and some information about it, such as a short description and the total number of cards are displayed.
- [x] A single card at a time is displayed, only showing one of the components of the information pair.
- [x] Create a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine).
- [x] Clicking on the card shows the corresponding component of the information pair.
- [x] Clicking the next button displays a random new card.
- [x] Clicking the shuffle button shuffles the cards and displays a random card.
- [x] Flip animation when the card is clicked to reveal the answer.
- [x] Progress tracker to show how many cards have been viewed.
- [x] Score counter to keep track of correct and incorrect answers.

## Getting Started
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the app**:
   ```bash
   npm run dev
   ```

## Resources
- [Getting Started with Vite](https://vitejs.dev/guide/)
- [State Hook: useState()](https://reactjs.org/docs/hooks-state.html)
- [Event Handling](https://reactjs.org/docs/handling-events.html)
- [Passing Data Through Props](https://reactjs.org/docs/components-and-props.html)
- [React Buttons](https://reactjs.org/docs/forms.html#handling-multiple-inputs)

## Hints
- **Try sketching out the components** you will need to add and drawing the relationships between them.
- **Create a state variable** to keep track of whether your card is flipped to the front or not.
- **Use inline conditional rendering** to show either the question or answer on the card based on your state variable.
- **Check out animation resources** to add cool animations for flipping the cards.

## Submission Guidelines
- **Add and commit files** in git as you complete features and milestones.
- **Include a README** containing a GIF walkthrough of your project.
- **Check off each feature** that is implemented in your submission by changing [ ] to [x].
- **Submit your project** in any state by the deadline. You can continue to work on your project with a 48-hour extension.

## GIF Walkthrough
![GIF Walkthrough] https://imgur.com/a/U2oS4YX
