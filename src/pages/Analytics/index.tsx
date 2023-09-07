import { useState, useLayoutEffect } from "react";
import Layout from "../../components/Layout";
import SimpleBarChart from "../../components/charts/BarChart";
import PieChart from "../../components/charts/PieChart";
import Map from "./components/Map";
import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../config/firebase";

//Icons
import { BiUserCheck } from "react-icons/bi";
import { BiUserMinus } from "react-icons/bi";
import { MdWorkspacePremium } from "react-icons/md";
import { UserData } from "../../types";

const Analytics = () => {
  const [tab, setTab] = useState(0);
  const [data, setData] = useState<UserData[]>([]);
  const [subscriptionTotal, setSubscriptionTotal] = useState(0);
  const [countries, setCountries] = useState<string[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedAge, setSelectedAge] = useState([]);

  const extractUserInfo = (
    docs: QueryDocumentSnapshot<DocumentData, DocumentData>[]
  ) => {
    let users: UserData[] = [];
    let tempRegions: string[] = [];
    let tempCountries: string[] = [];

    for (const index in docs) {
      const userData = docs[index].data();
      const region = userData["location"]["city"].split(",")[0];
      const country = userData["location"]["country"];

      if (!tempRegions.includes(region) && region.length > 0) {
        tempRegions.push(region);
      }

      if (!tempCountries.includes(country) && country.length > 0) {
        tempCountries.push(country);
      }

      users.push({
        userName: userData["userName"],
        age: userData["age"],
        gender: userData["userGender"],
        location: {
          region: region,
          country: userData["location"]["country"],
          geoPoint: {
            lat: userData["location"]["geopoint"]["_lat"],
            lon: userData["location"]["geopoint"]["_long"],
          },
        },
      });
    }

    setRegions(tempRegions);
    setCountries(tempCountries);
    setData(users);
  };

  const extractSubscriptionInfo = (
    docs: QueryDocumentSnapshot<DocumentData, DocumentData>[]
  ) => {
    let subscriptionCount = 0;

    for (const index in docs) {
      subscriptionCount += docs[index].data()["users"].length;
    }

    setSubscriptionTotal(subscriptionCount);
  };

  useLayoutEffect(() => {
    onSnapshot(
      collection(db, "Users"),
      (doc) => {
        if (!doc.empty) {
          extractUserInfo(doc.docs);
        }
      },
      (err) => {
        console.log(err);
      }
    );

    onSnapshot(
      collection(db, "SubscriptionPlan"),
      (doc) => {
        if (!doc.empty) {
          extractSubscriptionInfo(doc.docs);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    <Layout title="Analytics">
      <section
        id="summary-cards"
        className="flex flex-wrap flex-grow justify-center gap-10 px-10 mt-5 text-white"
      >
        <div className="bg-gradient-to-r from-[#BE195E] to-[#9D4993] w-[280px] h-28 rounded-xl">
          <h1 className="m-3 text-sm flex items-center gap-3">
            <BiUserCheck size={25} />
            Active Users
          </h1>
          <h1 className="text-3xl mx-5">25</h1>

          <div className="flex justify-end mx-5">
            <select className="bg-transparent text-sm">
              <option value=">18" className={`bg-[#9D4993]`}>
                All
              </option>
              <option value=">18" className={`bg-[#9D4993]`}>
                18 - 25
              </option>
              <option value=">18" className={`bg-[#9D4993]`}>
                26 - 40
              </option>
              <option value=">18" className={`bg-[#9D4993]`}>
                {"41 > "}
              </option>
            </select>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#9B4C97] to-[#8173C3] w-[280px] h-28 rounded-xl">
          <h1 className="m-3 text-sm flex items-center gap-3">
            <MdWorkspacePremium size={25} />
            Subscriptions
          </h1>
          <h1 className="text-3xl mx-5">{subscriptionTotal}</h1>
          <div className="flex justify-end mx-5">
            <select className="bg-transparent text-sm">
              <option value=">18" className={`bg-[#8173C3]`}>
                All
              </option>
              <option value=">18" className={`bg-[#8173C3]`}>
                18 - 25
              </option>
              <option value=">18" className={`bg-[#8173C3]`}>
                26 - 40
              </option>
              <option value=">18" className={`bg-[#8173C3]`}>
                {"41 > "}
              </option>
            </select>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#8076C6] to-[#60A4F9] w-[280px] h-28 rounded-xl">
          <h1 className="m-3 text-sm flex gap-3 items-center">
            <BiUserMinus size={25} />
            Deleted Users
          </h1>
          <h1 className="text-3xl mx-5">25</h1>
          <div className="flex justify-end mx-5">
            <select className="bg-transparent text-sm">
              <option value=">18" className={`bg-[#60A4F9]`}>
                All
              </option>
              <option value=">18" className={`bg-[#60A4F9]`}>
                18 - 25
              </option>
              <option value=">18" className={`bg-[#60A4F9]`}>
                26 - 40
              </option>
              <option value=">18" className={`bg-[#60A4F9]`}>
                {"41 > "}
              </option>
            </select>
          </div>
        </div>
      </section>

      <section className=" mb-10 mx-10">
        <ul
          className=" flex list-none flex-row flex-wrap border-b-0 pl-0"
          role="tablist"
          data-te-nav-ref
        >
          <li role="presentation">
            <a
              className={`cursor-pointer my-2 block border-x-0 border-b-2 border-t-0 ${
                tab === 0 ? "border-blue-500" : "border-transparent"
              } px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500`}
              onClick={() => setTab(0)}
            >
              Chart
            </a>
          </li>
          <li role="presentation">
            <a
              className={`cursor-pointer my-2 block border-x-0 border-b-2 border-t-0 ${
                tab === 1 ? "border-blue-500" : "border-transparent"
              } px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500`}
              onClick={() => setTab(1)}
            >
              Map
            </a>
          </li>
        </ul>

        <div className="mb-6">
          <div
            className={`opacity-100 transition-opacity duration-150 ease-linear ${
              tab === 0 ? "block" : "hidden"
            }`}
          >
            <SimpleBarChart titleText="" />
          </div>
          <div
            className={`transition-opacity duration-150 ease-linear ${
              tab === 1 ? "block" : "hidden"
            }`}
          >
            <Map
              location={{
                address: "Maharashtra, India",
                lat: 19.7047984,
                lng: 75.7046553,
              }}
              userLocations={data}
              zoomLevel={7}
            />
          </div>
        </div>
      </section>

      <section className="w-[92%] mb-10 bg-gradient-to-b from-transparent from-[5%] to-white to-50% shadow-sm rounded-xl mx-5">
        <header className="lg:flex lg:justify-between lg:mx-10">
          <h1 className="mt-16 text-2xl mx-10 text-sky-950 font-semibold">
            Detailed Summary
          </h1>

          <div className="md:flex grid lg:mt-16 mt-5 lg:mx-0 mx-10">
            <span className="flex">
              <h1 className="relative top-3 text-sm">Country: </h1>
              <select
                name=""
                id=""
                className="bg-transparent my-3"
                disabled={selectedRegion !== "All"}
                onChange={(event) => {
                  setSelectedCountry(event.target.value);
                }}
              >
                <option value="All">All</option>
                {countries.map((country) => (
                  <option value={country}>{country}</option>
                ))}
              </select>
            </span>

            <span className="flex">
              <h1 className="relative top-3 text-sm">Region: </h1>
              <select
                className="bg-transparent text-sm my-3"
                disabled={selectedCountry !== "All"}
                onChange={(event) => {
                  setSelectedRegion(event.target.value);
                }}
              >
                <option value="All" className="bg-inherit">
                  All
                </option>
                {regions.map((region) => (
                  <option value={region}>{region}</option>
                ))}
              </select>
            </span>

            <span className="flex">
              <h1 className="relative top-3 text-sm">Time: </h1>
              <select name="" id="" className="bg-transparent my-3">
                <option value="">Weekly</option>
                <option value="">Quarterly</option>
                <option value="">Monthly</option>
                <option value="">Half Yearly</option>
                <option value="">Yearly</option>
              </select>
            </span>

            <span className="flex">
              <h1 className="relative top-3 text-sm">Age: </h1>
              <select className="bg-transparent text-sm my-3">
                <option value={[]} className="bg-inherit">
                  All
                </option>
                <option value={["18", "25"]} className="bg-inherit">
                  18 - 25
                </option>
                <option value={["26", "40"]} className="bg-inherit">
                  26 - 40
                </option>
                <option value={["41", "200"]} className="bg-inherit">
                  {"41 > "}
                </option>
              </select>
            </span>
          </div>
        </header>

        <div className="grid lg:flex lg:justify-between">
          <div className="lg:mx-20 mx-10 mt-10 self-center lg:w-[40%] md:w-[80%]">
            <span className="flex justify-between my-3">
              <h1>Total Users</h1>
              <h2>
                {
                  //TODO: Finish filtering
                  data.filter((user) => {
                    if (
                      (selectedCountry === "All" &&
                        selectedRegion === "All" &&
                        selectedAge.length === 0) ||
                      (user.location.country === selectedCountry &&
                        user.location.region === selectedRegion &&
                        user.age >= parseInt(selectedAge[0]) &&
                        user.age <= parseInt(selectedAge[1]))
                    )
                      return user;

                    // if (
                    //   (selectedRegion === "All" && selectedCountry === "All") ||
                    //   user.location.region === selectedRegion
                    // )
                    //   return user;
                  }).length
                }
              </h2>
            </span>
            <span className="flex justify-between my-3">
              <h1>New Users</h1>
              <h2>0</h2>
            </span>
            <span className="flex justify-between my-3">
              <h1>Active Users</h1>
              <h2>0</h2>
            </span>
            <span className="flex justify-between my-3">
              <h1>Deactivated Users</h1>
              <h2>0</h2>
            </span>
            <span className="flex justify-between my-3">
              <h1>Total Subscription</h1>
              <h2>{subscriptionTotal}</h2>
            </span>
            <hr className="bg-gray-200 rounded-full h-1" />
            <span className="flex justify-between my-3">
              <h1>Total Revenue Generated</h1>
              <h2>0.00</h2>
            </span>
            <span className="flex justify-between my-3">
              <h1>Total Generated from NFT Marketplace</h1>
              <h2>0.00</h2>
            </span>
            <span className="flex justify-between my-3">
              <h1>Total Revenue Generated from Advertising</h1>
              <h2>0.00</h2>
            </span>
            <span className="flex justify-between my-3">
              <h1>Total Generated from Partnership</h1>
              <h2>0.00</h2>
            </span>
          </div>

          <span className="sm:w-[50%] w-full p-5 relative lg:left-0 sm:left-[30%]">
            <PieChart
              titleText="Percentage"
              legendOrientation={`${
                window.innerWidth > 600 ? "right" : "bottom"
              }`}
            />
          </span>
        </div>
      </section>
    </Layout>
  );
};

export default Analytics;
