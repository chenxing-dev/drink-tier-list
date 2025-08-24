import { hydrate, prerender as ssr } from "preact-iso";
import { useState } from "preact/hooks";
import { drinks } from "./data/drinks";
import Header from "./components/Header";
import TierList from "./components/TierList";
import PromoBanner from "./components/PromoBanner";
import MembershipFeedback from "./components/MembershipFeedback";
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
      <main className="flex-grow flex flex-col items-center w-full mx-auto px-2 md:px-4 py-4">
        <TierList drinks={drinks} />
        {/* 会员加入反馈动画 */}
        {membershipFeedback && <MembershipFeedback />}
        {/* 下方广告横幅 */}
        <PromoBanner
          onMembership={handleMembership}
          onGameStart={() => setShowPointsModal(true)}
        />
        {/* 积分活动模态框 */}
        {showPointsModal && <PointsActivityModal onClose={() => setShowPointsModal(false)} />}
      </main>
      <Footer />
    </div>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
