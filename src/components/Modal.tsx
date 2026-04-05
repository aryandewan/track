"use client";

import { useModalManagement } from "@/store/modalManagement";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import SalaryForm from "./forms/salary-form";
import TransactionForm from "./forms/transaction-form";

const Modal = () => {
  const { closeModal, isModalOpen, type } = useModalManagement();
  if (!isModalOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in"
        onClick={closeModal}
      />
      <div className="relative bg-[#f6f5ee] p-4 rounded-lg text-black w-full max-w-lg space-y-5">
        <div className="flex justify-between items-center gap-10">
          <h1 className="text-2xl font-bold">
            {type === "salary" && "Add Salary"}
            {type === "limit" && "Add Limit"}
            {type === "transactions" && "Add Transactions"}
          </h1>
          <Button
            onClick={closeModal}
            className="bg-foreground border border-black/10 p-3 text-background rounded-full cursor-pointer hover:bg-background hover:text-white text-lg"
          >
            <X />
          </Button>
        </div>
        {type === "salary" && <SalaryForm />}
        {type === "limit" && "Coming Soon"}
        {type === "transactions" && <TransactionForm />}
      </div>
    </div>
  );
};

export default Modal;
