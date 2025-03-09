import naicaLogo from "../assets/images/naicaLogo.png";
import { Link, Outlet } from "react-router-dom";

const mainBanner = () => {
  return (
    <>
    <div className="bg-black sticky top-0 z-30">
      <nav className="mx-auto flex items-center justify-between p-6 lg:px-8">
        <div className="flex">
          <Link to="/" className="-m-1 p-1.5">
            <img
              alt="../components/Home.tsx"
              src={naicaLogo}
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <div className="flex gap-x-12">
              <Link
                to="/wiki"
                className="text-sm/6 font-semibold"
              >
                Wiki
              </Link>
              <Link
                to="/estadisticas"
                className="text-sm/6 font-semibold"
              >
                Estadísticas
              </Link>
              <Link
                to="/acerca"
                className="text-sm/6 font-semibold"
              >
                Acerca de
              </Link>
          </div>
      </nav>
    </div>
    <Outlet/>
    </>
  );
};

export default mainBanner;
