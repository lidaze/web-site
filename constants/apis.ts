const userKey = "joyful";
const postKey = "tdnx2e";

const domainStr = "https://www.yuque.com/api/v2";

const apis = {
  allPosts: `${domainStr}/repos/${userKey}/${postKey}/docs`,
  detail: `${domainStr}/repos/${userKey}/${postKey}/docs/$slug`
};

export default apis as typeof apis;

export const token = "aPLzrTRapohImKwomnZ30FDuZX1KGoMeA6fSZwF7";
