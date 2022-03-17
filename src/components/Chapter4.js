import {
  Heading,
  UnorderedList,
  ListItem,
  Appear,
  Slide,
  Text,
} from "spectacle";

const Chapter4 = () => (
  <>
    <Slide backgroundColor="backgroundColor">
      <Heading fontSize="header" textAlign="left">
        4. Engineering for equity
      </Heading>
      <Appear>
        <Text fontSize="paragraph">
          <UnorderedList fontSize="paragraph">
            <ListItem fontSize="paragraph">
              Bias is the default. Example, Google misses the mark on Racial
              Inclusion
            </ListItem>
            <ListItem fontSize="paragraph">
              Understanding the need for diversity
            </ListItem>
            <ListItem fontSize="paragraph">
              Building Multicultural Capacity
            </ListItem>
            <ListItem fontSize="paragraph">Values versus outcome</ListItem>
            <UnorderedList fontSize="paragraph">
              <ListItem fontSize="paragraph">
                Take a hard look in the mirror. Build for everyone
              </ListItem>
              <ListItem fontSize="paragraph">
                Don't build for everyone. Buld with <i>everyone</i>
              </ListItem>
              <ListItem fontSize="paragraph">
                Design for the user who have the most difficulty using your
                product
              </ListItem>
            </UnorderedList>
          </UnorderedList>
        </Text>
      </Appear>
    </Slide>
  </>
);

export default Chapter4;
