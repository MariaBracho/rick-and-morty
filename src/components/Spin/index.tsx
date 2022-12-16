import { componentType } from "@/types/generalTypes";

export default function Spin(): componentType {
  return (
    <div className="w-full h-full grid place-content-center min-h-screen">
      <div className="animate-spin h-20 w-20 border-8 border-l-primary rounded-full" />
    </div>
  );
}
