import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { base_url } from "../config/config";
import { FaSpinner } from "react-icons/fa";
import Card from "../components/Card";

const SearchProduct = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    const query = new URLSearchParams(location.search).get("q");
    
    if (query) {
      setLoading(true);
      try {
        const response = await axios.get(`${base_url}/api/search?q=${query}`);
        
        setData(response.data.data); 
      } catch (error) {
        setError("Error fetching products.");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [location]);

  return (
    <div className="px-4 sm:px-8">
      <div className="mx-auto pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:gap-4">
          {loading && (
            <div className="col-span-full flex justify-center items-center">
              <FaSpinner className="animate-spin text-4xl text-[#ab8c61]" />
            </div>
          )}
          {error && (
            <p className="text-center text-red-500 col-span-full">
              Error fetching products: {error}
            </p>
          )}
          {!loading && !error && data.length > 0
            ? data.map((item) => (
                <div key={item.id} className="w-full p-2 flex justify-center items-center mb-5">
                  <Card project={item} />
                </div>
              ))
            : !loading && !error && (
              <p className="col-span-full text-center text-xl text-gray-500">
                No products available.
              </p>
            )}
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
