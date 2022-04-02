function maxArea(height: number[]): number {
    //approach from left and from right using two pointers continuously computing max size
    let leftPointer = 0;
    let rightPointer = height.length - 1;
    
    //calculate a max size (value of smaller height * distance between two heights)
    const calculateMaxSize = (left, right) => {
        return Math.min(height[left], height[right]) * (right - left);
    }
    let currentMaxSize = 0;
    
    while(leftPointer < rightPointer) {
        if(currentMaxSize < calculateMaxSize(leftPointer, rightPointer)) {
            currentMaxSize = calculateMaxSize(leftPointer, rightPointer);
        }
        
        //shift the pointer with lower height
        if(height[leftPointer] < height[rightPointer]) {
            leftPointer++;
        } else {
            rightPointer--;
        }
    }
    return currentMaxSize;

};