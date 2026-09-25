import PropTypes from "prop-types";
import {
  SiAxios,
  SiBootstrap,
  SiCss,
  SiFlask,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJinja,
  SiLinux,
  SiOpenjdk,
  SiPostgresql,
  SiMysql,
  SiPython,
  SiReact,
  SiRobotframework,
  SiSelenium,
  SiSqlite,
  SiSupabase,
  SiTotvs,
  SiHackaday
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import {
  FaBug,
  FaClipboardCheck,
  FaCode,
  FaFileLines,
  FaGears,
  FaMagnifyingGlass,
  FaMobileScreenButton,
  FaPeopleGroup,
  FaPlug,
  FaShieldHalved,
  FaCss,
  FaDatabase,
  FaLaptopCode
} from "react-icons/fa6";

const icons = {
  React: SiReact,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  HTML5: SiHtml5,
  CSS: SiCss,
  CSS3: SiCss,
  Bootstrap: SiBootstrap,
  "Layout responsivo": FaMobileScreenButton,
  Python: SiPython,
  Java: SiOpenjdk,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  SQLite: SiSqlite,
  "Integração com APIs": FaPlug,
  "Quality Assurance": FaClipboardCheck,
  "Robot Framework": SiRobotframework,
  Selenium: SiSelenium,
  "Automação de testes": FaGears,
  Git: SiGit,
  GitHub: SiGithub,
  "Azure DevOps": VscAzureDevops,
  "Visual Studio Code": FaLaptopCode,
  Postman: FaPlug,
  "Microsoft Office": FaFileLines,
  "Conceitos de Segurança da informação": FaShieldHalved,
  Linux: SiLinux,
  "Sql Server Management Studio": FaDatabase,
  "Investigação digital": FaMagnifyingGlass,
  "Testes de segurança": FaBug,
  Flask: SiFlask,
  Jinja2: SiJinja,
  Axios: SiAxios,
  Supabase: SiSupabase,
  "Advpr": SiTotvs,
  "Tir": SiTotvs,
  "Pentest": SiHackaday,
  Acessibilidade: FaPeopleGroup,
  SEO: FaMagnifyingGlass,
  "Tailwind CSS": FaCss,
};

export default function StackIcon({ name }) {
  const Icon = icons[name] || FaCode;
  return <Icon className="stack-icon" aria-hidden="true" focusable="false" />;
}

StackIcon.propTypes = {
  name: PropTypes.string.isRequired,
};
