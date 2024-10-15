"use client";

import { useState } from "react";
import MainSubjects from "../components/MainSubjects";
import SubjectCard from "../components/SubjectCard";
import SideBar from "../components/SideBar";
import mathematics from "./mathematics.json";

const MathematicsPage = () => {
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(0); 

  const selectedTopic = mathematics.topics[selectedTopicIndex];
  const cognitiveSubjects = mathematics.topics.map((topic) => topic.title);

  return (
    <div className="flex flex-col w-full lg:max-w-[1120px] self-center px-2">
      <div className="flex flex-row gap-4 w-full">
        <SideBar
          elements={cognitiveSubjects}
          onSelect={(index: number) => setSelectedTopicIndex(index)}
        />

        <MainSubjects
          title={mathematics.title}
          description={mathematics.description}
          points={mathematics.points}
        >
          {selectedTopic.points.map((point, pointIndex) => (
            <SubjectCard
              key={pointIndex}
              title={point.title}
              description={point.description}
              colorToRender={mathematics.color}
            />
          ))}
        </MainSubjects>
      </div>
    </div>
  );
};

export default MathematicsPage;
