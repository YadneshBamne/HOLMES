import { createClient } from "@supabase/supabase-js";


const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or API key is missing.");
}
else{
    console.log(supabaseUrl)
}

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;