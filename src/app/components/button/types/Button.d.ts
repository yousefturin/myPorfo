import { JSX } from "react";

export interface ButtonProps {
    style?: React.CSSProperties;
    styleText?: React.CSSProperties;
    title?: string;
    btnType?: "main" | "outline" | "ghost";
    onPress?: () => void;
    marginValue?: number;
    disabled?: boolean;
    isLoading?: boolean;
    icon?: JSX.Element;
    buttonTestID?: string;
    type?: "button" | "submit" | "reset";
    className?: string;
    iconPosition?: "left" | "right";
    btnColor?: string;
    iconLeft?: JSX.Element;
    internalLink?: boolean;
    link?: string;
    isDownload?: boolean;
    description?: string;
    "aria-label"?: string;
}
export interface getButtonStyleType {
    marginValue: number | undefined;
    disabled: boolean;
    isLoading: boolean;
    btnType: "main" | "outline" | "ghost";
}