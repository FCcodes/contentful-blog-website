import "../styles/globals.css";

//material-ui
import { ThemeProvider } from "@mui/material/styles";

//theme
import theme from "../lib/theme";

//layout
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
