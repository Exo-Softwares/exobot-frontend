import { user } from "@/store/models/user";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const AvatarWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url();
  background-position: center;
  background-size: cover;
  border-radius: 70%;
`;

const Avatar = () => {
  const { user } = useSelector((state: RootState) => state.user);
  return (
    <AvatarWrapper
      style={{
        backgroundImage: `url(https://cdn.discordapp.com/avatars/${user?.id}/${user?.avatar}.jpg)`,
      }}
    />
  );
};

export default Avatar;
