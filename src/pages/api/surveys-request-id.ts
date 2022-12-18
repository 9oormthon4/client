import { getRequestId } from '@/api/survey';

export default async function handler(req: any, res: any) {

  const { data } = await getRequestId();

  res.status(200).json(data);
}
