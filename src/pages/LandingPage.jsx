import { ArrowRight, Zap, Target, Star, Users, Sparkles, CheckCircle, Menu, X,Download, Eye, Award, Clock, Shield } from 'lucide-react';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Pricing from '../components/Pricing';
import professionalImg from '../assets/professional_img.png';
import creative_template from '../assets/creative_template.jpg'; 
import classic from '../assets/classic.jpg';
import { useNavigate } from 'react-router-dom';



const ResezyLanding = () => {
  const navigate = useNavigate();
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CS Student at UCLA",
      content: "Resyez helped me land my dream internship at Google! The AI suggestions were spot-on.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Johnson",
      role: "Recent Graduate",
      content: "From zero interviews to 5 offers in 2 weeks. This platform is a game-changer!",
      rating: 5,
      avatar: "MJ"
    },
    {
      name: "Priya Patel",
      role: "Marketing Student",
      content: "The templates are so clean and modern. HR managers actually complimented my resume!",
      rating: 5,
      avatar: "PP"
    },
    {
      name: "Alex Rodriguez",
      role: "Engineering Student",
      content: "The ATS optimization feature got my resume noticed by top tech companies. Amazing!",
      rating: 5,
      avatar: "AR"
    },
    {
      name: "Emily Davis",
      role: "Business Graduate",
      content: "Professional templates and smart suggestions helped me stand out in finance interviews.",
      rating: 5,
      avatar: "ED"
    },
    {
      name: "James Wilson",
      role: "Design Student",
      content: "Finally, a resume builder that understands modern design while staying professional.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "AI-Powered Writing",
      description: "Smart content suggestions tailored to your industry and experience level",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "ATS Optimization",
      description: "Beat applicant tracking systems with optimized formatting and keywords",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Professional Templates",
      description: "Modern, recruiter-approved designs that make lasting impressions",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Quick Generation",
      description: "Create polished resumes in minutes, not hours of formatting",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Privacy Protected",
      description: "Your data is secure with enterprise-grade encryption and privacy",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Expert Reviews",
      description: "Get feedback from career experts and industry professionals",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const templates = [
    {
      title: "Professional",
      image: professionalImg,
    },
    {
      title: "Creative Flair",
      image: creative_template,
    },
    {
      title: "Minimal Classic",
      image: classic,
    },
  ];



  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          
          .animate-marquee:hover {
            animation-play-state: paused;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(3deg); }
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          .animate-float-delayed {
            animation: float 4s ease-in-out infinite;
            animation-delay: 1s;
          }

          @keyframes pulse-glow {
            0%, 100% { 
              box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
            }
            50% { 
              box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
            }
          }

          .pulse-glow {
            animation: pulse-glow 2s infinite;
          }

          .grid-pattern {
            background-image: 
              linear-gradient(to right, rgba(59, 130, 246, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
            background-size: 30px 30px;
          }

          .resume-card {
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            border: 1px solid #e2e8f0;
          }

          .bento-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 1rem;
          }

          .glass-effect {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          @media (max-width: 768px) {
            .bento-grid {
              grid-template-columns: repeat(6, 1fr);
            }
          }
        `
      }} />
      
      <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
        {/* Navigation */}
        
        <Header/>

        {/* Hero Section */}
        
        <section className="relative py-16 bg-gradient-to-b from-gray-50 to-white grid-pattern">
          <div className="px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium mb-6">
                    ✨ Trusted by 1000+ students
                  </span>
                  
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Create Professional
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent block">
                      Resumes in Minutes
                    </span>
                  </h1>
                  
                  <p className="text-lg text-gray-600 mb-8 max-w-lg">
                    AI-powered resume builder trusted by students and professionals. 
                    Get hired faster with ATS-optimized templates.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="group bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 hover:scale-105">
                      <span>Create Resume Free</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex space-x-8">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">1k+</div>
                    <div className="text-sm text-gray-500">Resumes Created</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">89%</div>
                    <div className="text-sm text-gray-500">Interview Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">4.9★</div>
                    <div className="text-sm text-gray-500">User Rating</div>
                  </div>
                </div>
              </div>

              {/* Right - Resume Templates */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {/* Template 1 */}
                  <div className="resume-card rounded-lg p-4 animate-float transform hover:scale-105 transition-transform">
                    <div className="w-full h-32 bg-white rounded border border-gray-200 mb-3 p-2">
                      <div className="h-2 bg-blue-600 rounded mb-2"></div>
                      <div className="h-1 bg-gray-300 rounded mb-1"></div>
                      <div className="h-1 bg-gray-300 rounded mb-2 w-3/4"></div>
                      <div className="grid grid-cols-2 gap-1">
                        <div className="h-1 bg-gray-200 rounded"></div>
                        <div className="h-1 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="text-xs font-medium text-gray-700">Modern Template</div>
                  </div>

                  {/* Template 2 */}
                  <div className="resume-card rounded-lg p-4 animate-float-delayed transform hover:scale-105 transition-transform mt-8">
                    <div className="w-full h-32 bg-white rounded border border-gray-200 mb-3 p-2">
                      <div className="flex mb-2">
                        <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
                        <div className="h-2 bg-purple-500 rounded flex-1"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-1 bg-gray-300 rounded"></div>
                        <div className="h-1 bg-gray-300 rounded w-4/5"></div>
                        <div className="h-1 bg-gray-300 rounded w-3/5"></div>
                      </div>
                    </div>
                    <div className="text-xs font-medium text-gray-700">Creative Template</div>
                  </div>

                  {/* Template 3 */}
                  <div className="resume-card rounded-lg p-4 animate-float transform hover:scale-105 transition-transform">
                    <div className="w-full h-32 bg-white rounded border border-gray-200 mb-3 p-2">
                      <div className="border-l-2 border-green-500 pl-2 mb-2">
                        <div className="h-1 bg-green-500 rounded w-1/2 mb-1"></div>
                        <div className="h-1 bg-gray-300 rounded w-1/3"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-1 bg-gray-200 rounded"></div>
                        <div className="h-1 bg-gray-200 rounded w-5/6"></div>
                      </div>
                    </div>
                    <div className="text-xs font-medium text-gray-700">Professional</div>
                  </div>

                  {/* Template 4 */}
                  <div className="resume-card rounded-lg p-4 animate-float-delayed transform hover:scale-105 transition-transform mt-4">
                    <div className="w-full h-32 bg-white rounded border border-gray-200 mb-3 p-2">
                      <div className="text-center mb-2">
                        <div className="h-2 bg-orange-500 rounded mx-auto w-1/2 mb-1"></div>
                        <div className="h-1 bg-gray-300 rounded mx-auto w-1/3"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        <div className="space-y-1">
                          <div className="h-1 bg-gray-200 rounded"></div>
                          <div className="h-1 bg-gray-200 rounded"></div>
                        </div>
                        <div className="space-y-1">
                          <div className="h-1 bg-gray-200 rounded"></div>
                          <div className="h-1 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs font-medium text-gray-700">Executive</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Why Choose <span className="text-blue-600">Resezy</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              We understand the challenges of job hunting. That's why we've built an intelligent platform 
              that combines AI technology with proven recruiting insights to help you stand out.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI-Powered</h3>
                <p className="text-gray-600">Smart algorithms analyze job descriptions and optimize your resume content</p>
              </div>
              
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">ATS-Friendly</h3>
                <p className="text-gray-600">All templates are designed to pass through applicant tracking systems</p>
              </div>
              
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert-Approved</h3>
                <p className="text-gray-600">Templates reviewed by HR professionals and career coaches</p>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-50">
          <div className="px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Everything You Need to <span className="text-blue-600">Get Hired</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive tools and features designed to give you the competitive edge in today's job market
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:scale-105"
                >
                  <div className={`w-10 h-10 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
        </section>

        {/* Templates Section - Bento Grid */}
        
      <section id="templates" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold text-blue-600 uppercase tracking-wide">
          Resume Templates
        </h2>
        <p className="mt-2 text-center text-4xl font-bold text-gray-900 sm:text-5xl">
          ATS-Optimized. Professionally Designed.
        </p>
        <p className="mt-4 text-center text-lg text-gray-600">
          Browse our curated collection of modern, job-winning resume designs.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[280px]">
          {templates.map((template, idx) => (
            <div
              key={idx}
              onClick={() => navigate("/templates")}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition cursor-pointer"
            >
              <img
                src={template.image}
                alt={template.title}
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{template.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => navigate("/templates")}
            className="inline-block rounded-xl bg-blue-600 px-8 py-3 text-white text-base font-medium shadow-md hover:bg-blue-700 transition"
          >
            Browse All Templates
          </button>
        </div>
      </div>
    </section>



        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-gray-50">
          <div className="max-w-full px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Success <span className="text-blue-600">Stories</span>
              </h2>
              <p className="text-lg text-gray-600">
                Real students, real results, real career transformations
              </p>
            </div>

            {/* Testimonials Marquee */}
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee space-x-6 py-4">
                {/* First set of testimonials */}
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 w-80 bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-800 mb-4 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white text-sm">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        
                <Pricing/>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Land Your <span className="text-blue-400">Dream Job</span>?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of students and professionals who've transformed their careers with Resezy. 
              Create your professional resume in minutes, not hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 hover:scale-105 pulse-glow">
                <span>Start Building Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center space-x-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm">Free forever plan available</span>
              </div>
            </div>
          </div>
        </section>

        <FAQSection/>

        {/* Footer */}
              <Footer/>
       
      </div>
    </>
  );
};

export default ResezyLanding;