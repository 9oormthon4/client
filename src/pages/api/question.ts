import { getInnerQuestions } from '@/api/question';

export default async function handler(req: any, res: any) {

  const { data } = await getInnerQuestions();

  res.status(200).json(data);
}
