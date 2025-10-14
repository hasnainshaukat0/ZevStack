"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, DollarSign, Clock } from "lucide-react";

interface CaseStudy {
  client: string;
  logo: string;
  outcome: string;
  description: string;
  metrics: {
    leads?: string;
    revenue?: string;
    conversion?: string;
    costs?: string;
    bounce?: string;
    timeline: string;
  };
}

interface CaseStudiesProps {
  caseStudies: CaseStudy[];
}

export function CaseStudies({ caseStudies }: CaseStudiesProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="case-studies" className="py-24 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge 
            variant="secondary" 
            className="mb-6 px-4 py-2 text-sm font-medium bg-blue-100 text-blue-700 border border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
          >
            Real Results, Real Clients
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            See how we've helped leading companies transform their digital presence and achieve remarkable growth.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {caseStudies.map((study, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group h-full border-0 bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                <CardContent className="p-0 relative">
                  {/* Header */}
                  <div className="p-8 pb-6 border-b border-slate-100 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                        {study.client.charAt(0)}
                      </div>
                      <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800 dark:text-green-400">
                        Success
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {study.client}
                    </h3>
                    <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                      {study.outcome}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 pt-6">
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      {study.description}
                    </p>

                    {/* Metrics */}
                    <div className="space-y-3 mb-6">
                      {study.metrics.leads && (
                        <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="h-4 w-4 text-blue-600" />
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Leads</span>
                          </div>
                          <span className="text-sm font-bold text-green-600">+{study.metrics.leads}</span>
                        </div>
                      )}
                      {study.metrics.revenue && (
                        <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                          <div className="flex items-center space-x-2">
                            <DollarSign className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Revenue</span>
                          </div>
                          <span className="text-sm font-bold text-green-600">+{study.metrics.revenue}</span>
                        </div>
                      )}
                      {study.metrics.conversion && (
                        <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="h-4 w-4 text-purple-600" />
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Conversion</span>
                          </div>
                          <span className="text-sm font-bold text-green-600">+{study.metrics.conversion}</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-slate-500" />
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Timeline</span>
                        </div>
                        <span className="text-sm font-bold text-slate-600 dark:text-slate-400">{study.metrics.timeline}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button 
                      variant="ghost" 
                      className="w-full group-hover:bg-blue-50 group-hover:text-blue-600 dark:group-hover:bg-blue-950 dark:group-hover:text-blue-400 transition-colors"
                    >
                      View Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Ready to become our next success story?
          </p>
          <Button 
            size="lg"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold shadow-lg hover:shadow-xl group"
          >
            Start Your Transformation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}