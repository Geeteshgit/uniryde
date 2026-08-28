import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 py-6 px-4 sm:px-8 sm:flex-row sm:justify-between">
        <p className="text-xl font-semibold">
          Uni<span className="text-primary">Ryde</span>
        </p>

        <p className="text-sm text-white/30">Campus carpooling, simplified.</p>
      </div>
    </footer>
  );
};

export default Footer;
