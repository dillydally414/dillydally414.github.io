export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      home: {
        Row: {
          created_at: string;
          id: number;
          paragraph: string | null;
          substitute_link: string | null;
          substitute_text: string | null;
          type: Database["public"]["Enums"]["type"] | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          paragraph?: string | null;
          substitute_link?: string | null;
          substitute_text?: string | null;
          type?: Database["public"]["Enums"]["type"] | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          paragraph?: string | null;
          substitute_link?: string | null;
          substitute_text?: string | null;
          type?: Database["public"]["Enums"]["type"] | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      type: "paragraph" | "substitution";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
