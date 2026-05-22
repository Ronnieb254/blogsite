import {
  MessageCircle,
  Users,
  UserCheck,
  Mail,
  FileText,
  Briefcase,
  Shield,
  Send,
  Settings,
  BarChart3,
} from "lucide-react";

import { useState } from "react";
import AdminContacts from "./AdminContact";
import AnalyticsDashboard from "./AnalyticsDashboard";

export default function AdminLayout() {
  const [active, setActive] = useState("chats");

  const menu = [
    { key: "chats", label: "Chats", icon: MessageCircle },
    { key: "users", label: "Users", icon: Users },
    { key: "subscribers", label: "Subscribers", icon: UserCheck },
    { key: "campaigns", label: "Campaigns", icon: Mail },
    { key: "marketing", label: "Marketing Email", icon: Send },
    { key: "blogs", label: "Blogs", icon: FileText },
    { key: "services", label: "Services", icon: Briefcase },
    { key: "policies", label: "Policies", icon: Shield },
    { key: "about", label: "About / Settings", icon: Settings },
    { key: "analytics", label: "Analytics", icon: BarChart3 },
  ];

  const renderContent = () => {
    switch (active) {
      case "chats":
        return <AdminContacts />;

      case "analytics":
        return <AnalyticsDashboard />;

      case "users":
      case "subscribers":
      case "campaigns":
      case "marketing":
      case "blogs":
      case "services":
      case "policies":
      case "about":
        return (
          <div className="p-6 text-gray-600">
            <h2 className="text-xl font-semibold capitalize mb-2">
              {active}
            </h2>
            <p>Module coming soon...</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex bg-[#f6efe7] text-gray-800">

      {/* LEFT SIDEBAR */}
      <div className="w-[80px] bg-[#e7d3b0] flex flex-col items-center py-4 space-y-6 border-r border-[#d6c2a1]">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.key}
              onClick={() => setActive(item.key)}
              className={`p-3 rounded-xl transition-all duration-200 ${
                active === item.key
                  ? "bg-[#c89f6d] text-white shadow"
                  : "text-gray-700 hover:bg-[#f3e7d3]"
              }`}
              title={item.label}
            >
              <Icon size={20} />
            </button>
          );
        })}
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 overflow-y-auto bg-[#fffaf3]">
        {renderContent()}
      </div>
    </div>
  );
}