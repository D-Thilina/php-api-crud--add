import {BrowserRouter , Routes , Route , Link} from 'react-router';
import ListUser from "./components/ListUser.jsx";
import CreateUser from "./components/CreateUser.jsx";
import EditUser from "./components/EditUser.jsx";

function App() {

  return (
    <>
      <div
        className={
          " h-screen text-black bg-linear-to-r from-black via-red-400 to-black"
        }
      >
        <h5 className={"text-xl font-semibold text-center"}>
          React CRUD Operations using PHP api and MySQL
        </h5>

        <BrowserRouter>
          <nav className={"flex justify-center mt-5"}>
            <ul className={"flex justify-around w-96"}>
              <li className={"p-2 rounded-3xl bg-white/50 w-24.25 text-center"}>
                <Link to={"/"}>List User</Link>
              </li>

              <li className={"p-2 rounded-3xl bg-white/50"}>
                <Link to={"user/create"}>Create User</Link>
              </li>
            </ul>
          </nav>

          <div className={"flex justify-center mt-12.5"}>
            <Routes>
              <Route index element={<ListUser />}></Route>
              <Route path={"user/create"} element={<CreateUser />}></Route>
              <Route path={"user/:id/edit"} element={<EditUser />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
