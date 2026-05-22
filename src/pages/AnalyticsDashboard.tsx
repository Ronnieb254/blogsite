import {
  Users,
  Mail,
  MessageCircle,
  BarChart3,
} from "lucide-react";

export default function AnalyticsDashboard() {
  const stats = [
    { label: "Users", value: 120, icon: Users },
    { label: "Subscribers", value: 340, icon: Mail },
    { label: "Messages", value: 89, icon: MessageCircle },
    { label: "Campaigns", value: 12, icon: BarChart3 },
  ];

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        📊 Admin Analytics
      </h1>

      {/* CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;

          return (
            <div
              key={s.label}
              className="bg-white border rounded-xl p-4 shadow-sm"
            >
              <Icon className="text-[#c89f6d]" />

              <h2 className="text-2xl font-bold mt-2">
                {s.value}
              </h2>

              <p className="text-sm text-gray-500">
                {s.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* CHART PLACEHOLDER */}
      <div className="mt-8 bg-white border rounded-xl p-6">
        <h2 className="font-semibold mb-4">
          Activity Overview
        </h2>

        <div className="h-40 flex items-center justify-center text-gray-400">
          📊 Add Recharts / Chart.js here
        </div>
      </div>
    </div>
  );
}