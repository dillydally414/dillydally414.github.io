export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      experience: {
        Row: {
          alt_text: string
          created_at: string
          id: number
          image_url: string
          place_of_work: string
          relevant_tech: string
        }
        Insert: {
          alt_text?: string
          created_at?: string
          id?: number
          image_url: string
          place_of_work: string
          relevant_tech: string
        }
        Update: {
          alt_text?: string
          created_at?: string
          id?: number
          image_url?: string
          place_of_work?: string
          relevant_tech?: string
        }
        Relationships: []
      }
      home: {
        Row: {
          created_at: string
          id: number
          paragraph: string | null
          substitute_link: string | null
          substitute_text: string | null
          type: Database["public"]["Enums"]["type"]
        }
        Insert: {
          created_at?: string
          id?: number
          paragraph?: string | null
          substitute_link?: string | null
          substitute_text?: string | null
          type: Database["public"]["Enums"]["type"]
        }
        Update: {
          created_at?: string
          id?: number
          paragraph?: string | null
          substitute_link?: string | null
          substitute_text?: string | null
          type?: Database["public"]["Enums"]["type"]
        }
        Relationships: []
      }
      paper: {
        Row: {
          authors: string
          created_at: string
          doi: string | null
          github_link: string | null
          id: number
          journal: string
          research_id: number | null
          title: string
          year: string
        }
        Insert: {
          authors: string
          created_at?: string
          doi?: string | null
          github_link?: string | null
          id?: number
          journal: string
          research_id?: number | null
          title: string
          year: string
        }
        Update: {
          authors?: string
          created_at?: string
          doi?: string | null
          github_link?: string | null
          id?: number
          journal?: string
          research_id?: number | null
          title?: string
          year?: string
        }
        Relationships: [
          {
            foreignKeyName: "papers_research_id_fkey"
            columns: ["research_id"]
            isOneToOne: false
            referencedRelation: "research"
            referencedColumns: ["id"]
          },
        ]
      }
      position: {
        Row: {
          created_at: string
          description: string
          end: string | null
          experience_id: number
          id: number
          start: string
          title: string
        }
        Insert: {
          created_at?: string
          description: string
          end?: string | null
          experience_id: number
          id?: number
          start: string
          title: string
        }
        Update: {
          created_at?: string
          description?: string
          end?: string | null
          experience_id?: number
          id?: number
          start?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "position_experience_id_fkey"
            columns: ["experience_id"]
            isOneToOne: false
            referencedRelation: "experience"
            referencedColumns: ["id"]
          },
        ]
      }
      project: {
        Row: {
          alt_text: string
          created_at: string
          description: string
          end: string | null
          github_link: string | null
          id: number
          image_url: string
          name: string
          start: string
          tech_used: string
          visual_link: string | null
        }
        Insert: {
          alt_text: string
          created_at?: string
          description: string
          end?: string | null
          github_link?: string | null
          id?: number
          image_url: string
          name: string
          start: string
          tech_used: string
          visual_link?: string | null
        }
        Update: {
          alt_text?: string
          created_at?: string
          description?: string
          end?: string | null
          github_link?: string | null
          id?: number
          image_url?: string
          name?: string
          start?: string
          tech_used?: string
          visual_link?: string | null
        }
        Relationships: []
      }
      research: {
        Row: {
          alt_text: string
          area: string
          created_at: string
          description: string
          id: number
          image_url: string
        }
        Insert: {
          alt_text: string
          area: string
          created_at?: string
          description: string
          id?: number
          image_url: string
        }
        Update: {
          alt_text?: string
          area?: string
          created_at?: string
          description?: string
          id?: number
          image_url?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      type: "paragraph" | "substitution"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
