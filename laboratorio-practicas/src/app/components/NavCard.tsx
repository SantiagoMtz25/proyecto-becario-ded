import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface NavCardProps {
  num: number;
  title: string;
  description: string;
  path: string;
  icon: IconProp;
}

const NavCard: React.FC<NavCardProps> = ({
  num,
  title,
  description,
  path,
  icon,
}) => {
  return (
    <>
      <div className="
      hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl
      w-[90%] md:w-80 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.2)] p-9 space-y-3 relative overflow-hidden flex flex-col justify-between content-start
      ">
        <div className={`w-24 h-24 rounded-full absolute -right-5 -top-7 ${num === 1 ? 'bg-kinda_orange' : num === 2 ? 'bg-kinda_yellow' : 'bg-light_green'}`}>
          <p className="absolute bottom-6 left-7 text-white text-2xl">{num}</p>
        </div>
        <div className="">
          <div className="fill-violet-500 w-12">
            <FontAwesomeIcon icon={icon} className={`w-12 h-12 ${num === 1 ? 'text-kinda_orange' : num === 2 ? 'text-kinda_yellow' : 'text-light_green'}`}/>
          </div>
          <h1 className="font-bold text-xl pt-3">{title}</h1>
        </div>
        <p className="h-full text-base text-zinc-600 leading-6 flex flex-col justify-start">{description}</p>

        <a
          href={path}
          className="text-white text-sm font-bold rounded-2xl bg-slate-500 px-3 py-2 w-24 text-center"
        >
          <button>Aprender</button>
        </a>
      </div>
    </>
  );
};

export default NavCard;
