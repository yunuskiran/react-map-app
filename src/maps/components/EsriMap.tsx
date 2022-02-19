import { alpha, experimentalStyled as styled } from "@mui/material/styles";
import { loadModules } from "esri-loader";
import React, { useEffect, useRef } from "react";

const StyledWrapper = styled("div")(
  ({ theme }) => `
    .fc-theme-standard .fc-scrollgrid {
      border-color: ${theme.palette.divider};
    }
  
    .fc th {
      border-right: none;
      border-left: none;
      padding: 10px 0;
    }
  
    .fc-theme-standard .fc-scrollgrid {
      border-right: none;
      border-left: none;
      border-bottom: none;
    }
  
    .fc-theme-standard td, .fc-theme-standard th {
      border-right: none;
    }
  
    .fc-theme-standard td, .fc-theme-standard th {
      border-color: ${theme.palette.divider};
    }
  
    .fc .fc-daygrid-day-number {
      color: ${theme.palette.text.secondary};
      font-size: 14px;
      font-weight: ${theme.typography.fontWeightBold};
      padding: 12px;
    }
  
    .fc .fc-daygrid-day.fc-day-today {
      background-color: ${alpha(theme.palette.primary.main, 0.1)};
    }
  `
);

const EsriMap = (props: any) => {
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    loadModules(["esri/WebMap", "esri/views/MapView", "esri/widgets/Editor"], {
      css: true
    }).then(([WebMap, MapView, Editor]) => {
      // Create a map from the referenced webmap item id
      let webmap = new WebMap({
        portalItem: {
          id: "cf05564a3c4149b09f836329929f7fa0"
        }
      });

      let view = new MapView({
        container: mapRef.current,
        map: webmap
      });

      view.when(function () {
        view.popup.autoOpenEnabled = true; //disable popups

        // Create the Editor
        let editor = new Editor({
          view: view
        });

        // Add widget to top-right of the view
        view.ui.add(editor, "top-right");
      });
      return () => {
        if (view) {
          // destroy the map view
          view.container = null;
        }
      };
    });
  });

  return (
    <React.Fragment>
      <StyledWrapper>
        <div style={{ height: props.height }} ref={mapRef} />
      </StyledWrapper>
    </React.Fragment>
  );
};

export default EsriMap;
