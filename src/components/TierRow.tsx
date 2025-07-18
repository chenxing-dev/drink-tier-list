import { TierLevel, Drink } from "../types";
import { useState } from "preact/hooks";
import DrinkCard from './DrinkCard';
import DrinkModal from "./DrinkModal";

export default function TierRow({ level, drinks }: { level: TierLevel; drinks: Drink[] }) {
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);
  return (
    <div className={`flex h-[112px] md:h-[130px] lg:h-[180px] border-b-4 border-black`}>
      {/* 等级标签区域 */}
      <div className={`${level.color} w-16 md:w-20 flex-shrink-0 flex flex-col items-center justify-center p-1 md:p-2 text-white font-black border-r-4 border-black`}>
        <span className="text-2xl md:text-3xl">{level.label}</span>
        <span className="text-[12px] md:text-xs mt-1 text-center leading-tight">{level.description}</span>
      </div>

      {/* 饮料卡片区域 */}
      <div className="flex-grow bg-white overflow-x-auto overflow-y-clip p-1 pb-2 md:p-2 flex space-x-2 md:space-x-3">
        {drinks.length > 0
          ? drinks.map(drink => (
            <div key={drink.id} className="relative h-full aspect-square flex-shrink-0 cursor-pointer group" onClick={() => setSelectedDrink(drink)}>
              <DrinkCard drink={drink} />
            </div>
          ))
          : null}
      </div>
      {/* 模态框 */}
      {selectedDrink && <DrinkModal drink={selectedDrink} onClose={() => setSelectedDrink(null)} />}
    </div>
  );
}
