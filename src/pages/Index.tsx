import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import StatCard from '../components/Dashboard/StatCard';
import ProductSalesChart from '../components/Dashboard/ProductSalesChart';
import WebsiteTrafficChart from '../components/Dashboard/WebsiteTrafficChart';
import ScoreRadialMeter from '../components/Dashboard/ScoreRadialMeter';
import { Card, CardContent } from '@/components/ui/card';

// Data for StatCards based on the visual representation
interface StatCardData {
  title: string;
  value: string;
}

const statCardItems: StatCardData[] = [
  { title: 'REVENUE', value: '$92,463' },
  { title: 'PRODUCTION OUTPUT', value: '315' },
  { title: 'CUSTOMER SATISFACTION SCORE', value: '91%' },
  { title: 'EMPLOYEE ATTENDANCE', value: '96%' },
];

// Data for ScoreRadialMeters based on the visual representation
interface ScoreMeterData {
  id: string;
  score: number;
  label: string;
}

const scoreMeterItems: ScoreMeterData[] = [
  { id: 'score1', score: 85, label: 'SCORE #1' },
  { id: 'score2', score: 73, label: 'SCORE #2' },
  { id: 'score3', score: 92, label: 'SCORE #3' },
  { id: 'score4', score: 54, label: 'SCORE #4' },
  { id: 'score5', score: 75, label: 'SCORE #5' },
];

const WeeklyDashboardPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* Section 1: StatCards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCardItems.map((item) => (
          <StatCard key={item.title} title={item.title} value={item.value} />
        ))}
      </div>

      {/* Section 2: Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProductSalesChart />
        <WebsiteTrafficChart />
      </div>

      {/* Section 3: ScoreRadialMeters */}
      <Card className="shadow-md">
        <CardContent className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8 items-center justify-items-center">
            {scoreMeterItems.map((item) => (
              <ScoreRadialMeter
                key={item.id}
                score={item.score}
                label={item.label}
                // Default size and strokeWidth from ScoreRadialMeter component will be used
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </MainAppLayout>
  );
};

export default WeeklyDashboardPage;
