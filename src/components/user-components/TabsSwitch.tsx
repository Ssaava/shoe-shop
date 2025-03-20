interface TabsSwitchProps {
  activeTab: string;
  handleActiveTab: (tab: string) => void;
}

const TabsSwitch = ({ activeTab, handleActiveTab }: TabsSwitchProps) => {
  const tabs = [
    { id: "description", label: "Description" },
    { id: "additional-information", label: "Additional Information" },
    { id: "reviews", label: "Reviews(0)" },
  ];

  return (
    <div className="border-t-[1px] w-full flex gap-4 flex-wrap mt-20">
      {tabs.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => handleActiveTab(id)}
          aria-label={`Show ${id} tab`}
          className={`${
            activeTab === id ? "border-t-blue-5" : "border-t-transparent"
          } border-t-[3px] w-fit py-2`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default TabsSwitch;
