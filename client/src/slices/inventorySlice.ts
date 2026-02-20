import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface InventoryState {
  selectedId: string | null
}

const initialState: InventoryState = {
  selectedId: null
}

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    setSelectedId(state, action: PayloadAction<string | null>) {
      state.selectedId = action.payload
    }
  }
})

export const { setSelectedId } = inventorySlice.actions
export default inventorySlice.reducer
