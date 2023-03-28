import { useParams } from "react-router-dom";
import { useState, useEffect, useRef, Fragment } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import logoImg from "../assets/images/logo-white.png";
import MicroPhone from "../components/MicroPhone";
import usaImage from "../assets/images/usa.jpg";
import loadingGif from "../assets/images/loading.gif";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export default function Talk() {
  const serverAlert = withReactContent(Swal);
  let data = [
    {
      name: "",
      time: "",
      role: "avatar",
      content:
        "Hello welcom tutor CHT. <br/>What topic do you want to talk about? talk about? talk about? talk about?",
      id: 0,
    },
    {
      name: "",
      time: "",
      role: "user",
      content:
        "Good morning, Teacher Jennifer！My name is Ryan, I'm here to learn as much as I can from you and to work",
      id: 1,
    },
    {
      name: "",
      time: "",
      role: "avatar",
      content:
        "Actually, I just saw the new Marvel movie last weekend. It was really action-packed and had some great special effects.",
      id: 2,
    },
  ];
  const { level } = useParams();
  const [toggled, setToggled] = useState(false);
  const [microState, setMicroState] = useState("speak");
  const toggledRef = useRef(toggled);
  const dialogueElRef = useRef(null);
  const speakTxtElRef = useRef(null);
  const [conversation, setConversation] = useState([]);
  const [initUserClassName, setUserClassName] = useState("user-speak loading");
  const [speakTxt, setSpeakTxt] = useState("");
  const indexRef = useRef(0);
  const bgImgStyle = {
    background: `url(${usaImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    objectFit: "cover",
    height: "100vh",
  };
  const speakDisplayClass =
    microState === "send" ? "border-4 border-[#056dfa]" : "border-0";
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  //init
  useEffect(() => {
    (async () => {
      await delay(500);
      setConversation([data[indexRef.current]]);
    })();
  }, []);
  //塞入資料
  useEffect(() => {
    const fetchData = async () => {
      if (microState === "send") {
        // setConversation((pre) => {
        //   return [...pre, data[indexRef.current]];
        // });
        // indexRef.current += 1;
        await delay(2500);
        setSpeakTxt(
          "Good morning, Teacher Jennifer！My name is Ryan, I'm here to learn as much as I can from you and to work"
        );
      }
      if (microState === "disable") {
        // await delay(2500);
        setConversation((pre) => {
          return [...pre, data[2]];
        });
        setToggled(false);
        await delay(2000);
        setSpeakTxt("");
        setMicroState("speak");
      }
    };
    fetchData();
  }, [microState]);

  useEffect(() => {
    toggledRef.current = toggled;
  }, [toggled]);

  useEffect(() => {
    dialogueElRef.current.scrollToBottom();
  }, [conversation]);

  useEffect(() => {
    speakTxtElRef.current.scrollToRight();
  }, [speakTxt]);

  return (
    <div style={bgImgStyle} className="relative h-full flex-1">
      {/* avatar 區塊 */}
      <div className="avatar-area">
        <div className="avatar3D">放avatar</div>
      </div>
      <div className="relative mx-auto flex h-full max-w-[1688px] flex-col">
        {/* logo圖片 */}
        {/* <img
          src={logoImg}
          alt="logo"
          className=" absolute top-[64px] left-1/2 translate-x-[-50%] lg:left-[52px] lg:translate-x-0"
        /> */}
        <div style={{ height: "100%" }} />
        {/* dialogue 區塊，透過max-Height調整對話框高度 */}
        <Scrollbars
          ref={dialogueElRef}
          style={{ maxHeight: "250px", zIndex: 99 }}
        >
          <div className="dialogue-area px-5 lg:px-12">
            {conversation.map((data) => {
              return (
                <Fragment key={data.id}>
                  {data.role === "avatar" &&
                    ["speak", "send"].indexOf(microState) >= 0 && (
                      <div
                        className="avatar-speak"
                        dangerouslySetInnerHTML={{
                          __html: data.content,
                        }}
                      >
                        {/* <div className="text">{data.content}</div> */}
                      </div>
                    )}
                  {data.role === "avatar" && microState.includes("disable") && (
                    <img
                      src={loadingGif}
                      className="avatar-speak-loading"
                      alt="wait until the speak load"
                    />
                  )}
                  {data.role === "user" && (
                    <div className="user-speak">{data.content}</div>
                  )}
                </Fragment>
              );
            })}
          </div>
        </Scrollbars>

        {/* micro 區塊*/}
        <div className="z-10 flex w-full items-center justify-center py-4 px-4 lg:px-28">
          <div
            className={`mr-2 flex h-12 flex-1 items-center rounded-[40px] bg-white py-2 px-4 placeholder-[#969596] outline-0 lg:mr-6 lg:px-6 ${speakDisplayClass}`}
          >
            <Scrollbars
              autoHide={true}
              ref={speakTxtElRef}
              renderTrackHorizontal={() => <div />}
            >
              <div className="flex h-full items-center">
                {microState.includes("speak") && (
                  <span className="whitespace-nowrap text-[#969596]">
                    按下錄音按鈕，開始對談
                  </span>
                )}
                {microState.includes("send") && speakTxt === "" && (
                  <span className="speak-before whitespace-nowrap text-[#969596]">
                    收音中，請開始說話
                  </span>
                )}
                {microState.includes("send") && speakTxt !== "" && (
                  <span className="speak-after whitespace-nowrap text-[#056dfa]">
                    {speakTxt}
                  </span>
                )}
              </div>
            </Scrollbars>
          </div>
          <MicroPhone
            state={microState}
            onClick={() => {
              // 警告彈窗
              // Swal.fire({
              //   width: "360px",
              //   title: "無法連線至系統",
              //   text: "因連線不穩，導致系統伺服器已斷線，請點擊下方「重新啟動」按鈕以再次和虛擬導師進行對談。",
              //   allowOutsideClick: false,
              //   // confirmButtonColor: "#056dfa",
              //   buttonsStyling: false,
              //   confirmButtonText: "重新啟動",
              //   customClass: {
              //     popup: "alert-popup",
              //     title: "alert-title",
              //     htmlContainer: "alert-container",
              //     actions: "alert-action-block",
              //     confirmButton: "alert-confirm-btn",
              //   },
              // }).then((result) => {
              //   if (result.isConfirmed) {
              //     //確認後要做的事情
              //   }
              // });
              if (conversation.length === 3) {
                setConversation([]);
                return;
              }
              if (microState === "disable") return;
              setToggled(!toggled);
              toggled ? setMicroState("speak") : setMicroState("send");
              if (toggled && speakTxt !== "") {
                setConversation((pre) => {
                  return [...pre, data[1]];
                });
                setMicroState("disable");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
