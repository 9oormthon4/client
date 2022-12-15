import { postInnerAnswer } from "@/api/survey";

export default async function handler(req: any, res: any) {

  const { data } = await postInnerAnswer(req);

  res.status(200).json(data);
}
