import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { FileUpload } from 'primereact/fileupload';
import st from "./Register.module.css";
import { InputMask } from 'primereact/inputmask';


const DocterRegistern = () => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phNo, setPhNo] = useState("");
  const [img, setimg] = useState();
  const navigate = useNavigate();
  return (
    <div className={st.card}>
      <div className="flex flex-column md:flex-row">
        <div className="w-full md:w-10 flex flex-column align-items-center justify-content-center gap-5 py-5">
        Register as a Doctor
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
            <label className="w-6rem">User Image</label>
            <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
          </div>
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem">Speciality</label>
            <InputText id="speciality" type="string" className="w-20rem" />
          </div>
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem">Introduction</label>
            <InputText id="password" type="string" className="w-20rem" />
          </div>
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem">Year of Experirnce</label>
            <InputText id="yoe" type="string" className="w-20rem" />
          </div>
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem">Contact Number</label>
            <InputMask value="ah" onChange={(e) => setValue(e.target.value)} mask="99-9999999999" placeholder="+" />
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
            <label className="w-60rem">Register as a Patient</label>
          </div>
          <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
            <Link to="/PatientRegister">
              <Button
                label="Patient Registration"
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

export default DocterRegistern;
