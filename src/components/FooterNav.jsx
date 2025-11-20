import { Home, Boxes, ClipboardList, PieChart, User } from "lucide-react";

export default function FooterNav() {
  const items = [
    { label: "Home", icon: Home },
    { label: "Assets", icon: Boxes },
    { label: "Jobs", icon: ClipboardList },
    { label: "Analytics", icon: PieChart },
    { label: "Profile", icon: User },
  ];
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white/90 backdrop-blur border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-14 grid grid-cols-5">
        {items.map(({ label, icon: Icon }) => (
          <button key={label} className="flex flex-col items-center justify-center text-xs text-slate-600 hover:text-slate-900">
            <Icon className="w-5 h-5 mb-0.5" />
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
