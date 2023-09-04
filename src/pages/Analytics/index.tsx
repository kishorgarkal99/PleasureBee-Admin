import {useState} from 'react';
import Layout from "../../components/Layout";
import SimpleLineChart from "../../components/charts/SimpleLineChart";
import Map from '../../components/Map';

//Icons
import { BiUserCheck } from "react-icons/bi";
import { BiUserMinus } from "react-icons/bi";
import { MdWorkspacePremium } from "react-icons/md";

const Analytics = () => {
    const [tab, setTab] = useState(0);

  return (
    <Layout title="Analytics">
      <section id="summary-cards" className="flex gap-10 px-10 mt-5 text-white">
        <div className="bg-gradient-to-r from-[#BE195E] to-[#9D4993] w-[30%] h-28 rounded-xl">
          <h1 className="m-3 text-sm flex items-center gap-3">
            <BiUserCheck size={25} />
            Active Users
          </h1>
          <h1 className="text-3xl mx-5">25</h1>

          <div className="flex justify-end mx-5">
            <select className="bg-transparent text-sm">
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
        <div className="bg-gradient-to-r from-[#9B4C97] to-[#8173C3] w-[30%] h-28 rounded-xl">
          <h1 className="m-3 text-sm flex items-center gap-3">
            <MdWorkspacePremium size={25} />
            Subscriptions
          </h1>
          <h1 className="text-3xl mx-5">25</h1>
          <div className="flex justify-end mx-5">
            <select className="bg-transparent text-sm">
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
        <div className="bg-gradient-to-r from-[#8076C6] to-[#60A4F9] w-[30%] h-28 rounded-xl">
          <h1 className="m-3 text-sm flex gap-3 items-center">
            <BiUserMinus size={25} />
            Deleted Users
          </h1>
          <h1 className="text-3xl mx-5">25</h1>
          <div className="flex justify-end mx-5">
            <select className="bg-transparent text-sm">
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

      <section className="w-[92%] mb-10 mx-10">
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
            <SimpleLineChart titleText="" />
          </div>
          <div
            className={`transition-opacity duration-150 ease-linear ${
              tab === 1 ? "block" : "hidden"
            }`}
          >
            <Map
              location={{
                address:
                  "1600 Amphitheatre Parkway, Mountain View, california.",
                lat: 19.7047984,
                lng: 75.7046553,
              }}
              zoomLevel={7}
            />
          </div>
        </div>

        <article className="h-[500px] w-[98%] bg-gradient-to-b from-transparent from-[5%] to-white to-50% shadow-sm rounded-xl mx-5">
          <h1 className="my-16 text-2xl mx-10 text-sky-950 font-semibold">
            Detailed Summary
          </h1>
          total users <br />
          new users per week, month, analysis and <br />
          for left users,
          <br /> Total Subscription users/age wise <br />
          Total users region wise/age wise
          <br /> Total users country wise/age wise Total Deactivate users -
          Users who deleted account
          <br /> Total Active users as per there age/age wise total income
          generated, <br />
          <br />
          weekly, Monthly,Quarterly,Half yearly,Yearly <br />
          <br />
          Total revenue generated from subscription/ Age wise <br />
          Total generated from NFT Marketplace/Age wise
          <br /> Total revenue generated from advertising
          <br /> Total generated from Partnrship with different service
          providers
        </article>
      </section>
    </Layout>
  );
};

export default Analytics;