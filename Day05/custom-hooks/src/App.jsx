
import useForm from "./hooks/useForm.js";

function App() {
  const initValues = { email: "", password: "" };

  const { payload, HandleSubmit, ResetForm, HandleChange } =
    useForm(initValues);

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <input
          type="email"
          name="email"
          value={payload.email}
          onChange={HandleChange}
        />

        <input
          type="password"
          name="password"
          value={payload.password}
          onChange={HandleChange}
        />

        <button type="submit">Submit</button>
      </form>

      <button onClick={ResetForm}>Reset</button>

      <h5>Email: {payload.email}</h5>
      <h5>Password: {payload.password}</h5>
    </>
  );
}

export default App;
