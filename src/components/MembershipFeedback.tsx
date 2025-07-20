import type { FunctionalComponent } from "preact";

const MembershipFeedback: FunctionalComponent = () => (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
        <div className="bg-white border-4 border-black p-6 shadow-neo animate-ping-once">
            <div className="flex flex-col items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                </svg>
                <p className="text-xl font-black mt-4">会员已加入!</p>
                <p className="mt-2">享受专属优惠吧~</p>
            </div>
        </div>
    </div>
);

export default MembershipFeedback;