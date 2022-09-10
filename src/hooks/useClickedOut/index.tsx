/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect } from 'react';

export type UseClickOutProps = {
  ref: RefObject<any>;
  func: () => void;
};

export function useClickOutSide({ ref, func }: UseClickOutProps) {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        func && func();
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
}
