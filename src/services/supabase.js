import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ywwnqlesshqfvzmlyign.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3d25xbGVzc2hxZnZ6bWx5aWduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc5NzMzMDcsImV4cCI6MjAwMzU0OTMwN30.NCQCowGB-X3BPwizfU4Khv5YqEkdQpu9VTQo_jxWMQg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
