import { instance } from "../config/axiosInstace";
import {
  SingleCharaterCardProps,
  charaterProps,
} from "@/types/models/charaters";

export default async function getCharaters({
  pages = 1,
}: {
  pages?: number;
}): Promise<SingleCharaterCardProps[]> {
  const { data } = await instance.get(`/character/?page=${pages}`);
  const { results } = data;
  return results.map(
    ({ id, name, location: locationName, image, gender }: charaterProps) => {
      const location = locationName.name;
      return { id, name, location, image, gender };
    }
  );
}
