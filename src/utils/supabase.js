import { createClient } from '@supabase/supabase-js';
import { supabaseKey, supabaseURL } from './constant';
export const supabase = createClient(supabaseURL, supabaseKey);
