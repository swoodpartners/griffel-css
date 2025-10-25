import { makeStyles } from "@griffel/react";
import { semanticTokens } from "../theme-base";
import { cva } from "class-variance-authority";

export const useButtonStyles = () => {
  const styles = makeStyles({
    base: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "6px",
      fontSize: "14px",
      fontWeight: "500",
      transitionProperty: "color, background-color, border-color",
      transitionDuration: "150ms",
      cursor: "pointer",
      border: "1px solid transparent",
      outline: "none",
      ":disabled": {
        opacity: "0.5",
        pointerEvents: "none",
      },
    },

    accent: {
      backgroundColor: semanticTokens.accentBackgroundDefault,
      ":hover": {
        textDecoration: "underline",
      },
    },
    link: {
      backgroundColor: "transparent",
      color: "#3b82f6",
      ":hover": {
        textDecoration: "underline",
      },
    },

    sm: {
      height: "36px",
      paddingLeft: "12px",
      paddingRight: "12px",
      borderRadius: "6px",
      fontSize: "14px",
    },
    lg: {
      height: "44px",
      paddingLeft: "32px",
      paddingRight: "32px",
      borderRadius: "6px",
      fontSize: "16px",
    },

    flashy: {
      backgroundColor: "lime",
    },
  })();

  return {
    buttonCVA: cva([styles.base], {
      variants: {
        variant: {
          accent: [styles.accent],
          link: [styles.link],
        },
        size: {
          sm: [styles.sm],
          lg: [styles.lg],
        },
      },
      defaultVariants: {
        variant: "accent",
        size: "sm",
      },
      compoundVariants: [
        {
          variant: "link",
          size: "lg",
          className: [styles.flashy],
        },
      ],
    }),
  };
};
