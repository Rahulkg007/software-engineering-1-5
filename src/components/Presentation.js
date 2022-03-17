import { FlexBox, FullScreen, Progress, Deck, Box } from "spectacle";

import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2";
import Chapter3 from "./Chapter3";
import Chapter4 from "./Chapter4";
import Chapter5 from "./Chapter5";

const theme = {
  colors: {
    primary: "#555",
    secondary: "#004165",
    backgroundColor: "#efefef",
  },
  fontSizes: {
    header: "52px",
    paragraph: "34px",
  },
  fonts: {
    header: 'Roboto, "sans-serif"',
    text: 'Roboto, "sans-serif"',
  },
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

const Presentation = () => (
  <Deck theme={theme} template={template} backgroundColor={"#fff"}>
    <Chapter1 />
    <Chapter2 />
    <Chapter3 />
    <Chapter4 />
    <Chapter5 />
  </Deck>
);

export default Presentation;
