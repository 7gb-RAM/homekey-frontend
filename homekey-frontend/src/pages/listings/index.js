import { useEffect, useState } from "react";
import { Table } from "../../components/table";
import axios from "axios";
import Loader from "../../components/loader";

export function Listings() {
  const headers = [
    { name: "Title", key: "title" },
    { name: "Address", key: "address" },
    { name: "Price", key: "price" },
    { name: "Status", key: "status" },
    { name: "Description", key: "description" },
    { name: "Created At", key: "created_at" },
    { name: "Actions", key: "actions" }, // For actions like Edit/Delete
  ];
  
  const [isLoading, setLoading] = useState(false);
  const [listingData, setListingData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5001/listings/get_my_listings?user_id=1")
      .then((response) => {
        console.log(response);
        const listings = [];
        response.data.map((listing) => {
          listings.push(listing);
        });
        setListingData(listings);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="p-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Listings</h1>

        {isLoading ? (
          <Loader />
        ) : (
          <div className="mt-8">
            <Table title={"Listings"} headers={headers} rowData={listingData} />
          </div>
        )}
      </div>{" "}
    </>
  );
}
