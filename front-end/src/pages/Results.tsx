import React, { useEffect, useState } from 'react';

export const Results = ({ score }: { score: any }) => {
  return (
    <div>
      <h1>Results</h1>
      <p>Your Score: {score} </p>
      {/*<button*/}
      {/*  className="mt-3"*/}
      {/*  onClick={(event) => {*/}
      {/*    reset();*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Play Again?*/}
      {/*</button>*/}
    </div>
  );
};
