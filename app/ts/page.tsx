// Interface: Defines the shape of the object and we can perform inheritance in this case

interface IUser {
  username: string
  age: number
  email: string
}

interface Employee extends IUser {
  employeeId: number
}

const roufi: Employee = {
  username: 'Mr. Rouf',
  age: 34,
  email: 'roufi@gmail.com',
  employeeId: 11
}

// Generics: Generics allows you to write resuable, type-safe code, where the type is not known until usage.

function logString(arg: string) {
  console.log(arg)
  return arg
}

logString('Pray, Move & Act. Motivation will find you on the road')

// Now a new requirement came to log number

function logNumber(arg: number) {
  console.log(arg)
  return arg
}

logNumber(23)

// Assume yet a new requirement arises to log Boolean

function logBoolean(arg: boolean) {
  console.log(arg)
  return arg
}

logBoolean(true)

// New requirement logArr

function logArray<T>(arg: T[]) {
  console.log(arg)
  return arg
}

logArray([4, 6, 7])

// BUT WE WILL CREATE A GENERIC FUNCTION WHICH WILL AUTOMATICALLY INFER THE TYPE AT RUN TIME

// So T is a placeholder that gets inferred or passed explicitly.
function logAnything<T>(arg: T): T {
  console.log(arg)
  return arg
}

logAnything([2, 4, 6])
logAnything('45')
logAnything<number>(345)

/** Example-2: TypeScript Generic Version */

function getFirst<T>(arg: T[]): T {
  return arg[0]
}

const num = getFirst([10, 20, 30]) // T = number
const str = getFirst(['work', 'hard', 'spend time practicing']) // T = string
const user = getFirst([{ name: 'imran' }, { name: 'rawdha' }]) // T = object -- {name:string}

function wrapInArray<T>(val: T): T[] {
  return [val]
}

wrapInArray('hello')
wrapInArray(23)
wrapInArray(false)

// Now T keeps the original type and wraps it properly.

// Question-1: getOldest person from the age array
type AgeType = {
  age: number
}

function getOldest<T extends AgeType>(people: T[]): T {
  return people.sort((a, b) => b.age - a.age)[0]
}

const ages: AgeType[] = [{ age: 30 }, { age: 50 }, { age: 25 }, { age: 13 }]

getOldest(ages)

type PlayerType = {
  name: string
  age: number
}

const players: PlayerType[] = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 50 },
  { name: 'Tom', age: 25 }
]

// Assertion
// const p = getOldest(players) as Player // Assertion is not a good thing in this case

const person = getOldest(players)
const age1 = getOldest(ages)
console.log(age1)
console.log(person.age)
console.log(person.name)

// GENERIC TYPE TO FETCH CORRECT DATA:

type TReaction = {
  likes: number
  dislikes: number
}
type TPost = {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: TReaction
  views: number
  userId: number
}

type PostResponse = {
  posts: TPost[]
  total: number
  skip: number
  limit: number
}

async function fetchData<T>(path: string): Promise<T> {
  const response = await fetch(`https://dummyjson.com${path}`)
  return response.json()
}

export default async function TypeScript() {
  const { username, age, email, employeeId } = roufi

  const data = await fetchData('/posts')
  console.log(data)
  return (
    <div>
      <h1>TypeScript</h1>

      <div className="p-3 border-green-500 border-1 max-w-[200px] rounded-sm">
        <p>User Details</p>
        <p>Name: {username}</p>
        <p>Age: {age}</p>
        <p>{email}</p>
        <p>{employeeId}</p>
      </div>

      <h2>{logNumber(45)}</h2>

      <div className="border-3 border-b-rose-500 max-w-[300px]">
        <p>{user.name}</p>
        <p>{num}</p>
        <p>{str}</p>
      </div>
    </div>
  )
}
