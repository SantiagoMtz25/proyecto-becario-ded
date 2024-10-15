import NavBar from "../components/NavBar";
import FooterComponent from "../components/Footer";
import GoBackBtn from "../components/GoBackBtn";

const page = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="w-full lg:max-w-[1120px] self-center">
        <NavBar />
      </div>
      <div className="lg:px-3 flex flex-1 justify-center mb-6">
        <div className="layout-content-container lg:w-[90%] max-w-[1120px] flex flex-col flex-1">
          <div className="mt-4 w-60 shadow-xl rounded-2xl">
            <GoBackBtn />
          </div>
          <div className="flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">
                  Credits
                </p>
              </div>
              <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Autor del contenido
              </h3>
              <div className="flex items-center gap-4 bg-white px-4 min-h-14">
                <p className="text-[#111418] text-base font-normal leading-normal flex-1 truncate">
                  Tecnológico de Monterrey
                </p>
              </div>
              <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Equipo de diseño y producción
              </h3>
              <div className="flex items-center gap-4 bg-white px-4 min-h-14">
                <p className="text-[#111418] text-base font-normal leading-normal flex-1 truncate">
                  Producción del Instituto Tecnológico y de Estudios Superiores
                  de Monterrey
                </p>
              </div>
              <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Decana Asociada de Educación Continua e Internacionalización
                Escuela de Humanidades y Educación Tecnológico de Monterrey
              </h3>
              <div className="flex items-center gap-4 bg-white px-4 min-h-14">
                <p className="text-[#111418] text-base font-normal leading-normal flex-1 truncate">
                  Ana Cecilia Torres González
                </p>
              </div>
              <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Coordinadora del Centro Virtual de Aprendizaje y Proceso de
                Enseñanza
              </h3>
              <div className="flex items-center gap-4 bg-white px-4 min-h-14">
                <p className="text-[#111418] text-base font-normal leading-normal flex-1 truncate">
                  Dora Elizabeth García Olivier
                </p>
              </div>
              <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Artista digital
              </h3>
              <div className="flex items-center gap-4 bg-white px-4 min-h-14">
                <p className="text-[#111418] text-base font-normal leading-normal flex-1 truncate">
                  Santiago Martínez Vallejo
                </p>
              </div>
              <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Banco de imágenes y recursos
              </h3>
              <div className="flex items-center gap-4 bg-white px-4 min-h-14">
                <p className="text-[#111418] text-base font-normal leading-normal flex-1 truncate">
                  Image 1
                </p>
              </div>
              <div className="flex items-center gap-4 bg-white px-4 min-h-14">
                <p className="text-[#111418] text-base font-normal leading-normal flex-1 truncate">
                  Image 2
                </p>
              </div>
              <div className="flex items-center gap-4 bg-white px-4 min-h-14">
                <p className="text-[#111418] text-base font-normal leading-normal flex-1 truncate">
                  Image 3
                </p>
              </div>
              <div className="flex items-center gap-4 bg-white px-4 min-h-14">
                <p className="text-[#111418] text-base font-normal leading-normal flex-1 truncate">
                  Image 4
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};

export default page;
