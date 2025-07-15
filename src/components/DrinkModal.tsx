import { Drink } from "../types";
import CloseButton from "./CloseButton";

export default function DrinkModal({ drink, onClose }: { drink: Drink; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white border-4 border-black w-full max-w-lg p-6 relative shadow-neo animate-appear" onClick={e => e.stopPropagation()}>
        <CloseButton onClose={onClose} />

        {/* 饮料信息 */}
        <div className="mb-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h2 className="text-3xl font-black text-black">{drink.name}</h2>
              <p className="text-lg text-neutral-700 font-bold">{drink.brand}</p>
            </div>
            <span className="bg-pink-300 text-black px-3 py-1 font-bold border-2 border-black">{drink.type}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {drink.tags.map((tag, index) => (
              <span key={index} className="bg-blue-300 text-black text-sm px-2 py-0.5 font-bold border border-black">
                {tag}
              </span>
            ))}
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
