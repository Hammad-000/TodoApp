import lightLogo from "../images/edit-3-svgrepo-com.svg";
import darkLogo from "../images/edit-3-svgrepo-com (2).svg";


function ThemeToggle({ theme, setTheme }) {
  return (
    <div className="theme-toggle">
      <img
        src={theme === "dark" ? darkLogo : lightLogo}
        alt="Theme logo"
        className="theme-logo"
      />
      <input
        type="checkbox"
        id="checkbox"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <label htmlFor="checkbox" className="label small"></label>
    </div>
  );
}

export default ThemeToggle;
