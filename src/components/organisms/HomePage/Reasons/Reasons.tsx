/* Reasons Section (Mainly used at Home) */

/* General Imports */
import { reasonsData } from "../../../../data/reasonsContent";

import ReasonCard from "../../Cards/ReasonCard/ReasonCard";
import { ReasonsStyles } from "./Reasons.styled";

const Reasons = () => {
  return (
    <ReasonsStyles>
      {reasonsData.map((reason) => (
        <ReasonCard
          key={reason.id}
          title={reason.title}
          content={reason.content}
        />
      ))}
    </ReasonsStyles>
  );
};

export default Reasons;
