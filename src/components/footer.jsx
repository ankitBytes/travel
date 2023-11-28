import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { Link as RouterLink } from "react-router-dom";
// social icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const PageFooter = () => {
  return (
    <Box component={"footer"} sx={{ p: "3.75rem 0", background: "#1F1F1F" }}>
      <Container maxWidth={"lg"}>
        <Stack
          direction={{ xs: "column" }}
          spacing={2}
          //   justifyContent={"flex-start"}
        >
          <Typography
            variant={"body2"}
            // align={"center"}
            sx={{ color: "#aeb1be" }}
          >
            &copy; 2023. All Rights Reserved. Design by{' '}
            <RouterLink
              to="https://brewitlabs.in"
              style={{
                textDecoration: "none",
                color: "#aeb1be",
                fontWeight: 600,
              }}
            >
              Brewit Labs
            </RouterLink>
          </Typography>

          <Stack
            direction={"row"}
            spacing={2}
            // justifyContent={"center"}
            // alignItems={"center"}
          >
            {socials.map((social, i) => (
              <RouterLink
                to={social.link}
                key={i}
                target={"_blank"}
                rel={"noopener noreferrer"}
                sx={{ color: "#aeb1be" }}
              >
                {social.icon}
              </RouterLink>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
export default PageFooter;

const socials = [
  {
    icon: <FacebookIcon sx={{ color: "#aeb1be", fontSize: "1.75rem" }} />,
    link: "https://facebook.com",
  },
  {
    icon: <TwitterIcon sx={{ color: "#aeb1be", fontSize: "1.75rem" }} />,
    link: "https://twitter.com",
  },
  {
    icon: <InstagramIcon sx={{ color: "#aeb1be", fontSize: "1.75rem" }} />,
    link: "https://instagram.com",
  },
  {
    icon: <LinkedInIcon sx={{ color: "#aeb1be", fontSize: "1.75rem" }} />,
    link: "https://linkedin.com",
  },
];
