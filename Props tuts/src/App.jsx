import Cards from "./components/Cards";

import "./App.css";
let myObj={
  name:"Alia",
  age:"30"
}

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl mb-4">Tailwind test </h1>
      <Cards username="Saran" btntext={myObj.name}/>
      <Cards username="Chai" btntext="Hit me "/>
    </>
  );
}

export default App;
