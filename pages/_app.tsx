import Head from "next/head";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { CssBaseline } from "@mui/material";
import { SettingsProvider, SettingsConsumer } from "contexts/settings";
import { AuthProvider, AuthConsumer } from "contexts/auth";
import { store } from "store";
import { createTheme } from "theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Petohub</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AuthProvider>
        <SettingsProvider>
          <SettingsConsumer>
            {({ settings }) => (
              <ThemeProvider theme={createTheme({ ...settings })}>
                <CssBaseline />
                <Toaster position="top-center" />
                <AuthConsumer>
                  {(auth) => auth.isInitialized && <Component {...pageProps} />}
                </AuthConsumer>
              </ThemeProvider>
            )}
          </SettingsConsumer>
        </SettingsProvider>
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
