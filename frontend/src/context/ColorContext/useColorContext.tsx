import { useContext } from "react";
import { ColorContext } from "./colorContext";

export const useColorContext = () => useContext(ColorContext);