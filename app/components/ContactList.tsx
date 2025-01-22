import type { Contact } from "../page"

type ContactListProps = {
  contacts: Contact[]
}

export default function ContactList({ contacts }: ContactListProps) {
  return (
    <div className="space-y-4">
      {contacts.length === 0 ? (
        <p className="text-center text-gray-500">No contacts found. Add a new contact to get started.</p>
      ) : (
        contacts.map((contact) => (
          <div key={contact.id} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">{contact.name}</h3>
            <p className="text-gray-600">{contact.email}</p>
            <p className="text-gray-600">{contact.phone}</p>
            <p className="text-gray-600">
              <span className="font-medium">Business Category:</span> {contact.businessCategory}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Field of Work:</span> {contact.fieldOfWork}
            </p>
          </div>
        ))
      )}
    </div>
  )
}

