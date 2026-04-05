"use client";

import Form from "next/form";
import { addSalary } from "@/lib/actions";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const SalaryForm = () => {
  return (
    <Form
      action={addSalary}
      className="flex flex-col items-center justify-center gap-5"
    >
      <div className="w-full">
        <Input
          type="number"
          id="salary"
          name="salary"
          placeholder="0.00"
          min="0"
          className="bg-transparent border border-black/10 text-black w-full px-2 h-12"
        />
      </div>
      <Button
        type="submit"
        className="bg-foreground border border-black/10 p-3 text-background rounded-full cursor-pointer hover:bg-background hover:text-white text-lg w-full"
      >
        Add Salary
      </Button>
    </Form>
  );
};

export default SalaryForm;
