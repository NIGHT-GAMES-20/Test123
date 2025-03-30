import { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("https://your-backend-url.onrender.com/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage("Error fetching data"));
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <h1 className="text-2xl font-bold">{message}</h1>
    </div>
  );
}
