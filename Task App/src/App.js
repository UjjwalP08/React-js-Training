import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./components/hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendReq: fetchTasks } = useHttp();

  useEffect(() => {
    const dataTransform = (obj) => {
      const loadedTasks = [];

      for (const taskKey in obj) {
        loadedTasks.push({ id: taskKey, text: obj[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    fetchTasks(
      { url: "https://task-app-c2484-default-rtdb.firebaseio.com/tasks.json" },
      dataTransform
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
