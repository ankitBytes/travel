import { Box, Typography, Container, Stack, Grid,Button } from "@mui/material";
import PropTypes from "prop-types";

// icons
import ExploreIcon from "@mui/icons-material/Explore";
import FlightIcon from "@mui/icons-material/Flight";
import LanguageIcon from "@mui/icons-material/Language";

// background images
import CabImage from "../assets/cab-driver.jpg";

// components
import HeaderComponent from "../components/header-component";

const ServicesPage = () => {
  return (
    <Box>
      <HeaderComponent
        title="Services"
        pageLink="/services"
        pageTitle="Services"
      />

      <Container maxWidth={"lg"}>
        <Box >
          <Stack
            direction={{ xs: "column-reverse", md: "row" }}
            spacing={5}
            sx={{ pt: "5rem",justifyContent:"center",alignItems:"center" }}
          >
            <Box>
              <img src={CabImage} alt="taxi" />
            </Box>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 600, mb: 3 }}>
                Need a ride?
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#aeb1be",
                  letterSpacing: ".03em",
                  maxWidth: "570px",
                }}
              >
                Duis tellus ultricies sodales sem orci maecenas et, in tellus
                mauris tempus morbi auctor integer. Nibh diam, malesuada gravida
                maecenas arcu urna nulla proin nam pellentesque sagittis sodales
                elementum ornare commodo.
              </Typography>

              <Button variant="contained" sx={{ mt: "2rem",background:'#F0A40A' }}>
                Read More
              </Button>
            </Box>
          </Stack>
        </Box>

        <Stack
          direction="column"
          spacing={2}
          sx={{ minHeight: "80vh", py: "5rem", alignItems: "center" }}
        >
          <Typography variant="h3" sx={{ fontWeight: 600 }}>
            Taxi Services
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#aeb1be",
              letterSpacing: ".03em",
              maxWidth: "570px",
              textAlign: "center",
            }}
          >
            Justo quam morbi commodo tempus amet sapien: amet, tempus magna eu
            auctor non adipiscing urna pharetra.
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {services.map((service, i) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={i}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    pl: { xs: "0px", sm: "inherit" },
                  }}
                >
                  <CtoComponent
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default ServicesPage;

// components


const CtoComponent = (props) => {
  const { title, description, icon } = props;
  return (
    <Box
      component={"article"}
      sx={{
        position: "relative",
        isolation: "isolate",
        mt: "4rem",
        maxWidth: "20rem",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          p: ".5rem",
          background: "#f2f2f9",
          borderRadius: "50%",
          top: "-4rem",
          left: "50%",
          transform: "translateX(-50%)",
          isolation: "isolate",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        {/* {<ExploreIcon sx={{ fontSize: "7rem", color: "blue" }} />} */}
        {icon}
      </Box>

      <Stack
        direction={"column"}
        spacing={1}
        sx={{
          alignItems: "center",
          border: "1px solid #e6e6e6",
          color: "#29293a",
          p: "1rem",
          pt: "4rem",
          position: "relative",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#aeb1be",
            letterSpacing: ".03em",
            // maxWidth: "300px",
            textAlign: "center",
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Box>
  );
};

CtoComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

const services = [
  {
    description:
      "Eget enim morbi ornare tempus gravida in porttitor integer quisque.",
    title: "Airport Transfer",
    icon: <FlightIcon sx={{ fontSize: "7rem", color: "#F0A40A", "&:hover":{color:"#000"} }} />,
  },
  {
    title: "City to City",
    description:
      "Sagittis leo quam ornare, odio arcu duis risus gravida odio proin.",
    icon: <LanguageIcon sx={{ fontSize: "7rem", color: "#F0A40A", "&:hover":{color:"#000"} }} />,
  },
  {
    title: "As-Directed Service",
    description:
      "Sagittis leo quam ornare, odio arcu duis risus gravida odio proin.",
    icon: <ExploreIcon sx={{ fontSize: "7rem", color: "#F0A40A", "&:hover":{color:"#000"} }} />,
  },
  {
    title: "Chauffeured Tours",
    description:
      "Sagittis leo quam ornare, odio arcu duis risus gravida odio proin.",
    icon: <ExploreIcon sx={{ fontSize: "7rem", color: "#F0A40A", "&:hover":{color:"#000"} }} />,
  },
];
