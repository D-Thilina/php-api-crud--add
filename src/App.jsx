import {BrowserRouter , Routes , Route , Link} from 'react-router';

function App() {

  return (
    <>
      <div
        className={
          " h-screen text-black bg-linear-to-r from-pink-400 via-blue-200 to-red-300"
        }
      >
        <h5 className={"text-xl font-semibold text-center"}>
          React CRUD Operations using PHP api and MySQL
        </h5>

        <BrowserRouter>
          <nav className={"flex justify-center mt-5"}>
            <ul className={"flex justify-around w-96"}>
              <li className={"p-2 rounded-3xl bg-blue-400  w-24.25 text-center"}>
                <Link to={"/"}>List User</Link>
              </li>

              <li className={"p-2 rounded-3xl bg-blue-400"}>
                <Link to={"user/create"}>Create User</Link>
              </li>
            </ul>
          </nav>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
