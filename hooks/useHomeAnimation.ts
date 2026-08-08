"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type StaggerConfig = {
  selector?: string;
  amount?: number;
  from?: gsap.TweenVars;
};

type AnimationConfig = {
  /** CSS selector for elements that should animate as a group with stagger */
  stagger?: StaggerConfig;
  /** Optional extra tween vars merged into the scroll-in tween */
  vars?: gsap.TweenVars;
};

/**
 * useHomeAnimation
 *
 * Runs a precise, Apple-style animation timeline on a section:
 *  - Entrance: the container fades + rises in on mount.
 *  - Scroll: scoped elements stagger in (fade + rise) when the section enters the viewport.
 *
 * Uses gsap.context for scoping + cleanup, and useGSAP for timing.
 */
export function useHomeAnimation<T extends HTMLElement = HTMLElement>(
  config: AnimationConfig = {}
) {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const ctx = gsap.context(() => {
        // Entrance: container rises + fades in on mount
        gsap.fromTo(
          root,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.05,
          }
        );

        // Scroll-triggered stagger for scoped elements
        if (config.stagger?.selector) {
          const targets = gsap.utils.toArray<HTMLElement>(
            config.stagger.selector
          );
          if (targets.length > 0) {
            gsap.fromTo(
              targets,
              {
                autoAlpha: 0,
                y: 32,
                ...config.stagger.from,
              },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.7,
                ease: "power2.out",
                stagger: { each: 0.08 },
                scrollTrigger: {
                  trigger: root,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                },
                ...config.vars,
              }
            );
          }
        }
      }, root);

      return () => ctx.revert();
    },
    { scope: ref }
  );

  useLayoutEffect(() => {
    return () => {
      ScrollTrigger.refresh();
    };
  }, []);

  return ref;
}
