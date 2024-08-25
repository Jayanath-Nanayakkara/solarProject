import React from "react";
import { FaFacebook, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";

const sections = [
  {
    title: "Solutions",
    items: ["Marketing", "Analytics", "Commerce", "Data"],
  },
  {
    title: "Company",
    items: ["About Us", "Careers", "Press", "Contact"],
  },
  {
    title: "Support",
    items: ["Help Center", "FAQ", "Terms of Service", "Privacy Policy"],
  },
  {
    title: "Social",
    items: ["Facebook", "Instagram", "Twitter", "Twitch"],
  },
];

const socialItems = [
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://instagram.com/",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    link: "https://twitter.com/",
  },
  {
    name: "Twitch",
    icon: FaTwitch,
    link: "https://twitch.tv/",
  },
];

const Footer = () => {
  return (
    <footer className="w-full mt-24 bg-slate-900 text-gray-300 py-8 px-4">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 border-gray-600 py-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold text-lg mb-4">{section.title}</h6>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h6 className="font-bold text-lg mb-4">Follow Us</h6>
          <ul className="flex space-x-4">
            {socialItems.map((social, index) => {
              const Icon = social.icon;
              return (
                <li key={index}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <Icon className="text-gray-300 hover:text-gray-100 text-2xl" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
