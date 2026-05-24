interface ButtonProps {
  label: string
  onClick: VoidFunction
}

export function Button({ label, onClick } : ButtonProps) {
  return <button className="" onClick={onClick}>{label}</button>
}