
import { createClient } from '@supabase/supabase-js'


const supabaseUrl = process.env.XAPI_SUPABASE_URL
const supabaseKey = process.env.XAPI_SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)




 

