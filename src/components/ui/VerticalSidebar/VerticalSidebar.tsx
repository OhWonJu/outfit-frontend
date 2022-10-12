import useTheme from "@lib/hooks/useTheme";
import { BORDER_BASE_WIDTH } from "src/constants";

interface SidebarProps {
  children: any;
}

const VerticalSidebar: React.FC<SidebarProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <aside
      className="min-h-screen hidden md:block md:w-[35%] md:min-w-[280px] md:max-w-[320px]"
      style={{
        borderRightWidth: BORDER_BASE_WIDTH,
        borderColor: theme.gray_light,
      }}
      tabIndex={1}
    >
      <div>{children}</div>
    </aside>
  );
};

export default VerticalSidebar;
