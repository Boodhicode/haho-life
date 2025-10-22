import React, { useState } from "react";
import Header from "./header";
import HeroSection from "./HeroSection";

// Single-file React component (default export) that represents a modern, responsive
// landing page inspired by the provided brochure. Uses Tailwind CSS classes.
// Instructions: paste this into src/App.jsx of a Vite/CRA React project with Tailwind configured.

export default function App() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (i) => setOpenIndex(openIndex === i ? null : i);

    // Example data derived from the brochure — replace or extend as needed.
    const benefits = [
        "Meningkatkan kekebalan",
        "Memperbaiki sirkulasi darah",
        "Meningkatkan mikrosirkulasi",
        "Meningkatkan suhu tubuh",
        "Memperbaiki tekanan darah",
        "Mengurangi pembengkakan & rasa sakit",
        "Meningkatkan kesehatan mental",
    ];

    const conditions = [
        "Luka Diabetes",
        "Dystonia & Blepharospasm",
        "Epicondylitis - Siku Tenis",
        "Disfungsi Ereksi",
        "Bell's Palsy",
        "Fibromyalgia",
        "Sakit Kepala - Migrain",
        "Gangguan Tidur",
        "Insomnia",
        "Hipertensi",
        "Osteoarthritis Lutut & Nyeri Lutut",
        "Osteoporosis",
        "Sakit saraf",
        "Artritis psoriaris",
        "Depresi",
        "Asma",
        "Obesitas",
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-rose-50 to-purple-50 text-slate-800 antialiased">

            {/* NAV */}
            <Header />

            {/* HERO */}
            <main className="max-w-7xl mx-auto px-6 py-6">
                <HeroSection />

                {/* KEGUNAAN / DETAILS */}
                <section id="kegunaan" className="py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 bg-white/60 p-6 rounded-2xl shadow">
                            <h3 className="text-2xl font-bold mb-4 text-purple-700">Kegunaan Utama</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {benefits.map((b, idx) => (
                                    <article
                                        key={idx}
                                        className="flex gap-4 items-start p-3 rounded-lg hover:bg-rose-50 transition"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center font-semibold text-purple-600">
                                            ✓
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-800">{b}</h4>
                                            <p className="text-xs text-slate-500 mt-1">
                                                Deskripsi singkat tentang bagaimana {b.toLowerCase()} dapat terbantu menggunakan perangkat ini.
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>


                        <aside className="bg-gradient-to-b from-amber-50 to-white p-6 rounded-2xl shadow">
                            <h4 className="text-lg font-semibold mb-3">Manfaat Singkat</h4>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li>30 menit latihan setara dengan 2 jam aerobik alami</li>
                                <li>Membantu drainage limfatik & detoks ringan</li>
                                <li>Aman untuk penggunaan di rumah dengan panduan</li>
                            </ul>

                            <div className="mt-6">
                                <h5 className="text-sm font-medium text-slate-700">Highlight</h5>
                                <div className="mt-2 text-xs text-slate-500">36 juta gerakan sel tubuh (klaim produk) — lihat panduan & studi untuk verifikasi.</div>
                            </div>
                        </aside>
                    </div>
                </section>

                {/* INDIKASI / LIST */}
                <section id="indikasi" className="py-10">
                    <div className="bg-white/70 p-6 rounded-2xl shadow">
                        <h3 className="text-2xl font-bold mb-4">Bisa Direkomendasikan untuk Penderita</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {conditions.map((c, i) => (
                                <div key={i} className="p-3 rounded-lg border border-amber-50 bg-white/60 text-sm">{i + 1}. {c}</div>
                            ))}
                        </div>

                        <div className="mt-6">
                            <h4 className="font-semibold">Detail Indikasi</h4>
                            <div className="mt-3 space-y-2">
                                {[...Array(8)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => toggleAccordion(i)}
                                        className="w-full text-left p-3 rounded-lg border border-slate-100 bg-white/50 flex justify-between items-center"
                                    >
                                        <span>Contoh pengelompokan indikasi {i + 1}</span>
                                        <span className="text-emerald-600 font-semibold">{openIndex === i ? "–" : "+"}</span>
                                        <div className={`col-span-1`} />
                                    </button>
                                ))}

                                {openIndex !== null && (
                                    <div className="mt-3 p-4 rounded-lg bg-amber-50 text-sm text-slate-700">Informasi lebih lanjut tentang indikasi yang dipilih. Tambahkan instruksi penggunaan, kontraindikasi, dan saran ahli di sini.</div>
                                )}
                            </div>
                        </div>

                    </div>
                </section>

            </main>

            <footer className="mt-12 border-t pt-6">
                <div className="max-w-7xl mx-auto px-6 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>© {new Date().getFullYear()} HAHO LIFE. All rights reserved.</div>
                    <div>Designed with ❤️ — Modern UI / Tailwind</div>
                </div>
            </footer>

            {/* Floating quick-contact button */}
            <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed right-5 bottom-5 z-50 group"
            >
                <div className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 rounded-full shadow-lg hover:bg-emerald-600 transition-all duration-300 hover:scale-110">
                    <img
                        src="./src/assets/whatsapp.png"
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


// Small contact form component with simple validation
function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(null);

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        // Very simple validation
        if (!form.name || !form.email || !form.message) {
            setStatus({ type: "error", text: "Mohon isi semua field." });
            return;
        }

        // In a real app: send to API endpoint. Here we simulate success.
        setStatus({ type: "success", text: "Terima kasih! Kami akan menghubungi Anda segera." });
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-3">
            <div className="grid sm:grid-cols-2 gap-3">
                <label className="block">
                    <span className="text-xs text-slate-600">Nama</span>
                    <input name="name" value={form.name} onChange={onChange} className="mt-1 block w-full rounded-md border px-3 py-2" placeholder="Nama lengkap" />
                </label>

                <label className="block">
                    <span className="text-xs text-slate-600">Email</span>
                    <input name="email" value={form.email} onChange={onChange} className="mt-1 block w-full rounded-md border px-3 py-2" placeholder="email@contoh.com" />
                </label>
            </div>

            <label>
                <span className="text-xs text-slate-600">Pesan</span>
                <textarea name="message" value={form.message} onChange={onChange} className="mt-1 block w-full rounded-md border px-3 py-2 min-h-[120px]" placeholder="Tuliskan pesan atau pertanyaan Anda..." />
            </label>

            <div className="flex items-center gap-3">
                <button type="submit" className="px-4 py-2 rounded-md bg-emerald-600 text-white font-semibold">Kirim</button>
                {status && (
                    <div className={`text-sm ${status.type === 'error' ? 'text-rose-600' : 'text-emerald-600'}`}>{status.text}</div>
                )}
            </div>
        </form>
    );
}
