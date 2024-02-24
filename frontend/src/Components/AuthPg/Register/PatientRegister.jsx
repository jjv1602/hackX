import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import st from "./Register.module.css";


const PatientRegister = () => {
  const[name,setName] = useState("Joel");
  return (
    <div className={st.card}>
      <div className="flex flex-column md:flex-row">
        <div className="w-full md:w-10 flex flex-column align-items-center justify-content-center gap-5 py-5">
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem">Name</label>
            <InputText id="username" type="email" className="w-20rem" />
          </div>
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem">Email</label>
            <InputText id="email" type="email" className="w-20rem" />
          </div>
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem">Password</label>
            <InputText id="password" type="password" className="w-20rem" />
          </div>
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem">Gender</label>
            <InputText id="gender" type="string" className="w-20rem" />
          </div>
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem">Blood Group</label>
            <InputText id="bg" type="string" className="w-20rem" />
          </div>
          <Button
            label="Register"
            icon="pi pi-user"
            className="w-10rem mx-auto"
          ></Button>
        </div>
        <div className="w-full md:w-5 flex flex-row align-items-center justify-content-center gap-5 py-5">
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
            <label className="w-60rem">Register as a Docter</label>
          </div>
          <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
            <Link to="/DoctorRegister">
              <Button
                label="Doctor Registration"
                icon="pi pi-user-plus"
                severity="success"
                className="w-10rem"
              ></Button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-60rem">Back to Login</label>
          </div>
          <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
            <Link to="/Login">
              <Button
                label="LogIn"
                icon="pi pi-user-plus"
                severity="success"
                className="w-10rem"
              ></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientRegister;
