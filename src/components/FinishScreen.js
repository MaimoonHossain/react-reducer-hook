import React from 'react';

export default function FinishScreen({
  maxPossiblePoints,
  points,
  highscore,
  dispatch,
}) {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);

  let emoji;

  if (percentage === 100) emoji = '🎉';
  if (percentage < 100 && percentage >= 80) emoji = '👏';
  if (percentage < 80 && percentage >= 60) emoji = '👍';
  if (percentage < 60 && percentage >= 40) emoji = '🤔';
  if (percentage < 40) emoji = '😭';
  if (percentage === 0) emoji = '🤯';

  return (
    <div>
      <p className='result'>
        <span>{emoji}</span> You scored <strong>{points}</strong> out of
        <strong> {maxPossiblePoints}</strong> ({percentage}%)
      </p>
      <p className='highscore'>(Highscore: {highscore} points)</p>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart quiz
      </button>
    </div>
  );
}
