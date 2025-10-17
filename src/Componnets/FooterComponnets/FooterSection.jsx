import React from "react";

const FooterSection = () => {
  return (
    <footer className="footer p-8 bg-neutral text-neutral-content">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Logo & Description */}
        <div>
          <h6 className="text-xl font-bold mb-3">CS — Ticket System</h6>
          <p className="text-sm text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h6 className="text-lg font-semibold mb-3">Company</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="link link-hover">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover">
                Our Mission
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover">
                Contact Sales
              </a>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h6 className="text-lg font-semibold mb-3">Services</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="link link-hover">
                Products & Services
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover">
                Customer Stories
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover">
                Download Apps
              </a>
            </li>
          </ul>
        </div>

        {/* Information Links */}
        <div>
          <h6 className="text-lg font-semibold mb-3">Information</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="link link-hover">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover">
                Join Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h6 className="text-lg font-semibold mb-3">Social Links</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="link link-hover flex items-center gap-2">
                <i className="fa-brands fa-x-twitter"></i> @CS — Ticket System
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover flex items-center gap-2">
                <i className="fa-brands fa-linkedin"></i> @CS — Ticket System
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover flex items-center gap-2">
                <i className="fa-brands fa-facebook"></i> @CS — Ticket System
              </a>
            </li>
            <li>
              <a
                href="mailto:support@cst.com"
                className="link link-hover flex items-center gap-2"
              >
                <i className="fa-solid fa-envelope"></i> support@cst.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Horizontal Divider */}
      <hr />

      {/* Footer Bottom  */}
      <div className="footer text-lg sm:footer-horizontal footer-center text-white">
        <aside>
          <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </aside>
      </div>
    </footer>
  );
};

export default FooterSection;
