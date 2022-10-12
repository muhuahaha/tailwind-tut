import { useEffect } from 'react';

export const useAutoClose = ({ setShow, menuRef, setReversed }) => {
  // console.log(typeof setShow, 'shhhooww tryppe');
  // console.log(menuRef, 'menuRef tryppe');

  const onClose = () => setShow(false);
  const iconReverseOutSide = () => setReversed(false);

  const onClickOutside = (event) => {
    const element = event.target;
    // console.log(event.target, 'event target');
    if (menuRef.current && !menuRef.current.contains(element)) {
      // event.preventDefault();
      event.stopPropagation();
      onClose();
      iconReverseOutSide();
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', onClickOutside);
    // document.body.addEventListener('focusin', onClickOutside);

    return () => {
      document.removeEventListener('click', onClickOutside);
      // document.body.removeEventListener('focusin', onClickOutside);
    };
  });
};
