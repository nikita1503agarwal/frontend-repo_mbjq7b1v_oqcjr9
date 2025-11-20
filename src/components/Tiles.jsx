import { CalendarDays, ReceiptIndianRupee, User2 } from "lucide-react";

export default function Tiles() {
  return (
    <div className="grid sm:grid-cols-3 gap-3">
      <div className="bg-white rounded-xl p-4 border border-slate-200">
        <div className="text-slate-500 text-xs">Next scheduled AMC</div>
        <div className="text-lg font-semibold mt-1">12 Jan 2026</div>
      </div>
      <div className="bg-white rounded-xl p-4 border border-slate-200">
        <div className="text-slate-500 text-xs">Outstanding invoices</div>
        <div className="text-lg font-semibold mt-1 flex items-center gap-2">
          <ReceiptIndianRupee className="w-5 h-5" />
          <span>₹ 24,500</span>
        </div>
      </div>
      <div className="bg-white rounded-xl p-4 border border-slate-200">
        <div className="text-slate-500 text-xs">Account manager</div>
        <div className="text-lg font-semibold mt-1 flex items-center gap-2">
          <User2 className="w-5 h-5" />
          <span>Rahul Mehta</span>
        </div>
      </div>
    </div>
  );
}
