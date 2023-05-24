import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { AuthOption, withAuth } from "../utils/withAuth";

interface MeProps {}

const Me: React.FC<MeProps> = ({}) => {
  const { user, authenticated } = useSelector((state: RootState) => state.user);
  const { guilds } = useSelector((state: RootState) => state.guilds);
  return (
    <>
      <p>{user?.username}</p>
    </>
  );
};

export default withAuth(AuthOption.REQUIRED, Me);
