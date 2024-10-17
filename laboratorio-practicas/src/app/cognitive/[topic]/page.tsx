"use client";

import Swal from "sweetalert2";
import { usePathname } from "next/navigation";
import analogia from "./analogia.json";
import diagramas1 from "./diagramas1.json";
import diagramas2 from "./diagramas2.json";
import metaforasyanalogias from "./metaforasyanalogias.json";
import razonamientocondicional from "./razonamientocondicional.json";
import razonamientopractico from "./razonamientopractico.json";
import secuenciasymatrices from "./secuenciasymatrices.json";
import significadodemetaforas from "./significadometaforas.json";
import transformacioneslogicas from "./transformacioneslogicas.json";

interface TopicProps {
  topic: string;
  topicDescription: string;
  example: string;
  exampleQuestion2?: string;
  exampleQuestion: string;
  exampleOptions: string[];
  answer: number;
  image?: string;
}

const topicsMap: { [key: string]: TopicProps } = {
  analogia: analogia,
  'diagramas-1': diagramas1,
  "diagramas-2": diagramas2,
  "Metáforas y Analogías": metaforasyanalogias,
  "Razonamiento Condicional": razonamientocondicional,
  "Razonamiento Práctico": razonamientopractico,
  "Secuancias y Matrices": secuenciasymatrices,
  "Significado de Metáforas": significadodemetaforas,
  "Transformaciones Lógicas": transformacioneslogicas,
};

const Page: React.FC = () => {
  const pathname = usePathname();
  const lastText = pathname.substring(pathname.lastIndexOf("/") + 1);

  console.log(lastText);

  const topicData = topicsMap[lastText];

  if (!topicData) {
    return <p>Tema no encontrado. Puede encontrarse en desarrollo</p>;
  }

  const { topic, topicDescription, example, exampleQuestion2, exampleQuestion, exampleOptions, answer, image } =
    topicData;

  const backgroundColor = pathname.includes("cognitive")
    ? "bg-[#bde2b9]" 
    : pathname.includes("verbal")
    ? "bg-[#ff7e82]"
    : pathname.includes("math")
    ? "bg-[#afdceb]"
    : "bg-gray-500";

  const backgroundColor2 = pathname.includes("cognitive")
    ? "bg-[#addbad]" 
    : pathname.includes("verbal")
    ? "bg-[#ff585d]"
    : pathname.includes("math")
    ? "bg-[#afdceb]"
    : "bg-[#c0c0c0]";

  const renderExampleQuestion2 = (question: string) => {
    if (!question) {
      return null;
    }

    return <p className="mt-4">{question}</p>;
  };

  const renderImage = (image: string) => {
    if (!image) {
      return null;
    }

    return (
      <img
        src={image}
        alt="example"
        className="w-full h-full object-cover mt-4 rounded-2xl"
      />
    );
  };

  const handleSeeAnswer = (exampleQuestion: string, exampleOptions: string[], answer: number) => {
    Swal.fire({
      title: exampleQuestion,
      text: `La respuesta correcta es: ${exampleOptions[answer]}`,
      icon: "success",
      confirmButtonText: "Cerrar",
      timer: 5000,
    });
  }

  return (
    <div className="w-full h-full px-2 text-justify flex flex-col">
      <div className="w-full lg:w-[80%] justify-self-center self-center">
        <h1 className="text-xl font-bold">{topic}</h1>
        <p className="mt-4">{topicDescription}</p>
        <p className="mt-4">{example}</p>
        {renderExampleQuestion2(exampleQuestion2 || "")}
        <p className="text-base mt-4">{exampleQuestion}</p>
        <div className="w-full flex flex-row gap-4 justify-center">
          {exampleOptions.map((option, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-2xl mt-4 transition-all hover:scale-105">
              <p>{option}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-row justify-center gap-6">
          <button
            className={`cursor-pointer transition-all ${backgroundColor} text-black px-6 py-2 rounded-2xl
${backgroundColor2}
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]`}
            onClick={() => handleSeeAnswer(exampleQuestion, exampleOptions, answer)}
          >
            Ver Respuesta
          </button>
          <button
            className={`min-h-14 cursor-pointer transition-all ${backgroundColor} text-black px-6 py-2 rounded-2xl
${backgroundColor2}
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]`}
          >
            Tomar Quiz
          </button>
        </div>
        <p className="mt-4 text-slate-600">
          Nota: Podrás retomar el quiz cuantes veces lo desees
        </p>
      </div>
    </div>
  );
};

export default Page;
