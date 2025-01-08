import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    console.log("Login Data: ", { email, password }); 

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Login failed");
      }

      const data = await response.json();
      console.log("Login successful:", data);

      // Save token or user info (if applicable)
      localStorage.setItem("token", data.token);

      // Redirect to another page
      navigate("/dashboard/student");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="bg-white p-8 rounded shadow-md w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email} // Controlled input
          onChange={(e) => setEmail(e.target.value)} // Update state
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password} // Controlled input
          onChange={(e) => setPassword(e.target.value)} // Update state
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Login
        </button>
        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-500">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
// import React from "react";

// const Login = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <form className="bg-white p-8 rounded shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full mb-4 p-2 border rounded"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full mb-4 p-2 border rounded"
//         />
//         <button className="w-full bg-blue-500 text-white py-2 rounded">
//           Login
//         </button>
//         <p className="text-center mt-4">
//           Don’t have an account?{" "}
//           <a href="/register" className="text-blue-500">
//             Register
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;
