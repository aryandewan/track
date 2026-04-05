"use client"

import Modal from "@/src/components/Modal";
import { useModalManagement } from "@/store/modalManagement";
import { useSession } from "next-auth/react";

const DashboardShell = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const { isModalOpen } = useModalManagement()

  return (
    <section className="min-h-dvh w-full bg-[#f6f5ee]">
      <div className={`flex flex-row gap-1 p-4`}>
        <h1 className="text-black text-4xl">Howdy,</h1>
        {session?.user?.name && (
          <h1 className="text-black text-4xl font-bold">{session.user.name}</h1>
        )}
      </div>
      <div className={`flex flex-1 flex-col gap-4 px-4`}>
        {children}
      </div>
      <Modal>
        <h1>Modal</h1>
      </Modal>
    </section>
  );
};

export default DashboardShell;
