import React, { useEffect, useContext, useState } from "react";

import { CrowdFundingContext } from "@/Context/CrowdFunding";
import { Hero } from "@/Components/Hero";
import { Card } from "@/Components/Card";
import { PopUp } from "@/Components/PopUp";

const index = () => {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    doante,
    getUserCampaigns,
    getDonations,
  } = useContext(CrowdFundingContext);

  const [allcampaign, setAllCampaign] = useState();
  const [usercampaign, setUserCampaign] = useState();

  useEffect(() => {
    const getCampaignsData = getCampaigns();
    const userCampaignData = getUserCampaigns();
    return async () => {

      const allData = await getCampaignsData;
      const userData = await userCampaignData;
      setAllCampaign(allData);
      setUserCampaign(userData);
    };

  }, []);


  //donation open model

  const [openModel, setOpenModel] = useState(false);
  const [doanteCampaign, setDonateCampaign] = useState();

  console.log(doanteCampaign);
  return (
    <>
      <Hero titleData={titleData} createCampaign={createCampaign} />
      <Card title="All listed campaigns"
        allcampaign={allcampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />
      <Card title="your creted campaign"
        allcampaign={usercampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />
      {openModel && (
        <PopUp
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          doante={doanteCampaign}
          doanteFunction={doante}
        />
      )}
    </>
  );
};


export default index;