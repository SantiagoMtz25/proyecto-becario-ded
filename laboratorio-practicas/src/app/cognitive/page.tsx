import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import MainSubjects from "../components/MainSubjects";
import SubjectCard from "../components/SubjectCard";
import cognitive from './cognitive.json';
import Footer from "../components/Footer";

const CognitivePage = () => {
  const subjects = [
    {"title": "Analogía", "description": "Analogía es la relación de semejanza o correspondencia entre dos o más cosas.",},
    {"title": "Diagramas 1", "description": "Los diagramas son representaciones gráficas de un conjunto de datos, generalmente presentados en forma de tablas, gráficos, mapas, entre otros.",},
    {"title": "Diagramas 2", "description": "Los diagramas son representaciones gráficas de un conjunto de datos, generalmente presentados en forma de tablas, gráficos, mapas, entre otros.",},
    {"title": "Metáforas y Analogías", "description": "Las metáforas y analogías son figuras retóricas que se utilizan para comparar dos cosas diferentes, pero que tienen algo en común.",},
    {"title": "Razonamiento Condicional", "description": "El razonamiento condicional es un tipo de razonamiento lógico que se basa en la relación de condicionalidad entre dos proposiciones.",},
    {"title": "Razonamiento Práctico", "description": "El razonamiento práctico es un tipo de razonamiento que se basa en la experiencia y en la aplicación de conocimientos prácticos.",},
    {"title": "Secuencias y Matrices", "description": "Las secuencias y matrices son conjuntos de elementos ordenados de forma secuencial o matricial.",},
    {"title": "Significado de Metáforas", "description": "El significado de las metáforas es la interpretación o comprensión de las comparaciones implícitas en las metáforas.",},
    {"title": "Transformaciones Lógicas", "description": "Las transformaciones lógicas son cambios o modificaciones que se realizan en un conjunto de datos o en una estructura lógica.",},
  ];

  const cognitiveSubjects = [
    "Analogía",
    "Diagramas 1",
    "Diagramas 2",
    "Metáforas y Analogías",
    "Razonamiento Condicional",
    "Razonamiento Práctico",
    "Secuencias y Matrices",
    "Significado de Metáforas",
    "Transformaciones Lógicas",
  ];

  return (
    <div className="flex flex-col justify-center">
      <div className="w-full lg:max-w-[1120px] self-center">
        <NavBar />
      </div>
      <div className="flex flex-row gap-4 w-full lg:max-w-[1120px] self-center mb-2">
        <SideBar elements={cognitiveSubjects} />
        <MainSubjects title={cognitive.title} description={cognitive.description} points={cognitive.points}>
          {subjects.map((subject, index) => (
            <SubjectCard key={index} title={subject.title} description={subject.description} />
          ))}
        </MainSubjects>
      </div>
      <Footer />
    </div>
  );
};

export default CognitivePage;
