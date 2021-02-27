import {
  CircularProgress,
  CircularProgressLabel,
  Icon,
} from "@chakra-ui/react";
import {
  SiCplusplus,
  SiCsharp,
  SiJava,
  SiJavascript,
  SiPython,
  SiReact,
  SiVueDotJs,
  SiNodeDotJs,
  SiDocker,
  SiMongodb,
  SiUnity,
  SiUnrealengine,
  SiHtml5,
  SiNextDotJs,
  SiPostgresql,
  SiGit,
  SiUbuntu,
  SiFirebase,
} from "react-icons/si";

const Skill = ({ keywords, rating }) => {
  const icons = [
    {
      name: "react",
      icon: SiReact,
      color: "blue.300",
    },
    {
      name: "vue",
      icon: SiVueDotJs,
      color: "green.400",
    },
    {
      name: "nodejs",
      icon: SiNodeDotJs,
      color: "green.600",
    },
    {
      name: "docker",
      icon: SiDocker,
      color: "blue.500",
    },
    {
      name: "mongodb",
      icon: SiMongodb,
      color: "green.500",
    },
    {
      name: "python",
      icon: SiPython,
      color: "yellow.300",
    },
    {
      name: "javascript",
      icon: SiJavascript,
      color: "black",
    },
    {
      name: "java",
      icon: SiJava,
      color: "orange.500",
    },
    {
      name: "csharp",
      icon: SiCsharp,
      color: "purple.600",
    },
    {
      name: "cplusplus",
      icon: SiCplusplus,
      color: "blue.600",
    },
    {
      name: "unity",
      icon: SiUnity,
      color: "black",
    },
    {
      name: "unrealengine",
      icon: SiUnrealengine,
      color: "black",
    },
    {
      name: "html",
      icon: SiHtml5,
      color: "orange.500",
    },
    {
      name: "nextjs",
      icon: SiNextDotJs,
      color: "gray.700",
    },
    {
      name: "postgresql",
      icon: SiPostgresql,
      color: "blue.800",
    },
    {
      name: "firebase",
      icon: SiFirebase,
      color: "yellow.300",
    },
    {
      name: "ubuntu",
      icon: SiUbuntu,
      color: "orange.500",
    },
    {
      name: "git",
      icon: SiGit,
      color: "orange.700",
    },
  ];

  const iconInfo = icons.find((icon) => icon.name === keywords[0]);

  return (
    <CircularProgress
      value={rating * 20}
      size={100}
      thickness={2}
      color={iconInfo ? iconInfo.color : "black"}
    >
      <CircularProgressLabel>
        <Icon as={iconInfo.icon} w={50} h={50} color={iconInfo.color} />
      </CircularProgressLabel>
    </CircularProgress>
  );
};

export default Skill;
