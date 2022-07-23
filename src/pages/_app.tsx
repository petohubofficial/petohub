import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

import type { EmotionCache } from "@emotion/cache";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { FC, ReactElement, ReactNode } from "react";

import { SplashScreen } from "components/SplashScreen";
import { AuthConsumer, AuthProvider } from "contexts/auth";
import { SettingsConsumer, SettingsProvider } from "contexts/settings";
import { store } from "store";
import { createTheme } from "theme";
import { createEmotionCache } from "utils/createEmotionCache";

import "../../node_modules/swiper/modules/navigation/navigation.scss";
import "../../node_modules/swiper/modules/pagination/pagination.scss";
import "../../node_modules/swiper/swiper.scss";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type EnhancedAppProps = AppProps & {
  Component: NextPageWithLayout;
  emotionCache: EmotionCache;
};

const App: FC<EnhancedAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Petohub</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <AuthProvider>
          <SettingsProvider>
            <SettingsConsumer>
              {({ settings }) => (
                <ThemeProvider theme={createTheme({ ...settings })}>
                  <CssBaseline />
                  <Toaster position="top-center" />
                  <AuthConsumer>
                    {(auth) =>
                      !auth.isInitialized ? (
                        <SplashScreen />
                      ) : (
                        getLayout(<Component {...pageProps} />)
                      )
                    }
                  </AuthConsumer>
                </ThemeProvider>
              )}
            </SettingsConsumer>
          </SettingsProvider>
        </AuthProvider>
      </Provider>
    </CacheProvider>
  );
};

export default App;
