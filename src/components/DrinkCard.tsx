import { Drink } from "../types";
import { useState } from "preact/hooks";
import { getDrinkImageUrl, getLabelImageUrl, getDefaultDrinkImageUrl, getDefaultLabelImageUrl } from "../utils/paths";

export default function DrinkCard({ drink }: { drink: Drink }) {
  const [drinkImageError, setDrinkImageError] = useState(false);
  const [labelImageError, setLabelImageError] = useState(false);

  return (
    <div className="relative flex-shrink-0 cursor-pointer h-full">
      {/* 饮料实物图 - 悬停时放大 */}
      <div className="h-full relative overflow-hidden transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-1">
        <img src={drinkImageError ? getDefaultDrinkImageUrl() : getDrinkImageUrl(drink.id)} alt={drink.name} className="w-full h-full object-contain p-1" onError={() => setDrinkImageError(true)} />
      </div>
      {/* 悬停提示 - 从下方滑入 */}
      <div className="absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 translate-y-4 opacity-0 w-full h-full">
        <img src={labelImageError ? getDefaultLabelImageUrl() : getLabelImageUrl(drink.id)} alt={`${drink.brand} ${drink.name}`} className="w-full h-full object-contain p-1" onError={() => setLabelImageError(true)} />
      </div>
    </div>
  );
}
