import NavBar from "../components/NavBar";
import MainSubjects from "../components/MainSubjects";
import SubjectCard from "../components/SubjectCard";
import cognitive from "./cognitive.json";
import subjects from "./cognitiveSubjects.json";

const CognitivePage = () => {
  return (
    <div className="flex flex-row gap-4 w-full lg:max-w-[1120px] self-center px-2">
      <MainSubjects
        title={cognitive.title}
        description={cognitive.description}
        points={cognitive.points}
      >
        {subjects.map((subject, index) => (
          <SubjectCard
            key={index}
            title={subject.title}
            description={subject.description}
            colorToRender={cognitive.color}
          />
        ))}
      </MainSubjects>
    </div>
  );
};

export default CognitivePage;
