import React, { useState } from 'react';
import { Calculator, Building2, Users, MapPin, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CostCalculator: React.FC = () => {
  const [businessType, setBusinessType] = useState('llc');
  const [location, setLocation] = useState('riyadh');
  const [employees, setEmployees] = useState('1-5');
  const [visas, setVisas] = useState('0');
  const [officeType, setOfficeType] = useState('virtual');

  const calculateCost = () => {
    let baseCost = 0;
    
    // Business type costs
    switch (businessType) {
      case 'llc': baseCost = 12000; break;
      case 'branch': baseCost = 18000; break;
      case 'freelance': baseCost = 5000; break;
      case 'joint': baseCost = 25000; break;
    }
    
    // Location multiplier
    const locationMultiplier = location === 'riyadh' ? 1 : location === 'jeddah' ? 0.95 : 0.9;
    
    // Employee costs
    const employeeCost = employees === '1-5' ? 0 : employees === '6-20' ? 5000 : 10000;
    
    // Visa costs
    const visaCost = parseInt(visas) * 2500;
    
    // Office costs
    const officeCost = officeType === 'virtual' ? 0 : officeType === 'shared' ? 3000 : 8000;
    
    return Math.round((baseCost * locationMultiplier) + employeeCost + visaCost + officeCost);
  };

  const totalCost = calculateCost();

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/30 rounded-full mb-6">
            <Calculator className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Cost Calculator</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Calculate Your Setup Cost
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Get an instant estimate for your business formation in Saudi Arabia
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Business Setup Calculator
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Select your preferences to get a cost estimate
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Business Type */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  <Building2 className="w-4 h-4" />
                  Business Type
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'llc', label: 'Limited Liability Company (LLC)' },
                    { value: 'branch', label: 'Branch Office' },
                    { value: 'freelance', label: 'Freelance License' },
                    { value: 'joint', label: 'Joint Stock Company' },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="businessType"
                        value={option.value}
                        checked={businessType === option.value}
                        onChange={(e) => setBusinessType(e.target.value)}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  <MapPin className="w-4 h-4" />
                  Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="riyadh">Riyadh</option>
                  <option value="jeddah">Jeddah</option>
                  <option value="dammam">Dammam</option>
                  <option value="alkhobar">Al Khobar</option>
                </select>
              </div>

              {/* Number of Employees */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  <Users className="w-4 h-4" />
                  Number of Employees
                </label>
                <select
                  value={employees}
                  onChange={(e) => setEmployees(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="1-5">1-5 employees</option>
                  <option value="6-20">6-20 employees</option>
                  <option value="21+">21+ employees</option>
                </select>
              </div>

              {/* Number of Work Visas */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  <Briefcase className="w-4 h-4" />
                  Number of Work Visas
                </label>
                <select
                  value={visas}
                  onChange={(e) => setVisas(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="0">No visas needed</option>
                  <option value="1">1 visa</option>
                  <option value="2">2 visas</option>
                  <option value="3">3 visas</option>
                  <option value="5">5 visas</option>
                  <option value="10">10+ visas</option>
                </select>
              </div>

              {/* Office Space Type */}
              <div className="md:col-span-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  <Building2 className="w-4 h-4" />
                  Office Space Type
                </label>
                <select
                  value={officeType}
                  onChange={(e) => setOfficeType(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="virtual">Virtual Office</option>
                  <option value="shared">Shared Office Space</option>
                  <option value="dedicated">Dedicated Office</option>
                </select>
              </div>
            </div>

            {/* Cost Display */}
            <div className="mt-10 p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-orange-950/20 rounded-2xl">
              <div className="text-center">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Estimated Total Cost
                </p>
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent mb-4">
                  SAR {totalCost.toLocaleString()}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
                  * This is an estimate. Final cost may vary based on specific requirements.
                </p>
                
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-base font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Detailed Quote
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            SSL Secured
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Verified Business
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Licensed Provider
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;
