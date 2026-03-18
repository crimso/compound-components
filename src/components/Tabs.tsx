import { createContext, useContext, useState, type ReactNode } from "react";

// Typ pro sdílený stav mezi všemi podkomponentami
type TabsContextType = {
  activeValue: string;
  setActiveValue: (value: string) => void;
};

// Kontext – zatím bez výchozí hodnoty
const TabsContext = createContext<TabsContextType | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);

  if (context === null) {
    throw new Error("Tabs podkomponenty musí být použity uvnitř <Tabs>.");
  }

  return context;
}

type TabsProps = {
  defaultValue: string;
  children: ReactNode;
};

function Tabs({ defaultValue, children }: TabsProps) {
  const [activeValue, setActiveValue] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeValue, setActiveValue }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

type TabsListProps = {
  children: ReactNode;
};

export function TabsList({ children }: TabsListProps) {
  return (
    <div role="tablist" style={{ display: "flex", gap: "5px" }}>
      {children}
    </div>
  );
}

type TabsTriggerProps = {
  value: string;
  children: ReactNode;
};

export function TabsTrigger({ value, children }: TabsTriggerProps) {
  const { activeValue, setActiveValue } = useTabsContext();

  const isActive = activeValue === value;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={() => setActiveValue(value)}
      style={{
        padding: "8px 16px",
        fontWeight: isActive ? "bold" : "normal",
        borderBottom: isActive ? "2px solid blue" : "2px solid transparent",
      }}
    >
      {children}
    </button>
  );
}

type TabsContentProps = {
  value: string;
  children: ReactNode;
};

export function TabsContent({ value, children }: TabsContentProps) {
  const { activeValue } = useTabsContext();

  if (activeValue !== value) {
    return null;
  }

  return <div>{children}</div>;
}

export default Tabs;
