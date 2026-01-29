import { createContext } from "react-router";
import type { BaseContext } from "./types";

export const appContext = createContext<BaseContext>();
