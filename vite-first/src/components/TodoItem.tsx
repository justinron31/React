import { Trash2 } from "lucide-react";
import { Todo } from "../types/Todo";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({
  todo,
  onCompletedChange,
  onDelete,
}: TodoItemProps) {
  return (
    <div className="flex items-center gap-3 ">
      <label className="flex items-center grow gap-2 border rounded-2xl bg-slate-100 p-5 hover:cursor-pointer hover:bg-slate-200">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
          className="scale-200 mr-7"
        />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.title}
        </span>
      </label>
      <button
        onClick={() => onDelete(todo.id)}
        className="p-2 bg-blue-700 rounded-2xl h-9 hover:bg-red-800"
      >
        <Trash2 size={20} className="text-slate-300" />
      </button>
    </div>
  );
}
