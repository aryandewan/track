import { outfit } from "@/config/fonts";
import { Dbnavbar } from "@/src/components/dbnavbar";
import Sidebar from "@/src/components/sidebar";


const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className={`${outfit.className} flex h-dvh bg-[#f6f5ee]`}>
      <Sidebar className = "my-auto"/>
      <div className="flex-1 min-w-0 overflow-y-auto no-scrollbar">
        <Dbnavbar />
        <div className="bg-background/10 h-px"/>
        {children}
      </div>
    </main>
  );
};
export default layout;
