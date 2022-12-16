import { componentType } from "@/types/generalTypes";

export default function Hero(): componentType {
  return (
    <div className="relative w-full h-56">
      <div className="absolute w-full h-full bg-linearBase-100 z-10" />
      <div
        className={`bg-cover bg-no-repeat absolute  h-full w-full bg-[url('/src/assets/banerMobile.jpg')]  md:bg-[url('/src/assets/bannerDesktop.jpg')]`}
      />
    </div>
  );
}
