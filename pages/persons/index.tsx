import { NextPage } from 'next';
import React from 'react';

const Person: NextPage = () => {
  return (
    <div>
      Hello world
      <p>scoped!</p>
      <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          background: white;
        }
      `}</style>
    </div>
  );
};

export default Person;
