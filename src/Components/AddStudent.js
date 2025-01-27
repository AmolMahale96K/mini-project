import { React, useEffect, useState } from "react";
import axios from "axios";

function AddStudent() {
  const [students, setStudents] = useState([]);

  const [name,setName] = useState("");
  const [age,setAge] = useState("");
  const [email,setEmail] = useState("");
  const [passward,setPassward] = useState("");

  const [cnt,setCnt] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:9090/getStudents")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cnt]); // Add dependency array to prevent repeated API calls

  function deleteStudent(key) {
    axios
      .delete(`http://localhost:9090/deleteStudent/${key}`)
      .then((response) => {
        setStudents((prevStudents) =>
          prevStudents.filter((student) => student.id !== key)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function AddStudent() {
    axios
      .post(`http://localhost:9090/addStudent`,{
        name : name,
        age : age,
        email : email,
        passward : passward
      })
      .then((response) => {
        setName("");
        setAge("");
        setEmail("");
        setPassward("");
        setCnt(cnt+1);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <table border="1" cellpadding='20'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
              <td>{student.passward}</td>
              <td>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br/>
      <div>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
          <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Age"/>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
          <input type="text" value={passward} onChange={(e)=>setPassward(e.target.value)} placeholder="Passward"/>
          <button onClick={(()=>AddStudent())}>Add Student</button>
      </div>
    </div>
  );
}

export default AddStudent;
