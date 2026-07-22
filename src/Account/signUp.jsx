import { Link } from "react-router-dom";
import myLogo from "../assets/PLogo.png";
import { useState } from "react";

function Signup({ setPage }) {
    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: "",
    });
    const [agreed, setAgreed] = useState(false);

 
    const handleChange = (e) => {
        const { id, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    
   const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.fullName || !user.email || !user.password) {
        alert("Please fill all fields");
        return;
    }

    if (user.password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    if (!agreed) {
        alert("Please agree to Terms of Service and Privacy Policy");
        return;
    }

 
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

     
    const alreadyExists = existingUsers.some(
        (u) => u.email.toLowerCase() === user.email.toLowerCase()
    );

    if (alreadyExists) {
        alert("An account with this email already exists");
        return;
    }
 
    const updatedUsers = [...existingUsers, user];

   
    localStorage.setItem("users", JSON.stringify(updatedUsers));

 
    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Account created successfully!");

   
    setUser({ fullName: "", email: "", password: "" });
    setAgreed(false);
 
    setPage("home");
};
    return (
        <div className="min-h-screen w-full flex flex-col lg:flex-row bg-white">

            {/* Left: Form Panel */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between px-6 sm:px-16 lg:px-24 py-8 bg-white shadow-xl lg:shadow-none z-10">

                {/* Header Logo Area */}
                <div className="flex items-center gap-3 mb-8 lg:mb-0">
                    <img src={myLogo} alt="Prajanya logo" className="h-9 w-9 object-contain" />
                    <span className="flex flex-col leading-none">
                        <h2 className="text-md font-bold tracking-tight text-emerald-900 uppercase">Prajanya</h2>
                        <span className="text-[10px] font-medium text-stone-400 tracking-widest uppercase mt-0.5">Health Cares</span>
                    </span>
                </div>

                {/* Core Form */}
                <div className="w-full max-w-md mx-auto my-auto py-6">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold tracking-tight text-stone-900 mb-2">
                            Create Account
                        </h1>
                        <p className="text-sm text-stone-500">
                            Join us on your journey to holistic wellness.
                        </p>
                    </div>

                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="fullName" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                                Full Name
                            </label>
                            <input
                                id="fullName"
                                type="text"
                                placeholder="John Doe"
                                value={user.fullName}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-stone-200 px-4 py-3 text-[15px] text-stone-800 placeholder:text-stone-400 bg-stone-50/50 transition duration-200 focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10 outline-none"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                value={user.email}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-stone-200 px-4 py-3 text-[15px] text-stone-800 placeholder:text-stone-400 bg-stone-50/50 transition duration-200 focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10 outline-none"
                            />
                        </div>

                        <div className="mb-1">
                            <label htmlFor="password" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={user.password}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-stone-200 px-4 py-3 text-[15px] text-stone-800 placeholder:text-stone-400 bg-stone-50/50 transition duration-200 focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10 outline-none"
                            />
                        </div>
                        <p className="text-xs text-stone-400 mb-6 font-medium">Must be at least 6 characters</p>

                        <div className="flex items-start gap-3 mb-6">
                            <input
                                id="terms"
                                type="checkbox"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                                className="mt-1 h-4 w-4 rounded border-stone-300 text-emerald-700 focus:ring-emerald-600 focus:ring-offset-0 cursor-pointer"
                            />
                            <label htmlFor="terms" className="text-xs text-stone-500 leading-normal cursor-pointer select-none">
                                I agree to the <a href="#" className="font-semibold text-stone-800 underline underline-offset-2 hover:text-emerald-700">Terms of Service</a> and <a href="#" className="font-semibold text-stone-800 underline underline-offset-2 hover:text-emerald-700">Privacy Policy</a>.
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-emerald-800 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-800/20 transition duration-200 hover:bg-emerald-900 hover:shadow-emerald-900/30 active:scale-[0.99]"
                        >
                            Create Account
                        </button>

                        <p className="text-center text-sm text-stone-500 mt-6">
                            Already have an account?{" "}
                            <Link
                                to="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPage("sign_in");
                                }}
                                className="font-bold text-emerald-800 hover:text-emerald-900 transition underline underline-offset-4"
                            >
                                Sign in
                            </Link>
                        </p>
                    </form>
                </div>

                {/* Footer for mobile view alignment */}
                <div className="text-center lg:text-left text-xs text-stone-400 lg:hidden mt-4">
                    © {new Date().getFullYear()} Prajanya Health Cares
                </div>
            </div>

            {/* Right: Premium Brand Panel */}
            <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white flex-col justify-between p-16">

                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-700/20 blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-emerald-600/10 blur-3xl pointer-events-none transform -translate-x-1/4 translate-y-1/4" />

                <div className="flex items-center gap-3 relative z-10 opacity-90">
                    <img src={myLogo} alt="Prajanya logo" className="h-8 w-8 object-contain brightness-0 invert" />
                    <span className="text-xs font-bold tracking-widest uppercase">Prajanya Inside</span>
                </div>

                <div className="relative z-10 max-w-md my-auto">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800/60 border border-emerald-700/50 text-xs font-medium text-emerald-200 mb-6 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Ayurveda & Modern Science
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5">
                        Begin Your Wellness Journey.
                    </h1>
                    <p className="text-emerald-100/70 text-[15px] leading-relaxed font-light">
                        Create an account to unlock tailored diagnostic routines, expert consulting, and access personalized Ayurvedic formulations built just for your lifestyle.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-emerald-800/60">
                        <div>
                            <h4 className="font-semibold text-white text-sm">100% Holistic</h4>
                            <p className="text-xs text-emerald-200/60 mt-0.5">Natural, data-driven wellness paths.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white text-sm">Expert Care</h4>
                            <p className="text-xs text-emerald-200/60 mt-0.5">Verified health practitioners.</p>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 text-xs text-emerald-200/40 font-medium">
                    © {new Date().getFullYear()} Prajanya Health Cares. All rights reserved.
                </div>
            </div>
        </div>
    );
}

export default Signup;