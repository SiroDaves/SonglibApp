import Link from 'next/link';
import { info } from "@/utils/data/app-info";
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();
  const githubForkUrl = `${info.github}/songlibapp/fork`;
  return (
    <div className="relative border-t bg-[#331900] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © {currentYear} Siro Daves
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href={info.github}
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <IoStar />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href={githubForkUrl}
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;