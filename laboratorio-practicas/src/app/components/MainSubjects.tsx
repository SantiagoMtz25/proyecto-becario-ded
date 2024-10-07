
interface MainSubjectsProps {
  children: React.ReactNode;
  title: string;
}

const MainSubjects: React.FC<MainSubjectsProps> = ({children, title}) => {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#0d151c] tracking-light text-[32px] font-bold leading-tight min-w-72">
          {title}
        </p>
      </div>
      {children}
    </div>
  );
};

export default MainSubjects;
