import React, { useEffect, useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleCredentialResponse(response) {
    console.log("ID Token:", response.credential);
    setUser(response.profile);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut() {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    if (window.google && window.google.accounts && window.google.accounts.id) {
      window.google.accounts.id.initialize({
        client_id:
          "42471252187-f9gsd7801u5qj0qmttqlcj9lduh958bl.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });
      window.google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {
          theme: "outline",
          size: "large",
        }
      );
    } else {
      console.error("Google Identity Services not available.");
    }
  }, []);

  return (
    <div className="flex h-screen bg-blue-700">
      <div
        className="flex flex-col justify-between h-full"
        style={{ width: "30%" }}
      >
        <div className="p-4">
          <div className="text-4xl font-bold text-white">Log In</div>
        </div>
        <div className="flex-1 p-10">
          <div className="text-6xl font-bold text-white">Board</div>
        </div>
        <div className="flex items-start text-white text-3xl p-4 space-between">
          <div style={{ margin: "0 10px" }}>
            <AiFillGithub />
          </div>
          <div style={{ margin: "0 10px" }}>
            <AiFillTwitterCircle />
          </div>
          <div style={{ margin: "0 10px" }}>
            <AiFillLinkedin />
          </div>
        </div>
      </div>

      <div className="flex-1 bg-white p-10" style={{ width: "30%" }}>
  <div className="text-4xl text-center font-bold">Log In Board</div>
  <div className="mt-8 flex flex-col items-center">
    <div id="signInDiv"></div>
    <div className="mt-8" style={{ width: "50%" }}>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-300"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600 text-sm font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-300"
          />
        </div>
        <Link to="/dashboard">
          <button className="w-full bg-blue-500 text-white p-3 rounded-md font-semibold hover:bg-blue-600">
            Sign In
          </button>
        </Link>

        <Link to="/dashboard">
          <button className="w-full bg-blue-500 text-white p-3 mt-3 rounded-md font-semibold hover:bg-blue-600">
            Go to Dashboard
          </button>
        </Link>
      </form>
    </div>
  </div>
</div>

    </div>
  );
}

//   {/* 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 */}
// 42471252187-f9gsd7801u5qj0qmttqlcj9lduh958bl.apps.googleusercontent.com
