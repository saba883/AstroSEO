import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator } from 'lucide-react';

export default function CostCalculator() {
  const [businessType, setBusinessType] = useState('llc');
  const [location, setLocation] = useState('riyadh');
  const [employees, setEmployees] = useState('1-5');
  const [showResult, setShowResult] = useState(false);

  const calculateCost = () => {
    setShowResult(true);
  };

  const baseCosts: Record<string, number> = {
    llc: 15000,
    branch: 12000,
    freelance: 5000
  };

  const locationMultiplier: Record<string, number> = {
    riyadh: 1.0,
    jeddah: 0.95,
    dammam: 0.9
  };

  const employeeCost: Record<string, number> = {
    '1-5': 2000,
    '6-10': 4000,
    '11-50': 8000,
    '51+': 15000
  };

  const totalCost = baseCosts[businessType] * locationMultiplier[location] + employeeCost[employees];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Calculator className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Calculate Your Setup Cost
          </h2>
          <p className="text-lg text-muted-foreground">
            Get an instant estimate for your business formation in Saudi Arabia
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Business Setup Calculator</CardTitle>
            <CardDescription>Select your preferences to get a cost estimate</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label>Business Type</Label>
              <RadioGroup value={businessType} onValueChange={setBusinessType}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="llc" id="llc" data-testid="radio-llc" />
                  <Label htmlFor="llc" className="font-normal cursor-pointer">
                    Limited Liability Company (LLC)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="branch" id="branch" data-testid="radio-branch" />
                  <Label htmlFor="branch" className="font-normal cursor-pointer">
                    Branch Office
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="freelance" id="freelance" data-testid="radio-freelance" />
                  <Label htmlFor="freelance" className="font-normal cursor-pointer">
                    Freelance License
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <Label htmlFor="location">Location</Label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger id="location" data-testid="select-location">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="riyadh">Riyadh</SelectItem>
                  <SelectItem value="jeddah">Jeddah</SelectItem>
                  <SelectItem value="dammam">Dammam</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="employees">Number of Employees</Label>
              <Select value={employees} onValueChange={setEmployees}>
                <SelectTrigger id="employees" data-testid="select-employees">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-5">1-5 employees</SelectItem>
                  <SelectItem value="6-10">6-10 employees</SelectItem>
                  <SelectItem value="11-50">11-50 employees</SelectItem>
                  <SelectItem value="51+">51+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              className="w-full" 
              size="lg" 
              onClick={calculateCost}
              data-testid="button-calculate"
            >
              Calculate Cost
            </Button>

            {showResult && (
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Estimated Total Cost</div>
                    <div className="font-mono text-4xl font-bold text-primary mb-2" data-testid="text-total-cost">
                      {totalCost.toLocaleString()} SAR
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      Approximately ${(totalCost / 3.75).toLocaleString()} USD
                    </div>
                    <p className="text-sm text-muted-foreground">
                      * This is an estimate. Final costs may vary based on specific requirements.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
