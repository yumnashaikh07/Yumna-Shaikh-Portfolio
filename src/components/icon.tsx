import { FaEnvelope, FaLinkedin,  FaGithub} from "react-icons/fa";

const ContactIcons = () => {
  return (
    <main><h1 className='text-3xl md:ml-14 mx-auto font-bold '>GET TO KNOW MORE</h1>
    <section className=" mt-3 p-5  text-black flex">
    
      <a
        href="mailto:"
        aria-label="Email"
      >
        <FaEnvelope size={31} className="md:ml-10 text-[#4db564] hover:text-white"/>
      </a>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={35} className="md:ml-16 ml-10 text-blue-600 hover:text-white" />
      </a>
      {/* <a
        href="tel:"
        aria-label="Phone"
      >
        <FaPhone size={31} className="md:ml-14 ml-10 text-blue-700 hover:text-white" />
       
      </a> */}
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className=" text-[#463976] hover:text-white"
      >
        <FaGithub size={37}  className="md:ml-12 ml-8" />
      </a>

      </section>
      <section className="font-semibold  text-black flex ">
      <div className="md:ml-14 ml-3  hover:text-[#1f4676]">Email</div>
      <div className="md:ml-11 ml-5 hover:text-[#1f4676]">LinkedIn</div>
      <div className="md:ml-7 ml-5 hover:text-[#1f4676]">Github</div>
      <div className="md:ml-7 ml-5 hover:text-[#1f4676] "></div>
      </section>
    </main>
  );
};

export default ContactIcons;

