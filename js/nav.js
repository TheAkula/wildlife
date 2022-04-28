const onNavigationItemClicked = (e) => {
  e.preventDefault();
  const search = e.target.dataset.search;
  const alignToTop = Boolean(e.target.dataset.top);
  const elem = document.querySelector(`[data-scroll="${search}"`);
  if (elem) {
    elem.scrollIntoView({ behavior: "smooth" }, alignToTop);
  }
  hideSidebar();
};

navigationItems.forEach((navItem) => {
  navItem.addEventListener("click", onNavigationItemClicked);
});
