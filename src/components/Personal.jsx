import React from "react";

const Personal = ({ formdata, setFormdata }) => {
  return (
    <div className="personal-Info">
      <input
        type="text"
        placeholder="FirstName.."
        value={formdata.FirstName}
        onChange={(e) =>
          setFormdata({ ...formdata, FirstName: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="LastName.."
        value={formdata.LastName}
        onChange={(e) => setFormdata({ ...formdata, LastName: e.target.value })}
      />

      <input
        type="text"
        placeholder="UserName.."
        value={formdata.UserName}
        onChange={(e) => setFormdata({ ...formdata, UserName: e.target.value })}
      />
    </div>
  );
};

export default Personal;
