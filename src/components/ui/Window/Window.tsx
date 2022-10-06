import React, { useEffect, useRef, useState } from "react";
import ReactDom, { createPortal } from "react-dom";

interface WindowProps {
  className?: string;
  windowStyle?: string;
  children?: any;
  onClose: () => void;
}
// @ts-ignore //
const Window: React.FC<WindowProps> = ({
  className,
  windowStyle = "width=600,height=400,left=200,top=200",
  children,
  onClose,
}) => {
  const [container, setContainer] = useState<HTMLDivElement>();
  const newWindow = useRef<any>(null);

  useEffect(() => {
    // Create container element on client-side
    setContainer(document.createElement("div"));
  }, []);

  useEffect(() => {
    // When container is ready
    if (container) {
      // Create window
      newWindow.current = window.open("", "", windowStyle);
      // Append container
      newWindow.current.document.body.appendChild(container);

      // Save reference to window for cleanup
      const curWindow = newWindow.current;

      // Return cleanup function
      return () => curWindow.close();
    }
  }, [container]);

  return container && createPortal(children, container);
};

export default Window;
