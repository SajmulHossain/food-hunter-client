import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Food from "../components/Food";
import axios from "axios";


const Foods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/foods")
    .then(({data}) => {
      setFoods(data);
    })

    
  },[])

  return (
    <section>
      <Heading heading='Available Foods' paragraph='Request for food that you needed' />

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`}>
        {
          foods?.map(food => <Food key={food._id} food={food} />)
        }
      </div>
    </section>
  );
};

export default Foods;