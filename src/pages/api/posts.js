import { getPosts } from "../../utils/utils";

export default function handler(req, res) {
  const { page } = req.query;
  const posts = getPosts(page);

  res.status(200).json(posts);
}
