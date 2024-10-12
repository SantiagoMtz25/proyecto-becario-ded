import Link from "next/link";

interface SubjectCardProps {
  title: string;
  description: string;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ title, description }) => {
  return (
    <>
      <div className="div h-28 w-36 sm:w-52 bg-slate-100 m-auto rounded-[1em] relative group p-2 z-0 overflow-hidden flex items-center justify-center shadow-md">
        <div className="h-[7em] w-[7em] bg-[#c0c0c0] rounded-full absolute bottom-full -left-[3.5em] group-hover:scale-[550%] z-[-1] duration-[400ms]"></div>
        <div className="h-[6em] w-[6em] bg-[#cdcdcd] rounded-full absolute bottom-full -left-[3.5em] group-hover:scale-[400%] z-[-1] duration-[400ms]"></div>
        <div className="h-[5em] w-[5em] bg-[#dadada] rounded-full absolute bottom-full -left-[3.5em] group-hover:scale-[300%] z-[-1] duration-[400ms]"></div>

        <button 
          className="w-full text-[0.8em] absolute bottom-2 text-[#0d151c]"
        >
          <span className="text-center relative before:h-[0.16em] before:absolute before:w-full before:content-[''] hover:underline">
            <Link href={`/cognitive/${title}`}>
            Aprender
            </Link>
          </span>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
        {/* <div className="mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
          </svg>
        </div> */}

        <h1 className="z-20 font-bold font-Poppin text-base sm:text-[1.4em] text-center">
          {title}
        </h1>
      </div>
    </>
  );
};

export default SubjectCard;
