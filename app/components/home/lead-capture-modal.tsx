"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Check, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

interface ModalStep {
  step1: {
    title: string;
    options: Array<{
      id: string;
      label: string;
      description: string;
    }>;
  };
  step2: {
    title: string;
    budgetRanges: Array<{
      id: string;
      label: string;
      description: string;
    }>;
    timelines: Array<{
      id: string;
      label: string;
      description: string;
    }>;
  };
  step3: {
    title: string;
    fields: Array<{
      name: string;
      label: string;
      type: string;
      required: boolean;
    }>;
  };
}

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalSteps: ModalStep;
}

const formSchema = z.object({
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  website: z.string().url().optional().or(z.literal("")),
});

type FormData = z.infer<typeof formSchema>;

export function LeadCaptureModal({ isOpen, onClose, modalSteps }: LeadCaptureModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: "",
      budget: "",
      timeline: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      website: "",
    },
  });

  const progress = (currentStep / 3) * 100;

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form and close modal
    setTimeout(() => {
      form.reset();
      setCurrentStep(1);
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  const handleClose = () => {
    form.reset();
    setCurrentStep(1);
    setIsSubmitted(false);
    onClose();
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-lg">
          <div className="text-center py-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Check className="h-10 w-10 text-green-600" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Thank You!
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                We've received your request and will be in touch within 24 hours to discuss your project.
              </p>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Check your email for a confirmation and our digital strategy guide.
              </div>
            </motion.div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
            Get Your Free Strategy Session
          </DialogTitle>
          <div className="mt-4">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400 mt-2">
              <span>Step {currentStep} of 3</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  custom={1}
                  className="py-6"
                >
                  <h3 className="text-xl font-semibold mb-6">{modalSteps.step1.title}</h3>
                  <RadioGroup
                    value={form.watch("service")}
                    onValueChange={(value) => form.setValue("service", value)}
                    className="space-y-4"
                  >
                    {modalSteps.step1.options.map((option) => (
                      <div key={option.id} className="relative">
                        <RadioGroupItem
                          value={option.id}
                          id={option.id}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={option.id}
                          className="flex items-start space-x-4 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 peer-checked:border-blue-500 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-950 transition-all"
                        >
                          <div className="w-4 h-4 rounded-full border-2 border-slate-300 dark:border-slate-600 peer-checked:border-blue-500 peer-checked:bg-blue-500 mt-1 relative">
                            <div className="absolute inset-0 rounded-full bg-blue-500 scale-0 peer-checked:scale-100 transition-transform" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 dark:text-white">
                              {option.label}
                            </div>
                            <div className="text-sm text-slate-600 dark:text-slate-300">
                              {option.description}
                            </div>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  {form.formState.errors.service && (
                    <p className="text-red-500 text-sm mt-2">
                      {form.formState.errors.service.message}
                    </p>
                  )}
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  custom={1}
                  className="py-6 space-y-8"
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-6">{modalSteps.step2.title}</h3>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold mb-4">Budget Range</h4>
                      <RadioGroup
                        value={form.watch("budget")}
                        onValueChange={(value) => form.setValue("budget", value)}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                      >
                        {modalSteps.step2.budgetRanges.map((range) => (
                          <div key={range.id} className="relative">
                            <RadioGroupItem
                              value={range.id}
                              id={`budget-${range.id}`}
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor={`budget-${range.id}`}
                              className="flex flex-col p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 peer-checked:border-blue-500 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-950 transition-all"
                            >
                              <div className="font-semibold text-slate-900 dark:text-white mb-1">
                                {range.label}
                              </div>
                              <div className="text-sm text-slate-600 dark:text-slate-300">
                                {range.description}
                              </div>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4">Timeline</h4>
                      <RadioGroup
                        value={form.watch("timeline")}
                        onValueChange={(value) => form.setValue("timeline", value)}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                      >
                        {modalSteps.step2.timelines.map((timeline) => (
                          <div key={timeline.id} className="relative">
                            <RadioGroupItem
                              value={timeline.id}
                              id={`timeline-${timeline.id}`}
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor={`timeline-${timeline.id}`}
                              className="flex flex-col p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 peer-checked:border-blue-500 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-950 transition-all"
                            >
                              <div className="font-semibold text-slate-900 dark:text-white mb-1">
                                {timeline.label}
                              </div>
                              <div className="text-sm text-slate-600 dark:text-slate-300">
                                {timeline.description}
                              </div>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                  {(form.formState.errors.budget || form.formState.errors.timeline) && (
                    <div className="text-red-500 text-sm space-y-1">
                      {form.formState.errors.budget && (
                        <p>{form.formState.errors.budget.message}</p>
                      )}
                      {form.formState.errors.timeline && (
                        <p>{form.formState.errors.timeline.message}</p>
                      )}
                    </div>
                  )}
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  custom={1}
                  className="py-6"
                >
                  <h3 className="text-xl font-semibold mb-6">{modalSteps.step3.title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {modalSteps.step3.fields.map((field) => (
                      <div key={field.name} className={field.name === 'email' || field.name === 'company' ? 'sm:col-span-2' : ''}>
                        <Label htmlFor={field.name} className="text-sm font-medium">
                          {field.label}
                          {field.required && <span className="text-red-500 ml-1">*</span>}
                        </Label>
                        <Input
                          id={field.name}
                          type={field.type}
                          {...form.register(field.name as keyof FormData)}
                          className="mt-1"
                          placeholder={`Enter your ${field.label.toLowerCase()}`}
                        />
                        {form.formState.errors[field.name as keyof FormData] && (
                          <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors[field.name as keyof FormData]?.message}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-700">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>

            {currentStep < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                disabled={
                  (currentStep === 1 && !form.watch("service")) ||
                  (currentStep === 2 && (!form.watch("budget") || !form.watch("timeline")))
                }
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-700"
              >
                <span>Next</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800"
                disabled={form.formState.isSubmitting}
              >
                <Sparkles className="h-4 w-4" />
                <span>
                  {form.formState.isSubmitting ? "Submitting..." : "Get My Free Strategy Session"}
                </span>
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}