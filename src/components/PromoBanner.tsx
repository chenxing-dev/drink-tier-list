// src/components/PromoBanner.tsx
import type { FunctionalComponent } from "preact";

interface PromoBannerProps {
    onMembership: () => void;
    onGameStart: () => void;
}

const PromoBanner: FunctionalComponent<PromoBannerProps> = ({
    onMembership,
    onGameStart
}) => (
    <div class="w-full mt-4 grid lg:grid-cols-2 gap-4">
        <div className="border-4 border-black bg-gradient-to-r from-yellow-400 to-pink-400 p-4 shadow-neo">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-black">会员专享！</h2>
                    <p className="font-bold">成为会员享专属优惠</p>
                </div>
                <button
                    className="bg-red-500 text-white font-black px-4 py-2 border-3 border-black shadow-neo hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                    onClick={onMembership}
                >
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
                    <button
                        className="bg-yellow-300 text-black font-black px-4 py-2 border-3 border-black shadow-neo hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                        onClick={onGameStart}
                    >
                        开始游戏
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default PromoBanner;