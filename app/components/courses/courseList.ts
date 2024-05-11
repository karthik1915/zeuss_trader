import { Courses } from ".";

interface CourseType {
  title: string;
  tier: Courses;
  subtitle: string;
  point: string[];
}

const CoursesList: CourseType[] = [
  {
    title: "Basic To Advanced Course",
    subtitle: "1 Month",
    tier: "Beginner",
    point: [
      "Market Trend Analysis",
      "Candlestick Mastery",
      "Chart Pattern Recognition",
      "Support & Resistance Analysis",
      "Essential Indicators",
      "Option Greeks",
      "Commodity",
      "Risk Management",
      "Breakout & Breakdown Strategies",
      "Basic to Advance Futures & Options",
      "Share/Stock Market View & Investing Chart Practice",
    ],
  },
  {
    title: "Master In Price Action - Trend & Direction-Based Analysis",
    subtitle: "1 Month",
    tier: "Advanced",
    point: [
      "Advanced Price Action Strategies",
      "Price Action Analysis",
      "Risk Management Strategies",
      "Fibonacci Retracement",
      "Trend Analysis",
      "Advanced Indicators",
      "Multi-Time Frame Analysis",
      "Swing, Momentum, and Positional Strategy",
      "Advanced Chart Patterns and Trap Analysis",
    ],
  },
];

export default CoursesList;
