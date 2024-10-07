import FooterComponent from "../components/Footer";
import MainSubjects from "../components/MainSubjects";
import NavBar from "../components/NavBar";
import SubjectCard from "../components/SubjectCard";
import LearningLayout from "./layout";

const CognitivePage = () => {

  const subjects = [
    { title: "Math", description: "Learn algebra and calculus" },
    { title: "Science", description: "Physics and chemistry" },
  ];

  const cognitiveSubjects = ["Analogía", "Diagramas 1", "Diagramas 2", "Metáforas y Analogías", "Razonamiento Condicional", 
    "Razonamiento Práctico", "Secuencias y Matrices", "Significado de Metáforas", "Transformaciones Lógicas"]; 

  return (
    <>
      <NavBar title="Unidad 1: Cognitiva" />
      <LearningLayout sidebarElements={cognitiveSubjects}>
        <MainSubjects title="Main Subjects">
          {subjects.map((subject, index) => (
            <SubjectCard
              key={index}
              title={subject.title}
              description={subject.description}
            />
          ))}
        </MainSubjects>
      </LearningLayout>
      <FooterComponent />
    </>
  );
};

export default CognitivePage;
