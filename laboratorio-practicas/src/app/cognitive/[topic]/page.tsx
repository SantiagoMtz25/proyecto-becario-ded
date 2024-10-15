"use client";

import { usePathname } from "next/navigation";
import analogia from "./analogia.json";
import diagramas1 from "./diagramas1.json";
import diagramas2 from "./diagramas2.json";
import metaforasyanalogias from "./metaforasyanalogias.json";
import razonamientocondicional from "./razonamientocondicional.json";
import razonamientopractico from "./razonamientopractico.json";
import secuenciasymatrices from "./secuenciasymatrices.json";
import significadodemetáforas from "./significadometaforas.json";
import transformacioneslógicas from "./transformacioneslogicas.json";

interface TopicProps {
  topic: string;
  topicDescription: string;
  exampleQuestion: string;
  example: string;
  exampleOptions: string[];
}

const topicsMap: { [key: string]: TopicProps } = {
  analogia: analogia,
  "Diagramas 1": diagramas1,
  "Diagramas 2": diagramas2,
  "Metáforas y Analogías": metaforasyanalogias,
  "Razonamiento Condicional": razonamientocondicional,
  "Razonamiento Práctico": razonamientopractico,
  "Secuancias y Matrices": secuenciasymatrices,
  "Significado de Metáforas": significadodemetáforas,
  "Transformaciones Lógicas": transformacioneslógicas,
};

const Page: React.FC = () => {
  const pathname = usePathname();
  const lastText = pathname.substring(pathname.lastIndexOf("/") + 1);

  console.log(lastText);

  const topicData = topicsMap[lastText];

  if (!topicData) {
    return <p>Tema no encontrado. Puede encontrarse en desarrollo</p>;
  }

  const { topic, topicDescription, example, exampleQuestion, exampleOptions } =
    topicData;

  return (
    <div className="w-full h-full px-2">
      <h1 className="text-xls">{topic}</h1>
      <p className="text-lg">{topicDescription}</p>
      <p className="text-lg">{example}</p>
      <p className="text-lg">{exampleQuestion}</p>
      <div className="w-full flex flex-row gap-4 justify-center">
        {exampleOptions.map((option, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-lg">
            <p>{option}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-row justify-center">
        <button className="">Ver Respuesta</button>
        <button className="">Tomar Quiz</button>
      </div>
      <p>Nota: Podrás retomar el quiz cuantes veces lo desees</p>
    </div>
  );
};

export default Page;
