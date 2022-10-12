import { useEffect, useState } from 'react';

function useResize({ setShow, show, setReversed }) {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  // const onClose = () => setShow(false);
  // const iconReverseOutSide = () => setReversed(false);

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setReversed(false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setReversed]);

  useEffect(() => {
    if (size.width > 768 && show) {
      console.log('show and > 768px', show);
      document.body.classList.add('resize-animation-stopper');
      setTimeout(() => {
        console.log('This will run after .3 second!');
        document.body.classList.remove('resize-animation-stopper');
      }, 300);
      setShow(false);
    }
  }, [size.width, show, setShow]);
}

export default useResize;
