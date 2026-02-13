// src/components/HomeComponent/HomeComponent.js
"use client"; // إضافة هنا
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import styles from './HomeComponent.module.css';

export default function HomeComponent() {
    const router = useRouter();

    const handleLove = () => {
        toast.success('كنت عارف انك بتحبيني على فكرة😍❤️', {
            duration: 3000,
            style: { background: '#FFB6C1', color: '#DC143C' },
        });
        setTimeout(() => router.push('/game'), 3000);
    };

    const handleNoLove = () => {
        toast.error('اجابتك مش مقبولة يا هانم 😠', {
            duration: 3000,
            style: { background: '#FF69B4', color: '#FFF' },
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-red-200 animate-pulse">
            <Toaster />
            <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full text-center transform transition-all hover:scale-105">
                <h1 className="text-3xl font-bold text-red-500 mb-6 animate-bounce">بتحبيني ولا لا؟</h1>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={handleLove}
                        className="bg-red-400 hover:bg-red-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-110"
                    >
                        بحبك أوي
                    </button>
                    <button
                        onClick={handleNoLove}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-3 rounded-full font-semibold transition-all duration-300"
                    >
                        لأ مبحبكش
                    </button>
                </div>
            </div>
        </div>
    );
}