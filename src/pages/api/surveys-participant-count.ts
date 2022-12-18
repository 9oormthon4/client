import { getParticipantCount } from '@/api/survey';

export default async function handler(req: any, res: any) {

  const { data } = await getParticipantCount();

  res.status(200).json(data);
}
