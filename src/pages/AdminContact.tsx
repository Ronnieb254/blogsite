import {
  ArrowLeft,
  Send,
  Search,
  CheckCheck,
  Trash2,
    // MessageCircle
} from "lucide-react";
import { 
  // useEffect, 
  useMemo, useState } from "react";
import Swal from "sweetalert2";

import { useQuery, useMutation } from "@apollo/client/react";
import {
  GET_CONTACTS,
  // GET_CONTACT,
} from "../graphql/queries";

import {
  MARK_READ,
  DELETE_CONTACT,
} from "../graphql/mutations";

type Contact = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  isRead: boolean;
  createdAt: string;
};

type ContactsData = {
  contacts: Contact[];
};

export default function AdminContacts() {
  const [selected, setSelected] = useState<any>(null);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");

  const { data, refetch, loading } = useQuery<ContactsData>(GET_CONTACTS, {
    variables: {  limit: 100 },
  });


  const [markRead] = useMutation(MARK_READ);
  const [deleteContact] = useMutation(DELETE_CONTACT);

  const contacts = data?.contacts || [];

  /* ================= FILTER ================= */
  const filteredContacts = useMemo(() => {
    return contacts.filter((c: any) =>
      c.name?.toLowerCase().includes(search.toLowerCase()) ||
      c.email?.toLowerCase().includes(search.toLowerCase()) ||
      c.subject?.toLowerCase().includes(search.toLowerCase())
    );
  }, [contacts, search]);

  /* ================= SELECT CHAT ================= */
  const handleSelect = async (contact: any) => {
    setSelected(contact);

    if (!contact.isRead) {
      await markRead({
        variables: {
          markContactReadId: contact.id,
          read: true,
        },
      });

      refetch();
    }
  };

  /* ================= SEND REPLY (UI ONLY) ================= */
  const handleSend = () => {
    if (!message.trim()) return;

    Swal.fire({
      icon: "success",
      title: "Sent",
      text: `Reply sent to ${selected.email}`,
      timer: 1500,
      showConfirmButton: false,
    });

    setMessage("");
  };

  /* ================= DELETE ================= */
  const handleDelete = async () => {
    if (!selected) return;

    await deleteContact({
      variables: { deleteContactId: selected.id },
    });

    setSelected(null);
    refetch();

    Swal.fire("Deleted", "Chat removed", "success");
  };

  /* ================= UI ================= */
  return (
    <div className="h-full flex bg-[#f6efe7]">

      {/* LEFT SIDEBAR (CHAT LIST) */}
      <div className={`${selected ? "hidden md:flex" : "flex"} w-full md:w-[360px] flex-col border-r bg-[#f3e7d3]`}>

        {/* SEARCH */}
        <div className="p-3 border-b bg-[#e7d3b0]">
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
            <Search size={16} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search chats..."
              className="w-full outline-none text-sm"
            />
          </div>
        </div>

        {/* CHAT LIST */}
        <div className="flex-1 overflow-auto">
          {loading && <p className="p-3">Loading...</p>}

          {filteredContacts.map((c: any) => (
            <div
              key={c.id}
              onClick={() => handleSelect(c)}
              className={`p-4 cursor-pointer border-b hover:bg-[#f8f1e6] ${
                selected?.id === c.id ? "bg-[#e7d3b0]" : ""
              } ${!c.isRead ? "font-semibold" : ""}`}
            >
              <div className="flex justify-between">
                <h3>{c.name}</h3>
                {!c.isRead && (
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                )}
              </div>

              <p className="text-xs text-gray-600 truncate">
                {c.subject}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CHAT WINDOW */}
      <div className={`${selected ? "flex" : "hidden md:flex"} flex-1 flex-col bg-[#f6efe7]`}>

        {/* HEADER */}
        {selected ? (
          <div className="flex items-center justify-between p-4 bg-[#e7d3b0] border-b">
            <div className="flex items-center gap-3">
              <button className="md:hidden" onClick={() => setSelected(null)}>
                <ArrowLeft />
              </button>

              <div>
                <h2 className="font-bold">{selected.name}</h2>
                <p className="text-xs text-gray-600">{selected.email}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleDelete}
                className="text-red-600"
              >
                <Trash2 size={18} />
              </button>

              <CheckCheck className="text-gray-600" />
            </div>
          </div>
        ) : (            
          <div className="p-4 text-gray-500">Select a chat</div>
        )}

        {/* CHAT BODY */}
        <div className="flex-1 overflow-auto p-4 space-y-3">

          {selected && (
            <>
              {/* USER MESSAGE */}
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-xl shadow max-w-[70%]">
                  <p className="text-sm">{selected.message}</p>
                  <span className="text-xs text-gray-400">
                    {new Date(selected.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* ADMIN REPLY (mock thread) */}
              <div className="flex justify-end">
                <div className="bg-[#c89f6d] text-white p-3 rounded-xl max-w-[70%]">
                  <p className="text-sm">
                    Thanks for reaching out! We will get back to you ASAP.
                  </p>
                  <span className="text-xs text-white/70">
                    Admin
                  </span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* MESSAGE INPUT */}
        {selected && (
          <div className="p-3 border-t bg-white flex gap-2">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a reply..."
              className="flex-1 border rounded-lg px-3 py-2 outline-none"
            />

            <button
              onClick={handleSend}
              className="bg-[#c89f6d] text-white px-4 rounded-lg"
            >
              <Send size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}