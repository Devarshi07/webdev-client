import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdHome } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
      </div>
      <div id="wd-ai-icons" className="mt-3 flex gap-3">
        <MdHome className="text-4xl text-blue-600" />
        <HiAcademicCap className="text-4xl text-green-600" />
      </div>

      <h3 className="mt-3 text-base font-semibold">My icons</h3>
      <div className="flex gap-3">
        <BsLinkedin className="text-4xl text-blue-700" />
        <BsGithub className="text-4xl text-neutral-800" />
      </div>
    </div>
  );
}
