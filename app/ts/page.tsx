// Structural Typing or Duck Typing

type Duck = {
  sound: string
  swim: () => void
}

const animal = {
  sound: 'quack',
  swim: () => {
    console.log('swimming')
  },
  fly: () => console.log('flying')
}

// Valid: animal has the structure Duck requires
const duck: Duck = animal

/** Even though animal is not explicitly declared as type Duck, it satisfies the structure, so TypeScript allows assignment ✅ */

// 2. Real-world Example: Imagine a function that takes a user object
type User = {
  name: string
  age: number
}

const logUser = (user: User) => {
  console.log(user.name)
}

const someone = {
  id: 3,
  name: 'tomi',
  age: 12
}

logUser(someone) // allowed, extra properties are ignored

// Even though someone has more than just id and name, TypeScript allows it because it structurally matches the User type.

export default function TS() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-teal-200 min-h-screen">
      <div className="max-w-5xl mx-auto px-5 py-6 pt-[12vh]">
        <h1 className="pt-5 font-extrabold mb-6">TypeScript - Learning Continue</h1>

        <h2>🔹 What is Structural Typing / Duck Typing?</h2>
        <blockquote className="border-l-4 border-gray-500 pl-3 my-3">
          If it walks like a duck and quacks like a duck, it is a duck.
        </blockquote>

        <p>This means:</p>
        <li>
          In TypeScript, an object is considered of a certain type if it has all the required
          structure (properties/methods), regardless of its explicit name or declared type.
        </li>
      </div>
    </div>
  )
}
