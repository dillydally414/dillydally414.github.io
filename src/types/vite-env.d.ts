/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_KEY?: string;
  readonly VITE_EDIT_MODE?: "EDIT";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
