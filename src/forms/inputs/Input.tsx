import { FieldError, useController } from "react-hook-form";
import { componentType } from "@/types/generalTypes";

interface InputProps {
  name: string;
  control: any;
  label: string;
  placeholder?: string;
  type: string;
  right?: boolean | null;
  className?: string;
}

export default function Input({
  name,
  control,
  label,
  placeholder,
  type = "text",
  right = null,
  className,
}: InputProps): componentType {
  const { field, fieldState } = useController({ name, control });

  const isError: boolean | undefined | FieldError =
    fieldState.isTouched && fieldState.error;

  return (
    <div className={className}>
      <label>
        {label}
        <div className="w-full relative flex">
          <input
            {...field}
            type={type}
            placeholder={placeholder}
            className={className}
          />
          {right}
        </div>
        {Boolean(isError) && (
          <div className="mb-3">
            <span className="text-error">{fieldState.error?.message}</span>
          </div>
        )}
      </label>
    </div>
  );
}
