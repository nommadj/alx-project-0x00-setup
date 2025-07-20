import Card from '../components/Card';
import Pill from '../components/Pill';
import Button from '../components/Button';

const Landing = () => {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Landing Page</h1>
      <Card title="Sample Card" imageUrl="https://via.placeholder.com/150" rating={4.5} />
      <div className="flex space-x-2 mt-4">
        <Pill title="Beach" />
        <Pill title="Mountain" />
        <Pill title="City" />
      </div>
      <div className="space-x-2 mt-4">
        <Button title="Small Button" styles="rounded-sm text-sm bg-blue-500 text-white" />
        <Button title="Medium Button" styles="rounded-md text-base bg-green-500 text-white" />
        <Button title="Large Button" styles="rounded-full text-lg bg-red-500 text-white" />
      </div>
    </div>
  );
};

export default Landing;