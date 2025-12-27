type ButtonProps = {
    label: string;
    onClick: () => void;
    variant?: "primary" | "secondary" | "ghost";
};

export default function Button({
    label,
    onClick,
    variant = "primary",
}: ButtonProps) {
    const base = `
    px-4 py-2 rounded-lg text-sm font-medium
    backdrop-blur-md
    border border-white/10
    transition-all duration-200
    active:scale-[0.97]
  `;

    const variants = {
        primary: `
      bg-blue-500/20 text-blue-300
      hover:bg-blue-500/30
      hover:shadow-lg hover:shadow-blue-500/20
    `,
        secondary: `
      bg-white/10 text-gray-200
      hover:bg-white/20
    `,
        ghost: `
      bg-transparent text-gray-300
      hover:bg-white/10 hover:text-white
    `,
    };

    return (
        <button onClick={onClick} className={`${base} ${variants[variant]}`}>
            {label}
        </button>
    );
}
