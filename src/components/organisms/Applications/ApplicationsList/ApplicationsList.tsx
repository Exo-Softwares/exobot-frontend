import { Dispatch, RootState } from "@/store/store";
import ApplicationBuyButton from "../ApplicationBuyButton/ApplicationBuyButton";
import { ApplicationsListWrapper } from "./ApplicationsList.styled";
import { useDispatch, useSelector } from "react-redux";

const ApplicationsList = () => {
  let { applicationType } = useSelector(
    (state: RootState) => state.applications
  );

  const dispatch = useDispatch<Dispatch>();

  return (
    <ApplicationsListWrapper>
      {applicationType === false ? (
        <div className="your-applications">
          <ApplicationBuyButton />
        </div>
      ) : (
        <p>asdasd</p>
      )}
    </ApplicationsListWrapper>
  );
};

export default ApplicationsList;
