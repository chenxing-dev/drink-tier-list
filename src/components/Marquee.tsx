import { drinks } from "../data/drinks";


// 定义获取最新饮品的函数
function getLatestDrinkNameByTier(tier: string): string | null {
  const filtered = drinks.filter(drink => drink.tier === tier);
  if (filtered.length === 0) {
    return null;
  }
  // 按日期降序排序（最新的在前）
  filtered.sort((a, b) => b.date.localeCompare(a.date));
  return filtered[0].name;
}
const latestS = getLatestDrinkNameByTier('S') || '清润甘蔗柠绿';
const latestD = getLatestDrinkNameByTier('D') || '小黄油美式';

export default function Marquee() {
  // 跑马灯广告语
  const marqueeTexts = [
    ["🍉", "新品上市：冰爽西瓜啵啵茶！"],
    ["💡", "冷知识：'鸭屎香'其实是乌龙茶！"],
    ["📝", "投稿你的饮料测评！"],
    ["👑", `S级推荐：${latestS}yyds！`],
    ["🚫", `避雷警告：${latestD}喝了想打12345！`],
    ["🥤", `今日推荐：葡萄冰萃美式，清爽一夏！`]
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
