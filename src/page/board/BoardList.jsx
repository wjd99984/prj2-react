import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  FormControl,
  Input,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export function BoardList() {
  const [boardList, setBoardList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/board/list").then((res) => {
      const formattedData = res.data.map((board) => ({
        ...board,
        inserted: new Date(board.inserted).toISOString().slice(0, 16), // UTC 형식으로 변환
      }));
      setBoardList(formattedData);
    });
  }, []);
  return (
    <Box>
      <Box>게시물 목록</Box>
      <Box>
        <Table>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>TITLE</Th>
              <Th>
                <FontAwesomeIcon icon={faUserPen} />
              </Th>
              <Th>작성일시</Th>
            </Tr>
          </Thead>
          <Tbody>
            {boardList.map((board) => (
              <Tr
                _hover={{
                  bgColor: "green.400",
                }}
                cursor={"pointer"}
                onClick={() => navigate(`/board/${board.id}`)}
                key={board.id}
              >
                <Td>{board.id}</Td>
                <Td>{board.title}</Td>
                <Td>{board.writer}</Td>
                <Td>
                  <Box>
                    <FormControl>작성일시</FormControl>
                    <Input
                      type={"datetime-local"}
                      value={board.inserted.replace(" ", "T")}
                      readOnly
                    />
                  </Box>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
