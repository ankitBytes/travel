import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

const ContactUsPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleQuoteForm = (e) => {
    e.preventDefault();
    const receipt = "info@shree-shakti.com";

    window.location = `mailto:${receipt}?subject=Contact%20Us%20Query&body=Name:%20${name}%0D%0AEmail:%20${email}%0D%0APhone%20Number:%20${phone}%0D%0AMessage:%20${message}%0D%0A`;
  };

  return (
    <Box
      sx={{
        position: "relative",
        p: "5rem 0",
      }}
      id="contact-us-section"
    >
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column-reverse", md: "row" }} spacing={4} justifyContent={'space-around'}>
          <Box sx={{ mb: 2,maxWidth:'700px' }}>
            <Typography variant="h3" sx={{ mb: 5 }}>
              Get in Touch
            </Typography>
            {/* <Typography
            variant="body1"
            // sx={{ fontFamily: "poppins", color: "#2f2f2f" }}
          >
            Send us your query, we'll get back to you shortly.
          </Typography> */}

            <Box data-aos="fade-up" offset="500px" delay="2000" duration="3000">
              <form onSubmit={(e) => handleQuoteForm(e)}>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="name"
                      label="Full Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="email"
                      label="Email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      id="phone"
                      fullWidth
                      required
                      label="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      id="Messege"
                      multiline
                      rows={4}
                      fullWidth
                      required
                      label="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{ p: ".5rem 2.25rem" }}
                    >
                      Submit
                    </Button>

                    {/* <Snackbar
                  open={open}
                  autoHideDuration={5000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={css`
                      width: 100%;

                      @media (max-width: 768px) {
                        width: 70%;
                      }
                    `}
                  >
                    Sent!
                  </Alert>
                </Snackbar> */}
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Box>

          <Stack
            direction={{ xs: "column", sm: "row", md: "column" }}
            spacing={3}
            sx={{ minWidth: "18rem" }}
            justifyContent={'space-between'}
          >
            <Box>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>
                Address
              </Typography>
              <Stack spacing={1} sx={{ ml: 1 }}>
                {addressess.map((address, i) => (
                  <Box key={i}>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      {address.line1}
                    </Typography>
                    <Typography variant="body2">{address.line2}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>
                Phones
              </Typography>
              <Stack spacing={1} sx={{ ml: 1 }}>
                {phones.map((phone, i) => (
                  <Typography variant="body2" key={i}>
                    {phone}
                  </Typography>
                ))}
              </Stack>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>
                E-mails
              </Typography>
              <Stack spacing={1} sx={{ ml: 1 }}>
                {emails.map((email, i) => {
                  return (
                    <Typography variant="body2" key={i}>
                      {email}
                    </Typography>
                  );
                })}
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactUsPage;

const addressess = [
  {
    line1: "8734 S. Ashland Ave",
    line2: "San Diego, CA 60608-2013, US",
  },
];

const phones = ["1-800-1234-567", "1-800-8764-098"];
const emails = ["info@demolink.org", "mail@demolink.org"];
