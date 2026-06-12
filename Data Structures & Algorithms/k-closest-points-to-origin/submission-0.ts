class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        // brute force solution to sort the points
        points.sort((a, b) => ( ( Math.pow(a[0], 2) + Math.pow(a[1], 2) ) 
            - ( Math.pow(b[0], 2) + Math.pow(b[1], 2) )
        ));

        // use k value to iterate thru entire list to find k closest
        return points.slice(0, k)

    }
}
