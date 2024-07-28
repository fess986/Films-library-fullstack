// контекст для гибкого управления цветом, для того чтобы избежать props drilling в нескольких компонентах
import { createContext } from "react";

export const ColorContext = createContext({
  isDark: false,
});

type ColorProviderProps = {
  children: React.ReactNode, 
  isDark: boolean
}

// объект принимает в себя чилдренов и свойство isDark для управления цветом
const ColorProvider : React.FC<ColorProviderProps> = ({children, isDark = false}) => {
  return (
    <ColorContext.Provider value={ {isDark} }>
      {children}
    </ColorContext.Provider>
  )
}

export default ColorProvider;
