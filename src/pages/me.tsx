import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { AuthOption, withAuth } from "../utils/withAuth";

interface MeProps {}

const Me: React.FC<MeProps> = ({}) => {
  let userState = useSelector((state: RootState) => state.user);
  const { user, authenticated } = userState;

  console.log(user);
  return <main></main>;
};

export default withAuth(AuthOption.REQUIRED, Me);
