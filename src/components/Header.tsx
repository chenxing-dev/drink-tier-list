import { Drink } from "../types";
import LazyImage from "./LazyImage";

export default function Header({ drinks }: { drinks: Drink[] }) {
  // 统计品牌数量
  const brandCount = new Set(drinks.map(d => d.brand)).size;

  return (
    <header className="bg-white border-b-4 border-black px-6 py-3">
      <div className="flex flex-row justify-between items-center gap-3">
        {/* 左侧标题区域 */}
        <div className="flex items-end gap-2">
          {/* Logo */}
          <LazyImage src="logo.svg" alt="Logo" className="w-12 h-12" />

          {/* 文字LOGO */}
          <h1 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-0.5">饮料 Tier List</h1>
          {/* 移动端隐藏的副标题 */}
          <p className="hidden md:block text-neutral-700 font-medium italic border-l-2 border-black ml-2 pl-3 leading-tight mb-1">好喝难喝，喝过才敢评</p>
        </div>
        {/* 统计信息 */}
        <div className="flex gap-2">
          <div className="bg-yellow-400 border-2 border-black p-2 flex items-center">
            <div>
              <p className="text-xs">已测评数</p>
              <p className="text-xl font-black leading-none">{drinks.length}</p>
            </div>
          </div>
          <div className="bg-green-500 border-2 border-black p-2 flex items-center">
            <div>
              <p className="text-xs">品牌覆盖</p>
              <p className="text-xl font-black leading-none">{brandCount}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
