import { componentType } from "@/types/generalTypes";
import { useController } from "react-hook-form";

interface RadioInputProps {
  label: string;
  control: any;
  name: string;
}

export default function RadioInput({
  label,
  control,
  name,
}: RadioInputProps): componentType {
  const { field } = useController({ name, control });
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{label}</span>
        <input {...field} type="radio" className="radio" name={name} />
      </label>
    </div>
  );
}
