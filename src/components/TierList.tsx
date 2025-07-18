import { Drink, TierLevel } from '../types';
import TierRow from './TierRow';

export default function TierList({ drinks }: { drinks: Drink[] }) {
    const sortType = 'time-desc'

    const tierLevels: TierLevel[] = [
        { id: 'S', label: 'S级', description: '强烈推荐', color: 'bg-red-500' },
        { id: 'A', label: 'A级', description: '值得尝试', color: 'bg-orange-500' },
        { id: 'B', label: 'B级', description: '普通一般', color: 'bg-yellow-400' },
        { id: 'C', label: 'C级', description: '不太推荐', color: 'bg-green-500' },
        { id: 'D', label: 'D级', description: '难喝避雷', color: 'bg-purple-500' }
    ];

    // 排序函数
    const sortDrinks = (drinks: Drink[], type: string): Drink[] => {
        return [...drinks].sort((a, b) => {
            switch (type) {
                case 'time-desc': // 最新评价在前
                    return new Date(b.date).getTime() - new Date(a.date).getTime();
                case 'time-asc': // 最早评价在前
                    return new Date(a.date).getTime() - new Date(b.date).getTime();
                case 'price-asc': // 价格从低到高
                    return a.price - b.price;
                case 'price-desc': // 价格从高到低
                    return b.price - a.price;
                case 'brand': // 按品牌名称排序
                    return a.brand.localeCompare(b.name);
                default:
                    return 0;
            }
        });
    };

    return (
        <div className="tier-list w-full bg-white border-x-4 border-t-4 border-black shadow-[10px_10px_0_-3px_#000]">
            {/* 等级行 */}
            {tierLevels.map(level => {
                // 过滤当前等级的饮料并排序
                const tierDrinks = drinks.filter(d => d.tier === level.id);
                const sortedDrinks = sortDrinks(tierDrinks, sortType);
                return (
                    <TierRow
                        key={level.id}
                        level={level}
                        drinks={sortedDrinks}
                    />
                )
            })}
        </div>
    );
}