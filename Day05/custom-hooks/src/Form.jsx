import { useState } from "react";

function Form() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
  }

  const SubmitForm = () => {
    console.log(email, password);
  }

  const ResetForm = () => {
    setEmail("");
    setPassword("");
  }

  return (<> 
    <h1> hi this is custom hooks </h1>

    <form action="submit" onSubmit={HandleSubmit}>
      <input type="text" placeholder="EMAIL" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
      <input type="password" placeholder="PASSWORD" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>

      <button type="submit" onClick={SubmitForm}>Submit</button>
    </form>
    <br />
    <button onClick={ResetForm}>ResetForm</button>

  </>);
}

export default Form;