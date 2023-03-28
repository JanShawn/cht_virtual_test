// import { useRef } from "react";
import { useRef } from "react";
//loading,speaking css保留 prop移除
//* state: speak,disable,send *//
function MicorPhone({ onClick, state = "speak" }) {
  state = state === "disable" ? "speak-disable" : state;
  console.log(state);
  const elRef = useRef(null);
  const iconClassName =
    state === "send" ? "relative " : "flex items-center justify-center";
  return (
    <div
      ref={elRef}
      className={`${state} ${iconClassName} h-[64px] min-w-[64px] cursor-pointer  rounded-full `}
      onClick={onClick}
    >
      {["speak", "speak-disable"].indexOf(state) >= 0 && (
        <svg width="36" height="36" viewBox="0 0 56 56" fill="none">
          <rect
            x="21"
            y="6"
            width="14"
            height="25"
            rx="7"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M28 40V47"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M19 47H37"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M44 24C44 32.8366 36.8366 40 28 40C19.1635 40 12 32.8366 12 24"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      )}

      {state.includes("send") && (
        <div className="flex h-full items-center justify-center">
          <svg width="36" height="36" viewBox="0 0 56 56" fill="none">
            <path
              d="M51.9991 5.87705C51.9995 5.8441 51.9991 5.81189 51.998 5.77894C51.9958 5.69878 51.9874 5.61898 51.9753 5.54028C51.9706 5.51283 51.9684 5.4861 51.9632 5.46011C51.9424 5.35982 51.9127 5.26062 51.8758 5.16472C51.8651 5.138 51.8516 5.11237 51.8402 5.08602C51.8073 5.01244 51.77 4.94179 51.7279 4.87262C51.7107 4.84443 51.6931 4.81661 51.6737 4.78916C51.6118 4.69948 51.5441 4.61272 51.4654 4.53402C51.3867 4.45532 51.2996 4.3876 51.2099 4.325C51.1825 4.3067 51.1554 4.28986 51.1279 4.27266C51.0576 4.2291 50.9852 4.19139 50.9101 4.15771C50.8849 4.14673 50.8607 4.13355 50.8355 4.12404C50.7384 4.08634 50.6385 4.05632 50.5375 4.03545C50.513 4.03033 50.4877 4.02813 50.4628 4.02447C50.3816 4.01129 50.2996 4.00361 50.2168 4.00068C50.1854 4.00031 50.155 3.99958 50.1235 4.00031C50.0353 4.00251 49.9478 4.01093 49.86 4.02557C49.8416 4.02886 49.8233 4.0296 49.8054 4.03362C49.715 4.05156 49.626 4.07572 49.5378 4.1083L5.20797 20.2599C4.48211 20.5245 3.99934 21.2138 4 21.9865C4.00037 22.7589 4.48428 23.4486 5.21013 23.7121L25.0778 30.9218L32.2874 50.7899C32.551 51.5157 33.2403 51.9992 34.013 52H34.0141C34.786 52 35.4757 51.5172 35.7396 50.792L51.8927 6.46141C51.9246 6.37392 51.9484 6.28461 51.9674 6.19492C51.9714 6.17515 51.9722 6.15502 51.9758 6.13525C51.9894 6.0496 51.9982 5.96395 52 5.87792L51.9991 5.87705ZM43.0054 10.3959L26.0398 27.3618L11.2116 21.9809L43.0054 10.3959ZM34.0176 44.7869L28.6368 29.9585L45.6024 12.9926L34.0176 44.7869Z"
              fill="white"
            />
          </svg>
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>
      )}
    </div>
  );
}
export default MicorPhone;
