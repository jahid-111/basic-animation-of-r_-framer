// import './App.css'

import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <h1 className="bg-green-600 text-center text-red-400 text-4xl mx-auto p-2">
          Learning React Animation Framework
        </h1>

        <div className=" bg-slate-400 h-[680px] flex justify-between w-8/12 mx-auto">
          <nav>
            <ul className=" text-2xl text-white">
              <li>
                <Link to="/simple">Simple Animation</Link>
              </li>
              <li>
                <Link to="/textMotion">Text Motion</Link>
              </li>
              <li>
                <Link to="/keyframe">Keyframe Animation</Link>
              </li>
              <li>
                <Link to="/button">Button Tap Animation</Link>
              </li>
            </ul>
          </nav>

          <section className=" h-screen flex justify-center items-center ">
            <Outlet></Outlet>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
