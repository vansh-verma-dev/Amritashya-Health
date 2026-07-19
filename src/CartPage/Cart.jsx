import { useState } from "react";
import { Link } from "react-router-dom";
import myLogo from "../assets/PLogo.png";
import Footer from "../pages/Footer";

 
const INITIAL_CART = [
    {
        id: 1,
        name: "Ashwagandha Gold Max",
        category: "Stress & Vitality Capsules",
        price: 899,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1611070973770-b1a672610491?w=150&auto=format&fit=crop&q=60", // Replace with actual image path
        inStock: true
    },
    {
        id: 2,
        name: "Triphala Organic Juice",
        category: "Digestive & Detox Care",
        price: 450,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=150&auto=format&fit=crop&q=60",
        inStock: true
    }
];

function MyCart() {
    const [cartItems, setCartItems] = useState(INITIAL_CART);
 
    const updateQuantity = (id, delta) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    // Price Calculations
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = subtotal > 1000 ? 0 : 80; // Free shipping above 1000
    const total = subtotal + shipping;

    return (
        <div className="min-h-screen w-full bg-stone-50/50 text-stone-900">
            
          
            <header className="w-full bg-white border-b border-stone-200 sticky top-0 z-50 px-6 lg:px-16 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <img src={myLogo} alt="Prajanya logo" className="h-8 w-8 object-contain" />
                    <span className="flex flex-col leading-none">
                        <h2 className="text-sm font-bold tracking-tight text-emerald-900 uppercase">Prajanya</h2>
                        <span className="text-[9px] font-medium text-stone-400 tracking-widest uppercase mt-0.5">Health Cares</span>
                    </span>
                </Link>
                <Link to="/" className="text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition underline underline-offset-4">
                    Continue Shopping
                </Link>
            </header>

            {/* Main Layout Container */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <h1 className="text-3xl font-bold tracking-tight text-stone-900 mb-8 flex items-center gap-3">
                    Shopping Cart 
                    <span className="text-sm font-medium px-2.5 py-0.5 rounded-full bg-stone-200 text-stone-700">
                        {cartItems.reduce((acc, i) => acc + i.quantity, 0)} Items
                    </span>
                </h1>

                {cartItems.length === 0 ? (
                    /* Empty Cart State */
                    <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center max-w-lg mx-auto mt-12 shadow-sm">
                        <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="h-8 w-8 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-stone-900 mb-2">Your cart is empty</h2>
                        <p className="text-sm text-stone-500 mb-6">Looks like you haven't added any wellness formulations yet.</p>
                        <Link to="/products" className="inline-block rounded-xl bg-emerald-800 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-emerald-900 transition">
                            Explore Formulations
                        </Link>
                    </div>
                ) : (
                    /* Cart Content Present */
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        
                        {/* Left Section: Items List */}
                        <div className="w-full lg:w-2/3 space-y-4">
                            {cartItems.map((item) => (
                                <div key={item.id} className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-5 flex flex-row gap-4 sm:gap-6 items-center shadow-sm relative overflow-hidden transition hover:border-stone-300">
                                    {/* Item Image */}
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-stone-100 border border-stone-100 flex-shrink-0 overflow-hidden">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>

                                    {/* Item Info & Actions */}
                                    <div className="flex-grow flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div>
                                            <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider">{item.category}</span>
                                            <h3 className="font-bold text-base sm:text-lg text-stone-900 leading-snug mt-0.5">{item.name}</h3>
                                            <p className="text-xs text-stone-400 mt-1 flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> In Stock
                                            </p>
                                        </div>

                                        {/* Counter and Price */}
                                        <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-10">
                                            {/* Quantity Adjuster */}
                                            <div className="flex items-center border border-stone-200 bg-stone-50 rounded-xl p-1">
                                                <button 
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="w-8 h-8 flex items-center justify-center font-bold text-stone-500 hover:text-stone-900 rounded-lg hover:bg-white transition"
                                                >
                                                    -
                                                </button>
                                                <span className="w-8 text-center text-sm font-bold text-stone-800">{item.quantity}</span>
                                                <button 
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="w-8 h-8 flex items-center justify-center font-bold text-stone-500 hover:text-stone-900 rounded-lg hover:bg-white transition"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            {/* Total Price for Item */}
                                            <div className="text-right min-w-[70px]">
                                                <span className="text-base sm:text-lg font-bold text-stone-900">
                                                    ₹{item.price * item.quantity}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Delete Button */}
                                    <button 
                                        onClick={() => removeItem(item.id)}
                                        className="absolute top-4 right-4 text-stone-400 hover:text-red-600 transition p-1"
                                        title="Remove Item"
                                    >
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Right Section: Order Summary */}
                        <div className="w-full lg:w-1/3 bg-white border border-stone-200 rounded-2xl p-6 shadow-sm sticky top-24">
                            <h2 className="text-lg font-bold text-stone-900 mb-5 pb-4 border-b border-stone-100">
                                Order Summary
                            </h2>

                            <div className="space-y-3 text-sm font-medium text-stone-600 mb-6">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="text-stone-900">₹{subtotal}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Shipping charges</span>
                                    <span className={shipping === 0 ? "text-emerald-700 font-semibold" : "text-stone-900"}>
                                        {shipping === 0 ? "FREE" : `₹${shipping}`}
                                    </span>
                                </div>
                                {shipping > 0 && (
                                    <p className="text-[11px] text-amber-700 font-normal bg-amber-50 rounded-lg p-2 mt-1">
                                        💡 Add ₹{1000 - subtotal} more to unlock Free Shipping!
                                    </p>
                                )}
                            </div>

                            <div className="flex justify-between items-baseline pt-4 border-t border-stone-100 mb-6">
                                <span className="text-base font-bold text-stone-900">Grand Total</span>
                                <span className="text-2xl font-black text-emerald-950">₹{total}</span>
                            </div>

                            <button className="w-full rounded-xl bg-emerald-800 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-800/20 hover:bg-emerald-900 transition duration-200 active:scale-[0.99] mb-4">
                                Proceed to Checkout
                            </button>

                            {/* Trust badges */}
                            <div className="pt-4 border-t border-stone-100 space-y-2.5">
                                <div className="flex items-center gap-2 text-xs font-medium text-stone-500">
                                    <svg className="h-4 w-4 text-emerald-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    100% Secure Ayurvedic Formulations
                                </div>
                                <div className="flex items-center gap-2 text-xs font-medium text-stone-500">
                                    <svg className="h-4 w-4 text-emerald-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.253 8H18.25" />
                                    </svg>
                                    Easy 7-day Replacements
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </main>
            <Footer/>
        </div>
    );
}

export default MyCart;