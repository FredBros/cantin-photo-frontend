import { color } from "../styles/variables";

export const SRLOptions = {
  buttons: {
    backgroundColor: color.colorText,
    iconColor: color.mainColor,
    iconPadding: "10px",
    showFullscreenButton: true,
    showDownloadButton: false,
  },
  caption: {
    captionColor: "#e8eddf",
    captionFontSize: "18px",
  },
  settings: {
    overlayColor: "rgba(5,5,5,0.8)",
    boxShadow: "none",
    disablePanzoom: true,
    slideAnimationType: "slide",
    slideTransitionTimingFunction: "easeInOut",
  },
  thumbnails: {
    showThumbnails: true,
    thumbnailsAlignment: "center",
    thumbnailsContainerBackgroundColor: "transparent",
    thumbnailsContainerPadding: "20px 5px",
    thumbnailsGap: "0 5px",
    thumbnailsIconColor: "#ffffff",
    thumbnailsOpacity: 0.7,
    thumbnailsPosition: "bottom",
    thumbnailsSize: ["100px", "80px"],
  },
};
