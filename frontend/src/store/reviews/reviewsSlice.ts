import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreNames } from "../../const/const";

type ReviewsState = {
  reviewsList: [],

  isReviewsLoaded: boolean,
  isReviewSending: boolean,

}

const initialReviewsState: ReviewsState = {
  reviewsList: [],

  isReviewsLoaded: false,
  isReviewSending: false,
};

export const reviewsSlice = createSlice({
  name: StoreNames.Reviews,
  initialState: initialReviewsState,
  reducers: {
    setInReviewsLoaded: (state, action: PayloadAction<boolean>) => {
      state.isReviewsLoaded = action.payload;
    },
    setInReviewSending: (state, action: PayloadAction<boolean>) => {
      state.isReviewSending = action.payload;
    },
    setReviewsList: (state, action: PayloadAction<[]>) => {
      state.reviewsList = action.payload;
    },
  },
});

export const { setInReviewsLoaded, setInReviewSending, setReviewsList } = reviewsSlice.actions;