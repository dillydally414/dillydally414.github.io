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
      experience: {
        Row: {
          alt_text: string;
          created_at: string;
          id: number;
          image_url: string;
          place_of_work: string;
          relevant_tech: string;
        };
        Insert: {
          alt_text?: string;
          created_at?: string;
          id?: number;
          image_url: string;
          place_of_work: string;
          relevant_tech: string;
        };
        Update: {
          alt_text?: string;
          created_at?: string;
          id?: number;
          image_url?: string;
          place_of_work?: string;
          relevant_tech?: string;
        };
        Relationships: [];
      };
      home: {
        Row: {
          created_at: string;
          id: number;
          paragraph: string | null;
          substitute_link: string | null;
          substitute_text: string | null;
          type: Database["public"]["Enums"]["type"];
        };
        Insert: {
          created_at?: string;
          id?: number;
          paragraph?: string | null;
          substitute_link?: string | null;
          substitute_text?: string | null;
          type: Database["public"]["Enums"]["type"];
        };
        Update: {
          created_at?: string;
          id?: number;
          paragraph?: string | null;
          substitute_link?: string | null;
          substitute_text?: string | null;
          type?: Database["public"]["Enums"]["type"];
        };
        Relationships: [];
      };
      position: {
        Row: {
          created_at: string;
          description: string;
          end: string | null;
          experience_id: number;
          id: number;
          start: string;
          title: string;
        };
        Insert: {
          created_at?: string;
          description: string;
          end?: string | null;
          experience_id: number;
          id?: number;
          start: string;
          title: string;
        };
        Update: {
          created_at?: string;
          description?: string;
          end?: string | null;
          experience_id?: number;
          id?: number;
          start?: string;
          title?: string;
        };
        Relationships: [
          {
            foreignKeyName: "position_experience_id_fkey";
            columns: ["experience_id"];
            isOneToOne: false;
            referencedRelation: "experience";
            referencedColumns: ["id"];
          }
        ];
      };
      project: {
        Row: {
          alt_text: string;
          created_at: string;
          description: string;
          end: string | null;
          github_link: string | null;
          id: number;
          image_url: string;
          name: string;
          start: string;
          tech_used: string;
          visual_link: string | null;
        };
        Insert: {
          alt_text: string;
          created_at?: string;
          description: string;
          end?: string | null;
          github_link?: string | null;
          id?: number;
          image_url: string;
          name: string;
          start: string;
          tech_used: string;
          visual_link?: string | null;
        };
        Update: {
          alt_text?: string;
          created_at?: string;
          description?: string;
          end?: string | null;
          github_link?: string | null;
          id?: number;
          image_url?: string;
          name?: string;
          start?: string;
          tech_used?: string;
          visual_link?: string | null;
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

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never;
