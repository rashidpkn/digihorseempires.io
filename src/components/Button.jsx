import React from "react";
// import { useWeb3Modal } from "@web3modal/react";
// import { useAccount } from "wagmi";

// import useStore from "../store/AppContext";

export default function Button(props) {
  // const { address, isConnecting, isDisconnected } = useAccount();
  // const { isOpen, open, close, setDefaultChain } = useWeb3Modal();
  // const { proccessing, setMessege } = useStore();


  // props?.disabled
  return (
    <div
      className={`${props?.newClassName ? props?.newClassName : 'bg-textColor  p-2 px-4 flex justify-center items-center cursor-pointer bg-gradient-to-r from-primary to-secondary text-white rounded-full'}  ${props?.className} ${props?.disabled ? 'opacity-30' : ''} bg-[#53cc5e]`}
      onClick={() => {
        // if (props?.disabled || props?.loading) {
        //   return;
        // }
        // if (proccessing) {
        //   setMessege({
        //     title: `Another task in process...`,
        //     render: () => <p>{`Wait until the process is completed`}</p>,
        //     type: "info",
        //   });
        //   return;
        // }
        // props?.onClick?.();
      }}

    >
      <button
        className="text-center flex items-center "
      >
        {props?.loading && <span className="material-symbols-rounded animate-spin mr-2">
          progress_activity
        </span>}

        <p className={`font-semibold ${props?.textClassName}`}>{props?.title ?? "Button"}</p>

        {props?.rightArrow && (
          <span className="material-symbols-rounded ml-2">
            {props?.rightArrow ?? 'link'}
          </span>
        )}
      </button>
    </div>
  );
}
