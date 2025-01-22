import { useState } from "react"
import type { Contact } from "../page"

type ContactFormProps = {
  addContact: (contact: Omit<Contact, "id">) => void
  businessCategories: string[]
  fieldsOfWork: string[]
}

export default function ContactForm({ addContact, businessCategories, fieldsOfWork }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessCategory: "",
    fieldOfWork: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addContact(formData)
    setFormData({ name: "", email: "", phone: "", businessCategory: "", fieldOfWork: "" })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Name"
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Phone"
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <select
          id="businessCategory"
          name="businessCategory"
          value={formData.businessCategory}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Select a Business Category</option>
          {businessCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          id="fieldOfWork"
          name="fieldOfWork"
          value={formData.fieldOfWork}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Select a Field of Work</option>
          {fieldsOfWork.map((field) => (
            <option key={field} value={field}>
              {field}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Contact
      </button>
    </form>
  )
}

