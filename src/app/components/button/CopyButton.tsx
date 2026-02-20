"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SvgComponent from "@/utils/SvgComponent";
import { newColors } from "@/styles/Sachem";
// Ensure you import your SvgComponent here
type CopyButtonProps =
  | {
      text: string;
      textStyle?: string;
      variant: "DEFAULT";
      isLoading: boolean;
    }
  | {
      text: string;
      textStyle?: string;
      variant: "INPUT" | "INPUT_BUTTON_OUTSIDE";
      label: string;
      isLoading: boolean;
    };

export default function CopyButton(props: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    // 1. Copy text
    navigator.clipboard.writeText(props.text);

    // 2. Trigger Animation State
    setIsCopied(true);

    // 3. Reset after 2 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  // Animation variants for the icon popping in/out
  const iconVariants = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  };
  const pulseAnim = {
    opacity: [0.4, 0.7, 0.4],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };
  switch (props.variant) {
    case "INPUT": {
      const { label, text, textStyle } = props;
      return (
        <div className="flex-column">
          <span className="font-text-m color-gray-800 mb-8">{label}</span>
          <div
            className="flex-row atc jc-sb pointer p-14 border-all br-9999 mt-8 n-o bg-none"
            onClick={handleCopy}
            // disabled={props.isLoading === true}
          >
            {props.isLoading === false ? (
              <span className={textStyle}>{text ? text : "-"}</span>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={pulseAnim}
                style={{
                  width: "100%",
                  height: "20px",
                  backgroundColor: newColors["gray-200"],
                  borderRadius: "6px",
                }}
              />
            )}

            <motion.button
              className="n-o n-b bg-none dsp-f atc jc-c ml-8 pointer"
              whileTap={{ scale: 0.85 }}
              aria-label={
                isCopied ? "Copied successfully" : "Copy to clipboard"
              }
            >
              {/* AnimatePresence handles the exit animation of the old icon 
            before the new one enters */}
              <AnimatePresence mode="wait" initial={false}>
                {isCopied ? (
                  <motion.div
                    key="check"
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                  >
                    {/* You need a Check/Success icon key here */}
                    <SvgComponent
                      svgKey="Check"
                      width={24}
                      height={24}
                      stroke={newColors["brand"]}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                  >
                    <SvgComponent
                      svgKey="Copy"
                      width={24}
                      height={24}
                      fill={newColors["primary"]}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      );
    }
    case "INPUT_BUTTON_OUTSIDE": {
      const { label, text, textStyle } = props;
      return (
        <div className="flex-row atfe">
          <div className="flex-column flex-1" style={{ minWidth: 0 }}>
            <span className="font-text-m color-gray-800 mb-8">{label}</span>
            <button
              className="flex-row atc jc-sb pointer p-14 border-all br-9999 mt-8  n-o bg-none"
              disabled={props.isLoading === true}
              onClick={handleCopy}
              style={{ width: "100%" }}
            >
              {props.isLoading === false ? (
                <div
                  className={`${textStyle} overflow-x-a text-align-left`}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  {text ? text : "-"}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  animate={pulseAnim}
                  style={{
                    width: "100%",
                    height: "20px",
                    backgroundColor: newColors["gray-200"],
                    borderRadius: "6px",
                  }}
                />
              )}
            </button>
          </div>

          <motion.button
            className={`n-o n-b dsp-f atc jc-c pointer px-16 py-14 br-9999 shrink-0 ${
              isCopied
                ? "bg-green-50"
                : props.isLoading === true
                  ? "bg-gray-100"
                  : "bg-blue-50"
            } ml-16 mt-24`}
            whileTap={{ scale: 0.85 }}
            aria-label={isCopied ? "Copied successfully" : "Copy to clipboard"}
            onClick={handleCopy}
            disabled={props.isLoading === true}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isCopied ? (
                <motion.div
                  key="check"
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                  className="flex-row atc jc-c gap-8"
                >
                  <SvgComponent
                    svgKey="Check"
                    width={20}
                    height={20}
                    stroke={newColors["brand"]}
                  />
                  <span className="color-green-500 font-w-600 font-text-m mob-hide mob-hide-960">
                    Copied
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                  className="flex-row atc jc-c gap-8"
                >
                  <SvgComponent
                    svgKey="Copy"
                    width={20}
                    height={20}
                    fill={
                      props.isLoading === true
                        ? newColors["gray-500"]
                        : newColors["blue-500"]
                    }
                  />
                  <span
                    className={`${
                      props.isLoading === true
                        ? "color-gray-500"
                        : "color-blue-500"
                    } font-w-600 font-text-m mob-hide mob-hide-960`}
                  >
                    Copy
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      );
    }
    default: {
      const { text, textStyle } = props;
      return (
        <div
          className="flex-row atc jc-c pointer n-o n-b bg-none"
          onClick={handleCopy}
        >
          {props.isLoading === false ? (
            <span className={textStyle}>{text ? text : "-"}</span>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={pulseAnim}
              style={{
                width: "90px",
                height: "24px",
                marginTop: "4px",
                backgroundColor: newColors["disabled"],
                borderRadius: "6px",
              }}
            />
          )}
          {props.isLoading === false ? (
            <motion.button
              className="n-o n-b bg-none dsp-f atc jc-c ml-8 pointer"
              whileTap={{ scale: 0.85 }}
              aria-label={
                isCopied ? "Copied successfully" : "Copy to clipboard"
              }
            >
              {/* AnimatePresence handles the exit animation of the old icon 
            before the new one enters */}
              <AnimatePresence mode="wait" initial={false}>
                {isCopied ? (
                  <motion.div
                    key="check"
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                  >
                    {/* You need a Check/Success icon key here */}
                    <SvgComponent
                      svgKey="Check"
                      width={24}
                      height={24}
                      stroke={newColors["brand"]}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                  >
                    <SvgComponent
                      svgKey="Copy"
                      width={24}
                      height={24}
                      fill={newColors["primary"]}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={pulseAnim}
              style={{
                marginLeft: "8px",
                marginTop: "4px",
                width: "24px",
                height: "24px",
                backgroundColor: newColors["disabled"],
                borderRadius: "6px",
              }}
            />
          )}
        </div>
      );
    }
  }
}
