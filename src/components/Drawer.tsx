import React, { useState } from "react";
import {
  FaBars,
  FaCog,
  FaGlobe,
  FaRobot,
  FaTwitter,
} from "react-icons/fa";
import { BiRotateLeft } from "react-icons/bi";
import FadeOut from "./motions/FadeOut";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useRouter } from 'next/router';  
import firebase from '../config/firebaseConfig';


const Drawer = ({
  showHelp,
  showSettings,
}: {
  showHelp: () => void;
  showSettings: () => void;
}) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [agents, setAgents] = React.useState<string[]>([]);
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };

  const toggleDrawer = () => {
    setShowDrawer((prevState) => !prevState);
  };

  return (
    <>
      <button
        hidden={showDrawer}
        className="fixed left-2 top-2 z-40 rounded-md border-2 border-white/20 bg-zinc-900 p-2 text-white hover:bg-zinc-700 md:hidden"
        onClick={toggleDrawer}
      >
        <FaBars />
      </button>
      <div
        id="drawer"
        className={clsx(
          showDrawer ? "translate-x-0" : "-translate-x-full",
          "z-30 m-0 h-screen w-72 flex-col justify-between bg-zinc-900 p-3 font-mono text-white shadow-3xl transition-all",
          "absolute",
          "flex md:static md:translate-x-0"
        )}
      >
        <div className="flex flex-col gap-1 overflow-hidden">
          <div className="mb-2 flex justify-center gap-2">
            <DrawerItem
              className="flex-grow"
              icon={<BiRotateLeft />}
              border
              text="Restart"
              onClick={() => location.reload()}
            />
            <button
              className="z-40 rounded-md border-2 border-white/20 bg-zinc-900 p-2 text-white hover:bg-zinc-700 md:hidden"
              onClick={toggleDrawer}
            >
              <FaBars />
            </button>
          </div>
          <AnimatePresence>
            {agents.map((agent, index) => (
              <FadeOut key={`${index}-${agent}`}>
                <DrawerItem icon={<FaRobot />} text= "Restart" />
              </FadeOut>
            ))}

            {agents.length === 0 && (
              <div>
                Click the above button to restart.
              </div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-col gap-1">
          <hr className="my-5 border-white/20" />
          {/*<DrawerItem*/}
          {/*  icon={<FaTrashAlt />}*/}
          {/*  text="Clear Agents"*/}
          {/*  onClick={() => setAgents([])}*/}
          {/*/>*/}
          <DrawerItem icon={<FaCog />} text="Settings" onClick={showSettings} />
          <DrawerItem
            icon={<FaGlobe />}
            text="Website"
            href="https://www.usebooster.ai/"
            target="_blank"
          />
          <DrawerItem
            icon={<FaTwitter />}
            text="Twitter"
            href="https://twitter.com/booster_ai"
            target="_blank"
          />
          {/*<button onClick={handleLoginClick}>Log In</button>*/}
        </div>
      </div>
    </>
  );
};

interface DrawerItemProps extends Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target'> {
  icon: React.ReactNode;
  text: string;
  border?: boolean;
  onClick?: () => void;
  className?: string;
}

const DrawerItem = (props: DrawerItemProps) => {
  const {
    icon,
    text,
    border,
    href,
    target,
    onClick,
    className,
  } = props;

  if ( href ) {
    return (
      <a
        className={clsx(
          "flex cursor-pointer flex-row items-center rounded-md p-2 hover:bg-white/5",
          border && "border-[1px] border-white/20",
          `${className || ""}`
        )}
        href={href}
        target={target ?? "_blank"}
      >
        {icon}
        <span className="text-md ml-4">{text}</span>
      </a>
    );
  }
  else {
    return (
      <button
        type='button'
        className={clsx(
          "flex cursor-pointer flex-row items-center rounded-md p-2 hover:bg-white/5",
          border && "border-[1px] border-white/20",
          `${className || ""}`
        )}
        onClick={onClick}
      >
        {icon}
        <span className="text-md ml-4">{text}</span>
      </button>
    );
  }
};
export default Drawer;
