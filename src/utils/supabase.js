import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://supabase.vscode.in/";
export const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAxNzM0MTE0NjAwLAogICJleHAiOiAxODkxODgxMDAwCn0.BykhLPJIlWcaSQ6FLTAiR6BdQLKoZXv-tEpFn5Pf2L8";

export const supabase = createClient(supabaseUrl, supabaseKey);
