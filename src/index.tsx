import { hydrate, prerender as ssr } from "preact-iso";
import { useState, useEffect } from "preact/hooks";
import { drinks } from "./data/drinks";
import Header from "./components/Header";
import TierList from "./components/TierList";
import PointsActivityModal from "./components/BubbleGameModal";
import Footer from "./components/Footer";

import "./style.css";
import Marquee from "./components/Marquee";

export function App() {
  const [showPointsModal, setShowPointsModal] = useState(false); // 积分活动模态框状态
  const [membershipFeedback, setMembershipFeedback] = useState(false);

  // 加入会员反馈
  const handleMembership = () => {
    setMembershipFeedback(true);
    setTimeout(() => setMembershipFeedback(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-100">
      <Header drinks={drinks} />
      <Marquee />
      <main className="flex-grow flex flex-col items-center w-full mx-auto px-4 py-4">
        <TierList drinks={drinks} />
        {/* 会员加入反馈动画 */}
        {membershipFeedback && (
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <div className="bg-white border-4 border-black p-6 shadow-neo animate-ping-once">
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <p className="text-xl font-black mt-4">会员已加入!</p>
                <p className="mt-2">享受专属优惠吧~</p>
              </div>
            </div>
          </div>
        )}
        {/* 下方广告横幅 */}
        <div class="w-full mt-4 grid md:grid-cols-2 gap-4">
          <div className="border-4 border-black bg-gradient-to-r from-yellow-400 to-pink-400 p-4 shadow-neo">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-black">会员专享！</h2>
                <p className="font-bold">成为会员享专属优惠</p>
              </div>
              <button className="bg-red-500 text-white font-black px-4 py-2 border-3 border-black shadow-neo hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all" onClick={handleMembership}>
                立即加入会员
              </button>
            </div>
          </div>
          <div className="border-4 border-black bg-gradient-to-r from-purple-400 to-red-500 p-4 shadow-neo">
            <div className="flex flex-row items-center justify-between gap-2">
              <div className="text-center md:text-left">
                <h2 className="text-xl font-black">参与互动赢好礼！</h2>
                <p className="font-bold">点击气泡赢积分，快来参与</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-yellow-300 text-black font-black px-4 py-2 border-3 border-black shadow-neo hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all" onClick={() => setShowPointsModal(true)}>
                  开始游戏
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      {/* 积分活动模态框 */}
      {showPointsModal && <PointsActivityModal onClose={() => setShowPointsModal(false)} />}
    </div>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
