

const flattenImages = (images) => {
    return images.map((item) => {
        item.image = item.image.includes("thumbnail?id=", 25) ?
            item.image : 'https://drive.google.com/thumbnail?id=' + item.image.substring(32, 65);
        return item
    })
}

export default flattenImages