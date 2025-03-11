import { useState } from "react";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Card, CardContent } from "./components/card";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setResponse("Please enter both email and password.");
      return;
    }
    setResponse("Login successful. Redirecting...");
  };

  return (  
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-900">Login to NCRP Portal</h1>
      <Card className="w-full max-w-md shadow-xl rounded-2xl border border-blue-300 bg-white">
        <CardContent className="p-8 text-black">
          <p className="text-gray-700 mb-6 text-lg font-medium">Enter your credentials to continue:</p>
          <Input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-4 p-3 border border-gray-300 rounded-lg shadow-sm" />
          <Input type="password" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-4 p-3 border border-gray-300 rounded-lg shadow-sm" />
          <Button onClick={handleLogin} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-md transition duration-300">Login</Button>
          {response && <p className="mt-4 text-green-600 font-semibold">{response}</p>}
        </CardContent>
      </Card>
    </div>
  );
}