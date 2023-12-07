import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

//components
import RouteTest from "./components/RouteTest";
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

function App() {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText={"App"}
          leftChild={
            <MyButton text={"left button"} onClick={() => alert("left🎶")} />
          }
          rightChild={
            <MyButton text={"right button"} onClick={() => alert("right💖")} />
          }
        />
        <h2>App.js</h2>

        {/* <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion2.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion3.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion4.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion5.png`} /> */}

        <MyButton
          text={"button"}
          onClick={() => alert("click")}
          type={"positive"}
        />
        <MyButton
          text={"button"}
          onClick={() => alert("click")}
          type={"negative"}
        />
        <MyButton text={"button"} onClick={() => alert("click")} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
