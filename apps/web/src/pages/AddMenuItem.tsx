import { useState } from "react";
import { AddMenuBodyError, addMenuItemService } from "../services/quickmatch/addMenuItem";
import { ApiError } from "../services/error";

const AddMenuItem = () => {

    const [formValue, setFormValue] = useState({
        name: "",
        description: "",
        key: ""
    });

    const [coverImage, setCoverImage] = useState<File | null>(null);

    const [formErrors, setFormErrors] = useState({
        name: "",
        description: "",
        key: "",
        coverImage: ""
    })

    const handleChange = (key: keyof typeof formValue, value: string) => setFormValue(prev => ({ ...prev, [key]: value }))

    const handleCoverImageChange: React.ChangeEventHandler<HTMLInputElement> = (e) => setCoverImage(e.target.files ? e.target.files[0] : null)



    const isFormValid = () => {
        const localErrorObj: typeof formErrors = {
            name: "",
            coverImage: "",
            description: "",
            key: ""
        }


        if (!formValue.name) localErrorObj.name = "name is required";

        if (!formValue.description) localErrorObj.description = "description is required";

        if (!formValue.key) localErrorObj.key = "key is required"

        if (coverImage === null) localErrorObj.coverImage = "cover image is required";

        setFormErrors(localErrorObj);

        if (localErrorObj.name || localErrorObj.description || localErrorObj.coverImage || localErrorObj.key) return false
        return true
    }



    const handleSubmit: React.FormEventHandler = async (e) => {
        e.preventDefault();

        if (isFormValid() === false) return

        const { name, description, key } = formValue;
        const result = await addMenuItemService({ name, key, description, coverImage: coverImage as File })

        if (result instanceof AddMenuBodyError) setFormErrors(prev => ({ ...prev, ...result.errors }))

        if (result instanceof ApiError) return alert(result.message)
        else alert("success")

        setFormValue(prev => ({ ...prev, name: "", description: "" }))
    }


    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <form onSubmit={handleSubmit}>
                <label className="block">Name {formErrors.name ? `- ${formErrors.name}` : ""}</label>
                <input type="text" placeholder="name" value={formValue.name} onChange={e => handleChange("name", e.target.value)}
                    className="rounded-lg text-lg py-2 px-4 border-solid border-gray-600 border-2
                        mb-4" required />


                <label className="block">Description {formErrors.description ? `- ${formErrors.description}` : ""}</label>
                <textarea placeholder="description" value={formValue.description} onChange={e => handleChange("description", e.target.value)}
                    className="rounded-lg text-lg py-2 px-4 border-solid border-gray-600 border-2
                        mb-4 w-[500px] h-[200px]" required />


                <label className="block">Cover Image {formErrors.coverImage ? `- ${formErrors.coverImage}` : ""}</label>
                <input type="file" onChange={handleCoverImageChange}
                    className="rounded-lg text-lg py-2 px-4 border-solid border-gray-600 border-2
                    mb-4" required />


                <label className="block">Key {formErrors.key ? `- ${formErrors.key}` : ""}</label>
                <input type="text" placeholder="key" value={formValue.key} onChange={e => handleChange("key", e.target.value)}
                    className="rounded-lg text-lg py-2 px-4 border-solid border-gray-600 border-2
                        mb-4" required />

                <button type="submit" className="py-2 px-6 bg-lime-500 rounded-2xl text-gray-600 block">Submit</button>

            </form>
        </div>
    );
}

export default AddMenuItem;