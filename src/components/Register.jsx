import { useState } from "react";

function Register() {
  // text inputs
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  // radio
  const [gender, setGender] = useState("");

  // checkbox (array)
  const [hobbies, setHobbies] = useState([]);

  // dropdown
  const [role, setRole] = useState("");

  // options (arrays)
  const genderOptions = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Others", value: "Others" }
  ];

  const hobbyOptions = [
    { label: "Music", value: "Music" },
    { label: "Movies", value: "Movies" },
    { label: "Plastic Model", value: "Plastic Model" }
  ];

  const roleOptions = [
    { label: "General staff", value: "General staff" },
    { label: "Developer", value: "Developer" },
    { label: "System Analyst", value: "System Analyst" }
  ];

  function onHobbiesToggle(event) {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setHobbies(prev => [...prev, value]);
    } else {
      setHobbies(prev => prev.filter(item => item !== value));
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registration Form</h2>

      <div>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label>Firstname: </label>
        <input
          type="text"
          value={firstname}
          onChange={e => setFirstname(e.target.value)}
        />
      </div>

      <div>
        <label>Lastname: </label>
        <input
          type="text"
          value={lastname}
          onChange={e => setLastname(e.target.value)}
        />
      </div>

      <div>
        <label>Gender: </label>
        {genderOptions.map(g => (
          <label key={g.value} style={{ marginLeft: "10px" }}>
            <input
              type="radio"
              value={g.value}
              checked={gender === g.value}
              onChange={e => setGender(e.target.value)}
            />
            {g.label}
          </label>
        ))}
      </div>

      <div>
        <label>Hobbies: </label>
        {hobbyOptions.map(h => (
          <label key={h.value} style={{ marginLeft: "10px" }}>
            <input
              type="checkbox"
              value={h.value}
              onChange={onHobbiesToggle}
            />
            {h.label}
          </label>
        ))}
      </div>

      <div>
        <label>Apply Role: </label>
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="">-- Select Role --</option>
          {roleOptions.map(r => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      <hr />

      <h3>Input Data</h3>
      <p>Username: {username}</p>
      <p>Firstname: {firstname}</p>
      <p>Lastname: {lastname}</p>
      <p>Gender: {gender}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
      <p>Role: {role}</p>
    </div>
  );
}

export default Register;
