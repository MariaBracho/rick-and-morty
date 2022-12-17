import { componentType } from "@/types/generalTypes";
import { SingleInformationCardProps } from "@/types/models/characters";
import { Helmet } from "react-helmet-async";
import { HELMET_TITLE } from "@/utilities/constants/helmetTitle";

export default function ChatacterDetail({
  id,
  name,
  location,
  image,
  gender,
  origin,
  species,
  status,
}: SingleInformationCardProps): componentType {
  const TITLE = "Detail";
  return (
    <div>
      <p className="text-xl font-bold my-4">{TITLE}</p>
      <div className="flex justify-center items-center w-full h-screen">
        <Helmet>
          <title>{HELMET_TITLE.characterDetail}</title>
        </Helmet>
        <div className="card md:card-side bg-neutral shadow-xl w-10/12">
          <figure className="relative w-full h-80 md:h-auto md:max-w-[360px]">
            <img
              src={image}
              alt="charater"
              className="absolute object-cover w-full h-full"
            />
          </figure>
          <div className="card-body flex justify-center">
            <h2 className="card-title text-3xl">{name}</h2>
            <ul className="text-xl">
              <li>Gender: {gender}</li>
              <li>Status: {status}</li>
              <li>Location: {location}</li>
              <li>Species: {species}</li>
              <li>Origin: {origin}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
