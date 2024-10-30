import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreNames } from "../../const/const";
import { Review } from "../../types/types";

type ReviewsState = {
  reviewsList: Review[],

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
    setIsReviewsLoaded: (state, action: PayloadAction<boolean>) => {
      state.isReviewsLoaded = action.payload;
    },
    setIsReviewSending: (state, action: PayloadAction<boolean>) => {
      state.isReviewSending = action.payload;
    },
    setReviewsList: (state, action: PayloadAction<Review[]>) => {
      state.reviewsList = action.payload;
    },
  },
});

export const { setIsReviewsLoaded, setIsReviewSending, setReviewsList } = reviewsSlice.actions;