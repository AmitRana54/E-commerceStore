import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

const SmallProduct = ({ product }) => {
  return (
    <div className="w-full sm:w-[18rem] md:w-[20rem] m-4 p-3 relative">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-[17rem] h-auto object-cover rounded-lg"
        />
        <div className="absolute top-2 right-2">
          <HeartIcon product={product} />
        </div>
      </div>

      <div className="p-4">
        <Link to={`/product/${product._id}`}>
          <h2 className="flex justify-between items-center text-lg">
            <div>{product.name}</div>
            <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
              ${product.price}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default SmallProduct;
