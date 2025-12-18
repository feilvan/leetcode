/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// * TESTCASE
const s = "abcabcbb";

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const sArr = s.split("");
  let longestLen = 0;
  let current: string[] = [];
  sArr.forEach((v) => {
    if (current.includes(v)) {
      while (current[0] !== v) current.shift();
      current.shift();
    }
    current.push(v);
    if (current.length > longestLen) longestLen = current.length;
  });
  return longestLen;
}
// @lc code=end

lengthOfLongestSubstring(s);

/*
18m:51s 408/988 cases passed (N/A)
57m:25s 988/988 cases passed (6 ms)
        Your runtime beats 65 % of typescript submissions
        Your memory usage beats 78.14 % of typescript submissions (58.5 MB)

Updated 988/988 cases passed (1 ms)
        Your runtime beats 99.59 % of typescript submissions
        Your memory usage beats 76.13 % of typescript submissions (58.5 MB)
*/
