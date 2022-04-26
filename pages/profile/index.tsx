import { Box, Container, Tab, Typography } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import { Layout } from "components/Layout";
import Head from "next/head";
import React, { ReactElement } from "react";
import { AuthGuard } from "components/auth/AuthGuard";
import Profile from "components/profile/Profile";

enum ProfileTabs {
  PROFILE = "PROFILE",
  SETTINGS = "SETTINGS",
  SECURITY = "SECURITY",
}

const Account = () => {
  const [currentTab, setCurrentTab] = React.useState<ProfileTabs>(ProfileTabs.PROFILE);

  const handleTabChange = (event: React.SyntheticEvent, newValue: ProfileTabs) => {
    setCurrentTab(newValue);
  };

  return (
    <Container maxWidth="md">
      <Head>
        <title>Petohub - Account</title>
      </Head>
      <Typography variant="h3" sx={{ my: 3 }}>
        Account
      </Typography>
      <TabContext value={currentTab}>
        <TabList onChange={handleTabChange} aria-label="profile-tabs">
          <Tab label="Profile" value={ProfileTabs.PROFILE} />
          <Tab label="Settings" value={ProfileTabs.SETTINGS} />
          <Tab label="Security" value={ProfileTabs.SECURITY} />
        </TabList>
        <TabPanel sx={{ px: 0 }} value={ProfileTabs.PROFILE}>
          <Profile />
        </TabPanel>
        <TabPanel sx={{ px: 0 }} value={ProfileTabs.SETTINGS}>
          This is the settings screen
        </TabPanel>
        <TabPanel sx={{ px: 0 }} value={ProfileTabs.SECURITY}>
          This is the security screen
        </TabPanel>
      </TabContext>
    </Container>
  );
};

Account.getLayout = (page: ReactElement) => (
  <AuthGuard>
    <Layout>{page}</Layout>
  </AuthGuard>
);
export default Account;
