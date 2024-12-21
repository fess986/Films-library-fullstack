import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { StoreNames } from "../../const/const";
import { fetchReviews, sendReview } from "../../store/api-actions";
import { Review } from "../../types/types";

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
				toast.error('Не удалось загрузить отзывы');
			})

			.addCase(sendReview.pending, (state) => {
				state.isReviewSending = true;
			})
			.addCase(sendReview.fulfilled, (state) => {
				state.isReviewSending = false;
			})
			.addCase(sendReview.rejected, (state) => {
				state.isReviewSending = false;
				toast.error('Не удалось отправить отзыв');
			});
	},
});

export const { setIsReviewsLoaded, setIsReviewSending, setReviewsList } =
	reviewsSlice.actions;
