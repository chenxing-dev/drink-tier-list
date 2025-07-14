import { Drink, TierLevel } from '../types';
import TierRow from './TierRow';

export default function TierList({ drinks }: { drinks: Drink[] }) {
    const tierLevels: TierLevel[] = [
        { id: 'S', label: 'S级', description: '强烈推荐', color: 'bg-red-500' },
        { id: 'A', label: 'A级', description: '值得尝试', color: 'bg-orange-500' },
        { id: 'B', label: 'B级', description: '普通一般', color: 'bg-yellow-400' },
        { id: 'C', label: 'C级', description: '不太推荐', color: 'bg-green-500' },
        { id: 'D', label: 'D级', description: '难喝避雷', color: 'bg-purple-500' }
    ];

    return (
        <div className="tier-list w-full bg-white border-x-4 border-t-4 border-black shadow-[10px_10px_0_-3px_#000]">
            {tierLevels.map(level => (
                <TierRow
                    key={level.id}
                    level={level}
                    drinks={drinks.filter(d => d.tier === level.id)}
                />
            ))}
        </div>
    );
}