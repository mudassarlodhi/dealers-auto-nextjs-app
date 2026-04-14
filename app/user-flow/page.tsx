"use client";
import { useState } from "react";
import UserForm from "@/components/UserFlow/UserForm";
import UserCard from "@/components/UserFlow/UserCard";
import { UserEntry } from "@/types/user";

export default function UserFlowPage() {
  const [users, setUsers] = useState<UserEntry[]>([]);
  const [editingUser, setEditingUser] = useState<UserEntry | null>(null);

  const addOrUpdateUser = (userData: UserEntry) => {
    if (editingUser) {
      setUsers(users.map((u) => (u.id === userData.id ? userData : u)));
      setEditingUser(null);
    } else {
      setUsers([...users, userData]);
    }
    setTimeout(() => {
      const element = document.getElementById(`user-${userData.id}`);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 200);
  };

  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
      <div className="max-w-3xl mx-auto p-6 pt-15">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-zinc-900 tracking-tight">
            User Management
          </h1>
          <p className="text-zinc-500 mt-2">Create and manage your users.</p>
        </header>

        <section className="mb-12">
          <UserForm
            onSuccess={addOrUpdateUser}
            editData={editingUser}
            onCancel={() => setEditingUser(null)}
          />
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-zinc-200 pb-4">
            <h2 className="text-xl font-bold text-zinc-800">
              Registered Accounts
            </h2>
            <span className="bg-blue-600 text-white px-2.5 py-0.5 rounded-full text-xs font-bold">
              {users.length}
            </span>
          </div>

          {users.length === 0 ? (
            <div className="p-12 border-2 border-dashed border-zinc-200 rounded-3xl text-center bg-white/50">
              <p className="text-zinc-400">
                No records found. Start by adding a user above.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {users.map((user) => (
                <UserCard
                  key={user.id}
                  user={user}
                  onDelete={(id) => setUsers(users.filter((u) => u.id !== id))}
                  onEdit={(user) => {
                    setEditingUser(user);
                    window.scrollTo({ top: 0, behavior: "smooth" }); // Add this line
                  }}
                  disableDelete={editingUser?.id === user.id}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
