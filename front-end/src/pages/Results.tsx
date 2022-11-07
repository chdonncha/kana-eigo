import React, { useEffect, useState } from 'react';

import { KanaQuiz } from './KanaQuiz';

export const Results = ({ score }: { score: any }) => {
  const [showResults, setShowResults] = useState(true);

  const handleClick = () => {
    setShowResults((current) => !current);
  };

  return (
    <div>
      {showResults && (
        <>
          <h1>Results</h1>
          <p>Your Score: {score} / 20 </p>
          <button onClick={handleClick}>Click</button>
        </>
      )}
      {!showResults && <KanaQuiz />}
    </div>
  );
};
