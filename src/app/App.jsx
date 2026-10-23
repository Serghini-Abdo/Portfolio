import Pages from "./Pages";
import { LocaleProvider } from "./LocaleContext";
import { RouteProvider } from "./RouteContext";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <RouteProvider>
        <LocaleProvider>
          <Pages />
        </LocaleProvider>
      </RouteProvider>
    </ThemeProvider>
  );
}

export default App;
