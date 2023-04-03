/* Supabase client generation */
/* Imports */
import { createClient, SupabaseClient } from "@supabase/supabase-js"
import { env } from '$env/dynamic/private'

/* Client */
export const client: SupabaseClient = createClient(env.SUPABASE_URL || '', env.SUPABASE_KEY || '')