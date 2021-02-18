// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Env } from "../../utils/Env";

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: Env.cloudinary })
}
