import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password
    });
    localStorage.setItem("token", res.data.token);
    window.location.href = "/dashboard";
  };

  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <div className="bg-gray-900 p-10 rounded-2xl shadow-xl">
        <h1 className="text-white text-3xl mb-6">SoulScript</h1>
        <input className="mb-3 p-2 w-full"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)} />
        <input className="mb-3 p-2 w-full"
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)} />
        <button onClick={login}
          className="bg-purple-600 text-white p-2 w-full rounded-xl">
          Enter
        </button>
      </div>
    </div>
  );
}