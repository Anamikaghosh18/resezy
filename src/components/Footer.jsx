import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-50/20 border-t border-gray-200">
      <div className="max-w-[90rem] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
             
               <img src="/favicon.png" alt = "logo" className="w-8 h-8 rounded-lg"></img>
    
              <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Resezy
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              The AI-powered resume builder trusted by students and professionals worldwide.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-base font-semibold text-gray-800 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition">Resume Builder</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Templates</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">ATS Scanner</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-base font-semibold text-gray-800 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; 2025 Resezy. All rights reserved.</p>
          <p className="mt-4 md:mt-0 text-center md:text-right">Built by Anamika Ghosh for job seekers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
