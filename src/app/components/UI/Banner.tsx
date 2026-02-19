"use client";

import React from "react";
import { motion, PanInfo } from "framer-motion";

import { newColors, newFontSize } from "@/styles/Sachem";
import SvgComponent, { SvgKey } from "@/utils/SvgComponent";
import Validate from "@/utils/Validate";
import { useBannerStore } from "store/useBannerStore";

const SUCCESS_PROPS = {
  size: 24,
  icon: "CheckCircle",
  duration: 10000,
  background: newColors.success,
};
const ERROR_PROPS = {
  size: 24,
  icon: "ErrorCircle",
  duration: 10000,
  background: newColors.error,
};

const Banner = () => {
  const bannerStack = useBannerStore((state) => state.bannerStack);

  return (
    <div style={styles.container}>
      {bannerStack.map((banner) => (
        <BannerItem
          key={banner.id}
          id={banner.id}
          type={banner.type}
          title={banner.title}
          description={banner.description}
        />
      ))}
    </div>
  );
};

const BannerItem = ({
  id,
  type,
  title,
  description,
}: {
  id: string;
  type: "success" | "error";
  title: string;
  description?: string;
}) => {
  const bannerProps = {
    success: SUCCESS_PROPS,
    error: ERROR_PROPS,
  };
  const removeBannerId = useBannerStore((state) => state.removeBannerId);
  const { size, icon, duration, background } = bannerProps[type];

  const [expanded, setExpanded] = React.useState(false);
  const [isExpandable, setIsExpandable] = React.useState(false);

  const [textWidth, setTextWidth] = React.useState<number>(0);
  const [collapsedHeight, setCollapsedHeight] = React.useState<number>(0);
  const [fullHeight, setFullHeight] = React.useState<number>(0);
  const [measured, setMeasured] = React.useState(false);

  const verticalPadding = 16;

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.y < -50) {
      // Remove banner if dragged up significantly
      removeBannerId(id);
    }
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      removeBannerId(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, removeBannerId, duration]);

  React.useEffect(() => {
    if (textWidth > 0 && collapsedHeight > 0 && fullHeight > 0) {
      const collapsedTotal = collapsedHeight + verticalPadding * 2;
      const fullTotal = fullHeight + verticalPadding * 2;

      const expandable = fullTotal - collapsedTotal > 2;
      setIsExpandable(expandable);

      if (!measured) {
        setMeasured(true);
      }
    }
  }, [textWidth, collapsedHeight, fullHeight, verticalPadding, measured]);

  const handleToggleExpand = () => {
    if (!isExpandable) return;
    setExpanded((p) => !p);
  };

  const renderTextChildren = () => (
    <>
      {title !== " " && title}
      {description ? (
        <span style={styles.bannerDescription}> {description}</span>
      ) : null}
    </>
  );

  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -200, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      drag="y"
      dragConstraints={{ top: -100, bottom: 50 }}
      onDragEnd={handleDragEnd}
      style={{
        marginLeft: 24,
        marginRight: 24,
        cursor: "pointer",
        position: "absolute",
        top: 24,
        right: 24,
      }}
    >
      <motion.div
        layout
        animate={{
          height: measured
            ? expanded
              ? fullHeight + verticalPadding * 2
              : collapsedHeight + verticalPadding * 2
            : "auto",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          ...styles.banner,
          backgroundColor: background,
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
          overflow: "hidden",
          maxWidth: 280,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {Validate.Input(icon) ? (
            <SvgComponent
              svgKey={icon as SvgKey}
              width={size}
              height={size}
              fill={newColors["ink-inverse"]}
            />
          ) : (
            <SvgComponent
              svgKey="AppLogo"
              width={32}
              height={32}
              fill={newColors["ink-inverse"]}
            />
          )}
        </div>

        <div
          style={{ flex: 1, display: "flex", flexDirection: "row" }}
          onClick={handleToggleExpand}
          ref={(el) => {
            if (el) {
              const w = el.offsetWidth;
              if (w && Math.abs(w - textWidth) > 1) {
                setTextWidth(w);
              }
            }
          }}
        >
          <div
            style={{
              ...styles.bannerTitle,
              display: "-webkit-box",
              WebkitLineClamp: expanded ? "none" : 2,
              WebkitBoxOrient: "vertical",
              overflow: expanded ? "visible" : "hidden",
              textOverflow: "ellipsis",
              fontFamily: "ProximaNova-regular",
            }}
          >
            {renderTextChildren()}
          </div>
        </div>

        {/* Hidden measurers */}
        {textWidth > 0 && (
          <div
            style={{
              position: "absolute",
              left: -9999,
              top: -9999,
              width: textWidth,
              opacity: 0,
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                ...styles.bannerTitle,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                fontFamily: "ProximaNova-regular",
              }}
              ref={(el) => {
                if (el) {
                  const h = el.offsetHeight;
                  if (h && Math.abs(h - collapsedHeight) > 1) {
                    setCollapsedHeight(h);
                  }
                }
              }}
            >
              {renderTextChildren()}
            </div>

            <div
              style={{
                ...styles.bannerTitle,
                fontFamily: "ProximaNova-regular",
              }}
              ref={(el) => {
                if (el) {
                  const h = el.offsetHeight;
                  if (h && Math.abs(h - fullHeight) > 1) {
                    setFullHeight(h);
                  }
                }
              }}
            >
              {renderTextChildren()}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Banner;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "env(safe-area-inset-top, 0px)",
  },
  banner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "100%",
    width: "100%",
    flexDirection: "row",
    borderRadius: 20,
    marginBottom: 10,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  bannerTitle: {
    textAlign: "left",
    color: newColors["ink-inverse"],
    fontSize: newFontSize.labelSmall,
    fontWeight: "600",
    lineHeight: "16px",
    marginLeft: 8,
  } as React.CSSProperties,
  bannerDescription: {
    color: newColors["ink-inverse"],
    fontSize: newFontSize.labelSmall,
    fontWeight: "400",
    lineHeight: "16px",
  } as React.CSSProperties,
};
