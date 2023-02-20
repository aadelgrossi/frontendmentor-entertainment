import { ParentProps } from "solid-js";
import Navbar from "./Navbar";

const Layout = (props:ParentProps) => {
  return (
    <div class="min-h-screen w-full bg-background flex flex-col text-text lg:flex-row">
      <Navbar />
      <main class="w-full flex flex-col px-4 md:px-6 lg:px-10 mt-4 lg:mt-8 gap-10">
        {props.children}
      </main>
    </div>
  )
}

export default Layout