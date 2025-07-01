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

function logBoolean(arg: boolen) {
  console.log(arg)
  return arg
}

logBoolean(true)

// BUT WE WILL CREATE A GENERIC FUNCTION WHICH WILL AUTOMATICALLY INFER THE TYPE AT RUN TIME

function logAnything<T>(arg: T): T {
  console.log(arg)
  return arg
}

logAnything([2, 4, 6])
logAnything('45')
logAnything<number>(345)

// New requirement logArr

function logArray(arg: any[]) {
  console.log(arg)
  return arg
}

logArray([4, 6, 7])

export default function TypeScript() {
  const { username, age, email, employeeId } = roufi
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
    </div>
  )
}
