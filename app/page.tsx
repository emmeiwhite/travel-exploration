type TPost = {
  id: number
  title: string
  description: string
}

type TUser = {
  id: number
  name: string
  age: number
}

/* ---

async function fetchPosts(path: string): Promise<TPost[]> {
  // Something like this while Promise functionality is declared: function Promise<T>(arg:T):T[]
  const resp = await fetch(`https://dummyjson.com${path}`)
  return resp.json()
}

async function fetchUsers(path: string): Promise<TUser[]> {
  // Something like this while Promise functionality is declared: function Promise<T>(arg:T):T[]
  const resp = await fetch(`https://dummyjson.com${path}`)
  return resp.json()
}

--- */

// GENERIC FUNCTION TO FETCH INSTEAD OF WRITING TOO MANY FUNCTIONS

async function fetchData<T>(path: string): Promise<T> {
  const resp = await fetch(`https://dummyjson.com${path}`)
  return resp.json()
}

export default async function HomePage() {
  const data = await fetchData<TPost[]>('/posts')

  console.log(data)
  return <div className="text-5xl">HomePage</div>
}
