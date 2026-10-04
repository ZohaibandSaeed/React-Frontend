import First from "./components/First";

function App() {

  const message = "Hi i am zohaib";
  const number = 12.3;

  return (
    <>
      {
        console.log("I am just testing this console")
      }
      <h1 style={
        styleobject
      }>Hi i am zohaib</h1>
      <p>i am learning react</p>
      <First v1={message} v2={number} />
    </>
  );
}

export default App;

const styleobject = {
  color: "black",
  backgroundColor: "blue",
  fontSize: "25px",
  fontWeight: "bold",
  textAlign: "center",
}

