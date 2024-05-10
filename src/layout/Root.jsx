import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Root() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <aside>
          <Sidebar />
        </aside>
        <section className='main-root'>
          <Outlet />
        </section>
      </main>
    </>
  );
}
