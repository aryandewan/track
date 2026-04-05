import Form from "next/form"
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useModalManagement } from "@/store/modalManagement";
import { addTransaction } from "@/lib/actions";

const TransactionForm = () => {
    const closeModal = useModalManagement((state) => state.closeModal);
    
    const handleSubmit = async (formData: FormData) => {
        await addTransaction(formData);
        closeModal();
    }

    return (
      <Form action={handleSubmit} className="flex flex-col gap-5">
        <Input
          id="txn-description"
          name="txn-description"
          placeholder="e.g. Weekly groceries"
          className="bg-transparent border border-black/10 text-black w-full px-2 h-12"
        />

        <div className="grid grid-cols-2 gap-5">
          <Input
            id="txn-amount"
            name="txn-amount"
            type="number"
            step="0.01"
            min="0"
            placeholder="0.00"
            className="bg-transparent border border-black/10 text-black w-full px-2 h-12"
          />

          <Input
            id="txn-date"
            name="txn-date"
            type="date"
            className="bg-transparent border border-black/10 text-black w-full px-2 h-12"
          />
        </div>
        <div className="flex gap-3 pt-2">
          <Button
            type="button"
            variant="secondary"
            className="flex-1 bg-foreground border border-black/10 p-3 text-background rounded-full cursor-pointer hover:bg-background hover:text-white text-lg"
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="flex-1 border border-black/10 p-3 text-white rounded-full cursor-pointer text-lg"
          >
            Add Transaction
          </Button>
        </div>
      </Form>
    );
}

export default TransactionForm;