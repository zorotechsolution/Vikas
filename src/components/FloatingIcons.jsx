import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "./FloatingIcons.css";

const FloatingIcons = () => {
  return (
    <>
      {/* Call Icon */}
      <a href="tel:+919487806735" className="floating-icon call">
        <FaPhoneAlt />
      </a>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/919487187384"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-icon whatsapp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default FloatingIcons;
