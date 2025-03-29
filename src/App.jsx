import "./App.css";
import CallToAction from "./components/CallToAction";
import ContractComponent from "./components/ContractComponent";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <div className="w-full px-10">
        <ContractComponent />
      </div>
    </div>
  );
}

export default App;
