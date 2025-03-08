import Button from "../../components/Button"
import InputField from "../../components/InputField"

export default function MenuView({
    data,
    formData,
    handleGoBack,
    handleSubmit,
    handleChange
}) {
    return (
        <div className="">
            <div className="space-x-2 flex place-content-end">
                <Button text="Go Back" onClick={() => handleGoBack()} className="bg-blue-500 hover:bg-blue-600" />
            </div>
            <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Events</h1>

            <form onSubmit={handleSubmit} className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
                <div className="grid grid-cols-1 gap-4">
                    <InputField type="text"
                        name="name"
                        placeholder="Event Name"
                        value={formData.name}
                        onChange={handleChange} />
                    <InputField
                        type="date"
                        name="date"
                        placeholder="Date"
                        value={formData.date}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                    />
                    <InputField type="text"
                        name="image"
                        placeholder="Image"
                        value={formData.image}
                        onChange={handleChange} />
                    <InputField type="number"
                        name="price"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleChange} />
                    <InputField type="text"
                        name="location"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleChange} />
                    <Button type="submit" text={formData.id ? "Update Event" : "Add Event"} className="bg-green-500 hover:bg-green-600" />
                </div>
            </form>
            <ul className="space-y-4 flex flex-row justify-between">
                {data.length > 0 ? (
                    data.map((data) => (
                        <li key={data.id} className="flex flex-col justify-around  p-4 m-4 border rounded-lg shadow-md bg-gray-50">
                            <div>
                                <img src={data.image} alt="Logo" />
                                <p className="text-lg font-semibold text-gray-700">Show name: {data.name}</p>
                                <p className="text-gray-600">Date: {Date(data.date)}</p>
                                <p className="text-gray-600">Price: {data.price}</p>
                            </div>
                            <div className="space-x-2">
                                <Button text="Edit" onClick={() => console.log("edit")} className="bg-yellow-500 hover:bg-yellow-600" />
                                <Button text="Delete" onClick={() => console.log("delete")} className="bg-red-500 hover:bg-red-600" />
                            </div>
                        </li>
                    ))
                ) : (
                    <p className="text-gray-500 text-center">No Events found.</p>
                )}
            </ul>
        </div>
    )
}