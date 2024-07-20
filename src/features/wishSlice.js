import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wish: [],
};

const WishSlice = createSlice({
  name: "WishList",
  initialState,
  reducers: {
    addWishList: (state, action) => {
      const Item = state.wish.findIndex(
        (value) => value.id === action.payload.id
      );

      if (Item >= 0) {
        alert("this product already exists in your wishlist");
      } else {
        state.wish.push({ ...action.payload });
      }
    },
  },
});

export const { addWishList } = WishSlice.actions;

export default WishSlice.reducer;
