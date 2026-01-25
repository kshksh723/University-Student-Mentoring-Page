import Header from "./Components/layout/Header";
import Sidebar from "./Components/layout/Sidebar";
import Main from "./Components/layout/Main";
import "./index.css";
function App() {
  return (
    <div className="min-h-screen bg-gray-50 select-none">
      <Header />
      <div className="flex max-w-[1440px] mx-auto">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
