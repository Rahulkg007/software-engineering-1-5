import {
  Heading,
  UnorderedList,
  ListItem,
  Appear,
  Slide,
  Text,
} from "spectacle";

const Chapter2 = () => (
  <>
    <Slide backgroundColor="backgroundColor">
      <Heading fontSize="header" textAlign="left">
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

    <Slide backgroundColor="backgroundColor">
      <Heading fontSize="header" textAlign="left">
        It's all about the team
      </Heading>
      <Appear>
        <Text fontSize="paragraph">
          The three pillars of social interaction
          <UnorderedList fontSize="paragraph">
            <ListItem fontSize="paragraph">Humility</ListItem>
            <ListItem fontSize="paragraph">Respect</ListItem>
            <ListItem fontSize="paragraph">Trust</ListItem>
          </UnorderedList>
        </Text>
      </Appear>
      <Appear>
        <Text fontSize="paragraph">
          Humility, Respect and Trust in practice<br></br>
          <UnorderedList fontSize="paragraph">
            <ListItem fontSize="paragraph">Lose the ego</ListItem>
            <ListItem fontSize="paragraph">
              Learn to give and take critism
            </ListItem>
            <ListItem fontSize="paragraph">Fail fast and iterate</ListItem>
          </UnorderedList>
        </Text>
      </Appear>
    </Slide>

    <Slide backgroundColor="backgroundColor">
      <Heading fontSize="header" textAlign="left">
        Blameless Post-Mortem Culture
      </Heading>
      <Appear>
        <Text fontSize="paragraph">
          The three pillars of social interaction
          <UnorderedList fontSize="paragraph">
            <ListItem fontSize="paragraph">A brief summary of the event</ListItem>
            <ListItem fontSize="paragraph">A Timeline of the event from discovery through investigation to resolution</ListItem>
            <ListItem fontSize="paragraph">The primary cause of the event</ListItem>
            <ListItem fontSize="paragraph">Impact and damage assessment</ListItem>
            <ListItem fontSize="paragraph">A set of action items (with owners) to fix the problem immediately</ListItem>
            <ListItem fontSize="paragraph">A set of action items to prevent the event from happening again</ListItem>
            <ListItem fontSize="paragraph">Lessons learned</ListItem>
          </UnorderedList>
        </Text>
      </Appear>
    </Slide>
  </>
);

export default Chapter2;
