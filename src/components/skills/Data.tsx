import GoLogo from "../../assets/skills/go.png";
import ReactLogo from "../../assets/skills/react.png";
import SqlLogo from "../../assets/skills/sql.png";
import PythonLogo from "../../assets/skills/python.jpg";
import TensorFlowLogo from "../../assets/skills/tensorflow.png";
import DockerLogo from "../../assets/skills/docker.png";
import LinuxLogo from "../../assets/skills/linux.png";
import ArduinoLogo from "../../assets/skills/arduino.png";
import EasyEdaLogo from "../../assets/skills/easyeda.png";
import SketchUpLogo from "../../assets/skills/sketchup.png";

const logos = [
  GoLogo,
  ReactLogo,
  SqlLogo,
  PythonLogo,
  TensorFlowLogo,
  DockerLogo,
  LinuxLogo,
  ArduinoLogo,
  EasyEdaLogo,
  SketchUpLogo,
];

export const Data = logos.map((logo, index) => ({
  id: index + 1,
  image: logo,
}));
