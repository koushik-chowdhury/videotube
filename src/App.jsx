import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Navbar isDark={isDark} onThemeToggle={toggleTheme} />
      <Home />
    </>
  );
}

export default App;