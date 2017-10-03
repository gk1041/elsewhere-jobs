import React, { Component } from "react";
import "./App.css";
import "typeface-roboto";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import Header from "./Header";
import JobContainer from "./JobContainer";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const jobs = [
  {
    id: "62031",
    date: "2017-10-01T19:07:44-07:00",
    company: "brave-software",
    position: "Blockchain Engineer",
    tags: ["dev", "engineer", "digital nomad"],
    logo: "",
    description:
      "The Blockchain Engineer will be responsible for the architecture and implementation of blockchain-based technologies for the [BAT roadmap](https://basicattentiontoken.org/bat-roadmap-1-0/). The primary task is the development of an open decentralized blockchain-based ads ecosystem, involving user contributions, attention rewards, and publisher contributions over several phases. The first phase will include transition of our existing Bitcoin based proof-of-concept, so familiarity with Bitcoin is a plus.\r\n\r\nThe ideal candidate will have previously worked with distributed applications, have extensive familiarity with Ethereum and related blockchain technologies including smart contracts (especially ERC-20 tokens), sidechains, and state channels. They must be well versed in the current best practices surrounding smart contract development and be able to rigorously test and verify contract code.\r\n\r\nThis position reports to the BAT Cloud Manager and will work in collaboration with ad-tech, cloud, privacy and security engineers.\r\n\r\n__Benefits__\r\n\r\n* Competitive salary\r\n* 4 weeks (20 days) of paid vacation per year\r\n* Excellent medical coverage\r\n* Generous 401k plan\r\n* Stock option grant\r\n* Travel and conference budgets\r\n* Commuters benefit (On\u00c2\u00adsite only)\r\n* Hip office in the SoMA neighborhood of SF\r\n \r\nCandidates must be legally authorized to work in the United States or Canada. ",
    url:
      "https://remoteok.io/jobs/62034-remote-blockchain-engineer-brave-software"
  },
  {
    id: "62032",
    date: "2017-10-01T19:07:44-07:00",
    company: "brave-software",
    position: "Blockchain Engineer",
    tags: ["dev", "engineer", "digital nomad"],
    logo: "",
    description:
      "The Blockchain Engineer will be responsible for the architecture and implementation of blockchain-based technologies for the [BAT roadmap](https://basicattentiontoken.org/bat-roadmap-1-0/). The primary task is the development of an open decentralized blockchain-based ads ecosystem, involving user contributions, attention rewards, and publisher contributions over several phases. The first phase will include transition of our existing Bitcoin based proof-of-concept, so familiarity with Bitcoin is a plus.\r\n\r\nThe ideal candidate will have previously worked with distributed applications, have extensive familiarity with Ethereum and related blockchain technologies including smart contracts (especially ERC-20 tokens), sidechains, and state channels. They must be well versed in the current best practices surrounding smart contract development and be able to rigorously test and verify contract code.\r\n\r\nThis position reports to the BAT Cloud Manager and will work in collaboration with ad-tech, cloud, privacy and security engineers.\r\n\r\n__Benefits__\r\n\r\n* Competitive salary\r\n* 4 weeks (20 days) of paid vacation per year\r\n* Excellent medical coverage\r\n* Generous 401k plan\r\n* Stock option grant\r\n* Travel and conference budgets\r\n* Commuters benefit (On\u00c2\u00adsite only)\r\n* Hip office in the SoMA neighborhood of SF\r\n \r\nCandidates must be legally authorized to work in the United States or Canada. ",
    url:
      "https://remoteok.io/jobs/62034-remote-blockchain-engineer-brave-software"
  },
  {
    id: "62033",
    date: "2017-10-01T19:07:44-07:00",
    company: "brave-software",
    position: "Blockchain Engineer",
    tags: ["dev", "engineer", "digital nomad"],
    logo: "",
    description:
      "The Blockchain Engineer will be responsible for the architecture and implementation of blockchain-based technologies for the [BAT roadmap](https://basicattentiontoken.org/bat-roadmap-1-0/). The primary task is the development of an open decentralized blockchain-based ads ecosystem, involving user contributions, attention rewards, and publisher contributions over several phases. The first phase will include transition of our existing Bitcoin based proof-of-concept, so familiarity with Bitcoin is a plus.\r\n\r\nThe ideal candidate will have previously worked with distributed applications, have extensive familiarity with Ethereum and related blockchain technologies including smart contracts (especially ERC-20 tokens), sidechains, and state channels. They must be well versed in the current best practices surrounding smart contract development and be able to rigorously test and verify contract code.\r\n\r\nThis position reports to the BAT Cloud Manager and will work in collaboration with ad-tech, cloud, privacy and security engineers.\r\n\r\n__Benefits__\r\n\r\n* Competitive salary\r\n* 4 weeks (20 days) of paid vacation per year\r\n* Excellent medical coverage\r\n* Generous 401k plan\r\n* Stock option grant\r\n* Travel and conference budgets\r\n* Commuters benefit (On\u00c2\u00adsite only)\r\n* Hip office in the SoMA neighborhood of SF\r\n \r\nCandidates must be legally authorized to work in the United States or Canada. ",
    url:
      "https://remoteok.io/jobs/62034-remote-blockchain-engineer-brave-software"
  },
  {
    id: "162031",
    date: "2017-10-01T19:07:44-07:00",
    company: "brave-software",
    position: "Blockchain Engineer",
    tags: ["dev", "engineer", "digital nomad"],
    logo: "",
    description:
      "The Blockchain Engineer will be responsible for the architecture and implementation of blockchain-based technologies for the [BAT roadmap](https://basicattentiontoken.org/bat-roadmap-1-0/). The primary task is the development of an open decentralized blockchain-based ads ecosystem, involving user contributions, attention rewards, and publisher contributions over several phases. The first phase will include transition of our existing Bitcoin based proof-of-concept, so familiarity with Bitcoin is a plus.\r\n\r\nThe ideal candidate will have previously worked with distributed applications, have extensive familiarity with Ethereum and related blockchain technologies including smart contracts (especially ERC-20 tokens), sidechains, and state channels. They must be well versed in the current best practices surrounding smart contract development and be able to rigorously test and verify contract code.\r\n\r\nThis position reports to the BAT Cloud Manager and will work in collaboration with ad-tech, cloud, privacy and security engineers.\r\n\r\n__Benefits__\r\n\r\n* Competitive salary\r\n* 4 weeks (20 days) of paid vacation per year\r\n* Excellent medical coverage\r\n* Generous 401k plan\r\n* Stock option grant\r\n* Travel and conference budgets\r\n* Commuters benefit (On\u00c2\u00adsite only)\r\n* Hip office in the SoMA neighborhood of SF\r\n \r\nCandidates must be legally authorized to work in the United States or Canada. ",
    url:
      "https://remoteok.io/jobs/62034-remote-blockchain-engineer-brave-software"
  },
  {
    id: "162032",
    date: "2017-10-01T19:07:44-07:00",
    company: "brave-software",
    position: "Blockchain Engineer",
    tags: ["dev", "engineer", "digital nomad"],
    logo: "",
    description:
      "The Blockchain Engineer will be responsible for the architecture and implementation of blockchain-based technologies for the [BAT roadmap](https://basicattentiontoken.org/bat-roadmap-1-0/). The primary task is the development of an open decentralized blockchain-based ads ecosystem, involving user contributions, attention rewards, and publisher contributions over several phases. The first phase will include transition of our existing Bitcoin based proof-of-concept, so familiarity with Bitcoin is a plus.\r\n\r\nThe ideal candidate will have previously worked with distributed applications, have extensive familiarity with Ethereum and related blockchain technologies including smart contracts (especially ERC-20 tokens), sidechains, and state channels. They must be well versed in the current best practices surrounding smart contract development and be able to rigorously test and verify contract code.\r\n\r\nThis position reports to the BAT Cloud Manager and will work in collaboration with ad-tech, cloud, privacy and security engineers.\r\n\r\n__Benefits__\r\n\r\n* Competitive salary\r\n* 4 weeks (20 days) of paid vacation per year\r\n* Excellent medical coverage\r\n* Generous 401k plan\r\n* Stock option grant\r\n* Travel and conference budgets\r\n* Commuters benefit (On\u00c2\u00adsite only)\r\n* Hip office in the SoMA neighborhood of SF\r\n \r\nCandidates must be legally authorized to work in the United States or Canada. ",
    url:
      "https://remoteok.io/jobs/62034-remote-blockchain-engineer-brave-software"
  },
  {
    id: "162033",
    date: "2017-10-01T19:07:44-07:00",
    company: "brave-software",
    position: "Blockchain Engineer",
    tags: ["dev", "engineer", "digital nomad"],
    logo: "",
    description:
      "The Blockchain Engineer will be responsible for the architecture and implementation of blockchain-based technologies for the [BAT roadmap](https://basicattentiontoken.org/bat-roadmap-1-0/). The primary task is the development of an open decentralized blockchain-based ads ecosystem, involving user contributions, attention rewards, and publisher contributions over several phases. The first phase will include transition of our existing Bitcoin based proof-of-concept, so familiarity with Bitcoin is a plus.\r\n\r\nThe ideal candidate will have previously worked with distributed applications, have extensive familiarity with Ethereum and related blockchain technologies including smart contracts (especially ERC-20 tokens), sidechains, and state channels. They must be well versed in the current best practices surrounding smart contract development and be able to rigorously test and verify contract code.\r\n\r\nThis position reports to the BAT Cloud Manager and will work in collaboration with ad-tech, cloud, privacy and security engineers.\r\n\r\n__Benefits__\r\n\r\n* Competitive salary\r\n* 4 weeks (20 days) of paid vacation per year\r\n* Excellent medical coverage\r\n* Generous 401k plan\r\n* Stock option grant\r\n* Travel and conference budgets\r\n* Commuters benefit (On\u00c2\u00adsite only)\r\n* Hip office in the SoMA neighborhood of SF\r\n \r\nCandidates must be legally authorized to work in the United States or Canada. ",
    url:
      "https://remoteok.io/jobs/62034-remote-blockchain-engineer-brave-software"
  },
  {
    id: "262031",
    date: "2017-10-01T19:07:44-07:00",
    company: "brave-software",
    position: "Blockchain Engineer",
    tags: ["dev", "engineer", "digital nomad"],
    logo: "",
    description:
      "The Blockchain Engineer will be responsible for the architecture and implementation of blockchain-based technologies for the [BAT roadmap](https://basicattentiontoken.org/bat-roadmap-1-0/). The primary task is the development of an open decentralized blockchain-based ads ecosystem, involving user contributions, attention rewards, and publisher contributions over several phases. The first phase will include transition of our existing Bitcoin based proof-of-concept, so familiarity with Bitcoin is a plus.\r\n\r\nThe ideal candidate will have previously worked with distributed applications, have extensive familiarity with Ethereum and related blockchain technologies including smart contracts (especially ERC-20 tokens), sidechains, and state channels. They must be well versed in the current best practices surrounding smart contract development and be able to rigorously test and verify contract code.\r\n\r\nThis position reports to the BAT Cloud Manager and will work in collaboration with ad-tech, cloud, privacy and security engineers.\r\n\r\n__Benefits__\r\n\r\n* Competitive salary\r\n* 4 weeks (20 days) of paid vacation per year\r\n* Excellent medical coverage\r\n* Generous 401k plan\r\n* Stock option grant\r\n* Travel and conference budgets\r\n* Commuters benefit (On\u00c2\u00adsite only)\r\n* Hip office in the SoMA neighborhood of SF\r\n \r\nCandidates must be legally authorized to work in the United States or Canada. ",
    url:
      "https://remoteok.io/jobs/62034-remote-blockchain-engineer-brave-software"
  },
  {
    id: "262032",
    date: "2017-10-01T19:07:44-07:00",
    company: "brave-software",
    position: "Blockchain Engineer",
    tags: ["dev", "engineer", "digital nomad"],
    logo: "",
    description:
      "The Blockchain Engineer will be responsible for the architecture and implementation of blockchain-based technologies for the [BAT roadmap](https://basicattentiontoken.org/bat-roadmap-1-0/). The primary task is the development of an open decentralized blockchain-based ads ecosystem, involving user contributions, attention rewards, and publisher contributions over several phases. The first phase will include transition of our existing Bitcoin based proof-of-concept, so familiarity with Bitcoin is a plus.\r\n\r\nThe ideal candidate will have previously worked with distributed applications, have extensive familiarity with Ethereum and related blockchain technologies including smart contracts (especially ERC-20 tokens), sidechains, and state channels. They must be well versed in the current best practices surrounding smart contract development and be able to rigorously test and verify contract code.\r\n\r\nThis position reports to the BAT Cloud Manager and will work in collaboration with ad-tech, cloud, privacy and security engineers.\r\n\r\n__Benefits__\r\n\r\n* Competitive salary\r\n* 4 weeks (20 days) of paid vacation per year\r\n* Excellent medical coverage\r\n* Generous 401k plan\r\n* Stock option grant\r\n* Travel and conference budgets\r\n* Commuters benefit (On\u00c2\u00adsite only)\r\n* Hip office in the SoMA neighborhood of SF\r\n \r\nCandidates must be legally authorized to work in the United States or Canada. ",
    url:
      "https://remoteok.io/jobs/62034-remote-blockchain-engineer-brave-software"
  },
  {
    id: "262033",
    date: "2017-10-01T19:07:44-07:00",
    company: "brave-software",
    position: "Blockchain Engineer",
    tags: ["dev", "engineer", "digital nomad"],
    logo: "",
    description:
      "The Blockchain Engineer will be responsible for the architecture and implementation of blockchain-based technologies for the [BAT roadmap](https://basicattentiontoken.org/bat-roadmap-1-0/). The primary task is the development of an open decentralized blockchain-based ads ecosystem, involving user contributions, attention rewards, and publisher contributions over several phases. The first phase will include transition of our existing Bitcoin based proof-of-concept, so familiarity with Bitcoin is a plus.\r\n\r\nThe ideal candidate will have previously worked with distributed applications, have extensive familiarity with Ethereum and related blockchain technologies including smart contracts (especially ERC-20 tokens), sidechains, and state channels. They must be well versed in the current best practices surrounding smart contract development and be able to rigorously test and verify contract code.\r\n\r\nThis position reports to the BAT Cloud Manager and will work in collaboration with ad-tech, cloud, privacy and security engineers.\r\n\r\n__Benefits__\r\n\r\n* Competitive salary\r\n* 4 weeks (20 days) of paid vacation per year\r\n* Excellent medical coverage\r\n* Generous 401k plan\r\n* Stock option grant\r\n* Travel and conference budgets\r\n* Commuters benefit (On\u00c2\u00adsite only)\r\n* Hip office in the SoMA neighborhood of SF\r\n \r\nCandidates must be legally authorized to work in the United States or Canada. ",
    url:
      "https://remoteok.io/jobs/62034-remote-blockchain-engineer-brave-software"
  },
  {
    id: "362031",
    date: "2017-10-01T19:07:44-07:00",
    company: "brave-software",
    position: "Blockchain Engineer",
    tags: ["dev", "engineer", "digital nomad"],
    logo: "",
    description:
      "The Blockchain Engineer will be responsible for the architecture and implementation of blockchain-based technologies for the [BAT roadmap](https://basicattentiontoken.org/bat-roadmap-1-0/). The primary task is the development of an open decentralized blockchain-based ads ecosystem, involving user contributions, attention rewards, and publisher contributions over several phases. The first phase will include transition of our existing Bitcoin based proof-of-concept, so familiarity with Bitcoin is a plus.\r\n\r\nThe ideal candidate will have previously worked with distributed applications, have extensive familiarity with Ethereum and related blockchain technologies including smart contracts (especially ERC-20 tokens), sidechains, and state channels. They must be well versed in the current best practices surrounding smart contract development and be able to rigorously test and verify contract code.\r\n\r\nThis position reports to the BAT Cloud Manager and will work in collaboration with ad-tech, cloud, privacy and security engineers.\r\n\r\n__Benefits__\r\n\r\n* Competitive salary\r\n* 4 weeks (20 days) of paid vacation per year\r\n* Excellent medical coverage\r\n* Generous 401k plan\r\n* Stock option grant\r\n* Travel and conference budgets\r\n* Commuters benefit (On\u00c2\u00adsite only)\r\n* Hip office in the SoMA neighborhood of SF\r\n \r\nCandidates must be legally authorized to work in the United States or Canada. ",
    url:
      "https://remoteok.io/jobs/62034-remote-blockchain-engineer-brave-software"
  },
  {
    id: "362032",
    date: "2017-10-01T19:07:44-07:00",
    company: "brave-software",
    position: "Blockchain Engineer",
    tags: ["dev", "engineer", "digital nomad"],
    logo: "",
    description:
      "The Blockchain Engineer will be responsible for the architecture and implementation of blockchain-based technologies for the [BAT roadmap](https://basicattentiontoken.org/bat-roadmap-1-0/). The primary task is the development of an open decentralized blockchain-based ads ecosystem, involving user contributions, attention rewards, and publisher contributions over several phases. The first phase will include transition of our existing Bitcoin based proof-of-concept, so familiarity with Bitcoin is a plus.\r\n\r\nThe ideal candidate will have previously worked with distributed applications, have extensive familiarity with Ethereum and related blockchain technologies including smart contracts (especially ERC-20 tokens), sidechains, and state channels. They must be well versed in the current best practices surrounding smart contract development and be able to rigorously test and verify contract code.\r\n\r\nThis position reports to the BAT Cloud Manager and will work in collaboration with ad-tech, cloud, privacy and security engineers.\r\n\r\n__Benefits__\r\n\r\n* Competitive salary\r\n* 4 weeks (20 days) of paid vacation per year\r\n* Excellent medical coverage\r\n* Generous 401k plan\r\n* Stock option grant\r\n* Travel and conference budgets\r\n* Commuters benefit (On\u00c2\u00adsite only)\r\n* Hip office in the SoMA neighborhood of SF\r\n \r\nCandidates must be legally authorized to work in the United States or Canada. ",
    url:
      "https://remoteok.io/jobs/62034-remote-blockchain-engineer-brave-software"
  },
  {
    id: "362033",
    date: "2017-10-01T19:07:44-07:00",
    company: "brave-software",
    position: "Blockchain Engineer",
    tags: ["dev", "engineer", "digital nomad"],
    logo: "",
    description:
      "The Blockchain Engineer will be responsible for the architecture and implementation of blockchain-based technologies for the [BAT roadmap](https://basicattentiontoken.org/bat-roadmap-1-0/). The primary task is the development of an open decentralized blockchain-based ads ecosystem, involving user contributions, attention rewards, and publisher contributions over several phases. The first phase will include transition of our existing Bitcoin based proof-of-concept, so familiarity with Bitcoin is a plus.\r\n\r\nThe ideal candidate will have previously worked with distributed applications, have extensive familiarity with Ethereum and related blockchain technologies including smart contracts (especially ERC-20 tokens), sidechains, and state channels. They must be well versed in the current best practices surrounding smart contract development and be able to rigorously test and verify contract code.\r\n\r\nThis position reports to the BAT Cloud Manager and will work in collaboration with ad-tech, cloud, privacy and security engineers.\r\n\r\n__Benefits__\r\n\r\n* Competitive salary\r\n* 4 weeks (20 days) of paid vacation per year\r\n* Excellent medical coverage\r\n* Generous 401k plan\r\n* Stock option grant\r\n* Travel and conference budgets\r\n* Commuters benefit (On\u00c2\u00adsite only)\r\n* Hip office in the SoMA neighborhood of SF\r\n \r\nCandidates must be legally authorized to work in the United States or Canada. ",
    url:
      "https://remoteok.io/jobs/62034-remote-blockchain-engineer-brave-software"
  }
];

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Header />
          <JobContainer jobCards={jobs} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
