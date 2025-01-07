
import { createClient } from '@supabase/supabase-js'


const supabaseUrl = process.env.XAPI_SUPABASE_URL
const supabaseKey = process.env.XAPI_SUPABASE_KEY
console.log('//Supabase Keys: '+supabaseUrl,supabaseKey)

export const supabase = createClient(supabaseUrl, supabaseKey)




 

