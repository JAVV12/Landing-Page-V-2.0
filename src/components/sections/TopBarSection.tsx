interface TopBarSectionProps {
  content: {
    countdown: string;
    backgroundColor?: string;
    urgent?: boolean;
  };
}

export const TopBarSection = ({ content }: TopBarSectionProps) => {
  const { countdown, backgroundColor, urgent } = content;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 py-2 px-4 text-center text-sm font-medium text-white transition-all duration-300"
      style={{
        backgroundColor: backgroundColor || (urgent ? '#dc2626' : '#1f2937')
      }}
    >
      <div className="mx-auto max-w-7xl">
        {countdown}
      </div>
    </div>
  );
};





