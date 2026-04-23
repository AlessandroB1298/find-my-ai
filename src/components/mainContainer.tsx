import * as React from "react";
import Box from "@mui/material/Box";

import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  fullSizedCards,
  StyledCard,
  StyledCardContent,
  StyledTypography,
} from "../lib/constants";
import Tooltip from "@mui/material/Tooltip";

export default function MainContent() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
    null,
  );

  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        paddingTop: "1em",
      }}
    >
      <Grid container spacing={2} columns={12}>
        {fullSizedCards.map((card) => (
          <Grid size={{ xs: 12, md: 4 }}>
            <Tooltip title="click to view resource" arrow>
              <StyledCard
                onClick={() => {
                  window.open(card.link, "_blank");
                }}
                variant="outlined"
                onFocus={() => handleFocus(2)}
                onBlur={handleBlur}
                tabIndex={0}
                className={focusedCardIndex === 2 ? "Mui-focused" : ""}
                sx={{ height: "100%" }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image={card.img}
                  sx={{
                    height: { sm: "auto", md: "50%" },
                    aspectRatio: { sm: "16 / 9", md: "" },
                  }}
                />
                <StyledCardContent>
                  <Typography gutterBottom variant="caption" component="div">
                    {card.tag}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {card.title}
                  </Typography>
                  <StyledTypography
                    variant="body2"
                    gutterBottom
                    sx={{ color: "text.secondary" }}
                  >
                    {card.description}
                  </StyledTypography>
                </StyledCardContent>
              </StyledCard>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
