import Navbar from "@/src/navbar";

const layout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}
export default layout