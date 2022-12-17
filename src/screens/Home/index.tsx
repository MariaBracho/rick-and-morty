import { componentType } from "@/types/generalTypes";
import { Link } from "react-router-dom";
import RickAndMorty from "../../assets/images/RickAndMorty.jpeg";
import { Helmet } from "react-helmet-async";
import { HELMET_TITLE } from "@/utilities/constants/helmetTitle";

export default function Home(): componentType {
  const TITLE = "Home";
  return (
    <>
      <Helmet>
        <title>{HELMET_TITLE.home}</title>
      </Helmet>
      <p className="text-xl font-bold my-4">{TITLE}</p>
      <div className="hero min-h-max">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={RickAndMorty}
            className="max-w-sm rounded-lg shadow-2xl w-11/12"
          />
          <div>
            <h1 className="text-5xl font-bold">Rick and Morty</h1>
            <p className="py-6">
              Rick and Morty is an American adult animated science-fiction
              sitcom created by Justin Roiland and Dan Harmon for Cartoon
              Network&s nighttime programming block Adult Swim. It is
              distributed internationally by Warner Bros. Domestic Television.
              The series follows the misadventures of cynical mad scientist Rick
              Sanchez and his good-hearted but fretful grandson Morty Smith, who
              split their time between domestic life and interdimensional
              adventures that take place across an infinite number of realities,
              often travelling to other planets and dimensions through portals
              and on Rick&s flying saucer
            </p>
            <Link to="characters" className="btn btn-primary">
              See charaters
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
