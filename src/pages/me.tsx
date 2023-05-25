import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { AuthOption, withAuth } from "../utils/withAuth";

interface MeProps {}

const Me: React.FC<MeProps> = ({}) => {
  const { user, authenticated } = useSelector((state: RootState) => state.user);

  console.log(user);
  return <main>{user?.username}</main>;
};

export default withAuth(AuthOption.REQUIRED, Me);
