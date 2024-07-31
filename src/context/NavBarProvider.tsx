import { ReactNode, createContext, useState } from "react";

export const NavBarContext = createContext<{
  isCollapsed: boolean;
  toggleCollapse: () => void;
}>({ isCollapsed: false, toggleCollapse: () => {} });

interface NavBarProviderProps {
  children: ReactNode;
}

export const NavBarProvider = ({ children }: NavBarProviderProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <NavBarContext.Provider value={{ isCollapsed, toggleCollapse }}>
      {children}
    </NavBarContext.Provider>
  );
};
