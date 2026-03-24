import { mono } from "@/config/fonts"
import Page from "@/pages/signup"

const page = () => {
  return (
    <div className={`h-screen w-full flex items-center justify-center ${mono.className}`}>
      <Page/>
    </div>
  )
}
export default page