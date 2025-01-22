"use client"

import { useState } from "react"
import Header from "./components/Header"
import ContactList from "./components/ContactList"
import ContactForm from "./components/ContactForm"
import CategoryForm from "./components/CategoryForm"

export type Contact = {
  id: number
  name: string
  email: string
  phone: string
  businessCategory: string
  fieldOfWork: string
}

export default function Home() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [filter, setFilter] = useState({ businessCategory: "", fieldOfWork: "" })
  const [showForm, setShowForm] = useState(false)
  const [showCategoryForm, setShowCategoryForm] = useState(false)
  const [businessCategories, setBusinessCategories] = useState<string[]>([
    "Technology",
    "Finance",
    "Healthcare",
    "Education",
  ])
  const [fieldsOfWork, setFieldsOfWork] = useState<string[]>(["Sales", "Marketing", "Engineering", "Human Resources"])

  const addContact = (contact: Omit<Contact, "id">) => {
    setContacts([...contacts, { ...contact, id: Date.now() }])
    setShowForm(false)
  }

  const addCategory = (category: string, isBusinessCategory: boolean) => {
    if (isBusinessCategory) {
      setBusinessCategories([...businessCategories, category])
    } else {
      setFieldsOfWork([...fieldsOfWork, category])
    }
  }

  const filteredContacts = contacts.filter(
    (contact) =>
      (filter.businessCategory === "" || contact.businessCategory === filter.businessCategory) &&
      (filter.fieldOfWork === "" || contact.fieldOfWork === filter.fieldOfWork),
  )

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Contacts</h2>
            <div className="space-x-2">
              <button
                onClick={() => setShowForm(!showForm)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                {showForm ? "Cancel" : "Add Contact"}
              </button>
              <button
                onClick={() => setShowCategoryForm(!showCategoryForm)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                {showCategoryForm ? "Cancel" : "Add Category"}
              </button>
            </div>
          </div>
          {showForm && (
            <ContactForm addContact={addContact} businessCategories={businessCategories} fieldsOfWork={fieldsOfWork} />
          )}
          {showCategoryForm && <CategoryForm addCategory={addCategory} />}
          {!showForm && !showCategoryForm && (
            <>
              <div className="mb-4 flex space-x-4">
                <select
                  className="p-2 border rounded flex-grow"
                  value={filter.businessCategory}
                  onChange={(e) => setFilter({ ...filter, businessCategory: e.target.value })}
                >
                  <option value="">All Business Categories</option>
                  {businessCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <select
                  className="p-2 border rounded flex-grow"
                  value={filter.fieldOfWork}
                  onChange={(e) => setFilter({ ...filter, fieldOfWork: e.target.value })}
                >
                  <option value="">All Fields of Work</option>
                  {fieldsOfWork.map((field) => (
                    <option key={field} value={field}>
                      {field}
                    </option>
                  ))}
                </select>
              </div>
              <ContactList contacts={filteredContacts} />
            </>
          )}
        </div>
      </main>
    </div>
  )
}

