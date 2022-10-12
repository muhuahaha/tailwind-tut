import { useRef, useEffect, useState, forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';

const HamburgerButton = forwardRef(({ label, onClick, reversed }, ref) => {
  const lineOne = useRef(null);
  const lineTwo = useRef(null);
  const lineThree = useRef(null);

  const el = useRef();
  const q = gsap.utils.selector(el);

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      backgroundColor: 'yellow',
    });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      backgroundColor: 'red',
    });
  };

  // store the timeline in a ref.
  const tl = useRef();

  console.log(tl, 'tl');

  useEffect(() => {
    // add a box and circle animation to our timeline and play on first render
    tl.current = gsap
      .timeline({ paused: false })
      .to(q('.line-two'), {
        scaleX: 0,
        duration: 0.125,
        delay: 0,
      })
      .to(q('.line-one'), {
        transformOrigin: '50% 50%',
        y: 12,
        duration: 0.25,
        delay: 'slide',
        ease: 'Power2.easeInOut',
      })
      .to(q('.line-three'), {
        transformOrigin: '50% 50%',
        y: -16,
        duration: 0.25,
        delay: 'slide',
        ease: 'Power2.easeInOut',
      })
      .to(q('.hamburger'), {
        duration: 0.5,
        rotation: -360,
        ease: 'Power4.easeInOut',
      })
      .to(q('.line-one'), {
        rotation: 45,
        delay: -0.2,
        ease: 'Power2.easeOut',
      })
      .to(q('.line-three'), {
        rotation: -45,
        delay: -0.4,
        ease: 'Power2.easeOut',
      });
  }, []);

  useEffect(() => {
    // toggle the direction of our timeline

    console.log('shsisihsishish');
    tl.current.reversed(!reversed);
  }, [reversed]);

  return (
    <button
      type="button"
      id="mobile-open-button"
      className="mobile-nav-toggle test sm:hidden focus:outline-none absolute top-2 right-5 w-10 h-10 z-30"
      onClick={onClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      aria-controls="primary-navigation"
    >
      {/* <span className="sr-only"> {label}</span> */}
      {/* <div className="test" ref={el}>
        <div>
          <button type="button" onClick={() => setReversed(!reversed)}>
            Toggle
          </button>
        </div>
        <Box>box</Box>
        <Circle>circle</Circle>
      </div> */}
      <div ref={el}>
        <svg
          ref={ref}
          className="hamburger"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            ref={lineOne}
            className="line-one box"
            x1="25"
            y1="38"
            x2="75"
            y2="38"
            fill="none"
            stroke="black"
            strokeMiterlimit="10"
            strokeWidth="6"
          />
          <line
            ref={lineTwo}
            className="line-two box"
            x1="25"
            y1="52"
            x2="75"
            y2="52"
            fill="none"
            stroke="black"
            strokeMiterlimit="10"
            strokeWidth="6"
          />
          <line
            ref={lineThree}
            className="line-three box"
            x1="25"
            y1="66"
            x2="75"
            y2="66"
            fill="none"
            stroke="black"
            strokeMiterlimit="10"
            strokeWidth="6"
          />
        </svg>
      </div>
    </button>
  );
});

HamburgerButton.displayName = 'HamburgerButton';
HamburgerButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  reversed: PropTypes.bool,
};
export default HamburgerButton;
