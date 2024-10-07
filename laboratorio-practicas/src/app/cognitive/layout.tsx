import SideBar from "../components/SideBar";
import { ReactNode } from "react";

interface LearningLayoutProps {
  children: ReactNode;
  sidebarElements: string[];
}

const LearningLayout = ({ children, sidebarElements }: LearningLayoutProps) => {
  return (
    <div className="flex flex-row gap-4 px-6 py-5 flex-1 justify-center">
      {sidebarElements && <SideBar elements={sidebarElements} />}

      <div className="flex flex-col flex-1 max-w-[960px]">
        {children}
      </div>
    </div>
  );
};

export default LearningLayout;
