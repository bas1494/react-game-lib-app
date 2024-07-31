const getCroppedImage = (imageUrl: string) => {
    if(imageUrl == null || imageUrl.length === 0) {
        return 'https://picsum.photos/600/400';
    }

    const target = 'media/';
    const index = imageUrl.indexOf(target) + target.length;
    return imageUrl.slice(0, index) + 'crop/600/400/' + imageUrl.slice(index);
}

export default getCroppedImage;