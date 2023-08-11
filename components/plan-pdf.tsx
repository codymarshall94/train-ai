import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#F2F2F2",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    border: "1pt solid #CCCCCC",
    borderRadius: 4,
  },
  text: {
    fontSize: 12,
    lineHeight: 1.5,
  },
  exercise: {
    fontSize: 12,
    marginLeft: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  boldText: {
    fontWeight: "bold",
    marginTop: 10,
  },
  underlineText: {
    textDecoration: "underline",
  },
});

export default function PlanPDF({
  plan,
}: {
  plan: Record<string, any> | null;
}) {
  const renderExercises = (exercises: any[]) => {
    return exercises.map((exercise, index) => (
      <View key={index} style={styles.exercise}>
        <Text>Name: {exercise.name}</Text>
        <Text>Sets/Reps: {exercise.setsReps}</Text>
        <Text>Notes: {exercise.notes}</Text>
      </View>
    ));
  };

  const renderDays = (days: any[]) => {
    return days.map((day, index) => (
      <View key={index}>
        <Text style={styles.underlineText}>Day {day.dayNumber}</Text>
        {renderExercises(day.exercises)}
      </View>
    ));
  };

  const renderWeeks = (weeks: any[]) => {
    return weeks.map((week, index) => (
      <View key={index} style={styles.boldText}>
        {renderDays(week.days)}
      </View>
    ));
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Workout Plan</Text>
          <Text style={styles.text}>
            Overview: {plan?.workoutPlan.overview}
          </Text>
          <Text style={styles.boldText}>Weeks:</Text>
          {renderWeeks(plan?.workoutPlan.weeks)}
        </View>
      </Page>
    </Document>
  );
}
