export const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const goToTopQuickly = () => {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
};
