interface Props {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: Props) => (
  <button
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    onClick={onClick}
  >
    {label}
  </button>
);
