import { useState } from "react"

type CategoryFormProps = {
  addCategory: (category: string, isBusinessCategory: boolean) => void
}

export default function CategoryForm({ addCategory }: CategoryFormProps) {
  const [category, setCategory] = useState("")
  const [isBusinessCategory, setIsBusinessCategory] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (category.trim()) {
      addCategory(category.trim(), isBusinessCategory)
      setCategory("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="New category name"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="flex items-center space-x-2">
        <label className="flex items-center">
          <input
            type="radio"
            checked={isBusinessCategory}
            onChange={() => setIsBusinessCategory(true)}
            className="mr-2"
          />
          Business Category
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            checked={!isBusinessCategory}
            onChange={() => setIsBusinessCategory(false)}
            className="mr-2"
          />
          Field of Work
        </label>
      </div>
      <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Add Category
      </button>
    </form>
  )
}

