import { Table } from "../../components/table";

export function Listings() {
  const headers = [
    { name: "Title" },
    { name: "Price" },
    { name: "Description" },
    { name: "Status" },
    { name: "Address" },
    // { name: "Actions" },
  ];
  const listingData = 
  [
    {
      logo: "BrandOne",
      name: "Google",
      visitors: 3.5,
      revenues: "5,768",
      sales: 590,
      conversion: 4.8,
      conversion: 4.8,
    },
    {
      logo: "BrandTwo",
      name: "Twitter",
      visitors: 2.2,
      revenues: "4,635",
      sales: 467,
      conversion: 4.3,
    },
    {
      logo: "BrandThree",
      name: "Github",
      visitors: 2.1,
      revenues: "4,290",
      sales: 420,
      conversion: 3.7,
    },
    {
      logo: "BrandFour",
      name: "Vimeo",
      visitors: 1.5,
      revenues: "3,580",
      sales: 389,
      conversion: 2.5,
    },
    {
      logo: "BrandFive",
      name: "Facebook",
      visitors: 3.5,
      revenues: "6,768",
      sales: 390,
      conversion: 4.2,
    },
  ];
  
  return (
    <div>
      <div className="mt-24 m-6">
        <Table title={"Listings"} headers={headers} rowData={listingData} />
      </div>
    </div>
  );
}
