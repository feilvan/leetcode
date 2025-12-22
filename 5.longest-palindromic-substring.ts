/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// * TESTCASE
const t = "abbcccba";
// @lc code=start
function longestPalindrome(s: string): string {
  interface subsIndex {
    start: number;
    finish: number;
  }
  const sArr = s.split("");
  const sArrRev = sArr.toReversed();
  let longest: subsIndex = { start: 0, finish: 0 };

  // early return for already palindrome string
  if (sArr.every((v, i) => v === sArrRev[i])) return sArr.join("");

  function checkNeighbors(start: number, finish: number): subsIndex {
    // palindrome
    if (sArr[start] === sArr[finish]) return { start, finish };
    // initial loop
    if (finish - start === 2) {
      // palindrome left & middle
      if (sArr[start] === sArr[start + 1]) return { start, finish: start + 1 };
      // palindrome middle & right
      if (sArr[start + 1] === sArr[finish]) return { start: start + 1, finish };
    }
    // not palindrome
    return { start: start + 1, finish: finish - 1 };
  }

  sArr.forEach((v, i, r) => {
    let subs: subsIndex = { start: 0, finish: 0 };
    let start = Math.max(0, i - 1);
    let finish = Math.min(r.length - 1, i + 1);
    let res = checkNeighbors(start, finish);
    console.log(i, v, res, sArr.slice(res.start, res.finish + 1));
    while (subs.finish - subs.start < res.finish - res.start) {
      res = checkNeighbors(start, finish);
      subs = { start: res.start, finish: res.finish };
    }
    subs = { start: res.start, finish: res.finish };
    if (subs.finish - subs.start > longest.finish - longest.start)
      longest = { start: subs.start, finish: subs.finish };
  });
  const out: string = sArr.slice(longest.start, longest.finish + 1).join("");
  console.log(out);
  return out;
}
// @lc code=end
longestPalindrome(t);

/*
137m07s 26/143 cases passed (N/A)
        (i'm tired. looks like i can't solve this. i feel so dumb.)
172m49s 75/143 cases passed (N/A)

* START ENLIGHTENMENT

b a a b d
---------
    a     Y
  a a     Y
    a b   N
---------
  a a     Y
b a a     N
  a a b   N
---------
b a a b   Y

* END ENLIGHTENMENT
*/
