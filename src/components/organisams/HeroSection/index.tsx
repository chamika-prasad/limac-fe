import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Typography } from "@/components/atoms/Typography";
import homeImage01 from "@/assets/images/home_bg_01.png";
// import homeImage02 from "@/assets/images/home_bg_02.png";
import { Button } from "@/components/atoms/Button";
import "./index.scss";

export default function HeroSection() {
  const [animationPhase, setAnimationPhase] = useState('hidden'); // 'hidden', 'appearing', 'visible', 'disappearing'

  useEffect(() => {
    const animationCycle = () => {
      // Phase 1: Start appearing (dissolve in) - takes 3s
      setTimeout(() => {
        setAnimationPhase('appearing');
      }, 100);

      // Phase 2: Fully visible - show for 2s (start a bit before appearing completes for smooth transition)
      setTimeout(() => {
        setAnimationPhase('visible');
      }, 2800); // Start visible phase 200ms before appearing fully completes

      // Phase 3: Start disappearing (dissolve out) - takes 3s
      setTimeout(() => {
        setAnimationPhase('disappearing');
      }, 4800); // 2.8s + 2s = 4.8s

      // Phase 4: Hidden, stay hidden for 2s, then restart cycle
      setTimeout(() => {
        setAnimationPhase('hidden');
        // Restart the cycle after 2s pause
        setTimeout(() => {
          animationCycle();
        }, 2000); // 2 second pause before new cycle
        animationCycle();
      }, 7800); // 4.8s + 3s = 7.8s
    };

    // Start the animation cycle
    animationCycle();
  }, []);

  return (
    <section className="hero">
      {/* Background Image - Replace with your actual image path */}
      <div className="hero-background">
        <Image
          src={homeImage01}
          alt="Limac Development"
          fill
          priority
          quality={100}
          className={`hero-image ${animationPhase}`}
        />
        {/* <div className="overlay" /> */}
      </div>

      {/* Content */}
      <div className="hero-content">
        <Typography
          variant="h1"
          label="Welcome"
          styles="hero-title inter-extra-bold"
        />

        <Typography
          variant="p"
          label="LIMAC DEVELOPMENT (PVT) LTD"
          styles="company-name poppins-medium"
        />

        <div className="hero-text">
          <Typography
            variant="p"
            label="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s"
            styles="description poppins-regular"
          />
        </div>

        <Button
          label="See Our Work"
          onClick={() => {
            console.log("");
          }}
          className="cta-button"
        />
      </div>
    </section>
  );
}