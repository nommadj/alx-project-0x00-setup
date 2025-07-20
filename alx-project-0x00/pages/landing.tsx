import React from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const Landing: React.FC = () => {
  return (
    <div className='rounded-lg shadow p-4 rounded-sm rounded-full'>
      <Card />
      <Button text='Click Me' />
    </div>
  );
};

export default Landing;
