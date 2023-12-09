import React from 'react';

const TodoList = ({ todos, updateTodos }) => {
  const handleTodoStatusUpdate = (id) => {
    updateTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return todo.id === id
          ? { ...todo, completed: !todo.completed }
          : { ...todo };
      });
    });
  };
  return (
    <div className="todosListContainer">
      <h3>Todo List</h3>
      <table className="listOfTodos">
        <thead>
          <tr>
            <th>Sr no.</th>
            <th>Todo</th>
            <th>Finish Task</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr
              key={todo.id}
              className={todo.completed ? 'completed' : 'pending'}
            >
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>
                <button
                  className="btn"
                  onClick={() => handleTodoStatusUpdate(todo.id)}
                >
                  Update
                </button>
              </td>
              <td>{todo.completed ? 'Completed' : 'Pending'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
