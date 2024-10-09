
interface MainSubjectsProps {
  children: React.ReactNode;
  title: string;
  description: string;
  points: string[];
}

const MainSubjects: React.FC<MainSubjectsProps> = ({children, title, description, points}) => {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#0d151c] tracking-light text-[32px] font-bold leading-tight min-w-72">
          {title}
        </p>
        <p className="text-[#0d151c] text-base font-normal leading-normal">
          {description}
          {points.map((point, index) => (
            <span key={index} className="block">{point}</span>
          ))}
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-5 lg:grid-cols-3 lg:grid-rows-3 gap-4">
        {children}
      </div>
    </div>
  );
};

export default MainSubjects;
