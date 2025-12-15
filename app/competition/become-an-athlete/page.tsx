import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function BecomeAnAthletePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center pt-4 pb-0 sm:pt-2 sm:pb-6">
            <div className="w-full max-w-4xl mx-auto">
              <Image
                src="/images/home-page/become-athelete.png"
                alt="Become an Athlete"
                width={1200}
                height={400}
                className="w-full h-auto rounded-xl"
                priority
              />
            </div>
            <div className="relative z-20 container mx-auto px-4 text-center mt-8">
              <h1 className="text-5xl md:text-7xl font-bold text-red-600 mb-6 text-balance font-[family-name:var(--font-changa)] ">
                Become an Athlete!
              </h1>
            </div>

            <p className="mt-4 max-w-3xl text-center text-xl text-gray-700 text-pretty leading-relaxed">
              When you choose to take your place among Special Olympics New York
              athletes, you're joining a group of strong, ambitious competitors.
              Whether you take home medals or make lifelong friends—or both—you
              can look forward to building confidence and independence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-10 pb-0 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              REGISTER AND JOIN US TODAY!
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Special Olympics New York offers children and adults with
              intellectual disabilities the opportunity to train and compete in
              authentic, quality sports at the local, state, national and even
              international level.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We currently offer{" "}
              <Link
                href="/competition/sports-offered"
                className="text-primary hover:underline font-bold"
              >
                22 sports
              </Link>{" "}
              for individuals ages 8 and up throughout the year, over the course
              of three seasons.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Here is how you get started …
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Choose your sport
                </h3>
                <Link href="/competition/sports-offered">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    View Sports
                  </Button>
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Find a Training Club
                </h3>
                <Link
                  href="https://specialolympicsnynearyou.org/"
                  target="_blank"
                >
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Find a Club
                  </Button>
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Contact Us
                </h3>
                <Link
                  href="https://specialolympicsnynearyou.org/inquire-about-us/"
                  target="_blank"
                >
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src="/images/skate.png"
                  alt="Figure Skating Athlete Cori Piels"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-6">
                  "I proved my mom wrong. She cries every time she watches me
                  skate and it makes me proud."
                </blockquote>
                <p className="text-gray-900 font-bold">– Cori Piels</p>
                <p className="text-gray-600">Special Olympics New York</p>
                <p className="text-gray-600">Figure Skating athlete</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Eligibility Requirements
            </h2>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
              <p className="text-gray-700 mb-6">
                Special Olympics New York athletes must be at least 8 years old
                and identified by an agency or professional as having one of the
                following:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Intellectual disabilities</li>
                <li>Cognitive delays as measured by formal assessment</li>
                <li>
                  Significant learning or vocational problems due to cognitive
                  delay that require or required specially designed instruction
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                Parallel to this core sports program, we support three seasons
                of{" "}
                <Link
                  href="/unified-champion-schools"
                  className="text-primary hover:underline"
                >
                  Unified Sports
                </Link>
                , where teams are comprised of athletes both with and without
                intellectual disabilities.
              </p>
              <p className="text-gray-700 mb-4">
                We also offer a Young Athletes Program that introduces the
                concept of inclusive sports to children up to age 7, preparing
                them for our core sports program with activities important to
                mental and physical development such as running, balance, and
                throwing/catching. Young Athletes is open to children of all
                abilities.
              </p>
              <p className="text-gray-700 mb-4">
                Finally, Special Olympics New York offers free health screenings
                in many disciplines at all major competitive events, and
                coordinates an Athlete Leadership program that includes public
                speaking training and mentorship opportunities.
              </p>
              <p className="text-lg font-bold text-primary">
                All Special Olympics New York programming is provided at no cost
                to athletes, families or caregivers.
              </p>
            </div>

            <div className="text-center mt-8">
              <Link
                href="https://specialolympicsnynearyou.org/inquire-about-us/"
                target="_blank"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Questions? Contact us.
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
