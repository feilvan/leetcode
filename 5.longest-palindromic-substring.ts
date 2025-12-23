/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// * TESTCASE
const t = "bc";
// @lc code=start
function longestPalindrome(s: string): string {
  const sArr = s.split("");
  let longest: string[] = [];

  if (isPal(sArr)) {
    const out = sArr.join("");
    // console.log(out);
    return out;
  }

  function isPal(s: string[]): boolean {
    const sr = s.toReversed();
    return s.every((v, i) => v === sr[i]);
  }

  sArr.forEach((v, i, r) => {
    let run: boolean = true;
    let leftI: number = i - 1;
    let rightI: number = i + 1;
    let currentSub: string[] = [v];
    let leftSub: string[] = [r[leftI], v];
    let rightSub: string[] = [v, r[rightI]];
    let allSub: string[] = [r[leftI], v, r[rightI]];
    // console.log(currentSub, i, leftSub, rightSub, allSub);

    while (run) {
      if (currentSub.length > longest.length) {
        longest.length = 0;
        longest.push(...currentSub);
      }

      const left = isPal(leftSub);
      const right = isPal(rightSub);
      const all = isPal(allSub);

      // console.log(i, left, right, all, currentSub);

      if (all) {
        currentSub.unshift(r[leftI]);
        currentSub.push(r[rightI]);
        leftSub.push(r[rightI]);
        rightSub.unshift(r[leftI]);
        leftI--;
        rightI++;
        leftSub.unshift(r[leftI]);
        rightSub.push(r[rightI]);
        allSub.unshift(r[leftI]);
        allSub.push(r[rightI]);
      } else if (right) {
        currentSub.push(r[rightI]);
        leftSub.push(r[rightI]);
        rightI++;
        rightSub.push(r[rightI]);
        allSub.push(r[rightI]);
      } else if (left) {
        currentSub.unshift(r[leftI]);
        rightSub.unshift(r[leftI]);
        leftI--;
        leftSub.unshift(r[leftI]);
        allSub.unshift(r[leftI]);
      }

      run = left || right || all;

      if (
        currentSub[0] === undefined ||
        currentSub[currentSub.length - 1] === undefined
      )
        run = false;
    }
  });

  const out = longest.join("");
  // console.log(out);
  return out;
}
// @lc code=end
longestPalindrome(t);

/*
02h17m07s 26/143 cases passed (N/A) (i'm tired. looks like i can't solve this. i feel so dumb.)
02h52m49s 75/143 cases passed (N/A)
04h18m35s 143/143 cases passed (1287 ms)
          Your runtime beats 5.04 % of typescript submissions
          Your memory usage beats 12.48 % of typescript submissions (65.6 MB)

* START ENLIGHTENMENT

b a a b d
---------
    a     
  a a     Y
    a b   N
  a a b   N
---------
  a a     
b a a     N
  a a b   N
b a a b   Y
---------
b a a b   

* END ENLIGHTENMENT
*/
