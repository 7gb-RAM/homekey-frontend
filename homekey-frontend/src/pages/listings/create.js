import { useNavigate } from "react-router-dom";
import { FileUpload } from "../../components/file_upload";
import { SecondaryBtn } from "../../components/secondary_btn";
import SellerWorkflow from "../seller_workflow";
import axios from "axios";
import { useState } from "react";
import Loader from "../../components/loader";
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  
export function CreateListing() {
  const [isLoading, setLoading] = useState(false);
  const callCreateApi = (data) => {
    setLoading(true);
    sleep(500).then(() => {
        // Do something after the sleep!
    });
    axios
      .post("http://localhost:5001/listings/create_listing", data, {
        headers: {
          "Content-Type": "application/json",  
          Authorization: "Bearer your-auth-token", 
        },
      })
      .then((response) => {
        console.log(response);
        const listings = [];
        response.data.map((listing) => {
          listings.push(listing);
        });
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  const onSubmit = async (event) => {
    event.preventDefault();

    const formElements = event.target.elements;
    const formValues = {};

    for (let element of formElements) {
      if (element.name) {
        formValues[element.name] = element.value;
      }
    }
    console.log(formValues);
    callCreateApi({...formValues, user_id:1});
  };
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <form onSubmit={onSubmit}>
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Add Listing</h1>
          <div className="flex gap-2">
            <SecondaryBtn title={"Cancel"} onClick={() => navigate("/listings")} />
            <button
              type="submit"
              disabled={isLoading}
              className="min-w-32 bg-primary text-white rounded-lg p-2 flex items-center justify-center gap-2 hover:bg-primary/90"
            >
              {isLoading ? <Loader /> : <span>Save</span>}
            </button>
          </div>
        </div>

        {/*  */}
        <div class="sm:col-span-3 m-2">
          <label for="first-name" class="block text-lg text-white font-medium text-gray-900">
            Title
          </label>
          <div class="mt-2">
            <input
              type="text"
              required
              name="title"
              id="first-name"
              autocomplete="given-name"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        {/*  */}
        <div class="col-span-full m-2">
          <label for="about" class="block text-lg text-white font-medium text-gray-900">
            Description
          </label>
          <div class="mt-2">
            <textarea
              name="description"
              required
              id="description"
              rows="3"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            ></textarea>
          </div>
          <p class="mt-3 text-sm/6 text-white">Write a few sentences about your property.</p>
        </div>
        {/*  */}
        <div className="text-white">
          <FileUpload />
        </div>
        {/*  */}
        <div className="flex flex-row justify-between">
          <div class="w-full sm:col-span-3 m-2">
            <label for="first-name" class="block text-lg text-white font-medium text-gray-900">
              Address
            </label>
            <div class="mt-2">
              <input
                type="text"
                required
                name="address"
                id="first-name"
                autocomplete="given-name"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          {/*  */}
          <div class="w-full sm:col-span-3 m-2">
            <label for="first-name" class="block text-lg text-white font-medium text-gray-900">
              Price
            </label>
            <div class="mt-2">
              <input
                type="text"
                required
                name="price"
                id="price"
                autocomplete="given-name"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
  // return <SellerWorkflow />
}
