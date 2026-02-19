import React from "react";

import { fontSize, newColors } from "@/styles/Sachem";

import { Field } from "formik";

import { DataInputProps } from "./types/DataInput";
import Validate from "@/utils/Validate";
import Format from "@/utils/Format";
import Extract from "@/utils/Extract";

const DataInputComponent = ({
  styleContainer = "",
  styleInput = "",
  styleNote = "",
  styleContainerAndRightComponent = "",
  styleContainerAndLeftOuterComponent = "",
  label = "",
  description = "",
  placeholder = "",
  secureTextEntry,
  textContentType = "none",
  keyboardType = "default",
  autoFocus = false,
  value = "",
  onChangeText = () => {},
  note = "",
  characterLength = 400,
  onBlur = () => {},
  onFocus = () => {},
  RightComponent = null,
  LeftOuterComponent = null,
  disabled = false,
  subLabel = "",
  multiline = false,
  onSubmitEditing,
  spellCheck = false,
  extraInfo = "",
  testID,
  styleLabel,
  lightText = false,
}: DataInputProps): React.ReactNode => {
  return (
    <div className={`w-100 ${styleContainer}`}>
      {(label || subLabel) && (
        <div
          className={`flex-row alt-c ${
            disabled ? "opacity-50" : "opacity-100"
          }`}
        >
          {/* Label */}
          {Validate.Input(label) && (
            <label className={`${styleLabel} label truncate `}>{label}</label>
          )}
          {/* SubLabel */}
          {Validate.Input(subLabel) && (
            <span
              style={{ color: newColors.tertiary, fontSize: fontSize.small }}
            >
              {subLabel}
            </span>
          )}
        </div>
      )}

      {/* Description */}
      {Validate.Input(description) && (
        <p
          style={{
            color: newColors[lightText ? "ink-50" : "ink-medium"],
            fontSize: fontSize.small,
            marginTop: "8px",
            margin: "8px 0 0 0",
          }}
        >
          {description}
        </p>
      )}

      {/* Input and Right Component */}
      <div
        className={`w-100 flex-row alt-c jc-sb relative ${
          disabled ? "opacity-50" : "opacity-100"
        } ${styleContainerAndRightComponent} ${styleContainerAndLeftOuterComponent}`}
      >
        {LeftOuterComponent && LeftOuterComponent}
        {multiline ? (
          <textarea
            className={`${"textarea"}  ${
              note &&
              typeof note === "string" &&
              typeof note !== "boolean" &&
              "input-error"
            } `}
            name={Format.SterilizeFiledName(label)}
            aria-label={label}
            data-testid={testID}
            disabled={disabled}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChangeText(e.target.value)}
            maxLength={characterLength}
            onBlur={onBlur}
            onFocus={() => {
              onFocus?.();
            }}
            autoFocus={autoFocus}
            spellCheck={spellCheck}
          />
        ) : (
          <Field
            type={
              secureTextEntry ? "password" : Extract.InputType(keyboardType)
            }
            className={`${styleInput ? styleInput : "input"}  ${
              note &&
              typeof note === "string" &&
              typeof note !== "boolean" &&
              "input-error"
            } `}
            label={label}
            aria-label={label}
            name={Format.SterilizeFiledName(label)}
            data-testid={testID}
            disabled={disabled}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChangeText(e.target.value)}
            maxLength={characterLength}
            onBlur={onBlur}
            onFocus={() => {
              onFocus?.();
            }}
            autoFocus={autoFocus}
            spellCheck={spellCheck}
            autoComplete={Extract.AutoComplete(textContentType)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && onSubmitEditing) {
                onSubmitEditing();
              }
            }}
          />
        )}
        {RightComponent && (
          <div className="alt-c jc-c dsp-f mb-16 m-auto input-inner-icon">
            {RightComponent}
          </div>
        )}
      </div>

      {/* Note Section */}
      {note && typeof note === "string" && typeof note !== "boolean" && (
        <div
          className={`${styleNote ? styleNote : "flex-row alt-c mb-24 mt-8"}`}
        >
          <span className="font-label-medium color-error font-family-regular ">
            {note}
          </span>
        </div>
      )}
      {extraInfo !== "" && !note ? (
        <div className="mb-20 flex-row alt-c">
          <span className="font-label-medium font-family-regular color-ink-medium">
            {extraInfo}
          </span>
        </div>
      ) : null}
    </div>
  );
};
export const DataInput = React.memo(DataInputComponent);
