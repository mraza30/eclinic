import { create } from 'zustand';

interface MobileHeaderState {
  isLoading: boolean;
  isCredentialsValid: boolean;
  setIsLoading: (state: boolean) => void;
  setIsCredentialsValid: () => void;
}

export const useMobileHeader = create<MobileHeaderState>((set) => ({
  isLoading: false,
  isCredentialsValid: true,
  setIsLoading: () => set((state) => ({ isCredentialsValid: state })),
  setIsCredentialsValid: () => voidboolean,
}));
