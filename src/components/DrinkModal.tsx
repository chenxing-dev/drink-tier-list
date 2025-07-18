import { Drink } from "../types";
import CloseButton from "./CloseButton";
import { getDrinkImageUrl } from "../utils/paths";
import LazyImage from "./LazyImage";

export default function DrinkModal({ drink, onClose }: { drink: Drink; onClose: () => void }) {

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="relative bg-white border-4 border-black w-full max-w-lg p-6 relative shadow-neo animate-appear" onClick={e => e.stopPropagation()}>
        <CloseButton onClose={onClose} />

        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 flex flex-col gap-4 mb-4 scale-80 -rotate-15">
          {/* 饮料实物图 */}
          <div className="flex-1 flex items-center justify-center p-4">
            <LazyImage src={getDrinkImageUrl(drink.id)} alt={drink.name} className="max-h-40 object-contain" />
          </div>
        </div>

        {/* 饮料信息 */}
        <div className="mb-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h2 className="text-3xl font-black text-black">{drink.name}</h2>
              <p className="text-lg text-neutral-700 font-bold">{drink.brand}</p>
            </div>
            <span className="bg-pink-300 text-black px-3 py-1 font-bold border-2 border-black">{drink.type}</span>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <div className="flex flex-wrap gap-2">
              {drink.tags.map((tag, index) => (
                <span key={index} className="bg-blue-300 text-black text-sm px-2 py-0.5 font-bold border-2 border-black">
                  {tag}
                </span>
              ))}
            </div>
            {/* 价格标签 */}
            <div className="bg-yellow-400 text-black font-bold px-2 flex items-center border border-black rounded-full shadow-neo">¥{drink.price}</div>
          </div>
        </div>

        {/* 评价内容 */}
        <div className="border-t-2 border-black pt-4">
          <p className="text-neutral-900 italic text-lg font-medium">"{drink.comment}"</p>
          <p className="mt-4 text-right text-sm text-neutral-500">评价日期: {drink.date}</p>
        </div>
      </div>
    </div>
  );
}
