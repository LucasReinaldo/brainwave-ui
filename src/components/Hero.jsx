import { curve, heroBackground, robot } from '../assets';
import { Button } from './Button';
import { Section } from './Section';

import { ScrollParallax } from 'react-just-parallax';

import { Gradient, BackgroundCircles, BottomLine } from './design/Hero';
import { heroIcons } from '../constants';
import { useRef } from 'react';

export const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      id="hero"
      className="-mt-[5.25rem] pt-[12rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 mx-auto mb-[3.875rem] max-w-[62rem] text-center md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with{' '}
            <span className="relative inline-block">
              Brainwave{' '}
              <img
                src={curve}
                width={624}
                height={28}
                className="absolute left-0 top-full w-full xl:-mt-2"
              />
            </span>
          </h1>
          <p className="body-1 mx-auto mb-6 max-w-3xl text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button white href="#pricing">
            Get Started
          </Button>
        </div>

        <div className="relative mx-auto max-w-[23rem] md:max-w-5xl xl:mb-24">
          <div className="relative z-1 rounded-2xl bg-conic-gradient p-0.5">
            <div className="relative rounded-[1rem] bg-n-8 ">
              <div className="h-[1.4rem] rounded-t-[0.9rem] bg-n-10" />

              <div className="aspect-[33/40] overflow-hidden rounded-b-[0.9rem] md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full translate-y-[8%] scale-[1.7] md:-translate-y-[10%] md:scale-[1] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                {/* menu icons */}
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="absolute -left-[5.5rem] bottom-[7.5rem] hidden rounded-2xl border border-n-1/10 bg-n-9/40 px-1 py-1 backdrop-blur xl:flex">
                    {heroIcons.map((icon, idx) => (
                      <li key={idx} className="p-5">
                        <img src={icon} width={24} height={25} alt="Icon" />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>

          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1024}
              height={1800}
            />
          </div>

          <BackgroundCircles />
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};
