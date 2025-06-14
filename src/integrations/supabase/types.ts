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
      case_studies: {
        Row: {
          challenge_content: string | null
          challenge_heading: string | null
          client_location: string | null
          client_name: string | null
          created_at: string
          cta_button_text: string | null
          cta_description: string | null
          cta_heading: string | null
          description: string | null
          hero_image_url: string | null
          id: string
          impact_content: string | null
          impact_heading: string | null
          is_featured: boolean | null
          is_published: boolean | null
          key_features: Json | null
          project_duration: string | null
          slug: string
          solution_content: string | null
          solution_heading: string | null
          subtitle: string | null
          technologies: Json | null
          title: string
          updated_at: string
        }
        Insert: {
          challenge_content?: string | null
          challenge_heading?: string | null
          client_location?: string | null
          client_name?: string | null
          created_at?: string
          cta_button_text?: string | null
          cta_description?: string | null
          cta_heading?: string | null
          description?: string | null
          hero_image_url?: string | null
          id?: string
          impact_content?: string | null
          impact_heading?: string | null
          is_featured?: boolean | null
          is_published?: boolean | null
          key_features?: Json | null
          project_duration?: string | null
          slug: string
          solution_content?: string | null
          solution_heading?: string | null
          subtitle?: string | null
          technologies?: Json | null
          title: string
          updated_at?: string
        }
        Update: {
          challenge_content?: string | null
          challenge_heading?: string | null
          client_location?: string | null
          client_name?: string | null
          created_at?: string
          cta_button_text?: string | null
          cta_description?: string | null
          cta_heading?: string | null
          description?: string | null
          hero_image_url?: string | null
          id?: string
          impact_content?: string | null
          impact_heading?: string | null
          is_featured?: boolean | null
          is_published?: boolean | null
          key_features?: Json | null
          project_duration?: string | null
          slug?: string
          solution_content?: string | null
          solution_heading?: string | null
          subtitle?: string | null
          technologies?: Json | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      case_study_media: {
        Row: {
          alt_text: string | null
          caption: string | null
          case_study_id: string
          created_at: string
          display_order: number | null
          id: string
          media_type: string
          media_url: string
          Name: string | null
          section: string | null
        }
        Insert: {
          alt_text?: string | null
          caption?: string | null
          case_study_id: string
          created_at?: string
          display_order?: number | null
          id?: string
          media_type?: string
          media_url: string
          Name?: string | null
          section?: string | null
        }
        Update: {
          alt_text?: string | null
          caption?: string | null
          case_study_id?: string
          created_at?: string
          display_order?: number | null
          id?: string
          media_type?: string
          media_url?: string
          Name?: string | null
          section?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "case_study_media_case_study_id_fkey"
            columns: ["case_study_id"]
            isOneToOne: false
            referencedRelation: "case_studies"
            referencedColumns: ["id"]
          },
        ]
      }
      client_database_configs: {
        Row: {
          created_at: string
          id: string
          name: string
          supabase_anon_key: string
          supabase_url: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          supabase_anon_key: string
          supabase_url: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          supabase_anon_key?: string
          supabase_url?: string
        }
        Relationships: []
      }
      cms_project_users: {
        Row: {
          project_id: string
          role: Database["public"]["Enums"]["project_role"]
          user_id: string
        }
        Insert: {
          project_id: string
          role?: Database["public"]["Enums"]["project_role"]
          user_id: string
        }
        Update: {
          project_id?: string
          role?: Database["public"]["Enums"]["project_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_users_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "cms_projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      cms_projects: {
        Row: {
          client_database_config_id: string | null
          created_at: string
          id: string
          name: string
        }
        Insert: {
          client_database_config_id?: string | null
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          client_database_config_id?: string | null
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_client_database_config_id_fkey"
            columns: ["client_database_config_id"]
            isOneToOne: false
            referencedRelation: "client_database_configs"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_submissions: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
        }
        Relationships: []
      }
      portfolio_media: {
        Row: {
          alt_text: string | null
          created_at: string
          device_type: string | null
          display_order: number | null
          id: string
          is_primary: boolean | null
          media_type: string
          media_url: string
          project_id: string | null
          project_name: string | null
        }
        Insert: {
          alt_text?: string | null
          created_at?: string
          device_type?: string | null
          display_order?: number | null
          id?: string
          is_primary?: boolean | null
          media_type: string
          media_url: string
          project_id?: string | null
          project_name?: string | null
        }
        Update: {
          alt_text?: string | null
          created_at?: string
          device_type?: string | null
          display_order?: number | null
          id?: string
          is_primary?: boolean | null
          media_type?: string
          media_url?: string
          project_id?: string | null
          project_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "portfolio_media_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "portfolio_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      portfolio_projects: {
        Row: {
          build_time: string | null
          category: string
          created_at: string
          description: string
          id: string
          is_coming_soon: boolean | null
          is_featured: boolean | null
          key_features: Json | null
          link: string | null
          technologies: Json | null
          title: string
          updated_at: string
        }
        Insert: {
          build_time?: string | null
          category: string
          created_at?: string
          description: string
          id?: string
          is_coming_soon?: boolean | null
          is_featured?: boolean | null
          key_features?: Json | null
          link?: string | null
          technologies?: Json | null
          title: string
          updated_at?: string
        }
        Update: {
          build_time?: string | null
          category?: string
          created_at?: string
          description?: string
          id?: string
          is_coming_soon?: boolean | null
          is_featured?: boolean | null
          key_features?: Json | null
          link?: string | null
          technologies?: Json | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          assigned_project_id: string | null
          email: string | null
          full_name: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          updated_at: string | null
        }
        Insert: {
          assigned_project_id?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string | null
        }
        Update: {
          assigned_project_id?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_assigned_project_id_fkey"
            columns: ["assigned_project_id"]
            isOneToOne: false
            referencedRelation: "cms_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_assignments: {
        Row: {
          created_at: string
          id: string
          permission: Database["public"]["Enums"]["project_permission"]
          project_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          permission: Database["public"]["Enums"]["project_permission"]
          project_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          permission?: Database["public"]["Enums"]["project_permission"]
          project_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_assignments_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "portfolio_projects"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      case_study_media_with_project: {
        Row: {
          alt_text: string | null
          caption: string | null
          case_study_id: string | null
          created_at: string | null
          display_order: number | null
          id: string | null
          media_type: string | null
          media_url: string | null
          Name: string | null
          project_name: string | null
          section: string | null
        }
        Relationships: [
          {
            foreignKeyName: "case_study_media_case_study_id_fkey"
            columns: ["case_study_id"]
            isOneToOne: false
            referencedRelation: "case_studies"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      assign_client_to_project: {
        Args: { p_user_id: string; p_project_id: string }
        Returns: undefined
      }
      create_project_and_assign_owner: {
        Args: { p_name: string }
        Returns: {
          client_database_config_id: string | null
          created_at: string
          id: string
          name: string
        }
      }
      get_public_tables: {
        Args: Record<PropertyKey, never>
        Returns: {
          table_name: string
        }[]
      }
      is_admin: {
        Args: { p_user_id: string }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user" | "client"
      project_permission: "editor" | "viewer"
      project_role: "editor" | "viewer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user", "client"],
      project_permission: ["editor", "viewer"],
      project_role: ["editor", "viewer"],
    },
  },
} as const
