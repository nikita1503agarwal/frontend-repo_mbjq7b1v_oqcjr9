import Navbar from "./components/Navbar";
import QuickActions from "./components/QuickActions";
import Tiles from "./components/Tiles";
import FooterNav from "./components/FooterNav";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-4 space-y-4">
        <h1 className="text-xl font-semibold">Welcome to Cueron</h1>
        <QuickActions />
        <Tiles />
      </main>
      <FooterNav />
    </div>
  );
}

export default App;