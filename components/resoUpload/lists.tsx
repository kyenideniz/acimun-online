import { Option } from "../selectBox";

export const delegations = [
  {
    value: "turkey",
    label: "Turkey",
  },
  {
    value: "germany",
    label: "Germany",
  },
  {
    value: "japan",
    label: "Japan",
  },
  {
    value: "israel",
    label: "Israel",
  },
  {
    value: "venice",
    label: "Venice",
  },
]

export const committees = [
  {
    value: "ga1",
    label: "GA1",
  },
  {
    value: "ga2",
    label: "GA2",
  },
  {
    value: "ga3",
    label: "GA3",
  },
  {
    value: "ga4",
    label: "GA4",
  },
  {
    value: "ga5",
    label: "GA5",
  },
]

let GA1, GA2: Option[]; 

export const issues = [
    {
      committee:"GA1", 
      value: "1-1",
      label: "Redirecting military spending for socio-economic development",
    }, 
    {
      committee:"GA1",
      value: "1-2",
      label: "Applying sustainable strategies to prevent resource-related conflicts",
    },
    {
      committee:"GA1",
      value: "1-3",
      label: "The question of non-proliferating Weapons of Mass Destruction (WMDs)",
    },
    {
      committee:"GA2",
      value: "2-1",
      label: "Tackling the humanitarian crisis in Ethiopia",
    },
    {
      committee:"GA2",
      value: "2-2",
      label: "Promoting strategies to improve transparency in the distribution of humanitarian aid",
    },
    {
      committee:"GA2",
      value: "2-3",
      label: "Implementing measures to tackle the consequential spread of extremist ideologies in Europe as a consequence of the refugee crisis",
    },
]