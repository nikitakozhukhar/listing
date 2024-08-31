import styles from "../Listing/Listing.module.css";
import { v4 as uuidv4 } from "uuid";
import getData from "../getData/getData";

export default function Listing({ items = [] }) {
  const itemProduct = items.map((item) => {
    try {
      const data = getData(item);

      return (
        <div key={uuidv4()} className={styles.itemList}>
          <div className={styles.item}>
            <div className={styles.itemImage}>
              <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
                <img src={`${data.url}`} />
              </a>
            </div>
            <div className={styles.itemDetails}>
              <p className={styles.itemTitle}>{data.title}</p>
              <p className={styles.itemPrice}>
                {data.currencyCode}
                {item.price}
              </p>
              <p className={`${styles.itemQuantity} ${data.quantityStyle}`}>
                {data.quantity} left
              </p>
            </div>
          </div>
        </div>
      );
    } catch (e) {
      console.log("error in listing: ", e);
    }
  });
  return <>{itemProduct}</>;
}
