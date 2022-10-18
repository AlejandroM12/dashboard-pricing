import { Card } from "../Card";

const Content = () => {
  return (
    <div className="pt-20">
      <h1 className="text-4xl text-gray-300 mb-7">Plan & Pricing</h1>
      <div className="text-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          bgCardColor="[#1E1F24]"
          bgButton="[#141517]"
          emoji="😆"
          title="Personal"
          description="Perfect plant for starters"
          price="FREE"
          time="For a Lifetime"
          plan="Current Plan"
          detailOne="Detailed post analytics"
          detailTwo="Share with 5 teams members"
          detailThree="Sync across devices"
          detailFour="Reach and impressions analytics"
          detailFive="Up to 6 social profile"
        />
        <Card
          bgCardColor="[#1E1F24]"
          bgButton="[#141517]"
          emoji="🎉"
          title="Professional"
          description="For users who want to do more"
          price="$99"
          time="For a Lifetime"
          plan="Current Plan"
          detailOne="Detailed post analytics"
          detailTwo="Unlimited teams members"
          detailThree="Sync across devices"
          detailFour="Reach and impressions analytics"
          detailFive="Up to 19 social profile"
        />
        <Card
          bgCardColor="[#1E1F24]"
          bgButton="[#141517]"
          emoji="🔥"
          title="Interprice"
          description="Anylize your company"
          price="$184"
          time="For a Lifetime"
          plan="Current Plan"
          detailOne="Detailed post analytics"
          detailTwo="Unlimited teams members"
          detailThree="Sync across devices"
          detailFour="Reach and impressions analytics"
          detailFive="Unlimited social profile"
        />
      </div>
    </div>
  );
};
export default Content;
