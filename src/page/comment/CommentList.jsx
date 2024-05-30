import React, { useEffect, useState } from "react";
import { Box, Spinner, Table, Td, Th, Thead, Tr } from "@chakra-ui/react";
import axios from "axios";

export function CommentList() {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    axios.get("/api/comment/list").then((res) => {
      setCommentList(res.data);
    });
  }, []);

  if (commentList.length === 0) {
    return <Spinner />;
  }
  return (
    <Box>
      <Box>
        <Table>
          <Thead>
            <Tr>
              <Th>작성자</Th>
              <Th>작성자아이디</Th>
              <Th>comment</Th>
              <Th>날짜</Th>
            </Tr>
          </Thead>
        </Table>
        {commentList.map((comment) => (
          <Tr key={comment.id}>
            <Td>{comment.boardId}</Td>
            <Td>{comment.memberId}</Td>
            <Td>{comment.comment}</Td>
            <Td>{comment.inserted}</Td>
          </Tr>
        ))}
      </Box>
    </Box>
  );
}

export default CommentList;
