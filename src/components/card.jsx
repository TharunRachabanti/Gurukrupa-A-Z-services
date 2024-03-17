import React from "react";
import "../styles/card.css";
import { motion } from "framer-motion";

const Card = ({ title, description, image, buttonText, link }) => {
  return (
    <motion.div
      className="card-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {title && (
        <motion.h1
          className="card-title"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          {title}
        </motion.h1>
      )}
      {image && (
        <motion.img
          src={image}
          alt={title}
          className="card-image"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        />
      )}

      {Array.isArray(description) && description.length > 0 && (
        <motion.ul
          className="card-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {description.map((item, index) => (
            <motion.li
              key={index}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <span>➤</span> {item}
            </motion.li>
          ))}
        </motion.ul>
      )}
      {buttonText && link && (
        <motion.a
          href={link}
          className="card-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {buttonText}
        </motion.a>
      )}
    </motion.div>
  );
};

export default Card;
