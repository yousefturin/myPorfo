import React from "react";
import CaseStudy from "./components/CaseStudy";

export default function CaseStudySection() {
  return (
    <div className="bg-ink w-100">
      <div className="max-w-1400px px-96 py-96 flex-column  m-auto">
        <h2 className="font-heading-mlarge font-family-bold color-ink-inverse">
          Case Studies
        </h2>
        <CaseStudy
          title="Tiko Financial Ecosystem (Wallet & POS)"
          projectNumber="01"
          url="https://apps.apple.com/tr/app/tiko/id1448704065"
          image={{
            src: "/images/case-study-1.avif",
            alt: "Tiko Financial Ecosystem",
            width: 580,
            height: 731,
          }}
          role="Lead Mobile Architect (Solo)"
          flags={["AZ", "KKTC"]}
          technicalChallenges={[
            "Architecting a fragmented financial ecosystem across two distinct regions with different banking regulations and payment infrastructures. The goal was to launch [four distinct native applications](BOLD-TEXT) (Consumer Wallet & Merchant POS for both regions) that shared rigorous security standards despite having separate codebases and unique UI flows.",
          ]}
          architecture={[
            'Regional Polymorphism: Designed distinct architectural patterns for KKTC and AZ to handle different payment gateways and regulatory compliance (KYC) while maintaining a consistent "Tiko" brand experience.',
            "Unified Security Core: Implemented a shared Runtime Integrity Layer across all four apps. This engine detects Root access, Jailbreaks, and Debuggers, instantly terminating sessions (exitApp) on compromised devices to protect financial data.",
            "KYC & Identity: Bank-grade identity verification integrated via Veriff SDK and custom native camera modules.",
          ]}
          outcome={[
            "Security: Achieved a 100% block rate on unsafe environments across all platforms using the shared integrity engine.",
            "Performance: Delivered 60fps native performance for both consumer (Wallet) and merchant (POS) dashboards, replacing legacy hybrid solutions.",
            "Scale: Successfully deployed and maintained 4 separate production apps serving 15,000+ active users and merchants daily.",
          ]}
          stack={[
            "React Native",
            "Custom Native Modules (JSI)",
            "TanStack Query",
            "Zustand",
            "Reanimated 3",
          ]}
        />
        <div className="mt-96">
          <CaseStudy
            title="Tiko Virtual POS (SanalPOS)"
            projectNumber="02"
            imgPosition="RIGHT"
            url="https://www.tikokart.com/sanalpos"
            image={{
              src: "/images/case-study-2.avif",
              alt: "Tiko Virtual POS",
              width: 580,
              height: 731,
            }}
            role="Lead Mobile Architect (Solo)"
            flags={["AZ", "KKTC"]}
            technicalChallenges={[
              "Merchants required a high-performance, data-heavy dashboard to visualize cash flow, export tax reports, and process manual payments. The goal was [zero bloat](BOLD-TEXT): eliminating heavy UI frameworks in favor of a bespoke, high-performance design system.",
            ]}
            architecture={[
              "Bespoke Design System: Architected a custom Utility-First SASS Engine (similar to Tailwind but lightweight) using CSS Variables and Tokenization. This eliminated unused CSS execution and ensured 100% brand consistency.",
              "Bleeding Edge Performance: leveraged Next.js 16 and React 19 to utilize the latest Server Components and concurrent rendering features.",
              "Client-Side Heavy Lifting: Offloaded complex reporting logic (Excel generation, PDF printing) to the client using specialized libraries (xlsx, react-to-print), reducing server computation costs.",
            ]}
            outcome={[
              "Performance: Achieved near-perfect Lighthouse scores by replacing external UI libraries with a custom 12kb CSS architecture.",
              "Data Visualization: Built real-time financial charting (Recharts) to help merchants track daily revenue trends.",
              "Efficiency: Automated financial reporting workflows, allowing users to export bulk transaction data without API latency.",
            ]}
            stack={[
              "Next.js 16",
              "React 19",
              "TanStack Query",
              "Zustand",
              "Custom SASS Architecture",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
