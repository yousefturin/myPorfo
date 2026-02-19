"use client";

import React from "react";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import { DataInput } from "app/components/input/DataInput";
import { Button } from "app/components/button/Button";
import SvgComponent from "@/utils/SvgComponent";
import { useBannerStore } from "store/useBannerStore";
import ReCAPTCHA from "react-google-recaptcha"; // Import ReCAPTCHA

const ContactSchema = object().shape({
  email: string().email("Invalid email").required("Email is required"),
  message: string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be at most 1000 characters"),
});

export default function FooterSectionClient() {
  const { showBanner } = useBannerStore();
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);
  const handleFormSubmit = async (values: {
    email: string;
    message: string;
  }) => {
    if (!recaptchaRef.current) {
      showBanner("error", "Captcha not initialized");
      return;
    }

    try {
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();

      if (!token) {
        showBanner("error", "Captcha verification failed. Please try again.");
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, token }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Network response was not ok");
      }
      showBanner("success", "Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      showBanner("error", "Failed to send message. Please try again later.");
    }
  };
  return (
    <Formik
      validationSchema={ContactSchema}
      onSubmit={handleFormSubmit}
      initialValues={{ email: "", message: "" }}
    >
      {({
        isSubmitting,
        errors,
        touched,
        setFieldValue,
        setFieldTouched,
        handleBlur,
        values,
        handleSubmit,
        isValid,
      }) => (
        <Form className="gap-24">
          <DataInput
            label={"Email"}
            placeholder={"Enter your email"}
            value={values.email}
            onChangeText={(value) => setFieldValue("email", value)}
            onBlur={() => {
              if (!touched.email) {
                setTimeout(() => {
                  setFieldTouched("email", true);
                }, 200);
              }
              handleBlur("email");
            }}
            note={touched.email && errors.email ? (errors.email as string) : ""}
            styleContainer={`${touched.email && errors.email ? "" : "mb-24"}`}
          />
          <DataInput
            value={values.message}
            onChangeText={(text) => {
              setFieldValue("message", text);
            }}
            placeholder={"Enter your message"}
            label={"Message"}
            description={""}
            keyboardType="default"
            multiline
            characterLength={1000}
            textAlignVertical="top"
            note={touched.message && errors.message && `${errors.message}`}
            styleInput={"h-200px"}
            styleContainer={`${
              touched.message && errors.message ? "" : "mb-16"
            }`}
            onBlur={() => {
              if (!touched.message) {
                setTimeout(() => {
                  setFieldTouched("message", true);
                }, 200);
              }
              handleBlur("message");
            }}
          />
          <div style={{ position: "absolute", opacity: 0, zIndex: -1 }}>
            {/* ✅ Safe hiding */}
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            />
          </div>
          <Button
            title={"Get in touch"}
            onPress={() => handleSubmit()}
            isLoading={isSubmitting}
            btnType="main"
            disabled={isSubmitting || !isValid}
            icon={
              <SvgComponent
                svgKey="SendSvg"
                width={24}
                height={24}
                fill={"#FFFFFF"}
              />
            }
            style={{
              marginTop: 24,
            }}
          />
        </Form>
      )}
    </Formik>
  );
}
