// src/components/MainComponent/MainComponent.js
"use client";
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function MainComponent() {
    const fullText = "رضوى انا اكتر حاجة كنت هندم عليها لو مكنتش خدت الخطوة ودخلتك حياتي كنت عندي خوف وانا بتكلم معاكي تصديني وارتحت لما مصديتينيش بس بقا عندي خوف تاني وهو ان ملاقيكيش في حياتي في اي وقت لأي سبب انا مبقتش متخيل واحدة غيرك جمبي مش متخيل واحدة بتعاملني معاملة غير معاملتك مش متخيل واحدة هحب اتعامل معاها بالطبيعة اللي انا فيها معاكي ومش عايز اجرب اتخيل انك مع حد غيري انا متسرعتش انا لحقت نفسي معاكي"
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timer = setTimeout(() => {
                setDisplayedText(displayedText + fullText[index]);
                setIndex(index + 1);
            }, 50); // سرعة الكتابة (50ms لكل حرف)
            return () => clearTimeout(timer);
        }
    }, [index, displayedText, fullText]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-200 p-8">
            <Toaster />
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-red-500 mb-8 animate-bounce"> ❤️ Our First Valentine ❤️</h1>

                <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                    <p className="text-lg text-red-500 text-gray-700 leading-relaxed">{displayedText}</p>
                </div>

                <div className="flex justify-center space-x-4 mb-8">
                    <img src="/img/mans.jpeg" alt="Mansour" className="w-64 h-64 object-cover rounded-lg shadow-md" /> {/* تحديث الحجم */}
                    <img src="/img/dodo.jpeg" alt="Radwa" className="w-64 h-64 object-cover rounded-lg shadow-md" /> {/* تحديث الحجم */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white p-4 rounded-lg shadow-md flex justify-center">
                        <video controls autoPlay muted loop className="w-72 aspect-[9/16] object-cover rounded-lg"> {/* إضافة autoPlay muted loop */}
                            <source src="/video/dody.mp4" type="video/mp4" />
                            متصفحك لا يدعم الفيديو.
                        </video>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                        <p className="text-lg text-gray-700 text-red-500 leading-relaxed">
                            أحلى وأجمل هدية ربنا بعتهالي في حياتي يارب يخليكي ليا وميحرمنيش منك ابدا وباذن الله يكون لينا نصيب في بعض.
                            أجمل حاجة حصلتلي. أحلى صدفة وأجمل واحدة. أيوا اترددت كتير ومكنتش عارف اخد خطوة في الاول من الخوف انك تروحي مني.
                            بس دلوقتي محدش ممكن يبعد اجمل كتكوتة وبنوتة عني. القمر اللي في حياتي
                            بحبك ❤️
                        </p>
                    </div>
                </div>

                <p className="text-3xl font-bold text-red-500 mt-12">بحبك مش مجرد كلمة ❤️</p>
            </div>
        </div>
    );
}