import React, { useState } from "react";
import Header from "./header";
import HeroSection from "./HeroSection";
import Footer from "./footer";
import Comparison from "./Comparison";
import Vidio from "./Vidio";
import Benefit from "./Benefit";
import Banner from "./Banner";
import Recomended from "./Recomended";


// Single-file React component (default export) that represents a modern, responsive
// landing page inspired by the provided brochure. Uses Tailwind CSS classes.
// Instructions: paste this into src/App.jsx of a Vite/CRA React project with Tailwind configured.

export default function App() {
    // Example data derived from the brochure — replace or extend as needed.
    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-rose-50 to-purple-50 text-slate-800 antialiased">

            {/* NAV */}
            <Header />


            <main className="max-w-7xl mx-auto px-1 py-6">
                {/* HERO */}
                <HeroSection />

                {/* BANNER PROMOSI HIPERTERMIA */}
                <Banner />

                {/* KEGUNAAN / DETAILS */}
                <Benefit />

                {/* PERBANDINGAN HYPERTHERMIA */}
                <Comparison />

                {/* VIDEO SECTION */}
                <Vidio />

                {/* INDIKASI / LIST */}
                <Recomended />
            </main>

            <Footer />

            {/* Floating quick-contact button */}
            <a
                href="https://wa.me/6282376751119"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed right-5 bottom-5 z-50 group"
            >
                <div className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 rounded-full shadow-lg hover:bg-emerald-600 transition-all duration-300 hover:scale-110">
                    <img
                        src="./assets/whatsapp.webp"
                        alt="WhatsApp"
                        className="w-7 h-7 group-hover:rotate-12 transition-transform"
                    />
                    {/* Efek cahaya luar */}
                    <div className="absolute inset-0 rounded-full bg-purple-500/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Tooltip teks kecil */}
                <span className="absolute right-16 bottom-3 bg-white text-emerald-700 px-3 py-1 rounded-full text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Chat via WhatsApp
                </span>
            </a>
        </div>
    );
}