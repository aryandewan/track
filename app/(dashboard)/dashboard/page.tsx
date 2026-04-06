import SummaryCard from "@/src/components/SummaryCard";
import DashboardShell from "./DashboardShell";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import LimitCard from "@/src/components/LimitCard";

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

  const limit = await prisma.user.findUnique({
    where: {
      id: session?.user?.id
    },
    select: {
      limit: true
    }
  })
  
  const montlyExpenses = await prisma.transactions.aggregate({
    where: {
      userId: session?.user?.id,
      date: {
        gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        lte: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
      },
    },
    _sum: {
      amount: true,
    },
  });

  const newSalary = salary?.salary || 0
  const totalExpenses = expenses._sum.amount || 0
  const balance = newSalary - totalExpenses
  const totalMontlyExpenses = montlyExpenses._sum.amount || 0
  const monthlyLimit = limit?.limit || 0
  const percentage = Math.round(((totalMontlyExpenses / monthlyLimit) * 100) || 0)

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
            amount={totalMontlyExpenses}
            title="Total Expenses"
            titleClassName="text-xl"
            amountClassName="text-4xl"
            addType="transactions"
          />
          <LimitCard
            amount={monthlyLimit}
            title="Monthly Spending Limit"
            titleClassName="text-xl"
            className="col-span-2"
            addType="limit"
            amountClassName="text-sm"
            percentage={percentage}
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
