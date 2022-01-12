import Image from "next/image";
import Link from "next/link";
import { data } from "../../data";
import styles from "../../styles/Products.module.css";

const Product = ({ product }) => {
  // console.log(product);

  return (
  <div className={styles.container}>
    <div className={styles.cardLarge}>
      {product.images.map((img) => (
        <div key={img.id} className={styles.imgContainer}>
          <Image
            src={img.url}
            width="100%"
            height="100%"
            alt="product"
            objectFit="cover"
            layout="responsive"
          />
        </div>
      ))}
    </div>
    <div className={styles.cardSmall}>
      <h1 className={styles.title} >{product.title}</h1>
      <p className={styles.desc} >{product.longDesc}</p>
      <button className={styles.button} >
        <Link href="/contact">Contact Us</Link>
      </button>
    </div>
  </div>);
};

export default Product;

/* getStaticPaths debe devolver un arreglo de rutas llamado paths:[] */
export const getStaticPaths = () => {
  const products = data;

  const paths = products.map((product) => ({
    params: {
      name: product.name,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const name = ctx.params.name;

  const product = data.find((product) => product.name === name);

  return {
    props: {
      product,
    },
  };
};
