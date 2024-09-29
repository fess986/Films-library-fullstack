import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreNames } from "../../const/const";

type ReviewsState = {
  inReviewsLoaded: boolean
}

const initialReviewsState: ReviewsState = {
  inReviewsLoaded: false,
};

export const reviewsSlice = createSlice({
  name: StoreNames.Reviews,
  initialState: initialReviewsState,
  reducers: {
    setInReviewsLoaded: (state, action: PayloadAction<boolean>) => {
      state.inReviewsLoaded = action.payload;
    },
  },
});