import { useEffect, useState } from "react";
import PropertyCardBuyer from "../components/dashboard/PropertyCardBuyer";
import property1Image from "../assets/property1.png";
import property2Image from "../assets/property2.png";
import property3Image from "../assets/property3.png";
import { toast } from "react-toastify";
import axios from "axios";

export function ApprovedListings() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      coverImage: property1Image,
      address: "123 Maple Street, Springfield, USA",
      price: 450000,
      bedrooms: 3,
      bathrooms: 2,
      squareFootage: 1800,
    },
    {
      id: 2,
      coverImage: property2Image,
      address: "456 Oak Avenue, Shelbyville, USA",
      price: 525000,
      bedrooms: 4,
      bathrooms: 3,
      squareFootage: 2200,
    },
    {
      id: 3,
      coverImage: property3Image,
      address: "789 W 3rd Ave, Los Angeles, USA",
      price: 750000,
      bedrooms: 4,
      bathrooms: 3,
      squareFootage: 2000,
    },
  ]);

  function getRandom(min, max) {
    // Ensure min and max are integers and the min is less than or equal to max
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const getAllListings = () => {
    axios
      .get(`http://localhost:5001/listings/get_all_listings?user_id=${localStorage.getItem("user_id")}`)
      .then((response) => {
        const listings = [];
        response.data.map((listing) => {
          listings.push(listing);
        });
        const data = listings
          .filter((listing) => listing.status === "Approved")
          .map((listing) => ({
            id: listing.id,
            coverImage: property1Image,
            address: listing.address,
            price: listing.price,
            bedrooms: listing.bedrooms ?? getRandom(1, 4),
            bathrooms: listing.bathrooms ?? getRandom(1, 4),
            squareFootage: listing.squareFootage ?? getRandom(1000, 2500),
          }));
        setProperties((p) => {return data});
        
      })
      .catch((error) => {});
  };
  useEffect(() => {
    getAllListings();
  }, []);
  const handleSaveProperty = (propertyId) => {
    setProperties((prevProperties) =>
      prevProperties.map((property) =>
        property.id === propertyId ? { ...property, saved: !property.saved } : property
      )
    );
  };

  return (
    <div className="m-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Approved Listings</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 m-8">
        {properties.map((property) => (
          <PropertyCardBuyer
            key={property.id}
            {...property}
            onSave={() => {handleSaveProperty(property.id)}}
            onClickApprove={() => {}}
            title={"Approved"}
            btnDisabled={true}
            btnClass={"bg-green-900"}
          />
        ))}
      </div>
    </div>
  );
}
