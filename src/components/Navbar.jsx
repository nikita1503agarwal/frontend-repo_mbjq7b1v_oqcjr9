import { Menu, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <button className="p-2 rounded-md hover:bg-slate-100">
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2 font-semibold">
          <img src="/logo.svg" alt="Cueron" className="w-6 h-6" />
          <span>Cueron</span>
        </div>
        <button className="p-2 rounded-md hover:bg-slate-100 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] leading-none px-1 rounded">
            3
          </span>
        </button>
      </div>
    </header>
  );
}
