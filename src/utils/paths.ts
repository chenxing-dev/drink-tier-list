/**
 * 获取静态资源完整路径
 * @param path 资源相对路径（相对于 public 目录）
 * @returns 完整 URL 路径
 */
export function getAssetUrl(path: string): string {
    return `${import.meta.env.BASE_URL}${path}`;
}

/**
 * 获取饮料图片路径
 * @param drinkId 饮料ID
 * @returns 饮料图片完整路径
 */
export function getDrinkImageUrl(drinkId: string): string {
    return getAssetUrl(`drinks/${drinkId}.png`);
}

/**
 * 获取Label图片路径
 * @param drinkId 饮料ID
 * @returns Label图片完整路径
 */
export function getLabelImageUrl(drinkId: string): string {
    return getAssetUrl(`labels/${drinkId}.png`);
}

/**
 * 获取默认饮料图片路径
 * @returns 默认饮料图片路径
 */
export function getDefaultDrinkImageUrl(): string {
    return getAssetUrl('drinks/default.png');
}

/**
 * 获取默认海报图片路径
 * @returns 默认海报图片路径
 */
export function getDefaultLabelImageUrl(): string {
    return getAssetUrl('labels/default.png');
}