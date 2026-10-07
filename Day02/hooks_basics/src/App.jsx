import { useEffect, useState } from "react";

function App() {

  // javascript 

  const [payload, setPayload] = useState(0);
  const [zohaib, setZohaib] = useState(0)

  function payloadIncrement() {
    setPayload(payload + 1);
  }

  function zohaibIncrement() {
    setZohaib(zohaib + 1);
  }

  const [apidata, setApidata] = useState([]);

  useEffect(() => {

    async function callapi() {

      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      let temp = await data.json();
      setApidata(temp);
      // console.log(temp);

    }

    callapi();

  }, [zohaib]);


  return (
    <>
      {/* html */}
      <h1>Zohaib</h1>
      <h1>{payload}</h1>
      Zohaib: <h1>{zohaib}</h1>

      <button onClick={payloadIncrement}>payload inc</button>

      <button onClick={zohaibIncrement}>zohaib inc</button>

      <br></br>

      {
        apidata.map((item) => {

          return (
            <div key={item.id}>
              <h1>id: {item.id}</h1>
              <h1>title: {item.title}</h1>
              <h1>body: {item.body}</h1>
            </div>
          )
        })
      }

    </>
  );
}

export default App;