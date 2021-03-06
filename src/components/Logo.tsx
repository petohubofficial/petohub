import { useSettings } from "hooks/settings";

interface LogoProps {
  color?: string;
  isDark?: boolean;
  [k: string]: any;
}

export function Logo(props: LogoProps) {
  const { settings } = useSettings();
  const { color, isDark, ...other } = props;

  // Custom styles for dark theme
  const stroke = "#aaa";
  const strokeWidth = settings.theme === "dark" || isDark ? 24 : 0;
  const strokeOpacity = settings.theme === "dark" || isDark ? 0.48 : 0;

  const styles = { stroke, strokeWidth, strokeOpacity };

  return (
    <svg width="40" height="40" viewBox="0 0 512 512" {...other}>
      <polygon
        {...styles}
        points="256 0.85 472.42 201.47 470.87 224.03 448.07 224.9 256 43.74 63.93 224.91 41.14 224.03 39.58 201.47 256 0.85"
      />
      <path
        {...styles}
        d="M244.33,511.15a7.14,7.14,0,0,0,7.12-8c-2.51-21.07-13.45-77.9-59.16-96.57-48.1-19.66-64-51.16-67.67-60.25a5.24,5.24,0,0,0-3.91-3.19c-2.38-.6-8.13,1.34-6.38,7,8.21,26.74.75,23.25-8.41,1.21-5.23-12.58-5.15-62.6-5.5-72.21a3.94,3.94,0,0,0-1.1-2.64c-5.8-6.11-23.12-23.33-32.1-30.6a2.82,2.82,0,0,0-4.6,2.19c-.09,23.27,1.73,100.4,1.73,100.4s-1.68,50.62,49.84,82.06c38.32,23.37,49.84,9.87,65.57,75a7.18,7.18,0,0,0,7,5.49Z"
      />
      <path
        {...styles}
        d="M267.67,511.15a7.14,7.14,0,0,1-7.12-8c2.51-21.07,13.45-77.9,59.16-96.57,48.1-19.66,64.05-51.16,67.67-60.25a5.24,5.24,0,0,1,3.91-3.19c2.38-.6,8.13,1.34,6.38,7-8.21,26.74-.75,23.25,8.41,1.21,5.23-12.58,5.15-62.6,5.5-72.21a3.94,3.94,0,0,1,1.1-2.64c5.8-6.11,23.12-23.33,32.1-30.6a2.82,2.82,0,0,1,4.6,2.19c.09,23.27-1.73,100.4-1.73,100.4s1.68,50.62-49.84,82.06c-38.32,23.37-49.84,9.87-65.57,75a7.18,7.18,0,0,1-7,5.49Z"
      />
      <path
        fill={color}
        d="M255.74,378.62c36.15.18,57.87-25.34,69-43.76,8.47-14,7.76-31.27-.48-45.41,0,0-19-38.5-68.54-6.89-49.59-31.61-68.54,6.89-68.54,6.89-8.24,14.14-8.95,31.41-.48,45.41C197.87,353.28,219.59,378.8,255.74,378.62Z"
      />
      <path
        fill={color}
        d="M229.64,232.13c11-11.84,33.26-44.47-6.57-80.38a12.58,12.58,0,0,0-10.26-2.36c-15.64,4.28-46,44,5.67,83.12C221.94,235.13,226.68,235.3,229.64,232.13Z"
      />
      <path
        fill={color}
        d="M153.2,212.67c7.81-3.47,35.36,13.65,30.22,47.5a3.16,3.16,0,0,1-3.2,2.55c-8.84-.17-40.18-6-34.23-40.63C146.58,218.64,150,214.09,153.2,212.67Z"
      />
      <path
        fill={color}
        d="M282.36,232.13c-11-11.84-33.26-44.47,6.57-80.38a12.58,12.58,0,0,1,10.26-2.36c15.64,4.28,46,44-5.67,83.12C290.06,235.13,285.32,235.3,282.36,232.13Z"
      />
      <path
        fill={color}
        d="M358.8,212.67c-7.81-3.47-35.36,13.65-30.22,47.5a3.16,3.16,0,0,0,3.2,2.55c8.84-.17,40.18-6,34.23-40.63C365.42,218.64,362,214.09,358.8,212.67Z"
      />
    </svg>
  );
}

Logo.defaultProps = {
  color: "#be629d",
};
