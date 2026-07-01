import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/ImageModal.css";

export default function ImageModal({
  isOpen,
  image,
  title,
  currentIndex,
  total,
  showNavigation = false,
  onClose,
  onPrev,
  onNext,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight" && showNavigation && onNext) onNext();
      if (event.key === "ArrowLeft" && showNavigation && onPrev) onPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose, onNext, onPrev, showNavigation]);

  if (!isOpen || !image) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="image-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="image-modal"
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(event) => event.stopPropagation()}
        >
          <button className="image-modal-close" onClick={onClose} aria-label="Close preview">
            ×
          </button>

          {showNavigation && (
            <>
              <button className="image-modal-nav prev" onClick={onPrev} aria-label="Previous image">
                ‹
              </button>
              <button className="image-modal-nav next" onClick={onNext} aria-label="Next image">
                ›
              </button>
            </>
          )}

          <div className="image-modal-content">
            <img src={image} alt={title || "Preview"} />
            {(title || (showNavigation && total)) && (
              <div className="image-modal-caption">
                {title && <h4>{title}</h4>}
                {showNavigation && total ? (
                  <p>
                    {currentIndex + 1} / {total}
                  </p>
                ) : null}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
