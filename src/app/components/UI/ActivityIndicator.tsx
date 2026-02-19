import { newColors } from "@/styles/Sachem";

export default function ActivityIndicator() {
  return (
    <div
      className="spinner"
      style={{
        width: "16px",
        height: "16px",
        border: `2px solid ${newColors["brand"]}`,
        borderTop: "2px solid transparent",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    />
  );
}
