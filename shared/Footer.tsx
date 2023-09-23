import { FaYoutube } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaSnapchatGhost } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="font-mono">
      <div className="flex justify-around max-w-sm">
        <a href="https://www.youtube.com/@liamcotton">
          <FaYoutube size={30} />
        </a>
        <a href="https://www.instagram.com/asienliam/">
          <BiLogoInstagramAlt size={30} />
        </a>
        <a href="https://www.snapchat.com/add/liamcco">
          <FaSnapchatGhost size={30} />
        </a>
      </div>
    </footer>
  );
}
