export default function InputField({ type, name, placeholder, value, onChange, min, step }) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            min={min}
            step={step}
            className="w-full p-2 border rounded"
        />
    );
}
