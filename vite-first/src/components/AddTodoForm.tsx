import { useState } from "react";

interface AddTodoFormProps {
  onSumbit: (title: string) => void;
}

export default function AddTodoForm({ onSumbit }: AddTodoFormProps) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) return;

    onSumbit(input);
    setInput("");
  }

  return (
    <form className="flex mb-10 mx-10" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What's need to be done bossing?"
        className="rounded-l-xl grow  border-blue-950 p-2  placeholder:text-sm"
      />
      <button
        type="submit"
        className="w-44 font-bold bg-blue-900 rounded-r-xl text-white hover:bg-blue-950"
      >
        ADD TASK
      </button>
    </form>
  );
}
