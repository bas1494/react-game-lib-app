const approxItemWidth: number = 250;
const approxItemHeight: number = 250;

const getAmountOfApproxVisibleItems = () => {
  return Math.round((window.innerHeight / approxItemHeight) * (window.innerWidth / approxItemWidth)); 

}

export default getAmountOfApproxVisibleItems;