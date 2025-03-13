import { useState } from "react";
import naicaLogo from "../assets/images/naicaLogo.png";
import { Link, Outlet, useLocation } from "react-router-dom";

const mainBanner = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div
        className="bg-[#0b0907] sticky top-0 z-30"
        style={{ margin: "-2rem" }}
      >
        <nav className="mx-auto flex items-center justify-between py-1.5 px-10 lg:px-8">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1 p-1.5">
              <span className="sr-only">Naica</span>
              <img alt="Logo" src={naicaLogo} className="h-14 w-auto" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            >
              <span className="sr-only">Abrir menú</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffebed"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 text-[#ffebed]">
            <Link
              to="/wiki"
              className="text-sm/6 font-semibold"
              style={{
                ...(location.pathname == "/wiki" && { color: "#bbfbff" }),
              }}
            >
              Wiki
            </Link>
            <Link
              to="/estadisticas"
              className="text-sm/6 font-semibold"
              style={{
                ...(location.pathname == "/estadisticas" && {
                  color: "#bbfbff",
                }),
              }}
            >
              Estadísticas
            </Link>
            <Link
              to="/acerca"
              className="text-sm/6 font-semibold"
              style={{
                ...(location.pathname == "/acerca" && { color: "#bbfbff" }),
              }}
            >
              Acerca de
            </Link>
          </div>
        </nav>
        <dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="lg:hidden"
        >
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#0b0907] px-10 py-6 text-[#ffebed]">
            <div className="flex justify-end">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Cerrar menú</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffebed"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6">
              <div className="py-6 grid gap-6">
                <Link
                  to="/wiki"
                  className="text-sm/6 font-semibold"
                  style={{
                    ...(location.pathname == "/wiki" && {
                      color: "#bbfbff",
                    }),
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Wiki
                </Link>
                <Link
                  to="/estadisticas"
                  className="text-sm/6 font-semibold"
                  style={{
                    ...(location.pathname == "/estadisticas" && {
                      color: "#bbfbff",
                    }),
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Estadísticas
                </Link>
                <Link
                  to="/acerca"
                  className="text-sm/6 font-semibold"
                  style={{
                    ...(location.pathname == "/acerca" && {
                      color: "#bbfbff",
                    }),
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Acerca de
                </Link>
              </div>
            </div>
          </div>
        </dialog>
      </div>
        <Outlet />
    </>
  );
};

export default mainBanner;
