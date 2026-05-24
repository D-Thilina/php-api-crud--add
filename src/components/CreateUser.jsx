import React, { useState } from "react";

const CreateUser = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(inputs);
  };

  return (
    <>
      <div className={"grid"}>
        <div className={"mb-10 flex justify-center"}>
          <h3 className={"text-2xl font-semibold"}>Create User</h3>
        </div>
        <div
          className={
            "w-125 h-75 bg-white/50 backdrop-blur-md p-4 pt-10 border-gray-200 rounded-2xl flex justify-center"
          }
        >
          <form onSubmit={handleSubmit}>
            <table className={"border-separate border-spacing-y-4"}>
              <tbody>
                {/*Name Field*/}
                <tr className={"p-4"}>
                  <th>
                    {" "}
                    <label htmlFor="name" className={"mr-2"}>
                      Name :
                    </label>
                  </th>
                  <td>
                    <input
                      type="text"
                      name={"name"}
                      placeholder={"Enter Name"}
                      className={"bg-white rounded-2xl pl-4 p-1"}
                      onChange={handleChange}
                    />
                  </td>
                </tr>

                {/*Email Field*/}
                <tr>
                  <th>
                    {" "}
                    <label htmlFor="Email" className={"mr-2"}>
                      Email :
                    </label>
                  </th>
                  <td>
                    <input
                      type="text"
                      name={"email"}
                      placeholder={"Enter Email"}
                      className={"bg-white rounded-2xl pl-4 p-1"}
                      onChange={handleChange}
                    />
                  </td>
                </tr>

                {/*Mobile field*/}
                <tr>
                  <th>
                    {" "}
                    <label htmlFor="mobile" className={"mr-2"}>
                      Mobile :
                    </label>
                  </th>
                  <td>
                    <input
                      type="text"
                      name={"mobile"}
                      placeholder={"Enter Mobile No "}
                      className={"bg-white rounded-2xl pl-4 p-1"}
                      onChange={handleChange}
                    />
                  </td>
                </tr>

                {/*Save Button*/}
                <tr>
                  <td colSpan={"2"} align={"right"}>
                    <button
                      className={
                        "bg-gray-400 pl-6 pr-6 p-1 rounded-2xl hover:bg-gray-300 cursor-pointer"
                      }
                    >
                      Save
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
