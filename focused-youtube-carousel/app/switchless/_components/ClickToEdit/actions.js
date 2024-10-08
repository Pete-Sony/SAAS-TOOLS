"use server";
import { createClient } from "@/supabase/client";

export async function getName( Component){
    const supabase = await createClient();
    let { data: Test, error } = await supabase
    .from('Test')
    .select('*')
    .eq('Component',Component)

  
    return Test;
}

export async function saveName(v){
    const supabase = await createClient();
    console.log(v);
 
    let { data: Test, error } = await supabase
        .from('Test')
        .update({name: v})
        .eq('Component', 'ClickToEdit')
        .select('*');
    console.log(Test);
        
    return Test;
}

export async function saveDescription(v){
    const supabase = await createClient();
    
let { data: Test, error } = await supabase
.from('Test')
.select('*')
console.log(Test);

    return Test;
}
