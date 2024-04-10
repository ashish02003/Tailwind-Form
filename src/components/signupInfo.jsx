import React from "react";

const SignupInfo = ({ formdata, setFormdata }) => {
  return (
    <div className="sign-up">
       
      <input
        type="text"
        placeholder="Email.."
        value={formdata.email}
        onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password.."
        value={formdata.password}
        onChange={(e) => setFormdata({ ...formdata,password:e.target.value })}
      />
            

            
      <input
        type="password"
        placeholder="Confirm password.."
        value={formdata.confirmpassword}
        onChange={(e) => setFormdata({ ...formdata,confirmpassword: e.target.value })}
      />


    </div>
  );
};

export default SignupInfo;

