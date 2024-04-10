
import React from "react";

const OtherInfo = ({ formdata, setFormdata }) => {
  return (
    <div className="other-info">
      <input
        type="text"
        placeholder="Nationality.."
        value={formdata.Nationality}
        onChange={(e) => {
          setFormdata({ ...formdata, Nationality: e.target.value });
        }}
      />


<input
        type="text"
        placeholder="Country.."
        value={formdata.Country}
        onChange={(e) => {
          setFormdata({ ...formdata, Country: e.target.value });
        }}
      />

      <input
        type="text"
        placeholder="Other.."
        value={formdata.other}
        onChange={(e) => setFormdata({ ...formdata, other: e.target.value })}
      />
    </div>
  );
};

export default OtherInfo;
