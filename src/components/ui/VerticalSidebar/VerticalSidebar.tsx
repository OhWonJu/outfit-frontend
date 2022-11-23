import useTheme from "@lib/client/hooks/useTheme";
import { BORDER_BASE_WIDTH, NAV_HEIGHT } from "src/constants";

interface SidebarProps {
  children: any;
}

const VerticalSidebar: React.FC<SidebarProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <aside
      className="min-h-screen hidden z-40 md:block md:w-[35%] md:min-w-[280px] md:max-w-[320px]"
      style={{
        borderRightWidth: BORDER_BASE_WIDTH,
        borderColor: theme.gray_light,
      }}
      tabIndex={1}
    >
      <div className="w-full h-full">{children}</div>
    </aside>
  );
};

export default VerticalSidebar;
