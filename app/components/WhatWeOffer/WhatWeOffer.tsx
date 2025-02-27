import React from "react";
import styles from "./WhatWeOffer.module.css";

interface OfferItem {
  title: string;
  description: string;
  icon?: string;
}

const offerItems: OfferItem[] = [
  {
    title: "Digital Marketing",
    description:
      "Strategic digital marketing solutions to grow your online presence and reach your target audience effectively.",
    icon: "/icons/digital-marketing.svg",
  },
  {
    title: "Web Development",
    description:
      "Custom web development services creating responsive, user-friendly websites tailored to your needs.",
    icon: "/icons/web-development.svg",
  },
  {
    title: "Brand Strategy",
    description:
      "Comprehensive brand strategy development to establish and strengthen your market position.",
    icon: "/icons/brand-strategy.svg",
  },
  {
    title: "Content Creation",
    description:
      "Engaging content creation services to tell your story and connect with your audience.",
    icon: "/icons/content-creation.svg",
  },
];

const WhatWeOffer: React.FC = () => {
  return (
    <section className={styles.whatWeOffer}>
      <div className={styles.container}>
        <h2 className={styles.title}>What We Offer</h2>
        <p className={styles.subtitle}>
          Discover our comprehensive range of services designed to help your
          business succeed
        </p>

        <div className={styles.offerGrid}>
          {offerItems.map((item, index) => (
            <div key={index} className={styles.offerCard}>
              {item.icon && (
                <div className={styles.iconWrapper}>
                  <img
                    src={item.icon}
                    alt={`${item.title} icon`}
                    className={styles.icon}
                  />
                </div>
              )}
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
