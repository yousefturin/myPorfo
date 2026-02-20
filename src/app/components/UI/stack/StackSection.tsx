import { StackData } from "@/data/Stack/stack";
import StackCard from "./components/StackCard";

export default function StackSection() {
  return (
    <div className="bg-ink-medium w-100">
      <div className="max-w-1400px px-96 py-96 flex-column  m-auto">
        <h2 className="font-heading-mlarge font-family-bold color-ink-inverse">
          Stack
        </h2>
        <div className="grid-cols mt-44 gap-44">
          {StackData.slice(0, 4).map((item) => (
            <div key={item.id}>
              <StackCard
                title={item.title}
                label={item.label}
                description={item.description}
                icon={item.icon}
              />
            </div>
          ))}
          {StackData.slice(4, 8).map((item) => (
            <div key={item.id}>
              <StackCard
                title={item.title}
                label={item.label}
                description={item.description}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
