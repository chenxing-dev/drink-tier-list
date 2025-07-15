export default function Footer() {
    return (
        <footer className="bg-yellow-400 text-black border-t-4 border-black">
            <div className="container mx-auto px-3 py-2">
                <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                    <div className="text-xs md:text-sm font-medium bg-white border-2 border-black px-2 py-1">
                        数据更新于 {new Date().toLocaleDateString()}
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