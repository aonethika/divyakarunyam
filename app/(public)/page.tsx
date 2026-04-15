import Link from "next/link";
import Contact from "./contact/page";
import Services from "./services/page";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main>
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-sky-950 mb-0 sm:mb-2 tracking-tight">
            <span className="text-sky-300 font-black italic drop-shadow-md">
                    D
            </span>ivyakarunyam
          </h1>

          <p className="text-base sm:text-lg text-sky-300 mb-3">
            Healthy Smile, Better Life
          </p>

          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10">
            Olive Dental Home in Ramanattukara provides trusted dental care with
            comfort, precision, and modern treatment methods.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/book"
              className="bg-sky-800 hover:bg-sky-700 text-white px-6 py-3 rounded-lg transition w-full sm:w-auto"
            >
              Book Appointment
            </Link>

            <Link
              href="/services"
              className="border border-sky-800 text-sky-600 hover:bg-sky-100 px-6 py-3 rounded-lg transition w-full sm:w-auto"
            >
              View Services
            </Link>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section>
          <Services />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section>
          <Contact />
        </section>
      </ScrollReveal>
    </main>
  );
}