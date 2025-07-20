interface PillProps {
  title: string;
}

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm mr-2">
      {title}
    </span>
  );
};

export default Pill;