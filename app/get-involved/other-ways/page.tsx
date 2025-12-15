import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Users, Briefcase } from "lucide-react";

export default function OtherWaysPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center pt-4 pb-0 sm:pt-2 sm:pb-6">
            <div className="w-full max-w-4xl mx-auto">
              <Image
                src="/images/home-page/other-ways.png"
                alt="Other Ways to Get Involved"
                width={1200}
                height={400}
                className="w-full h-auto rounded-xl"
                priority
              />
            </div>
            <div className="relative z-20 container mx-auto px-4 text-center mt-8">
              <h1 className="text-5xl md:text-7xl font-bold text-red-600 mb-6 text-balance font-[family-name:var(--font-changa)]">
                Other Ways to Get Involved
              </h1>
            </div>

            <p className="mt-8 max-w-3xl text-center text-xl text-gray-700 text-pretty leading-relaxed">
              Beyond volunteering and coaching, there are many other meaningful
              ways to support Special Olympics New York and make a lasting
              impact in our community.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Find Training Clubs Section */}
          <div className="bg-gradient-to-br from-red-50/50 to-red-100/50 border border-red-200/50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-600 rounded-full">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Find Training Clubs Near You
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Connect with local training clubs in your area. Training clubs
              provide year-round athletic training and competition opportunities
              for athletes with intellectual disabilities. Find clubs by
              entering your zip code and discover how you can get involved
              locally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white hover:bg-red-700 hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <Link
                  href="http://specialolympicsnynearyou.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Search Training Clubs
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-2 border-red-300 px-8 py-4 text-lg font-semibold text-red-700 bg-white hover:bg-red-50 hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <Link
                  href="https://forms.gle/G15QexfUJyNiUaLX6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Submit Training Club Info
                </Link>
              </Button>
            </div>
          </div>

          {/* Young Professionals Committee Section */}
          <div className="bg-gradient-to-br from-red-50/50 to-red-100/50 border border-red-200/50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-600 rounded-full">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                NYC Leadership Council
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Join our Manhattan-based young professionals committee that
              promotes awareness and raises funds to support Special Olympics
              New York. Individuals from diverse backgrounds come together to
              work towards empowering athletes with intellectual and
              developmental disabilities through year-round Olympic-style
              athletic training and competition.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Annual Events
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Annual Summer Social</li>
                  <li>• March Madness Fundraiser</li>
                  <li>• Ugly Sweater Party</li>
                  <li>• SoulCycle Classes</li>
                  <li>• Flywheel Classes</li>
                  <li>• F45 Training</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Requirements
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Fundraise $500 annually</li>
                  <li>• Attend 7 out of 12 meetings</li>
                  <li>• Volunteer at 1 event per year</li>
                  <li>• Attend at least 1 fundraising event</li>
                </ul>
              </div>
            </div>
            <Button
              asChild
              className="rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white hover:bg-red-700 hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <Link
                href="https://www.specialolympics-ny.org/apply-to-become-a-leadership-council-member/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply to Join
              </Link>
            </Button>
          </div>

          {/* Career Opportunities Section */}
          <div className="bg-gradient-to-br from-red-50/50 to-red-100/50 border border-red-200/50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-600 rounded-full">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Career Opportunities
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              If you're passionate about competitive sports, inclusion, and the
              well-being of people with intellectual disabilities in New York,
              consider joining our team. As a highly respected nonprofit
              organization with programs and events statewide, we provide
              opportunities to make your career while making a difference in the
              lives of athletes, families, and communities.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold text-gray-900">
                Current Openings
              </h3>
              <div className="grid gap-4">
                <div className="p-6 border border-red-200/50 bg-white rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Senior Director of Development, New York City
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Lead development efforts in the NYC area.
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="bg-red-600 hover:bg-red-700"
                  >
                    <Link
                      href="https://www.linkedin.com/jobs/view/4324480478/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Position
                    </Link>
                  </Button>
                </div>

                <div className="p-6 border border-red-200/50 bg-white rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Associate Director of Program, Central Region
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Location: East Syracuse, NY
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="bg-red-600 hover:bg-red-700"
                  >
                    <Link
                      href="https://www.linkedin.com/jobs/view/4326390375/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Position
                    </Link>
                  </Button>
                </div>

                <div className="p-6 border border-red-600 bg-white rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Volunteer Coach Positions
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Make a direct impact by coaching our athletes.
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="bg-red-600 hover:bg-red-700"
                  >
                    <Link href="/get-involved/become-a-coach">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Please bookmark this page and check back regularly for new job
              postings. We're unable to respond to general applications or phone
              inquiries.
            </p>

            <Button
              asChild
              className="rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white hover:bg-red-700 hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <Link
                href="https://www.specialolympics-ny.org/who-we-are/staff-board/career-opportunities/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View all Opportunities
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
