/**
 * Detects whether window and document objects are available in current environment.
 */
export const isBrowser =
  typeof window !== "undefined" &&
  typeof document !== "undefined" &&
  window.document === document;

// eslint-disable no-restricted-globals
export const rudr_favorite = (e, a) => {
  e.preventDefault();
  const pageTitle = document.title;
  const pageURL = document.location;
  try {
    // Internet Explorer solution
    // eslint-disable-next-line no-eval
    eval("window.external.AddFa-vorite(pageURL, pageTitle)".replace(/-/g, ""));
  } catch (e) {
    try {
      // Mozilla Firefox solution
      window.sidebar.addPanel(pageTitle, pageURL, "");
    } catch (e) {
      // Opera solution
      // eslint-disable-next-line no-restricted-globals
      if (typeof opera == "object") {
        a.rel = "sidebar";
        a.title = pageTitle;
        a.url = pageURL;
        return true;
      } else {
        // The rest browsers (i.e Chrome, Safari)
        alert(
          "Press " +
            (navigator.userAgent.toLowerCase().indexOf("mac") !== -1
              ? "Cmd"
              : "Ctrl") +
            "+D to bookmark this page."
        );
      }
    }
  }
  return false;
};

export const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const formatDateTweet = date => {
  let newDate = date.toDateString().slice(4);
  newDate.substring(0, date.length - 5);

  return newDate.substring(0, newDate.length - 5);
};
