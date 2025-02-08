export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    link?: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: "time-overflow-productivity",
      title: "Time Overflow: The Idea of Using Time Logging to Boost Productivity",
      excerpt: "Time logging is a powerful tool that helps you understand where your time goes. By tracking your daily activities, you can identify time-wasting patterns and make conscious decisions to improve your productivity.",
      date: "2-8-2025",
      readTime: "6 min read",
      link: "https://infinitycoder.hashnode.dev/time-overflow-the-idea-of-using-time-logging-to-boost-productivity"
    },
    {
      id: "react-native-expo-choice",
      title: "Why I Chose React Native Expo for Time Overflow",
      excerpt: "Exploring the decision-making process and benefits of selecting React Native with Expo for mobile app development, including rapid prototyping, cross-platform capabilities, and excellent developer experience.",
      date: "12-30-2024",
      readTime: "5 min read",
      link: "https://infinitycoder.hashnode.dev/why-i-chose-the-react-native-expo-for-my-new-mobile-app"
    }
  ]
  