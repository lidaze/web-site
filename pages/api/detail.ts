const userKey = "joyful";
const postKey = "tdnx2e";
const token = "aPLzrTRapohImKwomnZ30FDuZX1KGoMeA6fSZwF7";

const domainStr = "https://www.yuque.com/api/v2";
const url = `${domainStr}/repos/${userKey}/${postKey}/docs/`;

export default async (req, res) => {
  const {
    query: { slug }
  } = req;

  const response = await fetch(url + slug, {
    headers: {
      "X-Auth-Token": token
    }
  });
  const resJson = await response.json();

  res.statusCode = 200;
  res.json({ status: 200, ...resJson });
};
