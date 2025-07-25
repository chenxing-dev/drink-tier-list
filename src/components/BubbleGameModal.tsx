import { useState, useEffect, useCallback } from "preact/hooks";

// 气泡类型
interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  points: number;
  color: string;
}

export default function BubbleGameModal({ onClose }: { onClose: () => void }) {
  const totalTime = 10; // 10秒游戏时间
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [gameActive, setGameActive] = useState(true);

  // 气泡颜色
  const bubbleColors = ["bg-red-400 border-red-600", "bg-yellow-300 border-yellow-500", "bg-green-400 border-green-600", "bg-blue-400 border-blue-600", "bg-purple-400 border-purple-600", "bg-pink-400 border-pink-600"];

  // 创建新气泡
  const createBubble = useCallback(() => {
    if (!gameActive || bubbles.length > 20) return;// 限制最大泡泡数量

    const colorIndex = Math.floor(Math.random() * bubbleColors.length);

    const newBubble: Bubble = {
      id: Date.now(),
      x: Math.random() * 80 + 10, // 10-90% 水平位置
      y: 100, // 从底部开始
      size: Math.floor(Math.random() * 40) + 30, // 30-70px
      speed: Math.random() * 2.5 + 1.8,
      points: Math.floor(Math.random() * 3) + 1, // 1-3分
      color: bubbleColors[colorIndex]
    };

    setBubbles(prev => [...prev, newBubble]);
  }, [gameActive, bubbles.length]);

  // 更新气泡位置
  const updateBubbles = () => {
    setBubbles(
      prev =>
        prev
          .map(bubble => ({
            ...bubble,
            y: bubble.y - bubble.speed
          }))
          .filter(bubble => bubble.y > -20) // 移出屏幕顶部的气泡
    );
  };

  // 点击气泡
  const popBubble = (id: number, points: number) => {
    setScore(prev => prev + points);
    setBubbles(prev => prev.filter(bubble => bubble.id !== id));
  };

  // 游戏循环
  useEffect(() => {
    if (!gameActive) return;

    const gameLoop = setInterval(() => {
      updateBubbles();
    }, 50);

    // 创建泡泡的独立定时器
    const interval = 100; // 
    const bubbleInterval = setInterval(() => {
      if (Math.random() > 0.5 && bubbles.length < 8) { // 减少泡泡密度
        createBubble();
      }
    }, interval);

    return () => {
      clearInterval(gameLoop);
      clearInterval(bubbleInterval);
    };
  }, [gameActive, bubbles.length]);

  // 计时器
  useEffect(() => {
    if (!gameActive || timeLeft <= 0) return;

    const timer = setTimeout(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, gameActive]);

  // 开始新游戏
  const startNewGame = () => {
    setScore(0);
    setTimeLeft(totalTime);
    setBubbles([]);
    setGameActive(true);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white border-4 border-black w-full max-w-md p-6 relative shadow-neo" onClick={e => e.stopPropagation()}>
        {/* 标题 */}
        <h2 className="text-3xl font-black mb-4 text-center text-blue-600">气泡小挑战</h2>

        {/* 游戏信息栏 */}
        <div className="flex justify-between items-center mb-4 bg-yellow-200 border-4 border-black p-3 shadow-neo">
          <div className="flex items-center">
            <span className="font-black mr-2">时间:</span>
            {timeLeft}秒
          </div>
          <div className="flex items-center">
            <span className="font-black mr-2">积分:</span>
            {score}
          </div>
        </div>

        {/* 游戏区域 */}
        <div className="game-area relative h-64 bg-blue-100 border-4 border-black inset-shadow-neo overflow-hidden select-none">
          {/* 气泡 */}
          {bubbles.map(bubble => (
            <div
              key={bubble.id}
              className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${gameActive ? "hover:scale-110 transition-transform" : ""}`}
              style={{
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`
              }}
              onClick={() => gameActive && popBubble(bubble.id, bubble.points)}
            >
              <div className={`w-full h-full rounded-full border-4 border-black flex items-center justify-center  shadow-neo ${bubble.color}`}>
                <span className="font-black text-lg">+{bubble.points}</span>
              </div>
            </div>
          ))}

          {/* 游戏结束提示 */}
          {!gameActive && (
            <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-4 border-4 border-yellow-400">
              <p className="text-3xl font-black text-yellow-400 mb-2">游戏结束!</p>
              <p className="text-2xl text-white font-bold">获得积分: {score}</p>
            </div>
          )}
        </div>

        {/* 游戏控制 */}
        <div className="mt-3 flex flex-wrap justify-center gap-3">
          {gameActive ? (
            <button
              className="bg-red-500 text-white font-bold px-6 py-3 border-3 border-black shadow-neo hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              onClick={() => setGameActive(false)}
            >
              结束游戏
            </button>
          ) : (
            <button
              className="bg-green-500 text-white font-bold px-4 py-2 border-3 border-black shadow-neo hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              onClick={startNewGame}
            >
              再玩一次
            </button>
          )}
        </div>

        {/* 游戏说明 */}
        <div className="mt-4 text-center">
          <p class="text-sm">点击气泡获取积分 • {totalTime}秒挑战 • 1积分=0.1元优惠</p>
        </div>
      </div>
    </div>
  );
}
