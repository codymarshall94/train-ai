"use client";
/* eslint-disable react/no-unescaped-entities */

import GeneratorForm from "@/components/generator-form";
import Heading from "@/components/heading";
import Loading from "@/components/loading";
import { Button } from "@/components/ui/button";
import { Brain, List } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import PlanDropDown from "@/components/plan-review";
import { TEST_PLAN } from "@/data/test-plan";
import PlanText from "@/components/plan-text-format";
import PlanPDF from "@/components/plan-pdf";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Rows } from "lucide-react";

type format = "accordion" | "text" | "pdf";

export default function Generator() {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [format, setFormat] = useState<format>("accordion");
  const [plan, setPlan] = useState<Record<string, any> | null>(TEST_PLAN);

  const handleGeneratePlan = async (value: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/generator", {
        prompt: value,
      });
      setPlan(response.data);
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Heading
        title="Generator"
        description="Create a workout plan for your clients"
        icon={Brain}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />

      <div className="px-4 md:px-20 lg:px-32">
        <div className="py-4 flex items-center justify-between">
          <div>
            <Button
              onClick={() => setFormat("accordion")}
              variant={format === "accordion" ? "default" : "ghost"}
            >
              <Rows size={24} />
            </Button>
            <Button
              onClick={() => setFormat("text")}
              variant={format === "text" ? "default" : "ghost"}
            >
              <List size={24} />
            </Button>
          </div>
          <div>
            <PDFDownloadLink
              document={<PlanPDF plan={plan} />}
              fileName="plan.pdf"
              style={{
                textDecoration: "none",
                backgroundColor: "#4F46E5",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: "4px",
              }}
            >
              {({ loading }) =>
                loading ? "Loading document..." : "Save as PDF"
              }
            </PDFDownloadLink>
          </div>
        </div>

        {plan ? (
          <>
            {format === "accordion" ? (
              <PlanDropDown plan={plan} />
            ) : format === "text" ? (
              <PlanText plan={plan} />
            ) : format === "pdf" ? (
              <PDFDownloadLink
                document={<PlanPDF plan={plan} />}
                fileName="plan.pdf"
              >
                {({ loading }) =>
                  loading ? "Loading document..." : "Download now!"
                }
              </PDFDownloadLink>
            ) : null}
          </>
        ) : (
          <div className="px-4 lg:px-8 border border-black/4 rounded-md">
            {isLoading ? (
              <Loading />
            ) : isStarted ? (
              <GeneratorForm handleGeneratePlan={handleGeneratePlan} />
            ) : (
              <>
                <h2 className="text-2xl font-bold text-center mt-8">
                  Generate a workout plan for your clients
                </h2>
                <p className="text-sm text-muted-foreground font-light text-center">
                  Answer a few questions and we'll generate a workout plan for
                  your clients
                </p>
                <div className="flex items-center justify-center h-96">
                  <Button onClick={() => setIsStarted(true)}>Start Form</Button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
