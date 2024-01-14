import GoLogo from "../../assets/go.png";
import ReactLogo from "../../assets/react.png";
import SqlLogo from "../../assets/sql.png";
import PythonLogo from "../../assets/python.jpg";
import TensorFlowLogo from "../../assets/tensorflow.png";
import DockerLogo from "../../assets/docker.png";
import LinuxLogo from "../../assets/linux.png";
import ArduinoLogo from "../../assets/arduino.png";
import EasyEdaLogo from "../../assets/easyeda.png";
import SketchUpLogo from "../../assets/sketchup.png";

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
