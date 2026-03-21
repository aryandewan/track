import { outfit } from "@/config/fonts";

const hero = () => {
  return (
    <>
      <nav
        className={`bg-[#FFFFFF] text-background fixed top-3 inset-x-5 ${outfit.className} rounded-full p-5 grid grid-cols-[1fr_auto_1fr] items-center`}
      >
        <h1 className="text-xl font-bold cursor-default">TRACK</h1>
        <ul className="flex items-center gap-3">
          <li className="cursor-pointer hover:text-primary transition hover:bg-background/10 px-4 py-2 rounded-full">
            Home
          </li>
          <li className="cursor-pointer hover:text-primary transition hover:bg-background/10 px-4 py-2 rounded-full">
            Features
          </li>
          <li className="cursor-pointer hover:text-primary transition hover:bg-background/10 px-4 py-2 rounded-full">
            Pricing
          </li>
          <li className="cursor-pointer hover:text-primary transition hover:bg-background/10 px-4 py-2 rounded-full">
            Contact
          </li>
        </ul>
        <div className="flex items-center justify-end gap-3">
          <button className="text-background px-4 py-2 rounded-full hover:bg-background/10 transition cursor-pointer">
            Sign Up
          </button>
          <button className="text-background px-4 py-2 rounded-full hover:bg-background/10 transition cursor-pointer">
            Login
          </button>
        </div>
      </nav>
      <section className="min-h-dvh w-full flex items-center justify-center bg-[#F6F5EE] text-background">
        <h1 className="text-4xl font-bold text-center mt-10">
          Welcome to My Portfolio
        </h1>
      </section>
    </>
  );
}
export default hero
