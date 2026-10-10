import { useState } from "react";
import { API_URL } from "../config";
export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] =
    useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(
        `${API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            name,
            password,
          }),
        }
      );

      const data =
        await response.json();

      if (data.token) {
        localStorage.setItem(
          "token",
          data.token
        );

        alert("Login Successful");

        window.location.href =
          "/admin";
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="bg-white w-full max-w-md p-6 md:p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Admin Login
        </h1>
  
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full border rounded-xl p-3 mb-4"
        />
  
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border rounded-xl p-3 mb-4"
        />
  
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white p-3 rounded-xl font-medium"
        >
          Login
        </button>
      </div>
    </div>
  );
}