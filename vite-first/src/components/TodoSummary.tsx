import { Todo } from "../types/Todo";

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllCompleted: () => void;
}

export default function TodoSummary({
  todos,
  deleteAllCompleted,
}: TodoSummaryProps) {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="flex items-center justify-between text-sm text-gray-200 font-bold bg-blue-900 rounded-t-2xl py-1">
      <p className="flex-1 text-center">
        {completedTodos.length} out of {todos.length} tasks completed
      </p>
      {completedTodos.length > 0 && (
        <button
          onClick={deleteAllCompleted}
          className="bg-red-800 text-white p-2 rounded-2xl hover:bg-red-900 w-auto"
        >
          Delete All Completed
        </button>
      )}
    </div>
  );
}
