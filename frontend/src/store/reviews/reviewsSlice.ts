import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreNames } from "../../const/const";
import { Review } from "../../types/types";
import { fetchReviews } from "../../store/api-actions";

type ReviewsState = {
	reviewsList: Review[];

	isReviewsLoaded: boolean;
	isReviewSending: boolean;
};

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
	extraReducers: (builder) => {
		builder
			.addCase(fetchReviews.pending, (state) => {
				state.isReviewsLoaded = false;
			})
			.addCase(fetchReviews.fulfilled, (state) => {
				// state.reviewsList = action.payload;  // сюда попадает то что возвращается из thunk
        // console.log(action.payload);
				state.isReviewsLoaded = true;
			})

			.addCase(fetchReviews.rejected, (state) => {
				state.isReviewsLoaded = false;
        console.log('fetchReviews.rejected')
			});
	},
});

export const { setIsReviewsLoaded, setIsReviewSending, setReviewsList } =
	reviewsSlice.actions;
