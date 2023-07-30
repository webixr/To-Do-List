import InputField from "./Components/InputField/InputField";
import TasksContainer from "./Components/TasksContainer/TasksContainer";
import ToolsContainer from "./Components/ToolsContainer/ToolsContainer";

function App() {
  return (
    <div className="App">
      <InputField inputType={"text"} title={"type task here..."} />
      <TasksContainer />
      <ToolsContainer />
    </div>
  );
}

export default App;
