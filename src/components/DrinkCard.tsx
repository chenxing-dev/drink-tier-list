import { Drink } from '../types';
import { useState } from 'preact/hooks';
import {
    getDrinkImageUrl,
    getLabelImageUrl,
    getDefaultDrinkImageUrl,
    getDefaultLabelImageUrl
} from '../utils/paths';

export default function DrinkCard({ drink }: { drink: Drink }) {
    const [isHovering, setIsHovering] = useState(false);
    const [drinkImageError, setDrinkImageError] = useState(false);
    const [labelImageError, setLabelImageError] = useState(false);

    return (
        <div
            className="relative flex-shrink-0 cursor-pointer h-full"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* 饮料实物图 */}
            <div className="h-full group-hover:scale-110 transition-all duration-100">
                <img
                    src={drinkImageError ? getDefaultDrinkImageUrl() : getDrinkImageUrl(drink.id)}
                    alt={drink.name}
                    className="w-full h-full object-contain p-1"
                    onError={() => setDrinkImageError(true)}
                />
            </div>

            {/* 悬停提示 */}
            {isHovering && (
                <div className="absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2 ml-0.5 mb-2 w-full px-2 py-1">
                    <img
                        src={labelImageError ? getDefaultLabelImageUrl() : getLabelImageUrl(drink.id)}
                        alt={`${drink.brand} ${drink.name}`}
                        onError={() => setLabelImageError(true)}
                    />
                </div>
            )}
        </div>
    );
}