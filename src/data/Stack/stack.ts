import { StackCardProps } from "app/components/UI/stack/components/StackCard";

export const StackData: (StackCardProps & { id: number })[] = [
    {
        id: 1,
        title: "React Native",
        label: "Mobile Core",
        description: "0.79+ New Architecture",
        icon: "ReactNativeSvg"
    },
    {
        id: 2,
        title: "Next.js",
        label: "Web Core",
        description: "Server Components & SSG",
        icon: "NextSvg"
    },
    {
        id: 3,
        title: "TypeScript",
        label: "Language",
        description: "Strict Type Safety",
        icon: "TypeScriptSvg"
    },
    {
        id: 4,
        title: "Native Modules",
        label: "Performance",
        description: "C++ / JSI Bindings",
        icon: "NativeModulesSvg"
    },
    {
        id: 5,
        title: "TanStack Query",
        label: "State Management",
        description: "Async Server State",
        icon: "TanStackQuerySvg"
    },
    {
        id: 6,
        title: "Reanimated",
        label: "UI/UX",
        description: "60fps Animations",
        icon: "ReanimatedSvg"
    },
    {
        id: 7,
        title: "Python & AI",
        label: "Intelligence",
        description: "PyTorch & OpenCV",
        icon: "PythonSvg"
    },
    {
        id: 8,
        title: "Node.js",
        label: "Backend",
        description: "Scalable Serverless Infra",
        icon: "NodeJsSvg"
    },
]