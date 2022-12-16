import { instance } from "../config/axiosInstace";
import {
  SingleCharaterCardProps,
  charaterProps,
} from "@/types/models/charaters";

interface CharatersFilters {
  name: string;
  pages: number;
}

export default async function getCharatersFilters({
  pages = 1,
  name,
}: CharatersFilters): Promise<SingleCharaterCardProps[]> {
  const { data } = await instance.get(`/character/?name=${name}&page=${pages}`);
  const { results } = data;
  return results.map(
    ({ id, name, location: locationName, image, gender }: charaterProps) => {
      const location = locationName.name;
      return { id, name, location, image, gender };
    }
  );
}
