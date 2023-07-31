import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [tasksArray, setTasksArray] = useState([]);
  const [showStatus, setShowStatus] = useState("All");

  // className
  const className = {
    container: " w-[450px] h-96 mx-auto mt-[150px] flex flex-col",
    heading: "my-4 text-4xl font-bold text-center",
    userInput: "p-2 bg-gray-200 rounded-md",
    tasks:
      "w-full h-full my-2.5 flex flex-col gap-2 overflow-y-auto rounded-md",
    task: "w-full p-2 flex items-start justify-start gap-5 bg-gray-100 rounded-md",
    taskP: "w-full self-center break-all",
    button:
      "w-8 min-w-[32px] h-8 px-3 py-1 bg-[#e1e1e1] hover:bg-[#cecece] rounded-md",
    titleButton: "px-3 py-1 hover:bg-[#e1e1e1] rounded-md",
    buttons: "ml-auto flex gap-1",
    toolsSection:
      "mt-auto p-2 flex items-center justify-start gap-5 bg-[#35a1ff] rounded-md",
  };

  // functions
  function createTask() {
    if (!userInput) {
      alert("type task");
      return;
    }

    const item = {
      task: userInput,
      id: Date.now(),
      taskStatus: false,
    };

    setTasksArray([...tasksArray, item]);
    setUserInput("");

    document.getElementById("userInput").value = "";
  }

  function taskDelete(id) {
    const newTask = tasksArray.filter((task) => task.id !== id);

    setTasksArray([...newTask]);
  }

  function taskCompleted(id) {
    setTasksArray(
      tasksArray.map((task) => {
        if (task.id === id) {
          return { ...task, taskStatus: !task.taskStatus };
        } else {
          return { ...task };
        }
      })
    );
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      createTask();
    }
  };
  return (
    <div className={className.container}>
      {/* Heading */}
      <h1 className={className.heading}>things to do</h1>

      {/* UserInput */}
      <input
        id="userInput"
        type="text"
        placeholder="type task here..."
        className={className.userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />

      {/* Tasks Holder */}
      <div className={className.tasks}>
        {tasksArray.map(({ task, id, taskStatus }) => {
          if (taskStatus === false && showStatus === "Active") {
            return (
              <div key={id} className={className.task}>
                {/* Check Button */}
                <button
                  className={className.button}
                  onClick={() => taskCompleted(id)}
                >
                  {showStatus === "Completed" ? (
                    <i className="fa-solid fa-check text-[#01cb54] -ml-0.5"></i>
                  ) : (
                    ""
                  )}
                </button>
                {/* Task Title */}
                <p className={className.taskP}>{task}</p>
                {/* Delete Button */}
                <button
                  className={className.button + " ml-auto text-[#ff353d]"}
                  onClick={() => taskDelete(id)}
                >
                  <i className="fa-solid fa-xmark -ml-0.5"></i>
                </button>
              </div>
            );
          } else if (taskStatus === true && showStatus === "Completed") {
            return (
              <div key={id} className={className.task}>
                {/* Check Button */}
                <button
                  className={className.button}
                  onClick={() => taskCompleted(id)}
                >
                  {showStatus === "Completed" ? (
                    <i className="fa-solid fa-check text-[#01cb54] -ml-0.5"></i>
                  ) : (
                    ""
                  )}
                </button>
                {/* Task Title */}
                <p className={className.taskP}>{task}</p>
                {/* Delete Button */}
                <button
                  className={className.button + " ml-auto text-[#ff353d]"}
                  onClick={() => taskDelete(id)}
                >
                  <i className="fa-solid fa-xmark -ml-0.5"></i>
                </button>
              </div>
            );
          } else if (showStatus === "All") {
            return (
              <div key={id} className={className.task}>
                {/* Check Button */}
                <button
                  className={className.button}
                  onClick={() => taskCompleted(id)}
                >
                  {taskStatus === true ? (
                    <i className="fa-solid fa-check text-[#01cb54] -ml-0.5"></i>
                  ) : (
                    ""
                  )}
                </button>
                {/* Task Title */}
                <p className={className.taskP}>{task}</p>
                {/* Delete Button */}
                <button
                  className={className.button + " ml-auto text-[#ff353d]"}
                  onClick={() => taskDelete(id)}
                >
                  <i className="fa-solid fa-xmark -ml-0.5"></i>
                </button>
              </div>
            );
          }
        })}
      </div>

      {/* Tools Section */}
      <div className={className.toolsSection}>
        {/* Create Task Button */}
        <button className={className.button} onClick={() => createTask()}>
          <i className="fa-solid fa-plus -ml-0.5"></i>
        </button>
        {/* Tasks Counter */}
        <p>{tasksArray.length} : Tasks Left</p>
        {/* Status Buttons */}
        <div className={className.buttons}>
          {/* Show All Button */}
          <button
            className={`${className.titleButton} ${
              showStatus === "All" ? " bg-[#cecece]" : ""
            }`}
            onClick={() => setShowStatus("All")}
          >
            All
          </button>
          {/* Show Active Button */}
          <button
            className={`${className.titleButton} ${
              showStatus === "Active" ? " bg-[#cecece]" : ""
            }`}
            onClick={() => setShowStatus("Active")}
          >
            Active
          </button>
          {/* Show Completed Button */}
          <button
            className={`${className.titleButton} ${
              showStatus === "Completed" ? " bg-[#cecece]" : ""
            }`}
            onClick={() => setShowStatus("Completed")}
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
