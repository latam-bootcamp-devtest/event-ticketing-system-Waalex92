export default function Button({ text, onClick, type = "button", className = "" }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-4 py-2 text-white rounded ${className}`}
        >
            {text}
        </button>
    );
}
