/* General Imports */
import { reasonsData } from "../../../../data/reasonsContent";

/* Style Import */
import { ReasonCardWrapper } from "./ReasonCard.styled";

const reasons = { reasonsData };

interface ReasonContent {
  title: string;
  content: string;
}

const ReasonCard = (props: ReasonContent) => {
  return (
    <ReasonCardWrapper>
      <div className="reason-content">
        <h1>
          <span>/</span> {props.title}
        </h1>
        <p>{props.content}</p>
      </div>
    </ReasonCardWrapper>
  );
};

export default ReasonCard;
