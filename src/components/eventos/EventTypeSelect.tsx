interface EventTypeSelectProps {
  value: string
  onChange: (value: string) => void
  options: string[]
}

export default function EventTypeSelect({ value, onChange, options }: EventTypeSelectProps) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full p-5 relative z-10 rounded-lg bg-white shadow-sm "
    >
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}
