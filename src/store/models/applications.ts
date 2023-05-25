import { createModel } from "@rematch/core";
import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import { RootModel } from ".";

interface ApplicationState {
  applicationType: boolean;
}

const initialState: ApplicationState = {
  applicationType: false,
};

export const applications = createModel<RootModel>()({
  name: "applications",
  state: initialState,
  reducers: {
    SET_APPLICATION_TYPE: (state, payload) => {
      return {
        ...state,
        applicationType: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async setApplicationType(applicationType: boolean) {
      dispatch.applications.SET_APPLICATION_TYPE(applicationType);

      return;
    },
  }),
});
