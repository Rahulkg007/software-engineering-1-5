import {
  FlexBox,
  Heading,
  SpectacleLogo,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes,
} from "spectacle";

const Chapter1 = () => (
  <>
    <Slide backgroundColor="backgroundColor">
      <Heading fontSize="header">What is Software Engineering?</Heading>
      <Appear>
        <Text fontSize="paragraph">
          Software Engineering is programming integrated over time?
        </Text>
      </Appear>

      <Appear>
        <Text fontSize="paragraph">
          What is expected life span of your code?<br></br>A few minutes to
          decades...
        </Text>
      </Appear>

      <Appear>
        <Text fontSize="paragraph">
          Programming is an individual effort
        </Text>
        <Text fontSize="paragraph">
          Software engineering is a team effort
        </Text>
      </Appear>
    </Slide>
  </>
);

export default Chapter1;
