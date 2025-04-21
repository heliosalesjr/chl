// src/hooks/useEventListener.js
import { useEffect, useRef } from "react";

const useEventListener = (eventType, handler, element = window) => {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const targetElement = element && element.addEventListener ? element : window;
    if (!targetElement) return;

    const eventListener = (event) => savedHandler.current(event);

    targetElement.addEventListener(eventType, eventListener);

    return () => {
      targetElement.removeEventListener(eventType, eventListener);
    };
  }, [eventType, element]);
};

export default useEventListener;
