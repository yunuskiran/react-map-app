import { Card } from "@mui/material";
import React from "react";
import AdminAppBar from "../../admin/components/AdminAppBar";
import AdminToolbar from "../../admin/components/AdminToolbar";
import EsriMap from "../components/EsriMap";
import QueryMenu from "../components/QueryMenu";
import { useTranslation } from "react-i18next";
import SearchBar from "../components/SearchBar";
import { Box, Grid } from "@mui/material";

const Maps = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <AdminAppBar>
        <AdminToolbar title={t("admin.drawer.menu.onemap")}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Box display="flex" justifyContent="flex-center">
                    <SearchBar />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box display="flex" justifyContent="flex-end">
                    <QueryMenu />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </AdminToolbar>
      </AdminAppBar>
      <Card>
        <EsriMap height={"85vh"}></EsriMap>
      </Card>
    </React.Fragment>
  );
};
export default Maps;
