import { create } from "zustand";

import UuidService from "@/utils/UuuiService";
import Validate from "@/utils/Validate";


type BannerState = {
    // state
    bannerStack: {
        id: string;
        type: "success" | "error";
        title: string;
        description?: string;
    }[];
    isBannerEnabled: boolean;

    // methods
    showBanner: (type: "success" | "error", title: string, description?: string) => void;
    removeBannerId: (id: string) =>
        void;
    removeAllBanners: () => void;
}


export const useBannerStore = create<BannerState>()(
    (set, get) => ({
        bannerStack: [],
        isBannerEnabled: true,
        showBanner: (type, title, description) => {
            if (get().isBannerEnabled === false) return;

            if (!Validate.Input(type)) type = "error";
            if (!Validate.Input(title)) title = "An error occurred";
            if (!Validate.Input(description)) description = "";

            if (typeof description !== 'string') description = String(description);
            if (typeof title !== 'string') title = String(title);

            const _id = UuidService.generateRandomUuid();

            set((state) => {
                const isDuplicate = state.bannerStack.some(banner => banner.description === description);

                if (isDuplicate) return { bannerStack: state.bannerStack };

                const newBanner = { id: _id, type, title, description };

                if (state.bannerStack.length >= 3) {
                    return {
                        bannerStack: [...state.bannerStack.slice(1), newBanner]
                    };
                } else {
                    return {
                        bannerStack: [...state.bannerStack, newBanner]
                    };
                }
            });
        },
        removeBannerId: (id) => {
            setTimeout(() => {
                set((state) => ({
                    bannerStack: state.bannerStack.filter((banner) => banner.id !== id),
                }));
            }, 0);
        },
        removeAllBanners: () => {
            set({ bannerStack: [] });
        },
    })
);