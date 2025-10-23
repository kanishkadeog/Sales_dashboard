interface Props {
  placeholder?: string;
  value: string;
  onChange: (val: string) => void;
}

export const InputField = ({ placeholder, value, onChange }: Props) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="border p-2 rounded w-full focus:outline-blue-500"
  />
);
