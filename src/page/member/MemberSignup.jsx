import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

export function MemberSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  function handleClick() {
    setIsLoading(true);
    axios
      .post("/api/member/signup", { email, password, nickName })
      .then((res) => {
        toast({
          status: "success",
          description: "회원가입이 완료되었습니다",
          position: "top",
        });
        //todo 로그인 화면으로 이동
        navigator("/");
      })
      .catch(
        ((err) => {
          if (err.response && err.response.status === 400) {
            toast({
              status: "error",
              description: "입력값을 확인해 주세요",
              position: "top",
            });
          } else {
            toast({
              status: "error",
              description: "회원가입중 문제가 발생되었습니다",
              position: "top",
            });
          }
        }).finally(() => {
          setIsLoading(false);
        }),
      );
  }

  return (
    <Box>
      <Box>회원 가입</Box>
      <Box>
        <Box>
          <FormControl>
            <FormLabel>이메일</FormLabel>
            <Input onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>암호</FormLabel>
            <Input onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>별명</FormLabel>
            <Input onChange={(e) => setNickName(e.target.value)} />
          </FormControl>
        </Box>
        <Box>
          <Button
            isLoading={isLoading}
            onClick={handleClick}
            colorScheme={"blue"}
          >
            가입
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
