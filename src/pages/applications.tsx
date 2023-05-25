import { AuthOption, withAuth } from "@/utils/withAuth";
import ApplicationsTemplate from "../components/templates/ApplicationsTemplate/ApplicationsTemplate";

function Applications(props: any) {
  return <ApplicationsTemplate {...props}/>;
}

export default withAuth(AuthOption.REQUIRED, Applications);
