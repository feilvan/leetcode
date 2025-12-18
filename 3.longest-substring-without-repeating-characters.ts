/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// * TESTCASE
const s = "pwwkew";

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const sArr = s.split("");
  let longest: string[] = [];
  let current: string[] = [];
  sArr.forEach((v) => {
    console.log(v, current);
    if (current.includes(v)) {
      current = [];
      current.push(v);
    } else {
      current.push(v);
    }
    if (current.length >= longest.length) longest = current;
  });
  console.log(longest);
  return longest.length;
}
// @lc code=end

lengthOfLongestSubstring(s);

/*
18m:51s  408/988 cases passed
*/
