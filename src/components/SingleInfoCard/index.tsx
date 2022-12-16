import { componentType } from "@/types/generalTypes";
import { SingleInformationCardProps } from "@/types/models/charaters";
import { Helmet } from "react-helmet-async";

export default function SingleInfoCard({
  id,
  name,
  location,
  image,
  gender,
  origin,
  species,
  status,
}: SingleInformationCardProps): componentType {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Helmet>
        <title>Rick and Morty | information</title>
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
  );
}
