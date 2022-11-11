import React, { useEffect, useState } from 'react';

import { Button } from 'react-bootstrap';

import { KanaQuiz } from './KanaQuiz';

export const Results = ({ score }: { score: any }) => {
  const [showResults, setShowResults] = useState(true);

  const handleClick = () => {
    setShowResults((current) => !current);
  };

  // TODO: show skipped questions
  // TODO: show failed questions
  // TODO: show total correct
  // TODO: give percent of correct

  return (
    <div>
      {showResults && (
        <>
          <h1>Results</h1>
          <p>Your Score: {score} / 20 </p>
          <Button variant={'secondary'} onClick={handleClick}>
            Click
          </Button>
        </>
      )}
      {!showResults && <KanaQuiz />}
    </div>
  );
};
