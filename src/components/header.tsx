import Link from "next/link";
import Image from "next/image"; 
import HeaderSheet from "./headersheet";
export default function Header() {
  return ( 
    // <main className="bg-[#000000] border-[1px] border-white h-[73px]  mx-auto">
    <main className="sticky top-0 z-50 backdrop-blur-lg  h-[73px] mx-auto shadow-md">
      <section className=" flex justify-between  text-[#ffff]">
        <div className="md:flex hidden rounded-lg md:ml-7 ">
          <Image
            src={"/images/LogoRAYS(5).png"}
            className=" md:mx-auto "
            width={91}
            height={91}
            alt="logo"
          />
        </div>
        <div className="md:hidden mb-3 flex rounded-lg ">
          <Image
            src={"/images/LogoRAYS(5).png"}
            className=" ml-3 mt-3 mx-auto "
            width={57}
            height={57}
            alt="logo"
          />
        </div>
        
        <nav className=" glacial-font md:flex my-5 md:justify-between hidden  ">
          <ul className="flex md:space-x-7 text-2xl  md:mr-11 ">
          <li><Link href="/#service" className="hover:underline">Services</Link></li>
          <li><Link href="/projects" className="hover:underline">Work</Link></li>
          <li><Link href="/#contact" className="hover:underline">Ask</Link></li>
          <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
          <li><Link href="/calendly" className="hover:underline">Book Meeting</Link></li>
          </ul>
        </nav>
        <HeaderSheet />
      </section>
    </main>
  );
}
