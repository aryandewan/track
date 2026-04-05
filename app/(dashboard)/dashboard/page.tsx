import SummaryCard from "@/src/components/SummaryCard";
import DashboardShell from "./DashboardShell";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

const Page = async () => {
  const session = await auth()
  const salary = await prisma.user.findUnique({
    where: {
      id: session?.user?.id
    },
    select: {
      salary: true
    }
  })

  const expenses = await prisma.transactions.aggregate({
    where: {
      userId: session?.user?.id,
      amount: {
        gt: 0
      }
    },
    _sum: {
      amount: true
    }
  })

  const newSalary = salary?.salary || 0
  const totalExpenses = expenses._sum.amount || 0
  const balance = newSalary - totalExpenses

  return (
    <DashboardShell>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <SummaryCard
          amount={balance}
          title="Total Balance"
          titleClassName="text-4xl"
          addType="salary"
          amountClassName="text-7xl"
        />
        <div className="grid md:grid-rows-2 md:grid-cols-2 gap-4 bg-[#EDEDED] p-4 rounded-xl">
          <SummaryCard
            amount={salary?.salary || 0}
            title="Total Income"
            titleClassName="text-xl text-white"
            addType="salary"
            amountClassName="text-4xl text-white"
            className="bg-linear-to-t from-[#EB5528] to-[#FE9164]"
          />
          <SummaryCard
            amount={totalExpenses}
            title="Total Expenses"
            titleClassName="text-xl"
            amountClassName="text-4xl"
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
