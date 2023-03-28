import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logoImg from "../assets/images/logo-white.png";
import introVideo from "../assets/tutorCht.mp4";
import Button from "../components/Button";

export default function Home() {
  const [isTeaching, setIsTeaching] = useState(false);
  return (
    <>
      <div className="h-screen max-h-full w-full">
        <div className="home-bg absolute top-0 left-0 h-full w-full"></div>
        <video
          src={introVideo}
          className="h-full w-full object-cover object-center"
          autoPlay
          loop
          muted
        ></video>
        <div className="level absolute top-1/2 left-1/2 flex min-w-[310px] -translate-x-1/2 -translate-y-1/2 flex-col items-center  justify-center rounded-lg bg-[#353535b3] py-12 px-8 text-white opacity-95 shadow-[0_0_0_0_rgba(0,0,0,0.12)]">
          <img src={logoImg} alt="logo" />
          <div className="mb-9 text-[16px]">
            {isTeaching
              ? "導師目前上課中，請您稍待片刻"
              : "請選擇您要對談導師的英文程度"}
          </div>
          {/* <div className="mb-4 text-4xl text-center">
            Practice English with AI Teachers,Anytime,Anywhere!
          </div> */}
          <Link to="/talk/1" className="mb-6">
            <Button disabled={isTeaching} onClick={() => {}}>
              Level 1 ｜ 容易
            </Button>
          </Link>
          <Link to="/talk/2" className="mb-6">
            <Button disabled={isTeaching} onClick={() => {}}>
              Level 2 ｜ 中等
            </Button>
          </Link>
          <Link to="/talk/3" className="">
            <Button disabled={isTeaching} onClick={() => {}}>
              Level 2 ｜ 困難
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
