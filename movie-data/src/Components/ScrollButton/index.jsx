import React, { useState, useEffect } from "react";
import './styles.css'
import { FaArrowCircleUp } from "react-icons/fa";

export default function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <FaArrowCircleUp size={35} />
        </div>
      )}
    </div>
  );
}