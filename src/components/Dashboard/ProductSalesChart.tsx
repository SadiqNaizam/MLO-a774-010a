import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Boxes } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductSalesData {
  region: string;
  sales: number;
}

const productSalesData: ProductSalesData[] = [
  { region: 'Region 1', sales: 70 },
  { region: 'Region 2', sales: 103 },
  { region: 'Region 3', sales: 116 },
  { region: 'Region 4', sales: 35 },
  { region: 'Region 5', sales: 40 },
];

const totalProductsSold = productSalesData.reduce((sum, item) => sum + item.sales, 0);

// Using HSL values from tailwind.config.ts for dark mode primary color
// --primary: 217 93% 68%; /* PRD: #60A5FA (accentBlue) */
const ACCENT_BLUE_COLOR = 'hsl(217, 93%, 68%)';

interface ProductSalesChartProps {
  className?: string;
}

const ProductSalesChart: React.FC<ProductSalesChartProps> = ({ className }) => {
  return (
    <Card className={cn('bg-card shadow-md', className)}>
      <CardHeader>
        <CardTitle className="text-base font-semibold text-card-foreground">PRODUCT SALES</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 items-center">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart
                data={productSalesData}
                layout="vertical"
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} axisLine={false} tickLine={false} />
                <YAxis 
                  type="category" 
                  dataKey="region" 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12} 
                  axisLine={false} 
                  tickLine={false} 
                  width={80} 
                />
                <Tooltip
                  cursor={{ fill: 'hsl(var(--muted) / 0.3)' }}
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--popover))', 
                    borderColor: 'hsl(var(--border))', 
                    color: 'hsl(var(--popover-foreground))' 
                  }}
                />
                <Bar dataKey="sales" barSize={20} radius={[0, 4, 4, 0]}>
                  {productSalesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={ACCENT_BLUE_COLOR} />
                  ))}
                  <LabelList dataKey="sales" position="right" style={{ fill: 'hsl(var(--card-foreground))', fontSize: '12px' }} />
                </Bar>
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-muted/30 rounded-lg h-full">
            <p className="text-sm font-medium text-muted-foreground mb-2">TOTAL PRODUCTS SOLD</p>
            <Boxes className="h-12 w-12 text-primary mb-3" />
            <p className="text-4xl font-bold text-primary">{totalProductsSold}</p>
            <p className="text-xs text-muted-foreground mt-1">06/19/2024 - 06/25/2024</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductSalesChart;
