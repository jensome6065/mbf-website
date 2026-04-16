export default function ContactUsPage() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Contact Us</h1>
      <p className="mt-4 text-lg leading-8 text-slate-700">
        Interested in joining MBF, partnering with us, or learning more? Send us a message.
      </p>

      <form className="mt-10 space-y-5 rounded-lg border border-slate-200 bg-white p-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            First Name
            <input
              type="text"
              name="firstName"
              required
              className="rounded-md border border-slate-300 px-3 py-2 outline-none ring-blue-300 focus:ring-2"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Last Name
            <input
              type="text"
              name="lastName"
              required
              className="rounded-md border border-slate-300 px-3 py-2 outline-none ring-blue-300 focus:ring-2"
            />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Email
            <input
              type="email"
              name="email"
              required
              className="rounded-md border border-slate-300 px-3 py-2 outline-none ring-blue-300 focus:ring-2"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Phone
            <input
              type="tel"
              name="phone"
              required
              className="rounded-md border border-slate-300 px-3 py-2 outline-none ring-blue-300 focus:ring-2"
            />
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Subject
          <input
            type="text"
            name="subject"
            required
            className="rounded-md border border-slate-300 px-3 py-2 outline-none ring-blue-300 focus:ring-2"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Message
          <textarea
            name="message"
            required
            rows={6}
            className="rounded-md border border-slate-300 px-3 py-2 outline-none ring-blue-300 focus:ring-2"
          />
        </label>

        <button
          type="submit"
          className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
