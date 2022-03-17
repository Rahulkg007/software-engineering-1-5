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

const Chapter5 = () => (
  <>
    <Slide backgroundColor="backgroundColor">
      <Heading fontSize="header" textAlign="left">
        5. How to lead a team
      </Heading>
      <Appear>
        <Text fontSize="paragraph">
          <UnorderedList fontSize="paragraph">
            <ListItem fontSize="paragraph">The engineering Manager</ListItem>
            <ListItem fontSize="paragraph">The Tech lead</ListItem>
            <ListItem fontSize="paragraph">The Tech Lead Manager</ListItem>
          </UnorderedList>
        </Text>
      </Appear>
      <Appear>
        <Text fontSize="paragraph">
          Moving from an individual contributor role to a leadership role
        </Text>
        <Text fontSize="paragraph">
          The only thing to fear is...well everything
        </Text>
      </Appear>
    </Slide>

    <Slide backgroundColor="backgroundColor">
      <Heading fontSize="header" textAlign="left">
        Antipattern
      </Heading>
      <Appear>
        <Text fontSize="paragraph">
          <UnorderedList fontSize="paragraph">
            <ListItem fontSize="paragraph">Hire Pushovers</ListItem>
            <ListItem fontSize="paragraph">Ignore low performers</ListItem>
            <ListItem fontSize="paragraph">Ignore Human Issues</ListItem>
            <ListItem fontSize="paragraph">Be everyone's friend</ListItem>
            <ListItem fontSize="paragraph">Compromise the hiring bar</ListItem>
            <ListItem fontSize="paragraph">
              Treat your team like children
            </ListItem>
          </UnorderedList>
        </Text>
      </Appear>
    </Slide>

    <Slide backgroundColor="backgroundColor">
      <Heading fontSize="header" textAlign="left">
        Positive pattern
      </Heading>
      <Appear>
        <Text fontSize="paragraph">
          <UnorderedList fontSize="paragraph">
            <ListItem fontSize="paragraph">Lose the Ego</ListItem>
            <ListItem fontSize="paragraph">Be a zen Master</ListItem>
            <ListItem fontSize="paragraph">Be a catalyst</ListItem>
            <ListItem fontSize="paragraph">Remove Roadblocks</ListItem>
            <ListItem fontSize="paragraph">Be a teacher and a mentor</ListItem>
            <ListItem fontSize="paragraph">Be honesh</ListItem>
            <ListItem fontSize="paragraph">Track Happiness</ListItem>
          </UnorderedList>
        </Text>
      </Appear>
    </Slide>
  </>
);

export default Chapter5;
