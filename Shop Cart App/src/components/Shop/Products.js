import { prettyDOM } from "@testing-library/react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_ITEM = [
  {
    id: "p1",
    title: "Dragon Ball Xenovers",
    price: 2500,
    description: "first part of the time travel of Dragon ball",
  },
  {
    id: "p2",
    title: "Dragon Ball Xenovers 2",
    price: 3500,
    description:
      "lates part of the time travel of Dragon ball Z and Dragon ball super",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEM.map((product) => (
          <ProductItem 
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
            />
        ))}
      </ul>
    </section>
  );
};

export default Products;
