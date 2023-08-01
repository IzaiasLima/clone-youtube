import { Box, Button, Container, Typography } from "@material-ui/core";

import Layout from "@/components/Layout";

export default function Home() {
  const title = "YouTube";

  return (
    <Container maxWidth="lg">
      <Layout title={title}>
        <Typography variant="h4">Clone do {title}</Typography>

        <Box>
          <Button color="primary" variant="contained">
            teste
          </Button>
          <Box>&nbsp;</Box>
          <Button color="secondary" variant="outlined">
            teste
          </Button>
        </Box>
      </Layout>
    </Container>
  );
}
