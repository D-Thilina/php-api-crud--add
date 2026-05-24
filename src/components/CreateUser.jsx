import React from "react";

const CreateUser = () => {
  return (
    <>
      <div className={"grid"}>
        <div className={"mb-10 flex justify-center"}>
          <h3 className={"text-2xl font-semibold"}>Create User</h3>
        </div>
        <div
          className={
            "w-125 h-100 bg-white/50 backdrop-blur-md p-4 pt-10 border-gray-200 rounded-2xl flex justify-center"
          }
        >
          <form action="">
            <label htmlFor="name" className={"mr-2"}>
              Name :{" "}
            </label>
            <input
              type="text"
              name={"name"}
              placeholder={"Enter Name"}
              className={"bg-white rounded-2xl pl-4 p-1"}
            />
            <br />
            <br />

            <label htmlFor="email" className={"mr-2.5"}>
              Email :{" "}
            </label>
            <input
              type="text"
              name={"email"}
              placeholder={"Enter Email"}
              className={"bg-white rounded-2xl pl-4 p-1"}
            />
            <br />
            <br />

            <label htmlFor="mobile" className={"mr-1"}>
              Mobile :{" "}
            </label>
            <input
              type="text"
              name={"mobile"}
              placeholder={"Enter Mobile"}
              className={"bg-white rounded-2xl pl-4 p-1"}
            />
            <br />
            <br />

            <button
              className={
                "bg-gray-400 pl-6 pr-6 p-1 rounded-2xl hover:bg-gray-300 cursor-pointer"
              }
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
