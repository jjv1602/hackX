import React from "react";
import { Link } from "react-router-dom";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import st from "./Login.module.css";
const Login = () => {
  return (
    <div className={st.card}>
      <div className="flex flex-column md:flex-row">
        <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-5 py-5">
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem">Email</label>
            <InputText id="userEmail" type="email" className="w-20rem" />
          </div>
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem">Password</label>
            <InputText id="password" type="password" className="w-20rem" />
          </div>
          <Button
            label="Login"
            icon="pi pi-user"
            style={{ backgroundColor: "#34b2b5" }}
            className="w-10rem mx-auto "
          ></Button>
        </div>
        <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-5 py-5">
          <Divider layout="vertical" className="hidden md:flex">
            <b>OR</b>
          </Divider>
          <Divider
            layout="horizontal"
            className="flex md:hidden"
            align="center"
          >
            <b>OR</b>
          </Divider>
        </div>
        <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-5 py-5">
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-60rem">
              If you are new User?? Register for the App
            </label>
          </div>
          <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
            <Button
              label="Sign Up"
              icon="pi pi-user-plus"
              severity="success"
              className="w-10rem bg-blue-900"
            ></Button>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
