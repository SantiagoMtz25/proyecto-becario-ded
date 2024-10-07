
interface SubjectCardProps {
  title: string;
  description: string;
}

const SubjectCard: React.FC<SubjectCardProps> = ({title, description}) => {
  return (
    <>
      <div className="flex flex-col gap-3 pb-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
          style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/c9f11fd4-ab34-4a48-baf4-37b9923d16b8.png")' }}
        ></div>
        <div>
          <p className="text-[#0d151c] text-base font-medium leading-normal">
            {title}
          </p>
          <p className="text-[#49779c] text-sm font-normal leading-normal">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default SubjectCard;
