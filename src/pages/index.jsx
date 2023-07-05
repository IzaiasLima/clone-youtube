import { Box, Button, Container, Link, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="sm">
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Clone do Youtube
      </Typography>

      <Box>
        <Button color="primary" variant="contained" >teste</Button>
        <Button color="secondary" variant="outlined" >teste</Button>
      </Box>

    </Box>
  </Container>
  );
}
