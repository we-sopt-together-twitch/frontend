import { useEffect, useState } from "react";
import { api } from "../../data/api";
import { BroadcastCategoryCard } from "../broadcastCategory/BroadcastCategoryCard/BroadcastCategoryCard";
import { BroadcastCategoryLayout } from "../broadcastCategory/Layout";

export function BroadcastCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await api.category.getCategories();
      setCategories(data);
    })();
  }, []);

  const cards = categories.map((category, idx) => <BroadcastCategoryCard key={idx} {...category} />);
  const mobileCards = categories.map((category, idx) => <BroadcastCategoryCard key={idx} {...category} compact />);

  return <BroadcastCategoryLayout cards={cards} mobileCards={mobileCards} />;
}
