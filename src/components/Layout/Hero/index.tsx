import { componentType } from "@/types/generalTypes";

export default function Hero(): componentType {
  return (
    <div className="relative w-full h-56">
      <div className="absolute w-full h-full bg-linearBase-100 z-10" />
      <div className="bg-banner-mobile  md:bg-banner-desktop bg-cover bg-no-repeat absolute  h-full w-full" />
    </div>
  );
}
