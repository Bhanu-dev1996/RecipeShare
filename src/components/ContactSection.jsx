export default function ContactSection({ t }) {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">{t.getInTouch}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">{t.contactDesc}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-left">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{t.contactInfo}</h3>
            <div className="space-y-3">
              <p className="text-gray-600 dark:text-gray-400">
                <strong>Email:</strong> hello@recipeshare.com
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <strong>Phone:</strong> (555) 123-4567
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <strong>Address:</strong> 123 Recipe Street, Food City, FC 12345
              </p>
            </div>
          </div>
          <div className="text-left">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{t.quickMessage}</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder={t.yourName}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <input
                type="email"
                placeholder={t.yourEmail}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <textarea
                placeholder={t.yourMessage}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                {t.sendMessage}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}