"use server"
import { supabase } from "@/lib/XAPIsupabaseClient"

export async function createTweet(text,scheduledTime){
    const {data, error} = await supabase
    .from('scheduled_tweets')
    .insert([{tweet_text:text, scheduled_time:scheduledTime, status:'pending'}])

    if (error) throw error
    return data
}

export async function getTweets(){
    const {data,error} = await supabase.from('scheduled_tweets')
    .select('*')
    if (error) throw error;
    // console.log("Fetching Tweets"+ data)
    return data
}

export async function deleteTweet(id){
    const {data,error} = await supabase.from('scheduled_tweets')
    .delete()
    .eq('id',id)

    if (error) throw error
    return data
}