import SummaryCard from "@/src/components/SummaryCard";
import DashboardShell from "./DashboardShell";

const Page = () => {
  return (
    <DashboardShell>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <SummaryCard 
          title="Total Balance"
          titleClassName="text-4xl" 
          className="flex justify-between"
          addType="salary"
        />
        <div className="grid md:grid-rows-2 md:grid-cols-2 gap-4 bg-[#EDEDED] p-4 rounded-xl">
          <SummaryCard
            title="Total Income"
            titleClassName="text-3xl"
            addType="salary"
          />
          <SummaryCard
            title="Total Expenses"
            titleClassName="text-3xl"
            addType="transactions"
          />
          <SummaryCard
            title="Monthly Spending Limit"
            titleClassName="text-3xl"
            className="col-span-2"
            addType="limit"
          />
        </div>
        <SummaryCard
          amount={1000}
          title="Total Expenses"
          titleClassName="text-4xl"
          addType="transactions"
        />
      </div>
      <div className="min-h-dvh flex-1 rounded-xl bg-background/50" />
    </DashboardShell>
  );
}

export default Page;
