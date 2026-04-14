"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { UserEntry } from "@/types/user";

// Define Schema
const userSchema = z
  .object({
    fullName: z.string().min(1, "Full Name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email format"),
    phone: z
      .string()
      .min(1, "Phone number is required")
      .regex(/^[0-9]+$/, "Phone number must only contain digits")
      .min(10, "Phone must be at least 10 digits"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(6, "Minimum 6 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// Infer Type from Schema
type UserFormData = z.infer<typeof userSchema>;

interface UserFormProps {
  onSuccess: (data: UserEntry) => void;
  editData: UserEntry | null;
  onCancel: () => void;
}

const UserForm = ({ onSuccess, editData, onCancel }: UserFormProps) => {
  const [alertVisible, setAlertVisible] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAlertVisible(false);
    if (editData) {
      reset(editData);
    } else {
      reset({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [editData, reset]);

  const onSubmit = (data: UserFormData) => {
    onSuccess({ ...data, id: editData?.id || crypto.randomUUID() });
    setAlertVisible(true);
    if (!editData) reset();
    setTimeout(() => setAlertVisible(false), 4000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onChange={() => setAlertVisible(false)}
      className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl shadow-zinc-200/50 space-y-5"
    >
      <div className="border-b border-zinc-100 pb-4">
        <h2 className="text-2xl font-bold text-zinc-900">
          {editData ? "Edit User Profile" : "Create New User"}
        </h2>
      </div>

      {alertVisible && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-sm font-medium animate-in fade-in slide-in-from-top-1">
          ✓ Action completed successfully!
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="text-xs font-bold text-zinc-600 uppercase tracking-wider ml-1">
            Full Name
          </label>
          <input
            {...register("fullName")}
            autoComplete="off"
            className={`w-full mt-1 bg-zinc-50 border ${errors.fullName ? "border-red-400" : "border-zinc-200"} rounded-xl p-3 text-zinc-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-[11px] mt-1.5 ml-1 font-medium">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-zinc-600 uppercase tracking-wider ml-1">
              Email
            </label>
            <input
              {...register("email")}
              autoComplete="off"
              className={`w-full mt-1 bg-zinc-50 border ${errors.email ? "border-red-400" : "border-zinc-200"} rounded-xl p-3 text-zinc-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all`}
            />
            {errors.email && (
              <p className="text-red-500 text-[11px] mt-1.5 ml-1 font-medium">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="text-xs font-bold text-zinc-600 uppercase tracking-wider ml-1">
              Phone
            </label>
            <input
              {...register("phone")}
              autoComplete="off"
              className={`w-full mt-1 bg-zinc-50 border ${errors.phone ? "border-red-400" : "border-zinc-200"} rounded-xl p-3 text-zinc-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all`}
            />
            {errors.phone && (
              <p className="text-red-500 text-[11px] mt-1.5 ml-1 font-medium">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {!editData && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-zinc-600 uppercase tracking-wider ml-1">
                Password
              </label>
              <input
                type="password"
                {...register("password")}
                autoComplete="off"
                className={`w-full mt-1 bg-zinc-50 border ${errors.password ? "border-red-400" : "border-zinc-200"} rounded-xl p-3 text-zinc-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all`}
              />
              {errors.password && (
                <p className="text-red-500 text-[11px] mt-1.5 ml-1 font-medium">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-xs font-bold text-zinc-600 uppercase tracking-wider ml-1">
                Confirm
              </label>
              <input
                type="password"
                {...register("confirmPassword")}
                autoComplete="off"
                className={`w-full mt-1 bg-zinc-50 border ${errors.confirmPassword ? "border-red-400" : "border-zinc-200"} rounded-xl p-3 text-zinc-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-[11px] mt-1.5 ml-1 font-medium">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="submit"
          className="flex-1 bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all"
        >
          {editData ? "Update Account" : "Create Account"}
        </button>
        {editData && (
          <button
            type="button"
            onClick={onCancel}
            className="px-6 bg-zinc-100 text-zinc-600 font-semibold rounded-xl hover:bg-zinc-200 transition-all"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default UserForm;
