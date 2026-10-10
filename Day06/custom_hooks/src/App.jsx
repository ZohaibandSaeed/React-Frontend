import useFetch from "./hooks/useFetch";

function App() {

  const { data, error, isLoading } = useFetch("https://jsonplaceholder.typicode.com/photos");

  return (
    <>
      <h4>hi this is app</h4>
      <h4>{isLoading ? "Loading..." : "Data Loaded"}</h4>
      <h4>{error && error.message}</h4>
      <div>
        {data && data.map(user => (
          <h4 key={user.id}>{user.title}</h4>
        ))}
      </div>
    </>
  );
}

export default App;