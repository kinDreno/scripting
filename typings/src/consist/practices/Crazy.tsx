import { useEffect, useState } from "react";

const Crazy: React.FC = () => {

  type Pizza = {
    name: string;
    cost: number;
    isAvailable: boolean;
  };

  
  const fetchPizzaOrders = (): Promise<Pizza[]> => {
    // Simulate an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { name: "Pepperoni", cost: 23, isAvailable: true },
          { name: "Margherita", cost: 19, isAvailable: false },
        ]);
      }, 1000);
    });
  };
  const [pizzaOrders, setPizzaOrders] = useState<Pizza[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchPizzaOrders()
      .then((orders) => {
        setPizzaOrders(orders);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading pizza orders:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {pizzaOrders.map((pizza, index) => (
        <p key={index}>
          The {pizza.name} costs ${pizza.cost}.{" "}
          {pizza.isAvailable
            ? "And currently available in our menu."
            : "However, it is not currently available in our menu."}
        </p>
      ))}
    </div>
  );
};

export default Crazy;
