
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

const PageLoadingIndicator = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const timer = setTimeout(() => {
      setProgress(100);
    }, 500);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 750);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <Progress value={progress} className="h-1 bg-gray-200 rounded-none" />
    </div>
  );
};

export default PageLoadingIndicator;
