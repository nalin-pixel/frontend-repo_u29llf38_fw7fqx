import React from 'react';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-white/70">© {new Date().getFullYear()} 10X Strategy</div>
        <div className="flex items-center gap-4 text-sm">
          <a className="hover:text-[#ff5a1f]" href="#" target="_blank" rel="noopener noreferrer">Impressum</a>
          <a className="hover:text-[#ff5a1f]" href="#" target="_blank" rel="noopener noreferrer">Datenschutz</a>
          <a className="hover:text-[#ff5a1f]" href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
