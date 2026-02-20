"use client";
import React, { JSX } from "react";

import { newColors } from "@/styles/Sachem";
import ActivityIndicator from "../UI/ActivityIndicator";
import { ButtonProps, getButtonStyleType } from "./types/Button";

// Add spinner animation styles
const spinnerStyles = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Inject styles into head if not already present
if (
  typeof document !== "undefined" &&
  !document.querySelector("#button-spinner-styles")
) {
  const style = document.createElement("style");
  style.id = "button-spinner-styles";
  style.textContent = spinnerStyles;
  document.head.appendChild(style);
}

export const Button = ({
  style,
  styleText,
  title,
  btnType = "main",
  type,
  onPress,
  marginValue,
  disabled = false,
  isLoading = false,
  icon,
  buttonTestID,
  className,
  iconPosition = "right",
  btnColor = newColors["ink-inverse"],
  iconLeft,
  internalLink = false,
  link,
  isDownload = false,
  description = "",
  "aria-label": ariaLabel,
}: ButtonProps): JSX.Element => {
  if (internalLink && link) {
    return (
      <a
        href={link}
        style={{ textDecoration: "none" }}
        download={isDownload}
        aria-label={ariaLabel || description}
      >
        <div
          data-testid={buttonTestID}
          style={{
            ...getButtonStyle(
              marginValue,
              disabled,
              isLoading,
              btnType,
              btnColor,
            ),
            ...style,
          }}
          className={`${className}`}
        >
          {iconLeft && !isLoading && iconLeft}
          {icon && iconPosition === "left" && !isLoading && icon}
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <span
              style={{
                color:
                  btnType !== "main"
                    ? newColors["ink-inverse"]
                    : newColors["ink"],
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                ...styleText,
              }}
              className={`${"font-body-medium font-family-regular"}`}
            >
              {title}
            </span>
          )}
          {icon && iconPosition === "right" && !isLoading && icon}
        </div>
      </a>
    );
  } else if (link && !internalLink) {
    return (
      <a
        href={link}
        style={{ textDecoration: "none" }}
        download={isDownload}
        aria-label={ariaLabel || description}
      >
        <div
          data-testid={buttonTestID}
          style={{
            ...getButtonStyle(
              marginValue,
              disabled,
              isLoading,
              btnType,
              btnColor,
            ),
            ...style,
          }}
          className={`${className}`}
        >
          {iconLeft && !isLoading && iconLeft}
          {icon && iconPosition === "left" && !isLoading && icon}
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <span
              style={{
                color:
                  btnType !== "main"
                    ? newColors["ink-inverse"]
                    : newColors["ink"],

                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                ...styleText,
              }}
              className={`${"font-body-medium font-family-regular"}`}
            >
              {title}
            </span>
          )}
          {icon && iconPosition === "right" && !isLoading && icon}
        </div>
      </a>
    );
  }
  return (
    <button
      disabled={disabled || isLoading}
      data-testid={buttonTestID}
      onClick={onPress}
      style={{
        ...getButtonStyle(marginValue, disabled, isLoading, btnType, btnColor),
        ...style,
      }}
      className={`${className}`}
      type={type}
    >
      {iconLeft && !isLoading && iconLeft}
      {icon && iconPosition === "left" && !isLoading && icon}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <span
          style={{
            color:
              btnType !== "main" ? newColors["ink-inverse"] : newColors["ink"],
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            ...styleText,
          }}
          className={`${"font-body-medium font-family-regular"}`}
        >
          {title}
        </span>
      )}
      {icon && iconPosition === "right" && !isLoading && icon}
    </button>
  );
};

const getButtonStyle = (
  marginValue: getButtonStyleType["marginValue"],
  disabled: getButtonStyleType["disabled"],
  isLoading: getButtonStyleType["isLoading"],
  btnType: getButtonStyleType["btnType"],
  btnColor?: string,
): React.CSSProperties => {
  return {
    width: "auto",
    height: "40px",
    backgroundColor:
      disabled || isLoading
        ? newColors.disabled
        : btnType !== "main"
          ? "transparent"
          : btnColor,
    borderColor:
      btnType === "ghost"
        ? "transparent"
        : btnType === "outline"
          ? btnColor
          : newColors["quaternary"],
    borderWidth: btnType === "ghost" ? "0" : btnType === "main" ? "0" : "1.6px",
    borderStyle: "solid",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: marginValue ? `${marginValue}px` : undefined,
    flexDirection: "row",
    gap: "8px",
    cursor: disabled || isLoading ? "not-allowed" : "pointer",
    outline: "none",
    padding: "0 24px",
    transition: "all 0.2s ease-in-out",
  };
};
