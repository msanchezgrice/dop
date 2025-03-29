import React from "react";
import { FiArrowDown, FiArrowUp, FiTriangle } from "react-icons/fi";

interface FeatureItem {
  id: number;
  name: string;
  description: string;
  cost: {
    amount: string;
    level: 'low' | 'medium' | 'high';
  };
  upside: {
    score: number;
    description: string;
  };
  priorityScore: number;
}

const FeatureStackRanking: React.FC = () => {
  const features: FeatureItem[] = [
    {
      id: 1,
      name: "Daily Reward System",
      description: "Implement a daily login reward system with increasing value over consecutive days",
      cost: {
        amount: "$45,000",
        level: "medium"
      },
      upside: {
        score: 8.5,
        description: "Expected to improve D1 retention by 15%"
      },
      priorityScore: 9.2
    },
    {
      id: 2,
      name: "Battle Pass",
      description: "Seasonal progression system with free and premium reward tracks",
      cost: {
        amount: "$120,000",
        level: "high"
      },
      upside: {
        score: 9.8,
        description: "Projected 22% ARPDAU increase"
      },
      priorityScore: 8.7
    },
    {
      id: 3,
      name: "Friend Referral Program",
      description: "Reward players for inviting friends who become active users",
      cost: {
        amount: "$35,000",
        level: "low"
      },
      upside: {
        score: 7.2,
        description: "Potential 8% increase in organic user acquisition"
      },
      priorityScore: 8.5
    },
    {
      id: 4,
      name: "Advanced Tutorial System",
      description: "Interactive tutorial with better onboarding and reduced complexity",
      cost: {
        amount: "$62,000",
        level: "medium"
      },
      upside: {
        score: 8.0,
        description: "Expected to improve D7 retention by 12%"
      },
      priorityScore: 7.9
    },
    {
      id: 5,
      name: "Guild System",
      description: "Allow players to form guilds with shared objectives and rewards",
      cost: {
        amount: "$95,000",
        level: "high"
      },
      upside: {
        score: 8.9,
        description: "Projected 18% boost in engagement metrics"
      },
      priorityScore: 7.4
    }
  ];

  const getCostColor = (level: 'low' | 'medium' | 'high') => {
    switch (level) {
      case 'low':
        return 'text-green-600 bg-green-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'high':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-slate-600 bg-slate-50';
    }
  };

  const getUpsideColor = (score: number) => {
    if (score >= 9) {
      return 'text-green-600';
    } else if (score >= 7) {
      return 'text-blue-600';
    } else {
      return 'text-slate-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
      <div className="bg-slate-800 text-white p-4">
        <h3 className="font-medium text-lg">Feature Stack Ranking</h3>
        <p className="text-slate-300 text-sm">AI-powered prioritization based on cost, impact, and strategic value</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Rank</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Feature</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Development Cost</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Upside Potential</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Priority Score</th>
            </tr>
          </thead>
          <tbody>
            {features.sort((a, b) => b.priorityScore - a.priorityScore).map((feature, index) => (
              <tr key={feature.id} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                  #{index + 1}
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-slate-900">{feature.name}</div>
                  <div className="text-sm text-slate-500">{feature.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-sm ${getCostColor(feature.cost.level)}`}>
                    {feature.cost.amount}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className={`text-sm font-medium ${getUpsideColor(feature.upside.score)}`}>
                    {feature.upside.score}/10
                  </div>
                  <div className="text-sm text-slate-500">{feature.upside.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded-full text-sm">
                      {feature.priorityScore.toFixed(1)}
                    </div>
                    {index === 0 && (
                      <div className="ml-2 bg-green-100 p-1 rounded-full">
                        <FiArrowUp className="text-green-600" />
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="bg-blue-50 p-4 border-t border-blue-100">
        <div className="flex items-start">
          <div className="text-blue-600 mr-3 mt-1">
            <FiTriangle />
          </div>
          <div>
            <p className="text-sm text-slate-700">
              <span className="font-medium">AI Recommendation:</span> Based on the current analysis, we recommend prioritizing the Daily Reward System for immediate development due to its high impact on retention with moderate development cost.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureStackRanking; 