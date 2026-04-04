import { Button } from "./ui/button";

type SummaryCardProps = {
  amount? : number;
  title : string;
  titleClassName? : string
  className? : string
  addType?: string
}

const SummaryCard = ({amount, title, titleClassName, className, addType}: SummaryCardProps) => {
  return (
    <div className={`bg-[#F6F6F6] text-black rounded-xl p-4 flex flex-col gap-4 border border-black/10 ${className}`}>
      <h1 className={titleClassName}>{title}</h1>
      <div>
        <h2>
          {amount ? (
            <>₹{amount}</>
          ) : (
            <Button className="bg-foreground border border-black/10 px-4 py-2 text-background rounded-full cursor-pointer hover:bg-background hover:text-white text-lg">
              Add {addType}
            </Button>
          )}
        </h2>
      </div>
    </div>
  );
}
export default SummaryCard