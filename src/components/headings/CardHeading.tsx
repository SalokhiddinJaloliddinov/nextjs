import React, { ReactNode } from 'react';

type ChildrenType = {
  children: ReactNode;
};

const CardHeading: React.FC<ChildrenType> = ({ children }) => {
  return (
    <div className="bg-white py-6 px-4 rounded shadow-md uppercase font-semibold text-xs">
      {children}
    </div>
  );
};

export default CardHeading;
