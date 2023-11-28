import { Box, Container, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import PropTypes from "prop-types";

// images
import HeaderBackground from "../assets/header-bg.jpg";

// icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HeaderComponent = (props) => {
    const { title, pageLink, pageTitle } = props;
  
    HeaderComponent.propTypes = {
      title: PropTypes.string.isRequired,
      pageLink: PropTypes.string.isRequired,
      pageTitle: PropTypes.string.isRequired,
    };
    return (
      <Box
        sx={{
          background: `url(${HeaderBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "18rem",
          color: "#fff",
        }}
      >
        <Container maxWidth={"lg"}>
          <Stack
            direction={"column"}
            spacing={2}
            sx={{ minHeight: "18rem", pt: "8rem" }}
          >
            <Typography variant={"h3"} sx={{ fontWeight: 600 }}>
              {title}
            </Typography>
  
            <Stack
              direction="row"
              spacing={4}
              alignItems={"center"}
              sx={{ pl: "2rem" }}
            >
              <RouterLink
                to="/"
                style={{ textDecoration: "none", color: "#aeb1be" }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ "&:hover": { color: "#F0A40A" } }}
                >
                  Home
                </Typography>
              </RouterLink>
              <ArrowForwardIcon sx={{ fontSize: "1.25rem" }} />
              <RouterLink
                to={pageLink}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Typography variant="subtitle1">{pageTitle}</Typography>
              </RouterLink>
            </Stack>
          </Stack>
        </Container>
      </Box>
    );
  };
  HeaderComponent.prototype = {
    title: PropTypes.string.isRequired,
    pageLink: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
  };

  export default HeaderComponent;