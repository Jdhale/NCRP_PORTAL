import { useState } from "react";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Card, CardContent } from "./components/card";
import { Textarea } from "./components/textarea";
import { Send } from "lucide-react";

export default function NCRPPortal() {
  const [report, setReport] = useState("");
  const [response, setResponse] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [userInfo, setUserInfo] = useState({ name: "", email: "", category: "", subCategory: "", date: "", time: "", location: "", reason: "" });

  const handleSubmit = () => {
    if (!userInfo.name || !userInfo.email || !userInfo.category || !userInfo.subCategory || !userInfo.date || !userInfo.time || !userInfo.location || !report) {
      setResponse("Please fill in all required fields before submitting.");
      return;
    }
    setResponse("Your report has been submitted successfully.");
  };

  const handleSendMessage = () => {
    if (chatMessage.trim() !== "") {
      setChatHistory([...chatHistory, { text: chatMessage, sender: "user" }]);
      setChatMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-900">NCRP Cybercrime Reporting Portal</h1>
      <Card className="w-full max-w-2xl shadow-xl rounded-2xl border border-blue-300 bg-white">
        <CardContent className="p-8 text-black">
          <p className="text-gray-700 mb-6 text-lg font-medium">Enter your details and describe the cybercrime incident:</p>
          <Input type="text" placeholder="Your Name" value={userInfo.name} onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} className="mb-4 p-3 border border-gray-300 rounded-lg shadow-sm" />
          <Input type="email" placeholder="Your Email" value={userInfo.email} onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} className="mb-4 p-3 border border-gray-300 rounded-lg shadow-sm" />
          <select className="mb-4 w-full p-3 border border-gray-300 rounded-lg shadow-sm" value={userInfo.category} onChange={(e) => setUserInfo({ ...userInfo, category: e.target.value })}>
            <option value="">Select Category</option>
            <option value="Cyber Bullying/Stalking/Sexting">Cyber Bullying/Stalking/Sexting</option>
            <option value="E-Mail Phishing">E-Mail Phishing</option>
            <option value="Email Hacking">Email Hacking</option>
            <option value="Fake/Impersonating Profile">Fake/Impersonating Profile</option>
            <option value="Impersonating Email">Impersonating Email</option>
            <option value="Online Job Fraud">Online Job Fraud</option>
            <option value="Online Matrimonial Fraud">Online Matrimonial Fraud</option>
            <option value="Profile Hacking">Profile Hacking</option>
            <option value="Provocative Speech">Provocative Speech</option>
            <option value="Intimidating Email">Intimidating Email</option>
            <option value="Business Frauds/Email Takeover">Business Frauds/Email Takeover</option>
            <option value="Debit/Credit Card Fraud/SIM Swap Fraud">Debit/Credit Card Fraud/SIM Swap Fraud</option>
            <option value="E-Wallet Related Fraud">E-Wallet Related Fraud</option>
            <option value="Fraud Call/Vishing">Fraud Call/Vishing</option>
            <option value="Internet Banking Related Fraud">Internet Banking Related Fraud</option>
            <option value="Ransomware">Ransomware</option>
            <option value="Unauthorized Access/Data Breach">Unauthorized Access/Data Breach</option>
            <option value="Website Related/Defacement">Website Related/Defacement</option>
            <option value="Cryptocurrency Related Fraud">Cryptocurrency Related Fraud</option>
            <option value="Online Trafficking">Online Trafficking</option>
            <option value="Online Gambling">Online Gambling</option>
          </select>
          <Input type="date" value={userInfo.date} onChange={(e) => setUserInfo({ ...userInfo, date: e.target.value })} className="mb-4 p-3 border border-gray-300 rounded-lg shadow-sm" />
          <Input type="time" value={userInfo.time} onChange={(e) => setUserInfo({ ...userInfo, time: e.target.value })} className="mb-4 p-3 border border-gray-300 rounded-lg shadow-sm" />
          <Input type="text" placeholder="Incident Location" value={userInfo.location} onChange={(e) => setUserInfo({ ...userInfo, location: e.target.value })} className="mb-4 p-3 border border-gray-300 rounded-lg shadow-sm" />
          <Textarea placeholder="Reason for delay in reporting (if any)" value={userInfo.reason} onChange={(e) => setUserInfo({ ...userInfo, reason: e.target.value })} className="mb-4 p-3 border border-gray-300 rounded-lg shadow-sm h-20" />
          <Textarea placeholder="Describe the incident in detail..." value={report} onChange={(e) => setReport(e.target.value)} className="mb-4 p-3 border border-gray-300 rounded-lg shadow-sm h-32" />
          <Button onClick={handleSubmit} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-md transition duration-300">Submit Report</Button>
          {response && <p className="mt-4 text-green-600 font-semibold">{response}</p>}
        </CardContent>
      </Card>

      <button onClick={() => setChatOpen(!chatOpen)} className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition">💬 Chat with Us</button>

      {chatOpen && (
        <div className="fixed bottom-16 right-6 w-80 h-96 bg-white shadow-xl rounded-lg p-4 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">Chatbot</h2>
            <button onClick={() => setChatOpen(false)} className="text-red-500">✖</button>
          </div>
          <div className="flex-1 overflow-y-auto border p-2 rounded">
            <div className="bg-gray-200 text-gray-800 p-2 rounded-lg self-start w-fit">How can I assist?</div>
            {chatHistory.map((msg, index) => (
              <p key={index} className={msg.sender === "user" ? "text-blue-600" : "text-gray-600"}>{msg.text}</p>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input type="text" placeholder="Type a message..." value={chatMessage} onChange={(e) => setChatMessage(e.target.value)} className="flex-1 border-gray-200 p-2 rounded text-black" />
            <button onClick={handleSendMessage} className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 transition">
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
