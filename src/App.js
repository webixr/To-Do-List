import Button from "./Components/Button/Button";
import InputField from "./Components/InputField/InputField";
import Task from "./Components/Task/Task";

function App() {
  return (
    <div className="App">
      <InputField inputType={"text"} title={"type task here..."} />
      <Button style={"titleActive"} >button</Button>
      <Button style={"main"} color={"red"}><i className="fa-solid fa-xmark"></i></Button>
      <Task />
    </div>
  );
}

export default App;
