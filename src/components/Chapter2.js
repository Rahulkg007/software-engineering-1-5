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

const Chapter2 = () => (
  <>
    <Slide backgroundColor="backgroundColor">
      <Heading fontSize="header"  textAlign= "left">
        2. Culture - How to work well in teams?
      </Heading>
      <Appear>
        <Text fontSize="paragraph">
          Humans are mostly a collection of intermittent bugs<br></br>
          <br></br>How software engineer tend to behave in general<br></br>
          <UnorderedList fontSize="paragraph">
            <ListItem fontSize="paragraph">
              Help me hide my code - Insecurity
            </ListItem>
            <ListItem fontSize="paragraph">The genius myth</ListItem>
            <ListItem fontSize="paragraph">Hiding considered harmful</ListItem>
            <UnorderedList fontSize="paragraph">
              <ListItem fontSize="paragraph">Early detection</ListItem>
              <ListItem fontSize="paragraph">The bus factor</ListItem>
              <ListItem fontSize="paragraph">Pace of progress</ListItem>
              <ListItem fontSize="paragraph">In short, don't hide</ListItem>
            </UnorderedList>
          </UnorderedList>
        </Text>
      </Appear>
    </Slide>
  </>
);

export default Chapter2;
