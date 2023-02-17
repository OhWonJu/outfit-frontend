import useTheme from "@lib/client/hooks/useTheme";
import {
  BORDER_BASE_WIDTH,
  NAV_HEIGHT,
  VERTICAL_SIDEBAR_WIDTH,
} from "constants/constants";

interface SidebarProps {
  children: any;
}

const VerticalSidebar: React.FC<SidebarProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <aside
      className={`min-h-screen hidden z-40 md:block fixed scrollbar-hide`}
      style={{
        // borderRightWidth: BORDER_BASE_WIDTH,
        width: VERTICAL_SIDEBAR_WIDTH,
        borderColor: theme.gray_light,
      }}
      tabIndex={1}
    >
      <div className="w-full h-full">{children}</div>
    </aside>
  );
};

export default VerticalSidebar;
