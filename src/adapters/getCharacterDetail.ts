import { instance } from "../config/axiosInstace";
import { SingleInformationCardProps } from "@/types/models/characters";

export default async function getCharacterDetail({
  id,
}: {
  id: number;
}): Promise<SingleInformationCardProps> {
  const { data } = await instance.get(`/character/${id}`);
  const { name, location, image, gender, origin, species, status } = data;

  return {
    id,
    name,
    location: location.name,
    image,
    gender,
    origin: origin.name,
    species,
    status,
  };
}
