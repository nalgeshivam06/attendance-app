import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom"; // Import for redirecting

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); 

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data: ", { name, email, password, role }); 

    try { 
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role }),
      });

      if (!response.ok) {
        throw new Error("Error during registration frontend side");
      }

      const data = await response.json();
      console.log("Registration successful:", data);
      if (role === "student") {
        navigate("/dashboard/student"); // Redirect to Student Dashboard
      } else if (role === "teacher") {
        navigate("/dashboard/teacher"); // Redirect to Teacher Dashboard
      } else if (role === "admin") {
        navigate("/dashboard/admin"); // Redirect to Admin Dashboard
      }

      
      //navigate("/login");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="bg-white p-8 rounded shadow-md w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)} 
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)} 
          className="w-full mb-4 p-2 border rounded"
          required
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded"
        >
          Register
        </button>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
