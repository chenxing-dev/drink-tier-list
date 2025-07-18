interface DrinkImageProps {
  drinkId: string;
  className?: string;
}

export default function DrinkImage({ drinkId, className }: DrinkImageProps) {
  // 根据drinkId生成图片路径
  const imagePath = `/drinks/${drinkId}.png`;

  return (
    <div className={className}>
      <img
        src={imagePath}
        alt={`饮料图片-${drinkId}`}
        className="w-full h-full object-contain"
        onError={e => {
          // 图片加载失败时使用默认占位
          (e.target as HTMLImageElement).src = "/default-drink.png";
        }}
      />
    </div>
  );
}
