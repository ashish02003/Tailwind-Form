import React, { useState } from "react";
import "./Page.css";
import { TiTick } from "react-icons/ti";
import Personal from "./Personal";
import SignupInfo from "./signupInfo";
import OtherInfo from "./OtherInfo";

const Page = () => {
  const steps = ["SignUp Info", "Personal Info", "Other Info"];

  const [currentStep, setCurrentStep] = useState(1);

  const [complete, setComplete] = useState(false);

  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    FirstName: "",
    LastName: "",
    UserName: "",
    Nationality: "",
    Country:"",
    other: "",
  });

  const showpage = () => {
    if (currentStep == 1) {
      return <SignupInfo formdata={formdata} setFormdata={setFormdata} />;
    } else if (currentStep == 2) {
      return <Personal formdata={formdata} setFormdata={setFormdata} />;
    } else {
      return <OtherInfo formdata={formdata} setFormdata={setFormdata} />;
    }
  };

  return (
    <>

      <div className="flex justify-around">
        {steps.map((step, i) => {
          return (
            <div
              className={`step-Item ${currentStep === i + 1 && "active"} ${
                (i + 1 < currentStep || complete) && "complete"
              }`}
              key={i}
            >
              <div className="step">
                {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
              </div>
              <p className="text-gray-500">{step}</p>
            </div>
          );
        })}
      </div>

      <div>{showpage()}</div>

      <div className="flex gap-4 justify-center items-center">

        <button className="btn" onClick={()=>{currentStep==1?"":setCurrentStep((curpage)=>curpage-1);}}>Prev</button>

        
          <button
            className="btn"
            onClick={() => {
              currentStep === steps.length+1
                ? ""
                : setCurrentStep((curPage) => curPage + 1);
            }}
          >
            {currentStep === steps.length+1 ? "Submit" : "Next"} 
          </button>

        
      </div>
    
    </>
  );
};

export default Page;
