"use client"

import { ModalType, useModalManagement } from "@/store/modalManagement"
import { Button } from "./ui/button"

interface LimitCardProps {
    amount: number
    className?: string
    amountClassName?: string
    title?: string
    titleClassName?: string
    percentage: number
    addType: ModalType
}

const LimitCard = ({amount, className, amountClassName, title, titleClassName, percentage, addType}: LimitCardProps) => {
    const { openModal } = useModalManagement()

  return (
    <div
      className={`bg-[#F6F6F6] text-black rounded-xl p-4 flex flex-col gap-4 border border-black/10 ${className} justify-between`}
    >
      <h1 className={titleClassName}>{title}</h1>
      <div>
        <>
          {amount ? (
            <div className="flex flex-col gap-2">
              <div className="h-3 rounded-full overflow-hidden bg-black/10">
                <div 
                  className={`bg-linear-to-r from-[#EB5528] to-[#FE9164] h-full rounded-full transition-all duration-[2000ms] ease-in-out`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <div className={`flex justify-between ${amountClassName}`}>
                <h1>0</h1>
                <h1>₹ {amount}</h1>
              </div>
            </div>
          ) : (
            <Button
              className="bg-foreground border border-black/10 px-4 py-2 text-background rounded-full cursor-pointer hover:bg-background hover:text-white text-lg"
              onClick={() => openModal(addType)}
            >
              Add {addType}
            </Button>
          )}
        </>
      </div>
    </div>
  );
}

export default LimitCard