import { componentType } from "@/types/generalTypes";
import { FaFilter } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Input from "@/forms/inputs/Input";

export default function DropDownFilterCharater(): componentType {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      species: "",
    },
    mode: "onChange",
  });

  const onSubmit = ({ species }: { species: string }): void => {
    console.log(species);
  };

  return (
    <div className="dropdown">
      <FaFilter className="btn btn-primary" />
      <div className="card compact dropdown-content shadow bg-base-100 rounded-box w-64">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input type="text" control={control} label="species" name="species" />
          <input type="submit" disabled={isValid} />
        </form>
      </div>
    </div>
  );
}
