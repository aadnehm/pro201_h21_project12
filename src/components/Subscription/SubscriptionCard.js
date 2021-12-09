import { subscriptionModelData } from "./SubscriptionModelData";
import "./subscriptionCard.css";

// material ui components:
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Container,
  Typography,
} from "@mui/material";

export default function SubscriptionCard() {
  return (
    <>
      <Container className="subscription-model-grid" maxWidth="md">
        <h2 className="heading">
          The payment from subscription goes to Meliora Impact, so we can help
          you get great digital content and strategies to grow your business
        </h2>
        <Grid container spacing={20}>
          {subscriptionModelData.map((model) => (
            <Grid item key={model.id} xs={12} sm={6} md={4}>
              <Card className="sub-card">
                <CardContent className="card-content">
                  <h2 className="text-margin">{model.Name}</h2>
                  <h4 className="text-margin">{model.AccountsNumber}</h4>
                  <h1 className="border-bottom">
                    {model.Price} <span className="large-font">NOK</span>
                    <span className="grey-font"> /mo</span>
                  </h1>
                  <p className="span-p"> Features included</p>
                  <p>{model.Features[0]}</p>
                  <p>{model.Features[1]}</p>
                  <p>{model.Features[2]}</p>
                </CardContent>
                <CardActions>
                  <Button
                    className="button"
                    variant="contained"
                    size="large"
                    color="primary"
                  >
                    Subscribe
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
