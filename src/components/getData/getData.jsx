import styles from "../Listing/Listing.module.css";

export default function getData({ MainImage, title, currency_code, quantity }) {
  try {
    let url;
    let currencyCode;
    let itemTitle = "";
    let quantityStyle;

    if (MainImage) {
      url = MainImage.url_570xN;
    }

    if (title && title.length >= 50) {
      itemTitle = title.substring(0, 50) + "...";
    } else {
      itemTitle = title;
    }

    if (currency_code && currency_code === "GBP") {
      currencyCode = "\u00A3";
    } else if (currency_code && currency_code === "USD") {
      currencyCode = "\u0024";
    } else if (currency_code && currency_code === "EUR") {
      currencyCode = "\u20AC";
    } else {
      currencyCode = `${currency_code}`;
    }

    if (quantity && quantity <= 10) {
      quantityStyle = styles.levelLow;
    }
    if (quantity && quantity > 10 && quantity <= 20) {
      quantityStyle = styles.levelMedium;
    }
    if (quantity && quantity > 20) {
      quantityStyle = styles.levelHigh;
    }

    return {
      url: url,
      title: itemTitle,
      currencyCode: currencyCode,
      quantity: quantity,
      quantityStyle: quantityStyle,
    };
  } catch (err) {
    console.error("Error in getData", err);
  }
}
