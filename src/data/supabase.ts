import { createClient } from "@supabase/supabase-js";
import { createContext } from "react";
import { Database } from "../types/database";

export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export type SupabaseContextType = {
  [P in keyof Database["public"]["Tables"]]: Array<
    Database["public"]["Tables"][P]["Row"]
  > | null;
};

export const SupabaseContext = createContext<SupabaseContextType>({
  home: null,
});
