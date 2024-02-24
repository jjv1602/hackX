import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import st from "./Register.module.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Password } from 'primereact/password';
        
import { InputNumber } from 'primereact/inputnumber';

const PatientRegister = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("asdad");
  const [gender, setGender] = useState("");
  const [bg, setBg] = useState("");
  const [age, setAge] = useState();
  const submitHandler = async (par) => {
    par.preventDefault()
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

  
      

      const { data } = await axios.post(
        "/api/users/patient-reg",
        { name, email, pwd, gender, "bloodGroup": bg, age},
        
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      console.log(data);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={st.card}>

      <div className="flex flex-column md:flex-row ">

        <div className="w-full md:w-10 flex flex-column align-items-center justify-content-center gap-5 py-5 ">
          Register as a Patient
          <div className="flex flex-wrap justify-content-center align-items-center gap-1">
            <label className="w-6rem">Name</label>
            <InputText id="username" type="text" className="w-20rem" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem">Email</label>
            <InputText id="email" type="email" className="w-20rem" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem">Enter Age</label>
            <InputText id="password" type="text" className="w-20rem" onChange={(e)=>setAge(e.target.value)}/>
            
          </div>
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem">Password</label>
            <InputText id="password" type="password" className="w-20rem" value={pwd} onChange={(e)=>setPwd(e.target.value)}/>
          </div>
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem">Gender</label>
            <InputText id="gender" type="string" className="w-20rem" value={gender}  onChange={(e)=>setGender(e.target.value)}/>
          </div>
          
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem">Blood Group</label>
            <InputText id="bg" type="string" className="w-20rem"  value={bg} onChange={(e)=>setBg(e.target.value)}/>
          </div>
          <Button
            label="Register"
            icon="pi pi-user"
            style={{ backgroundColor: "#34b2b5" }}
            className="w-10rem mx-auto"
            onClick={submitHandler}
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
                className="w-14rem h-4rem bg-blue-900"
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
                className="w-14rem h-4rem bg-blue-900"
              ></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientRegister;
