import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wudeoudusdwrjhbxmobe.supabase.co/";
export const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1ZGVvdWR1c2R3cmpoYnhtb2JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1NzEzMjEsImV4cCI6MjA1MTE0NzMyMX0.EKhN18GFeeEn8AiVtENERxw18QKN6UIFEJLQHmpqxJc";

export const supabase = createClient(supabaseUrl, supabaseKey);
