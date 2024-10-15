import MainSubjects from "../components/MainSubjects";
import SubjectCard from "../components/SubjectCard";
import verbal from "./verbal.json";
import subjects from "./verbalSubjects.json";

const VerbalPage = () => {
  return (
    <div className="flex flex-row gap-4 w-full lg:max-w-[1120px] self-center px-2">
      <MainSubjects
        title={verbal.title}
        description={verbal.description}
        points={verbal.points}
      >
        {subjects.map((subject, index) => (
          <SubjectCard
            key={index}
            title={subject.title}
            description={subject.description}
            colorToRender={verbal.color}
          />
        ))}
      </MainSubjects>
    </div>
  );
}

export default VerbalPage;