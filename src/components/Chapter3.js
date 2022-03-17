import {
  Heading,
  UnorderedList,
  ListItem,
  Appear,
  Slide,
  Text,
} from "spectacle";

const Chapter3 = () => (
  <>
    <Slide backgroundColor="backgroundColor">
      <Heading fontSize="header" textAlign="left">
        3. Knowledge Sharing
      </Heading>
      <Appear>
        <Text fontSize="paragraph">
          Challenges to learning:
          <UnorderedList fontSize="paragraph">
            <ListItem fontSize="paragraph">
              Lack of psychological safety
            </ListItem>
            <ListItem fontSize="paragraph">Information Island</ListItem>
            <ListItem fontSize="paragraph">Information Fragmentation</ListItem>
            <ListItem fontSize="paragraph">Information Duplicaton</ListItem>
            <ListItem fontSize="paragraph">Information Skew</ListItem>
            <ListItem fontSize="paragraph">Single point of failure</ListItem>
            <ListItem fontSize="paragraph">All or nothing expertise</ListItem>
            <ListItem fontSize="paragraph">
              Parroting and haunted graveyard
            </ListItem>
          </UnorderedList>
        </Text>
      </Appear>
    </Slide>
  </>
);

export default Chapter3;
