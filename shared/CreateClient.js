import { AppState } from 'react-native'
import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cvpqgjtykwucgihrwugj.supabase.co/'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2cHFnanR5a3d1Y2dpaHJ3dWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ5MTA0MTYsImV4cCI6MjAzMDQ4NjQxNn0.d54gye5zPolEVQowCatsyCNnTq4AFVei5OC4deMz9Lg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
    disable_email_confirmation: true,
  },
})

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})