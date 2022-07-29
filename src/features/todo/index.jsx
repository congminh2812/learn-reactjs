import React, { useState } from "react";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    { id: 1, status: "new", title: "React" },
    { id: 2, status: "completed", title: "Angular" },
    { id: 3, status: "new", title: "Vue" },
  ];
  const [todoList, setToDoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState("all");

  const handeTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];

    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "completed" ? "new" : "completed",
    };

    newTodoList[idx] = newTodo;

    // update todoList
    setToDoList(newTodoList);
  };

  const handleFilteredStatus = (status) => {
    setFilteredStatus(status);
  };

  const renderTodoList = todoList.filter(
    (todo) => filteredStatus === "all" || todo.status === filteredStatus
  );

  return (
    <div>
      <h3>TodoList</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handeTodoClick} />
      <button
        onClick={() => {
          handleFilteredStatus("all");
        }}
      >
        Show All
      </button>
      <button
        onClick={() => {
          handleFilteredStatus("completed");
        }}
      >
        Show Completed
      </button>
      <button
        onClick={() => {
          handleFilteredStatus("new");
        }}
      >
        Show New
      </button>
    </div>
  );
}

export default TodoFeature;
