// src/components/LoadingSkeleton.jsx
import React from "react";

const LoadingSkeleton = ({ type = "card" }) => {
  const skeletonTypes = {
    card: (
      <div className="h-full w-full rounded-xl bg-gray-800 overflow-hidden">
        <div className="h-48 bg-gray-700 animate-pulse"></div>
        <div className="p-4">
          <div className="h-6 w-3/4 bg-gray-700 rounded animate-pulse mb-2"></div>
          <div className="h-4 w-1/2 bg-gray-700 rounded animate-pulse"></div>
        </div>
      </div>
    ),
    "long-card": (
      <div className="w-full h-[330px] rounded-xl bg-gray-800 animate-pulse"></div>
    ),
    default: (
      <div className="h-12 w-full bg-gray-800 rounded-lg animate-pulse"></div>
    )
  };

  return skeletonTypes[type] || skeletonTypes.default;
};

export default LoadingSkeleton;