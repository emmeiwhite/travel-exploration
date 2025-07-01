## GENERICS: 💡 Definition:

`Generics allow you to write reusable, type-safe code where the type is not known until usage.`

### 🔍 Analogy:

`Think of generics like function parameters, but for types.`

```ts
function identity<T>(arg: T): T {
  console.log(arg)
  return arg
}

identity(5) // T = number
identity('Hello') // T = string
identity<number[]>([23, 45])
```

`So T is a placeholder that gets inferred or passed explicitly.`

### ✅ Why Do We Need Generics?

Without generics, we either:

- Write duplicate functions for different types.

- Use `any` which kills type safety.
