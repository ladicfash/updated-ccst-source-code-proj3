import React from 'react';

const ProgressTracker = ({ viewedCards, totalCards, correctCount, incorrectCount, streak, longestStreak }) => {
  return (
    <div>
      <p>Viewed Cards: {viewedCards} / {totalCards}</p>
      <p>Score: {correctCount} Correct, {incorrectCount} Incorrect</p>
      <p>Current Streak: {streak}</p>
      <p>Longest Streak: {longestStreak}</p>
    </div>
  );
};

export default ProgressTracker;