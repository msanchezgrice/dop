"use client";

import { RootLayout } from '@/components/layout';
import { Button, Card, Container, Heading } from '@/components/ui';
import { FEATURES } from '@/utils/constants';
import { FiArrowRight, FiBox, FiUsers, FiCpu, FiLink } from 'react-icons/fi';

// Icon mapping
const iconMap = {
  task: FiBox,
  team: FiUsers,
  ai: FiCpu,
  integration: FiLink,
};

export default function HomePage() {
  return (
    <RootLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <Container>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                AI-Powered Project Management Assistant
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Streamline your workflow, automate tedious tasks, and focus on what matters most with PM Agent.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button href="/signup" size="lg">
                  Get Started for Free
                </Button>
                <Button href="/features" variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg shadow-xl p-2 border border-gray-200">
                <img 
                  src="/images/dashboard-preview.png" 
                  alt="PM Agent Dashboard" 
                  className="rounded-md"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4">Powerful Features</Heading>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered tools help you manage projects more effectively and efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];
              
              return (
                <Card key={feature.title} variant="elevated" className="text-center">
                  <div className="p-6">
                    <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      <Icon size={28} />
                    </div>
                    <Heading level={3} size="xl" className="mb-3">
                      {feature.title}
                    </Heading>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Button href="/features" variant="outline">
              See All Features <FiArrowRight className="ml-2" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4">Trusted by Teams Worldwide</Heading>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our users have to say about PM Agent.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} variant="outline" className="bg-white">
                <div className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">
                    &quot;PM Agent has completely transformed how our team manages projects. The AI suggestions are incredibly useful and have saved us countless hours.&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                    <div className="ml-3">
                      <h4 className="font-semibold text-gray-900">Jane Smith</h4>
                      <p className="text-sm text-gray-500">Product Manager, Acme Inc.</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:w-2/3 md:pr-10">
              <Heading level={2} className="text-white mb-4">Ready to streamline your project management?</Heading>
              <p className="text-xl text-blue-100">
                Get started with PM Agent today and experience the difference AI-powered project management can make.
              </p>
            </div>
            <div>
              <Button href="/signup" variant="secondary" size="lg">
                Get Started for Free
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </RootLayout>
  );
}
