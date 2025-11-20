import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Contact() {
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      project_type: form.get('project_type'),
      budget: form.get('budget'),
      message: form.get('message'),
    }

    try {
      const res = await fetch(`${BACKEND_URL}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      setStatus({ ok: res.ok, message: data.message || 'Thank you. We will be in touch shortly.' })
      if (res.ok) e.currentTarget.reset()
    } catch (e) {
      setStatus({ ok: false, message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Book a Consultation</h2>
            <p className="mt-4 text-gray-700">Tell us about your project and we’ll schedule a discovery call.</p>
            <div className="mt-6 aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <img src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=1600&auto=format&fit=crop" alt="Map" className="w-full h-full object-cover" />
            </div>
          </div>

          <form onSubmit={submit} className="p-6 rounded-2xl border border-gray-200">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700">Name</label>
                <input name="name" required className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Phone</label>
                <input name="phone" className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Project Type</label>
                <select name="project_type" className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900">
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Renovation</option>
                  <option>Styling</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-gray-700">Budget</label>
                <input name="budget" className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-gray-700">Message</label>
                <textarea name="message" rows="4" required className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
              </div>
            </div>
            <button className="mt-4 inline-flex rounded-full bg-gray-900 text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors">Submit</button>
            {status && (
              <p className={`mt-3 text-sm ${status.ok ? 'text-green-700' : 'text-red-600'}`}>{status.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
