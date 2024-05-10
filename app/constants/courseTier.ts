import { Topic } from "../components/topics";

interface CourseType {
  title: string;
  tier: Topic;
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
      "Breakout & Breakdown Strategies",
      "Essential Indicators",
      "Basic to Advance Futures & Options",
      "Option Greeks",
      "Commodity",
      "Risk Management",
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
      "Swing, Momentum, and Positional Strategy",
      "Trend Analysis",
      "Advanced Indicators",
      "Advanced Chart Patterns and Trap Analysis",
      "Multi-Time Frame Analysis",
    ],
  },
];

export default CoursesList;
