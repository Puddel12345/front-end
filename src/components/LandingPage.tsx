import React from 'react';
import { MessageCircle } from 'lucide-react';

interface LandingPageProps {
  onStartChat: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartChat }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Full-frame background image */}
      <img 
        src="https://raw.githubusercontent.com/puddel12345/TEST/main/Jo_Main_v3.webp"
        alt="Jo"
        className="absolute inset-0 w-full h-full object-cover object-bottom"
      />

      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Top left logo - moved almost to the edge */}
        <div className="absolute top-8 left-3">
          <div className="text-white">
            <h1 className="text-2xl md:text-3xl font-light leading-tight tracking-tight">
              JOurney
            </h1>
            <p className="text-lg md:text-xl font-light opacity-90">
              by Jo
            </p>
          </div>
        </div>

        {/* Main content - positioned at the very bottom */}
        <div className="flex-1 flex items-end justify-start px-8 lg:px-16 pb-1">
          <div className="max-w-xl text-left">
            {/* Main message - positioned directly above button */}
            <div className="space-y-2 text-white mb-8">
              <div className="space-y-1">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight">
                  Ich bin <span className="italic font-normal">immer</span> an
                </h2>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight">
                  deiner Seite.
                </h2>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight">
                  Wir schaffen das.
                </h2>
              </div>
              
              {/* Reduced spacing between main text and signature */}
             <p className="text-2xl md:text-3xl lg:text-4xl opacity-90 pt-1 signature-font">
                — deine Jo
              </p>
            </div>

            {/* CTA Button - positioned deeper with larger font */}
            <div>
              <button
                onClick={onStartChat}
                className="group bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-12 py-6 rounded-full text-xl md:text-2xl font-medium transition-all duration-300 flex items-center gap-4 hover:scale-105 hover:shadow-2xl border border-white/30"
              >
                <MessageCircle className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                Starte deine JOurney
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
};

export default LandingPage;