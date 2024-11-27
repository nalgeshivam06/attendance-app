import React from "react";

const StudentDashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Student Dashboard</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-bold">Attendance History</h2>
        <table className="w-full mt-4 border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Time</th>
              <th className="border border-gray-300 px-4 py-2">Selfie</th>
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td className="border border-gray-300 px-4 py-2">2024-11-27</td>
              <td className="border border-gray-300 px-4 py-2">10:00 AM</td>
              <td className="border border-gray-300 px-4 py-2">
                <img src="/path/to/selfie.jpg" alt="Selfie" className="w-16 h-16" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDashboard;
