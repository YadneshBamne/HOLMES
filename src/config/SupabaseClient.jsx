import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "VITE_SUPABASE_PROJECT_URL";
const supabaseAnonKey = "VITE_SUPABASE_API_KEY";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;