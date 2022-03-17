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
      <Heading fontSize="header">1. What is Software Engineering?</Heading>
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
        <Text fontSize="paragraph">Programming is an individual effort</Text>
        <Text fontSize="paragraph">Software engineering is a team effort</Text>
      </Appear>
    </Slide>

    <Slide backgroundColor="backgroundColor">
      <Heading fontSize="subheading">Time and Change</Heading>
      <Appear>
        <Text fontSize="paragraph">
          Hyrum's Law - It works vs. is it maintainable <br></br>
          <br></br>
          Given enough time and enough users, even the most innocuous change{" "}
          <i>will</i> break something
        </Text>
      </Appear>

      <Appear>
        <Text fontSize="paragraph">
          Why not aim for nothing changes. Everything has risk.<br></br>
          <br></br>
          Example - log4j<br></br>
          <br></br>
          We should not change just for the sake of change. But we do need to be
          capable of change.
        </Text>
      </Appear>
    </Slide>

    <Slide backgroundColor="backgroundColor">
      <Heading fontSize="subheading">Scale and Efficiency</Heading>
      <Appear>
        <Text fontSize="paragraph">
          Codebase is sustainable when you are able to change all the things
          that you ought to change, safely, and could do so for the life of your
          codebase.<br></br>
          <br></br>
          Given enough time and enough users, even the most innocuous change{" "}
          <i>will</i> break something
        </Text>
      </Appear>

      <Appear>
        <Text fontSize="paragraph">
          Policies that don't scale<br></br>For example, traditional use of
          development branches has built-in scaling issues
          <br></br>
          <br></br>
          Policies that scale well<br></br>If you like it then put a Continuous
          Integration (CI) test on it. For example, Google complier upgrade in
          2006.<br></br>
          Expertise, Stability, Conformity, Familiarity and Policy
        </Text>
      </Appear>
    </Slide>
  </>
);

export default Chapter1;
