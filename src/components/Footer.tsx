import { useMemo } from "preact/hooks";
import { drinks } from "../data/drinks"; // 导入饮品数据

export default function Footer() {
    // 从所有饮品数据中找出最新的日期
    const latestUpdateDate = useMemo(() => {
        // 处理可能的数据为空情况
        if (drinks.length === 0) return new Date().toLocaleDateString();

        // 提取所有日期并转换为时间戳
        const timestamps = drinks.map(drink => new Date(drink.date).getTime());

        // 找出最新的时间戳
        const latestTimestamp = Math.max(...timestamps);

        // 转换回日期对象并格式化为本地日期字符串
        return new Date(latestTimestamp).toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }, []); // 空依赖数组表示只在组件首次渲染时计算
    return (
        <footer className="bg-yellow-400 text-black border-t-4 border-black">
            <div className="container mx-auto px-3 py-2">
                <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                    <div className="text-xs md:text-sm font-medium bg-white border-2 border-black px-2 py-1">
                        数据更新于 {latestUpdateDate}
                    </div>
                    {/* 版权和作者信息 - 单行显示 */}
                    <div className="flex flex-wrap justify-center items-center gap-1 text-xs md:text-sm">
                        <span className="font-bold">© {new Date().getFullYear()} 饮料测评 Tier List</span>
                        <span className="hidden md:inline">·</span>
                        <span className="text-gray-700 italic">by 陈刑</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}