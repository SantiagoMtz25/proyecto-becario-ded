const FooterComponent: React.FC = () => {
  return (
    <>
      <footer className="w-[100%] lg:max-w-[1120px] flex flex-col lg:flex-row justify-between content-center px-4 py-3 gap-4 self-center text-base text-zinc-600">
        <div className="flex flex-col sm:self-center lg:self-start">
          <p>Se prohíbe la reproducción total o parcial sin previo y expreso
            consentimiento por escrito.</p>
          <p>D.R.© Instituto Tecnológico y de Estudios Superiores de Monterrey, México, 2024.</p>
        </div>
        <div className="flex flex-row gap-4 sm:self-center lg:self-center">
          <a target="_blank" href="https://tec.mx/es/politicas-de-privacidad-del-tecnologico-de-monterrey">Políticas de Privacidad</a>
          <span className="border-r-2 border-gray-400"></span>
          <a target="_blank" href="https://tec.mx/es/aviso-privacidad-centro-virtual-aprendizaje">Aviso de Privacidad</a>
          <span className="border-r-2 border-gray-400"></span>
          <a target="_blank" href="">Créditos</a>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
