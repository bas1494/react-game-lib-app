/**
 * Reduces the amount of data of the resource required by cropping the image url
 * @param imageUrl rawg.io image url
 * @returns imageUrl with cropping based on image url without crop function
 */
export const getCroppedImageUrl = (imageUrl: string): string => {
    if(imageUrl == null || imageUrl.length === 0) {
        return 'https://picsum.photos/600/400';
    }

    const target = 'media/';
    const index = imageUrl.indexOf(target) + target.length;
    return imageUrl.slice(0, index) + 'crop/600/400/' + imageUrl.slice(index);
}

/**
 * 
 * @param value of the string to transform
 * @returns value with first letter capitalized (value => Value)
 */
export const capitalizeFirstLetter = (value: string): string => {
    if(value == null || value.length === 0) {
        return "";
    }

    return value.charAt(0).toUpperCase() + value.slice(1);
}

const approxItemWidth: number = 250;
const approxItemHeight: number = 250;
/**
 * 
 * @returns Approximant amount of skeleton items to fill the loading screen.
 */
export const getAmountOfApproxVisibleItems = (): number => {
  return Math.round((window.innerHeight / approxItemHeight) * (window.innerWidth / approxItemWidth));
}
