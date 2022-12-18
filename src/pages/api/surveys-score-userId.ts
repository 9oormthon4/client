import { getScoreByUserId } from '@/api/survey';

export default async function handler(req: any, res: any) {

  const { data } = await getScoreByUserId(req);

  res.status(200).json(data);
}
