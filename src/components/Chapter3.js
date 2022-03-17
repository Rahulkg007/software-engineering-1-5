import {
  Heading,
  UnorderedList,
  ListItem,
  Appear,
  Slide,
  Text,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
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

    <Slide backgroundColor="backgroundColor">
      <Heading fontSize="header" textAlign="left">
        Philosophy
      </Heading>
      <Appear>
        <Text fontSize="paragraph">
          People are at the core if software engineering<br></br>
          <br></br>
          Personalised one to one advice is always invalueble. Not scalable.
          <br></br>
          <br></br>
          Documented knowledge. Scalable but more generalised.<br></br>
          <br></br>
          No a single knowledge-sharing approach is correct solution for all
          types of learning
        </Text>
      </Appear>
    </Slide>

    <Slide backgroundColor="backgroundColor">
      <Heading fontSize="header" textAlign="left">
        Setting the stage: Psychological safety
      </Heading>
      <Appear>
        <Text fontSize="paragraph">
          Mentorship<br></br>
          <br></br>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell
                  border="1px solid #aaa"
                  style={{
                    padding: "8px",
                    fontSize: "28px",
                    backgroundColor: "#333",
                    color: "#ddd",
                  }}
                >
                  Recommended Pattern (cooperative)
                </TableCell>
                <TableCell
                  border="1px solid #aaa"
                  style={{
                    padding: "8px",
                    fontSize: "28px",
                    backgroundColor: "#333",
                    color: "#ddd",
                  }}
                >
                  Antipattern (adversarial)
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell
                  border="1px solid #aaa"
                  style={{ padding: "5px", fontSize: "28px" }}
                >
                  Basic questions or mistakes are guided in the proper direction
                </TableCell>
                <TableCell
                  border="1px solid #aaa"
                  style={{ padding: "5px", fontSize: "28px" }}
                >
                  Basic questions or mistakes are picked on, and the person
                  asking the question is chastised
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  border="1px solid #aaa"
                  style={{ padding: "5px", fontSize: "28px" }}
                >
                  Explainations are given with the intent of helping the person
                </TableCell>
                <TableCell
                  border="1px solid #aaa"
                  style={{ padding: "5px", fontSize: "28px" }}
                >
                  Explainations are given with the intent of showwing off one's
                  own knowledge
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  border="1px solid #aaa"
                  style={{ padding: "5px", fontSize: "28px" }}
                >
                  Responses are kind, patient, and helpful
                </TableCell>
                <TableCell
                  border="1px solid #aaa"
                  style={{ padding: "5px", fontSize: "28px" }}
                >
                  Responses are condescending, snarky and unconstructive
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  border="1px solid #aaa"
                  style={{ padding: "5px", fontSize: "28px" }}
                >
                  Interactions are shared discussions for finding solutions
                </TableCell>
                <TableCell
                  border="1px solid #aaa"
                  style={{ padding: "5px", fontSize: "28px" }}
                >
                  Interactions are arguments with <i>winners</i> and{" "}
                  <i>losers</i>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Text>
      </Appear>
    </Slide>
  </>
);

export default Chapter3;
