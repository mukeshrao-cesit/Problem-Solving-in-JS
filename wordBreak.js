function wordBreak(s, wordDict) {
  let x = s;
  for (let i = 0; i < wordDict.length; i++) {
    x.replaceAll(wordDict[i]);
    console.log(x);
  }
  console.log(x);
}

wordBreak("leetcode", ["leet", "code"]);
