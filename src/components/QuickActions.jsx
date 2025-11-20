import { Wrench, CalendarCheck2, MapPin, ClipboardList } from "lucide-react";

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <button className="col-span-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-4 flex items-center justify-center gap-2 shadow">
        <Wrench className="w-5 h-5" />
        <span className="font-semibold">Request Service</span>
      </button>
      <button className="bg-white rounded-xl p-4 border border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-700">
          <ClipboardList className="w-5 h-5" />
          <span>Active Jobs</span>
        </div>
        <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded">2</span>
      </button>
      <button className="bg-white rounded-xl p-4 border border-slate-200 flex items-center gap-2 text-slate-700">
        <MapPin className="w-5 h-5" />
        <span>Assets/Locations</span>
      </button>
    </div>
  );
}
