import { useState, useEffect } from "preact/hooks";

// 气泡类型
interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  points: number;
}

export default function BubbleGameModal({ onClose }: { onClose: () => void }) {
  const totalTime = 10; // 10秒游戏时间
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [gameActive, setGameActive] = useState(true);

  // 创建新气泡
  const createBubble = () => {
    if (!gameActive) return;

    const newBubble: Bubble = {
      id: Date.now(),
      x: Math.random() * 80 + 10, // 10-90% 水平位置
      y: 100, // 从底部开始
      size: Math.floor(Math.random() * 40) + 30, // 30-70px
      speed: Math.random() * 2 + 1, // 1-3px/帧
      points: Math.floor(Math.random() * 3) + 1 // 1-3分
    };

    setBubbles(prev => [...prev, newBubble]);
  };

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

    // 添加音效（在实际项目中需要添加音效文件）
    // new Audio('/pop-sound.mp3').play().catch(e => console.log("Audio play failed:", e));
  };

  // 游戏循环
  useEffect(() => {
    if (!gameActive) return;

    const gameLoop = setInterval(() => {
      updateBubbles();

      // 每0.5秒创建新气泡
      if (Math.random() > 0.3) {
        createBubble();
      }
    }, 50);

    return () => clearInterval(gameLoop);
  }, [gameActive]);

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
        <h2 className="text-2xl font-black mb-4 text-center text-blue-600">气泡挑战赛</h2>

        {/* 游戏信息栏 */}
        <div className="flex justify-between items-center mb-4 bg-blue-100 border-3 border-black p-2">
          <div>
            <span className="font-bold">时间: </span>
            <span className={`font-black ${timeLeft < 10 ? "text-red-600" : "text-black"}`}>{timeLeft}秒</span>
          </div>
          <div>
            <span className="font-bold">积分: </span>
            <span className="font-black text-purple-600">{score}</span>
          </div>
        </div>

        {/* 游戏区域 */}
        <div className="game-area relative h-64 bg-gradient-to-b from-blue-200 to-blue-400 border-3 border-black overflow-hidden select-none">
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
              <div className="w-full h-full bg-white/70 rounded-full border-3 border-blue-300 flex items-center justify-center">
                <span className="font-bold text-blue-600">+{bubble.points}</span>
              </div>
            </div>
          ))}

          {/* 游戏结束提示 */}
          {!gameActive && (
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
              <p className="text-2xl font-black text-white mb-4">游戏结束!</p>
              <p className="text-xl text-white">获得积分: {score}</p>
            </div>
          )}
        </div>

        {/* 游戏控制 */}
        <div className="mt-4 flex justify-center gap-3">
          {gameActive ? (
            <button className="bg-red-500 text-white font-bold px-4 py-2 border-3 border-black shadow-neo hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all" onClick={() => setGameActive(false)}>
              结束游戏
            </button>
          ) : (
            <button className="bg-green-500 text-white font-bold px-4 py-2 border-3 border-black shadow-neo hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all" onClick={startNewGame}>
              再玩一次
            </button>
          )}
        </div>

        {/* 游戏说明 */}
        <div className="mt-4 text-sm text-center text-gray-600">
          <p>点击气泡获取积分，每个气泡1-3分</p>
          <p>30秒内获取尽可能多的积分!</p>
        </div>
      </div>
    </div>
  );
}
