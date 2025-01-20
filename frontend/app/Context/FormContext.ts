import { createContext} from "react";

interface IncompleteContextType {
  incomplete: string[];
  setIncomplete: React.Dispatch<React.SetStateAction<string[]>>;
}
export const incompleteContext = createContext<IncompleteContextType>({
  incomplete: [],
  setIncomplete: () => {},
});
