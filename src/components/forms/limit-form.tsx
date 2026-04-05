import Form from "next/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { addLimit } from "@/lib/actions"

import { useModalManagement } from "@/store/modalManagement"

const LimitForm = () => {
    const closeModal = useModalManagement((state) => state.closeModal);
    
    const handleSubmit = async (formData: FormData) => {
        await addLimit(formData);
        closeModal();
    }

    return (
        <Form action={handleSubmit} className="flex flex-col gap-5">
            <Input
                id="limit"
                name="limit"
                type="number"
                step="0.01"
                min="0"
                placeholder="0.00"
                className="bg-transparent border border-black/10 text-black w-full px-2 h-12"
            />
            <Button
                type="submit"
                className="bg-foreground border border-black/10 p-3 text-background rounded-full cursor-pointer hover:bg-background hover:text-white text-lg w-full"
            >
                Add Limit
            </Button>
        </Form>
    )
}

export default LimitForm