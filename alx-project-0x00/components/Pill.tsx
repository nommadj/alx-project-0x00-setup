import React from 'react';
import { PillProps } from '@/interfaces';

const Pill: React.FC<PillProps> = ({ label }) => {
  return (
    <span className='px-3 py-1 bg-gray-200 rounded-full text-sm'>
      {label}
    </span>
  );
};

export default Pill;
