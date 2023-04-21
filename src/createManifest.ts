import type { Action } from "@actionshq/actions";

export function createManifest(action: Action, origin: string) {
    return {
        name: `New ${action.metadata.name}`,
        short_name: `New ${action.metadata.name}`,
        start_url: `${origin}/${action.spec.slug}`,
        display: "standalone",
        background_color: "#2563eb",
        lang: "en",
        scope: `${origin}/${action.spec.slug}`,
        theme_color: "#2563eb",
        icons: [
            {
                src: `${origin}/android-chrome-192x192.png`,
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: `${origin}/android-chrome-512x512.png`,
                sizes: "512x512",
                type: "image/png",
            },
            {
                src: `${origin}/android-chrome-512x512.png`,
                sizes: "512x512",
                type: "image/png",
                purpose: "any maskable",
            },
        ],
    };
}
