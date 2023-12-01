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
