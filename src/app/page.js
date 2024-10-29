"use client";
import List from "@/components/List";
import { useEffect, useState } from "react";
import Categories from "@/components/category";

const pages = () => {
  const limited = 9;
  const [opValue, setOpValue] = useState("everything");

  const setValue = async (value) => {
    setOpValue(value);
    console.log(value);
    if (value !== "everything") {
      let JSONdata = await fetch(
        `https://dummyjson.com/products/category/${value}?limit=${limited}&skip=${
          (SkipCount - 1) * 8
        }`
      );
      let data = await JSONdata.json();
      console.log(data);
      setProductCount(data.products);

      setSkipCount(1);
      console.log(JSONdata);
    } else {
      response();
    }
  };
  const [SkipCount, setSkipCount] = useState(1);
  const [ProductCount, setProductCount] = useState([]);
  const [TheCategory, setTheCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const category = async () => {
    let JSONdata = await fetch(`https://dummyjson.com/products/category-list`);
    let data = await JSONdata.json();
    setTheCategory(data);
  };
  const response = async () => {
    setIsLoading(true);
    let JONdata = await fetch(
      `https://dummyjson.com/products?limit=${limited}&skip=${
        (SkipCount - 1) * 8
      }`
    );

    let data = await JONdata.json();
    setProductCount(data.products);
    await category();
    setIsLoading(false);
  };

  const Darah = () => {
    const counting = SkipCount;
    setSkipCount(counting + 1);
    console.log(SkipCount);
  };
  const butsah = () => {
    if (SkipCount == 0) {
      setSkipCount(0);
    } else {
      const counting = SkipCount;
      setSkipCount(counting - 1);
      console.log(SkipCount);
    }
  };
  useEffect(() => {
    response();
  }, [SkipCount]);
  return (
    <div>
      <div>
        <select onChange={(event) => setValue(event.target.value)}>
          <option value="everything">Everything</option>
          {TheCategory.map((item, index) => {
            return <Categories name={item} key={index} />;
          })}
        </select>
      </div>
      <div className="gaduur" key={"index"}>
        {ProductCount.map((item, index) => {
          if (opValue == "everything") {
            return (
              <div>
                <List
                  title={item.title}
                  id={item.id}
                  key={index}
                  thumbnail={item.thumbnail}
                  description={item.description}
                  warrantyInformation={item.warrantyInformation}
                  category={item.category}
                  price={item.price}
                  discountPercentage={item.discountPercentage}
                  images={item.images}
                />
              </div>
            );
          } else {
            if (item.category == opValue) {
              return (
                <div>
                  <List
                    title={item.title}
                    id={item.id}
                    key={index}
                    thumbnail={item.thumbnail}
                    description={item.description}
                    warrantyInformation={item.warrantyInformation}
                    category={item.category}
                    price={item.price}
                    discountPercentage={item.discountPercentage}
                    images={item.images}
                  />
                </div>
              );
            }
          }
        })}
        <div className="flexy">
          <button onClick={butsah}>Back</button>
          <h2>{SkipCount}</h2>
          <button onClick={Darah}>Next</button>
        </div>
      </div>
    </div>
  );
};
export default pages;
