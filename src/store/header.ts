import { create } from 'zustand';

interface MobileHeaderState {
  mobileHeader: boolean;
  showMobileHeader: () => void;
  hideMobileHeader: () => void;
}

export const useMobileHeader = create<MobileHeaderState>((set) => ({
  mobileHeader: false,
  showMobileHeader: () => set((state) => ({ mobileHeader: true })),
  hideMobileHeader: () => set((state) => ({ mobileHeader: false })),
}));
