import type { Session, SupabaseClient, User } from '@supabase/supabase-js'
import type { Database } from './database.types.ts' // import generated types
import type { DrizzlePgDatabase } from 'drizzle-orm/d1';

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      supabase: SupabaseClient<Database>
      safeGetSession: () => Promise<{ session: Session | null; user: User | null }>
      session: Session | null
      user: User | null
      drizzle: DrizzlePgDatabase;
    }
    interface PageData {
      session: Session | null
    }
    // interface PageState {}
    // interface Platform {}
  }
}

export {}