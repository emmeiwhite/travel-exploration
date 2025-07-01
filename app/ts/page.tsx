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
    </div>
  )
}
