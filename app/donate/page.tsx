import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center pt-4 pb-0 sm:pt-2 sm:pb-6">
            <div className="w-full max-w-4xl mx-auto">
              <Image
                src="/images/support.png"
                alt="Show your Support"
                width={1200}
                height={400}
                className="w-full h-auto rounded-xl"
                priority
              />
            </div>
            <div className="relative z-20 container mx-auto px-4 text-center mt-8">
              <h1 className="text-5xl md:text-7xl font-bold text-red-600 mb-6 text-balance font-[family-name:var(--font-changa)] ">
                Show your Support
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              Special Olympics New York relies on the financial contributions of
              individuals just like you—whether through cash donations, in-kind
              contributions, workplace matches or estate plans. You provide the
              opportunities for athletes across the state to realize their
              dreams.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Make a Difference Today
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Your donation helps provide free sports training, competition,
              health screenings, and leadership opportunities to thousands of
              athletes with intellectual disabilities across New York State.
            </p>
            <Link
              href="http://support.specialolympics.org/a/new-york?ms=IDMP_DB&utm_source=donatebtn&utm_medium=web&utm_campaign=IDMP"
              target="_blank"
            >
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white text-xl px-12 py-6"
              >
                Donate Today!
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Your Impact
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
                <div className="text-5xl font-bold text-red-600 mb-4">
                  48,000
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Athletes Served
                </h3>
                <p className="text-gray-700">
                  Your donation helps provide year-round sports training and
                  competition to thousands of athletes across New York State.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
                <div className="text-5xl font-bold text-red-600 mb-4">22</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Olympic-Style Sports
                </h3>
                <p className="text-gray-700">
                  Support enables us to offer a wide variety of sports programs
                  throughout the year at no cost to athletes and families.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
                <div className="text-5xl font-bold text-red-600 mb-4">
                  21,000
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Active Volunteers
                </h3>
                <p className="text-gray-700">
                  Your contribution helps coordinate and support our dedicated
                  volunteer network across nine regions.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
                <div className="text-5xl font-bold text-red-600 mb-4">100%</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Free to Athletes
                </h3>
                <p className="text-gray-700">
                  All programming, including training, competition, uniforms,
                  and travel, is provided at no cost to athletes and families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Ways to Give
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Other Ways to Give */}
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-bold text-red-600">
                    Corporate Partnerships
                  </h3>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-8 h-8 bg-red-600/40 text-white rounded-full hover:bg-red-700"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <p className="text-gray-700 mb-0">
                  Partner with us to engage your employees and make a lasting
                  impact in your community.{" "}
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-bold text-red-600">
                    Planned Giving
                  </h3>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-8 h-8 bg-red-600/40 text-white rounded-full hover:bg-red-600/70"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <p className="text-gray-700 mb-0">
                  Leave a lasting legacy through estate planning and planned
                  gifts.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-bold text-red-600">
                    In-Kind Donations
                  </h3>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-8 h-8 bg-red-600/40 text-white rounded-full hover:bg-red-600/70"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <p className="text-gray-700 mb-0">
                  Donate goods, services, or equipment to support our athletes
                  and programs.
                </p>
              </div>
            </div>

            {/* Right Column - Donation Form */}
            <div>
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Make a Donation
                </h3>

                <form className="space-y-6">
                  {/* Preset Amounts */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Select Amount
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        type="button"
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:border-red-500 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        $25
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:border-red-500 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        $50
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:border-red-500 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        $100
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:border-red-500 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        $250
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:border-red-500 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        $500
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:border-red-500 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        Other
                      </button>
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div>
                    <label
                      htmlFor="custom-amount"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Or Enter Custom Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        $
                      </span>
                      <input
                        type="number"
                        id="custom-amount"
                        name="amount"
                        min="1"
                        placeholder="Enter amount"
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                  </div>

                  {/* Donation Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Donation Type
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="donation-type"
                          value="one-time"
                          defaultChecked
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          One-time donation
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="donation-type"
                          value="monthly"
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          Monthly donation
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Link
                    href="http://support.specialolympics.org/a/new-york?ms=IDMP_DB&utm_source=donatebtn&utm_medium=web&utm_campaign=IDMP"
                    target="_blank"
                    className="w-full"
                  >
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg font-semibold">
                      Donate Now
                    </Button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Every donation, no matter the size, helps change lives and create
              opportunities for athletes with intellectual disabilities.
            </p>
            <Link
              href="http://support.specialolympics.org/a/new-york?ms=IDMP_DB&utm_source=donatebtn&utm_medium=web&utm_campaign=IDMP"
              target="_blank"
            >
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white text-xl px-12 py-6"
              >
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
