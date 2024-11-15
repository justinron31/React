import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {
  const {
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompletedTodos,
  } = useTodos();

  return (
    <main className="p-10 bg-blue-200 h-screen overflow-y-auto">
      <div className="my-5">
        <div className="font-bold text-4xl flex justify-center items-baseline">
          <h1 className="p-2 mr-1 rounded-2xl bg-blue-500 border-b-8 border-blue-900 text-blue-100">
            TASK TRACKER
          </h1>
          <span className="p-2 bg-blue-400 text-cyan-50 rounded-2xl border-b-8 border-blue-900">
            {" "}
            APP
          </span>
        </div>
      </div>

      <div className=" mx-auto my-auto max-w-4xl bg-blue-400 rounded-2xl border-b-8  border-blue-900 ">
        <TodoSummary
          todos={todos}
          deleteAllCompleted={deleteAllCompletedTodos}
        />

        <TodoList
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
        <AddTodoForm onSumbit={addTodo} />
      </div>
    </main>
  );
}

export default App;
