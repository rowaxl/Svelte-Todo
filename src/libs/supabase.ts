import { createClient } from '@supabase/supabase-js'
import type { Todo } from './types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_API_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const fetchTodos = async () => {
  const { data, error } = await supabase
    .from('todos')
    .select()

  console.log({data, error})
  if (data) return data as Todo[]
}

export const insertTodo = async (todo: Todo) => {
  const { error } = await supabase
    .from('todos')
    .insert([
      todo
    ])

  if (error) console.error(error)
}

export const updateTodo = async (todo: Todo) => {
  const { data, error } = await supabase
    .from('todos')
    .update({ ...todo })
    .match({ id: todo.id })
  
  console.log({data, error})
}
