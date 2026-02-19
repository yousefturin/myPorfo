import React from "react";
import OtherWorkCard from "./components/OtherWorkCard";

export default function OtherWorkSection() {
  return (
    <div className="bg-ink-medium w-100">
      <div className="max-w-1400px px-96 py-96 flex-column  m-auto">
        <h2 className="font-heading-mlarge font-family-bold color-ink-inverse">
          Other Notable Work
        </h2>
        <div className="grid-cols-wide mt-44 gap-44">
          <OtherWorkCard
            title="Tiko POS Web"
            label="Retail Dashboard"
            description="WebSocket-integrated point of sale with offline-first transaction queuing."
            image={{
              src: "/images/other-work-1.avif",
              alt: "Tiko POS Web Project Image",
              width: 272,
              height: 195,
            }}
            url="https://www.tikokart.com/pos/"
          />
          <OtherWorkCard
            title="Figensoft Enterprise"
            label="Corporate Portal"
            description="High-performance SSG (Static Site Generation) with dynamic SEO injection."
            image={{
              src: "/images/other-work-2.avif",
              alt: "Figensoft Enterprise Project Image",
              width: 272,
              height: 195,
            }}
            url="https://www.figensoft.com/en/"
          />
          <OtherWorkCard
            title="react-native-input-helper"
            label="Unified Validation Engine"
            description="A lightweight (3kB) all-in-one validator for Phones, Credit Cards and IBANs."
            image={{
              src: "/images/other-work-3.avif",
              alt: "react-native-input-helper Project Image",
              width: 272,
              height: 195,
            }}
            url="https://www.npmjs.com/package/react-native-input-helper"
          />
          <OtherWorkCard
            title="Apart Studio AI"
            label="Cloud Image Processing"
            description="AI-powered editor leveraging CV for colorization, and background removal."
            image={{
              src: "/images/other-work-4.avif",
              alt: "Apart Studio AI Project Image",
              width: 272,
              height: 195,
            }}
            url="https://github.com/yousefturin/APARTSTUDIO"
          />
        </div>
      </div>
    </div>
  );
}
