import React, { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("en");
  const isCN = lang === "cn";
  const isKR = lang === "kr";

  return (
    <main className="min-h-screen bg-red-950 text-yellow-50 font-sans">
      <div className="absolute top-4 right-4 space-x-2">
        <button onClick={() => setLang("en")} className="px-3 py-1 bg-yellow-300 text-red-900 rounded font-bold">🇬🇧</button>
        <button onClick={() => setLang("cn")} className="px-3 py-1 bg-yellow-300 text-red-900 rounded font-bold">🇨🇳</button>
        <button onClick={() => setLang("kr")} className="px-3 py-1 bg-yellow-300 text-red-900 rounded font-bold">🇰🇷</button>
      </div>

      <section className="py-20 text-center px-4 bg-gradient-to-b from-red-800 to-red-900">
        <img src="/moneta.png" alt="Sesterzium" className="mx-auto mb-6 w-40 h-40 object-contain rounded-full shadow-lg" />
        <h1 className="text-5xl font-extrabold mb-2">Sesterzium</h1>
        <p className="text-lg italic mb-4">Panem, Circenses et Pump</p>
        <p className="text-md italic text-yellow-300 mb-6">Manus adamantinae sunt virtus legionarii. Vendere est proditio.</p>
        <div className="space-x-4">
          <a href="#" className="bg-yellow-500 text-red-950 px-6 py-3 rounded-2xl shadow">Buy Now</a>
          <a href="#" className="text-yellow-300 underline">View on BaseScan</a>
        </div>
      </section>


      {/* FAQ */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        {isCN ? (
          <>
            <h2 className="text-3xl font-bold mb-6 text-center">常见问题</h2>
            <ul className="space-y-4 text-yellow-100 list-disc pl-4">
              <li><strong>Sesterzium 是骗局吗？</strong> 不是。这是一个讽刺但透明的项目。</li>
              <li><strong>在哪里可以买？</strong> Base 网络的 DEX。</li>
              <li><strong>为何使用拉丁语？</strong> 每个帝国都有自己的官方语言。</li>
            </ul>
          </>
        ) : isKR ? (
          <>
            <h2 className="text-3xl font-bold mb-6 text-center">자주 묻는 질문</h2>
            <ul className="space-y-4 text-yellow-100 list-disc pl-4">
              <li><strong>Sesterzium은 사기인가요?</strong> 아니요. 투명하고 유쾌한 프로젝트입니다.</li>
              <li><strong>어디서 구매하나요?</strong> Base 네트워크의 DEX에서 가능합니다.</li>
              <li><strong>왜 라틴어를 쓰나요?</strong> 모든 제국은 공용어를 가집니다.</li>
            </ul>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold mb-6 text-center">FAQ</h2>
            <ul className="space-y-4 text-yellow-100 list-disc pl-4">
              <li><strong>Is Sesterzium a scam?</strong> No. It’s a fun but transparent project.</li>
              <li><strong>Where can I buy it?</strong> On Base network DEX.</li>
              <li><strong>Why is it in Latin?</strong> Every empire has its language.</li>
            </ul>
          </>
        )}
      </section>

    </main>
  );
}