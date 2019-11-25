// return weighted average of RGB values to get adjusted grayscale pixel value
// uses Luma grayscale coding color weight coefficients
// Gray = (Red * 0.2627 + Green * 0.678 + Blue * 0.0593)
// Gray = (Red * 0.3 + Green * 0.59 + Blue * 0.11)
// Gray = (Red * 0.2126 + Green * 0.7152 + Blue * 0.0722)
// Gray = (Red * 0.299 + Green * 0.587 + Blue * 0.114)
const weightedGrayScaleAverage = (r, g, b) => Math.round(0.2627 * r + 0.678 * g + 0.0593 * b);

// the imageData.data is a linear sequence containing 4 consecutive values (rgba) for each pixel
export const mapImageDataToGrayscale = imageData => {
    const grayscalePixelList = [];
    for (let i = 0; i < imageData.data.length; i += 4) {
        const gs = weightedGrayScaleAverage(
            imageData.data[i],
            imageData.data[i + 1],
            imageData.data[i + 2]
        );
        imageData.data[i] = gs;
        imageData.data[i + 1] = gs;
        imageData.data[i + 2] = gs;
        grayscalePixelList.push(gs);
    }
    return grayscalePixelList;
};

// capping height & width to make the output fit on the screen & within reasonable sizes
export const getCappedDimensions = (width, height, fontRatio, maxDimension) => {
    // unlike pixels, the ASCII characters aren't square: height > width
    const ratioAdjustedHeight = Math.floor(height / fontRatio);
    let outputHeight = ratioAdjustedHeight;
    let outputWidth = width;

    if (ratioAdjustedHeight > width && ratioAdjustedHeight > maxDimension) {
        outputHeight = maxDimension;
        outputWidth = Math.floor((width * maxDimension) / ratioAdjustedHeight);
    }

    if (width > ratioAdjustedHeight && width > maxDimension) {
        outputWidth = maxDimension;
        outputHeight = Math.floor((ratioAdjustedHeight * maxDimension) / width);
    }

    return [outputWidth, outputHeight];
};

// map every grayscale value to an ASCII char value
export const mapPixelToCharacter = (pixelColorValue, charList) =>
    charList[Math.ceil(((charList.length - 1) * pixelColorValue) / 255)];

// generate the visual output by breaking the ASCII char sequence into lines
export const generateAsciiContent = (charMap, boardWidth) =>
    charMap.reduce((content, char, index) => {
        // if the char is at the end of the line (line === boardWidth), add newline
        if ((index + 1) % boardWidth === 0) return content + char + "\n";
        return content + char;
    }, "");
