import { useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [text, setText] = useState("");

  const saveDiary = async () => {
    await axios.post("http://localhost:5000/api/diary/create", {
      userId: 1,
      content: text
    });
    alert("Saved!");
  };

  const readSelected = () => {
    const selected = window.getSelection().toString();
    const speech = new SpeechSynthesisUtterance(selected);
    speechSynthesis.speak(speech);
  };

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h1 className="text-4xl mb-4">My Diary</h1>

      <textarea
        className="w-full h-60 bg-gray-900 p-4 rounded-xl"
        onChange={e => setText(e.target.value)}
      />

      <div className="mt-4 flex gap-4">
        <button onClick={saveDiary}
          className="bg-purple-600 p-2 rounded-xl">
          Save
        </button>

        <button onClick={readSelected}
          className="bg-green-600 p-2 rounded-xl">
          Read Selected
        </button>
      </div>
    </div>
  );
}