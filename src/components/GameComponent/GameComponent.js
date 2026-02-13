// src/components/GameComponent/GameComponent.js
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

export default function GameComponent() {
    const [answer, setAnswer] = useState('');
    const router = useRouter();

    const handleSubmit = () => {
        if (answer.trim() === '2/2' || '2/2/2026') {
            toast.success('أشطر كتكوتة 😍❤️', { duration: 3000 });
            setTimeout(() => router.push('/main'), 3000);
        } else {
            toast.error('اجابتك مش صح يا عمري 😠', { duration: 3000 });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-200 p-8 flex items-center justify-center">
            <Toaster />
            <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full text-center">
                <h1 className="text-3xl font-bold text-red-500 mb-6 animate-bounce">عيد ميلادنا امتى ؟ ❤️</h1>
                <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="اكتب الإجابة هنا"
                    className="w-full border-2 placeholder-red-500 text-red-500 border-red-300 p-3 rounded-lg mb-4 focus:outline-none focus:border-red-500"
                />
                <button
                    onClick={handleSubmit}
                    className="bg-red-400 hover:bg-red-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-110"
                >
                    تأكيد
                </button>
            </div>
        </div>
    );
}