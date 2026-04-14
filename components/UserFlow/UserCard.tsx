"use client";
import { UserEntry } from "@/types/user";

interface UserCardProps {
  user: UserEntry;
  onDelete: (id: string) => void;
  onEdit: (user: UserEntry) => void;
  disableDelete: boolean;
}

const UserCard = ({ user, disableDelete, onDelete, onEdit }: UserCardProps) => {
  return (
    <div
      id={`user-${user.id}`}
      className="group bg-white border border-zinc-100 p-6 rounded-2xl hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
    >
      <div className="flex justify-between items-start">
        <div className="space-y-3">
          {/* Avatar with higher contrast */}
          <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-inner">
            {user.fullName.charAt(0).toUpperCase()}
          </div>

          <div>
            <h3 className="text-lg font-extrabold text-zinc-900 group-hover:text-blue-600 transition-colors">
              {user.fullName}
            </h3>
            <div className="mt-2 space-y-1.5">
              <p className="text-sm text-zinc-600 flex items-center gap-2 font-medium">
                <span className="text-blue-500">📧</span> {user.email}
              </p>
              <p className="text-sm text-zinc-600 flex items-center gap-2 font-medium">
                <span className="text-blue-500">📞</span> {user.phone}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          {/* Edit Button */}
          <button
            onClick={() => onEdit(user)}
            className="p-2.5 rounded-lg bg-zinc-50 text-zinc-600 hover:bg-blue-600 hover:text-white transition-all border border-zinc-100"
            title="Edit User"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>

          {/* Delete Button */}
          {!disableDelete && (
            <button
              onClick={() => onDelete(user.id)}
              className="p-2.5 rounded-lg bg-zinc-50 text-red-500 hover:bg-red-600 hover:text-white transition-all border border-zinc-100"
              title="Delete User"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
