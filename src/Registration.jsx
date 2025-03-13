import { useState } from "react";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Card, CardContent } from "./components/card";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [response, setResponse] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      setResponse("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setResponse("Passwords do not match.");
      return;
    }
    setResponse("Registration successful. Redirecting...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-900">Register for NCRP Portal</h1>
      <Card className="w-full max-w-md shadow-xl rounded-2xl border border-blue-300 bg-white">
        <CardContent className="p-8 text-black">
          <p className="text-gray-700 mb-6 text-lg font-medium">Create your account:</p>
          <Input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="mb-4 p-3 border border-gray-300 rounded-lg shadow-sm" />
          <Input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-4 p-3 border border-gray-300 rounded-lg shadow-sm" />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-4 p-3 border border-gray-300 rounded-lg shadow-sm" />
          <Input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="mb-4 p-3 border border-gray-300 rounded-lg shadow-sm" />
          <Button onClick={handleRegister} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-md transition duration-300">Register</Button>
          {response && <p className="mt-4 text-green-600 font-semibold">{response}</p>}
        </CardContent>
      </Card>
    </div>
  );
}