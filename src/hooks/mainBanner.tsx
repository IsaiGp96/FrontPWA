import naicaLogo from "../assets/images/naicaLogo.png";

const mainBanner = () => {
  return (
    <div className="bg-black sticky top-0 z-30">
      <nav className="mx-auto flex items-center justify-between p-6 lg:px-8">
        <div className="flex">
          <a href="#" className="-m-1 p-1.5">
            <img
              alt="../components/Home.tsx"
              src={naicaLogo}
              className="h-12 w-auto"
            />
          </a>
        </div>
        <div className="flex gap-x-12">
              <a
                href="#"
                className="text-sm/6 font-semibold"
              >
                Wiki
              </a>
              <a
                href="#"
                className="text-sm/6 font-semibold"
              >
                Estadísticas
              </a>
              <a
                href="#"
                className="text-sm/6 font-semibold"
              >
                Acerca de
              </a>
          </div>
      </nav>
    </div>
  );
};

export default mainBanner;
