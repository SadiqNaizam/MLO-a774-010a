import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TrafficData {
  date: string;
  websiteVisits: number;
  pageViews: number;
}

const websiteTrafficData: TrafficData[] = [
  { date: '06/19', websiteVisits: 65, pageViews: 100 },
  { date: '06/20', websiteVisits: 110, pageViews: 160 },
  { date: '06/21', websiteVisits: 40, pageViews: 80 },
  { date: '06/22', websiteVisits: 125, pageViews: 190 },
  { date: '06/23', websiteVisits: 80, pageViews: 130 },
  { date: '06/24', websiteVisits: 30, pageViews: 70 },
  { date: '06/25', websiteVisits: 85, pageViews: 140 },
];

// Using HSL values from tailwind.config.ts
const PRIMARY_COLOR = 'hsl(217, 93%, 68%)'; // --primary (accentBlue)
const SECONDARY_LINE_COLOR = 'hsl(0, 0%, 100%)'; // --primary-foreground (white for contrast on dark card)

interface WebsiteTrafficChartProps {
  className?: string;
}

const WebsiteTrafficChart: React.FC<WebsiteTrafficChartProps> = ({ className }) => {
  return (
    <Card className={cn('bg-card shadow-md', className)}>
      <CardHeader>
        <CardTitle className="text-base font-semibold text-card-foreground">WEBSITE TRAFFIC</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart 
              data={websiteTrafficData}
              margin={{ top: 5, right: 20, left: -20, bottom: 30 }}
            >
              <defs>
                <linearGradient id="colorWebsiteVisits" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={PRIMARY_COLOR} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={PRIMARY_COLOR} stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" vertical={false} />
              <XAxis 
                dataKey="date" 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12} 
                tickLine={false} 
                axisLine={{ stroke: 'hsl(var(--border))' }}
                dy={10}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false}
                domain={[0, 'dataMax + 20']}
              />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--popover))', 
                  borderColor: 'hsl(var(--border))', 
                  color: 'hsl(var(--popover-foreground))', 
                  borderRadius: 'var(--radius)' 
                }}
                labelStyle={{ fontWeight: 'bold' }}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36} 
                iconType="plainline"
                wrapperStyle={{ color: 'hsl(var(--muted-foreground))', fontSize: '12px' }}
              />
              <Area 
                type="monotone" 
                dataKey="websiteVisits" 
                stroke={PRIMARY_COLOR} 
                strokeWidth={2} 
                fillOpacity={1} 
                fill="url(#colorWebsiteVisits)" 
                dot={{ r: 4, fill: PRIMARY_COLOR, strokeWidth: 2, stroke: 'hsl(var(--card))' }}
                activeDot={{ r: 6 }}
                name="Website Visits"
              />
              <Line 
                type="monotone" 
                dataKey="pageViews" 
                stroke={SECONDARY_LINE_COLOR}
                strokeWidth={2}
                dot={{ r: 4, fill: SECONDARY_LINE_COLOR, strokeWidth: 2, stroke: 'hsl(var(--card))' }}
                activeDot={{ r: 6 }}
                name="Website Page Views"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default WebsiteTrafficChart;
