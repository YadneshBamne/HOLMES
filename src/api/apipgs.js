import supabaseClient from "@/utils/supabase";
import supabase from "@/utils/supabase";

export async function addpg(token, _, pgdata) {
  const supabase = await supabaseClient(token);

  const { data, error } = await supabase
    .from("addpg")
    .insert([pgdata])
    .select();

  if (error) {
    console.error("Error Creating New Blogs :", error);
    return null;
  }
  return data;
}
