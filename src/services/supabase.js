import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lasdoexyliikmsdlutts.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxhc2RvZXh5bGlpa21zZGx1dHRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5NTc0OTMsImV4cCI6MjAyMDUzMzQ5M30.Ks-Aq7Co7PzMMZKKkSYN4oVOtq_B0q1lZXJc9xkAwX4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
