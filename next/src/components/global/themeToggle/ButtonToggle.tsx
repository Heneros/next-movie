"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toggleTheme } from "@/redux/theme/theme";
import Image from "next/image";

export default function ButtonToggle() {
    const theme = useSelector((s: RootState) => s.theme.mode);
    const dispatch = useDispatch();

    const btnIcon =
        theme === "dark" ? "/icons/dark/sun.svg" : "/icons/light/moon.svg";

    return (
        <button
            aria-label="toggle theme"
            onClick={() => dispatch(toggleTheme())}
            className="flex items-center justify-center  rounded-md transition"
        >
            {theme === "dark" ? (
                <>
                    <Image
                        src={btnIcon}
                        width={32}
                        height={32}
                        alt="Dark icon sun"
                        className="w-8 h-8"
                    />
                    {/* <Sun className="w-8 h-8" /> */}
                </>
            ) : (
                <>
                    <Image
                        src={btnIcon}
                        width={32}
                        height={32}
                        alt="Dark icon moon"
                        className="w-8 h-8"
                    />
                </>
            )}
        </button>
    );
}

// import Sun from "@/assets/icons/dark/sun.svg";
// import Moon from "@/assets/icons/light/moon.svg";
// // import { useTheme } from "next-themes";

// export default function ButtonTheme() {
//     const theme = useSelector((s: RootState) => s.theme.mode);
//     const dispatch = useDispatch();

//     // console.log(theme)
//     return (
//         <button
//             aria-label="toggle theme"
//             onClick={() => dispatch(toggleTheme())}
//             className=" flex items-center justify-center  rounded-md transition"
//         >
//             {theme === "dark" ? (
//                 <>
//                     <Sun className="w-8 h-8" />
//                 </>
//             ) : (
//                 <>
//                     <Moon className="w-8 h-8" />
//                 </>
//             )}
//         </button>
//     );
// }

