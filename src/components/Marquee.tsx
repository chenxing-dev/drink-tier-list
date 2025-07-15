export default function Marquee() {
  // 跑马灯广告语
  const marqueeTexts = [
    ["🔥", "新品上市：冰爽西瓜啵啵茶，限时8折优惠！"],
    ["🎉", "会员专享：积分兑换免费饮品，立即加入！"],
    ["🌟", "分享测评赢好礼：每月评选最佳测评师！"],
    ["💥", "周末狂欢：每周五全场饮料买一送一！"],
    ["✨", "签到有礼：连续签到7天送限定周边！"],
    ["🥤", "今日推荐：葡萄冰萃美式，清爽一夏！"]
  ];
  return (
    <>
      {/* 跑马灯广告 */}
      <div className="w-full border-b-4 border-black bg-gradient-to-r from-blue-400 to-purple-500 overflow-hidden text-lg flex">
        {/* 跑马灯标签 */}
        <div className="bg-yellow-400 border-r-4 border-black px-3 py-1 flex-shrink-0 mr-2 font-bold">
          <span className="font-blac">快讯</span>
        </div>
        {/* 跑马灯内容 */}
        <div className="marquee relative overflow-x-hidden flex pb-0.5">
          <div className="marquee-content animate-marquee flex flex-shrink-0 items-center whitespace-nowrap font-bold text-white">
            {marqueeTexts.map(([emoji, text], index) => (
              <span key={index} className="marquee-item whitespace-nowrap mx-2">
                <span className="animate-spin inline-block mr-2">{emoji}</span>
                {text}
              </span>
            ))}
          </div>
          <div className="absolute top-0.5 animate-marquee-loop flex flex-shrink-0 items-center whitespace-nowrap font-bold text-white" aria-hidden="true">
            {marqueeTexts.map(([emoji, text], index) => (
              <span key={index} className="marquee-item whitespace-nowrap mx-2">
                <span className="animate-spin inline-block mr-2">{emoji}</span>
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
