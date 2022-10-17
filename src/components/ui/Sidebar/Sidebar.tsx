import { useEffect, useRef } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import useTheme from "@lib/hooks/useTheme";

interface SidebarProps {
  children: any;
  left: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  children,
  left = false,
  onClose,
}) => {
  const theme = useTheme();

  const sidebarRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const onKeyDownSidebar = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    if (sidebarRef.current) {
      sidebarRef.current.focus();
    }

    const contentElement = contentRef.current;

    if (contentElement) {
      disableBodyScroll(contentElement, { reserveScrollBarGap: true });
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <div
      className="fixed inset-0 h-full z-50 box-border outline-none"
      ref={sidebarRef}
      onKeyDown={onKeyDownSidebar}
      tabIndex={1}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-black bg-opacity-10 duration-100 ease-linear backdrop-blur-[1.2px]"
          onClick={onClose}
        />
        <section
          className={`absolute inset-y-0 ${
            left ? "left-0 sm:pr-10" : "right-0 sm:pl-10"
          } w-full sm:w-auto max-w-full flex outline-none`}
        >
          <div
            className="h-full w-full sm:w-screen sm:max-w-md shadow-md"
            style={{ backgroundColor: theme.container_bg_color }}
          >
            <div ref={contentRef}>{children}</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
