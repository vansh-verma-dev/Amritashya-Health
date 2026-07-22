import { useState, useEffect } from "react";
import myLogo from "../assets/PLogo.png";

function Profile({ setPage }) {
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({ fullName: "", email: "" });
    const [message, setMessage] = useState({ type: "", text: "" });

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        setUser(currentUser);
        if (currentUser) {
            setEditData({ fullName: currentUser.fullName, email: currentUser.email });
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        setPage("sign_in");
    };

    const handleEditChange = (e) => {
        const { id, value } = e.target;
        setEditData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSave = () => {
        if (!editData.fullName.trim() || !editData.email.trim()) {
            setMessage({ type: "error", text: "Name and email cannot be empty." });
            return;
        }

        // Update currentUser
        const updatedUser = { ...user, fullName: editData.fullName, email: editData.email };
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));

        // Update the same user inside the "users" list too
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const updatedUsers = existingUsers.map((u) =>
            u.email === user.email ? updatedUser : u
        );
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        setUser(updatedUser);
        setIsEditing(false);
        setMessage({ type: "success", text: "Profile updated successfully." });

        setTimeout(() => setMessage({ type: "", text: "" }), 2500);
    };

    const handleCancelEdit = () => {
        setEditData({ fullName: user.fullName, email: user.email });
        setIsEditing(false);
        setMessage({ type: "", text: "" });
    };

    // ---------- No user logged in ----------
    if (!user) {
        return (
            <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white px-6">
                <img src={myLogo} alt="Prajanya logo" className="h-12 w-12 object-contain mb-4 opacity-70" />
                <h2 className="text-lg font-semibold text-stone-800 mb-2">No user logged in</h2>
                <p className="text-sm text-stone-500 mb-6">Please sign in to view your profile.</p>
                <button
                    onClick={() => setPage("sign_in")}
                    className="rounded-xl bg-emerald-800 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-800/20 transition hover:bg-emerald-900"
                >
                    Go to Sign In
                </button>
            </div>
        );
    }

    const initials = user.fullName
        ? user.fullName
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()
        : "U";

    return (
        <div className="min-h-screen w-full bg-white">

            {/* Top Header */}
            <div className="flex items-center justify-between px-6 sm:px-12 py-6 border-b border-stone-100">
                <div className="flex items-center gap-3">
                    <img src={myLogo} alt="Prajanya logo" className="h-9 w-9 object-contain" />
                    <span className="flex flex-col leading-none">
                        <h2 className="text-md font-bold tracking-tight text-emerald-900 uppercase">Prajanya</h2>
                        <span className="text-[10px] font-medium text-stone-400 tracking-widest uppercase mt-0.5">Health Cares</span>
                    </span>
                </div>

                <button
                    onClick={() => setPage("home")}
                    className="text-xs font-semibold text-stone-500 hover:text-emerald-800 transition underline underline-offset-4"
                >
                    ← Back to Home
                </button>
            </div>

            {/* Main Content */}
            <div className="flex justify-center px-6 py-12 sm:py-16">
                <div className="w-full max-w-2xl">

                    {/* Hero / Cover */}
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 h-32 sm:h-40">
                        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-emerald-700/20 blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
                    </div>

                    {/* Avatar overlapping cover */}
                    <div className="flex justify-center -mt-14">
                        <div className="h-28 w-28 rounded-full bg-emerald-800 border-4 border-white flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-emerald-800/20">
                            {initials}
                        </div>
                    </div>

                    {/* Name + Email + Badge */}
                    <div className="flex flex-col items-center text-center mt-4 mb-8">
                        <h1 className="text-2xl font-bold tracking-tight text-stone-900">
                            {user.fullName}
                        </h1>
                        <p className="text-sm text-stone-500 mt-1">{user.email}</p>
                        <span className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Wellness Member
                        </span>
                    </div>

                    {/* Inline message */}
                    {message.text && (
                        <div
                            className={`mb-6 flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium border ${
                                message.type === "error"
                                    ? "bg-red-50 border-red-200 text-red-700"
                                    : "bg-emerald-50 border-emerald-200 text-emerald-700"
                            }`}
                        >
                            <span className="text-base leading-none">
                                {message.type === "error" ? "⚠️" : "✅"}
                            </span>
                            {message.text}
                        </div>
                    )}

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-8">
                        <div className="rounded-xl border border-stone-200 px-4 py-4 text-center">
                            <p className="text-xl font-bold text-stone-900">0</p>
                            <p className="text-[11px] font-medium text-stone-400 uppercase tracking-wider mt-1">Consultations</p>
                        </div>
                        <div className="rounded-xl border border-stone-200 px-4 py-4 text-center">
                            <p className="text-xl font-bold text-stone-900">0</p>
                            <p className="text-[11px] font-medium text-stone-400 uppercase tracking-wider mt-1">Routines</p>
                        </div>
                        <div className="rounded-xl border border-stone-200 px-4 py-4 text-center">
                            <p className="text-xl font-bold text-stone-900">Active</p>
                            <p className="text-[11px] font-medium text-stone-400 uppercase tracking-wider mt-1">Status</p>
                        </div>
                    </div>

                    {/* Personal Info Card */}
                    <div className="rounded-2xl border border-stone-200 overflow-hidden mb-6">
                        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100 bg-stone-50/50">
                            <h3 className="text-sm font-bold text-stone-800">Personal Information</h3>
                            {!isEditing && (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 transition underline underline-offset-2"
                                >
                                    Edit
                                </button>
                            )}
                        </div>

                        {!isEditing ? (
                            <div className="divide-y divide-stone-100">
                                <div className="flex items-center justify-between px-5 py-4">
                                    <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                                        Full Name
                                    </span>
                                    <span className="text-sm font-medium text-stone-800">{user.fullName}</span>
                                </div>
                                <div className="flex items-center justify-between px-5 py-4">
                                    <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                                        Email Address
                                    </span>
                                    <span className="text-sm font-medium text-stone-800">{user.email}</span>
                                </div>
                            </div>
                        ) : (
                            <div className="px-5 py-5 space-y-4">
                                <div>
                                    <label htmlFor="fullName" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                                        Full Name
                                    </label>
                                    <input
                                        id="fullName"
                                        type="text"
                                        value={editData.fullName}
                                        onChange={handleEditChange}
                                        className="w-full rounded-xl border border-stone-200 px-4 py-2.5 text-[15px] text-stone-800 bg-stone-50/50 transition duration-200 focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10 outline-none"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={editData.email}
                                        onChange={handleEditChange}
                                        className="w-full rounded-xl border border-stone-200 px-4 py-2.5 text-[15px] text-stone-800 bg-stone-50/50 transition duration-200 focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10 outline-none"
                                    />
                                </div>
                                <div className="flex gap-3 pt-2">
                                    <button
                                        onClick={handleSave}
                                        className="flex-1 rounded-xl bg-emerald-800 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-900 active:scale-[0.99]"
                                    >
                                        Save Changes
                                    </button>
                                    <button
                                        onClick={handleCancelEdit}
                                        className="flex-1 rounded-xl border border-stone-200 py-2.5 text-sm font-semibold text-stone-600 transition hover:bg-stone-50"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Account Settings Card */}
                    <div className="rounded-2xl border border-stone-200 overflow-hidden mb-8">
                        <div className="px-5 py-4 border-b border-stone-100 bg-stone-50/50">
                            <h3 className="text-sm font-bold text-stone-800">Account</h3>
                        </div>
                        <div className="divide-y divide-stone-100">
                            <div className="flex items-center justify-between px-5 py-4">
                                <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                                    Account Type
                                </span>
                                <span className="text-sm font-medium text-stone-800">Wellness Member</span>
                            </div>
                            <div className="flex items-center justify-between px-5 py-4">
                                <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                                    Member Since
                                </span>
                                <span className="text-sm font-medium text-stone-800">
                                    {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => setPage("home")}
                            className="w-full rounded-xl bg-emerald-800 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-800/20 transition duration-200 hover:bg-emerald-900 active:scale-[0.99]"
                        >
                            Back to Home
                        </button>
                        <button
                            onClick={handleLogout}
                            className="w-full rounded-xl border border-stone-200 py-3.5 text-sm font-semibold text-stone-600 transition duration-200 hover:bg-stone-50 hover:text-red-600 hover:border-red-200 active:scale-[0.99]"
                        >
                            Log Out
                        </button>
                    </div>

                    <p className="text-center text-xs text-stone-400 mt-10">
                        © {new Date().getFullYear()} Prajanya Health Cares. All rights reserved.
                    </p>
                </div>
            </div>  
        </div>
    );
}

export default Profile;