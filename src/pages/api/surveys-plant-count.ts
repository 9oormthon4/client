import { getPlantCount } from "@/api/survey";

export default async function handler(req: any, res: any) {

  const { data } = await getPlantCount();

  res.status(200).json(data);
}
