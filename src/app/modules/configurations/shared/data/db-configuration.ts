import { IConfiguration } from "../model/configuration.model";

export const DBConfigurations: IConfiguration[] = [
  {
    id: 3001,
    configName: 'ADSL Interface 990',
    type: 'ATM',
    details: 'List of the network interfaces present on the Services Router is displayed. (For information about interface names, see the JUNOS Enhanced Services Interfaces and Routing Configuration Guide.)'
  },
  {
    id: 3002,
    configName: 'Add Service NT001',
    type: 'Networking',
    details: 'Add a new service for CI'
  },
  {
    id: 3003,
    configName: 'Prefix-List',
    type: 'Networking',
    details: ' filter prefixes and are far more powerful than simple access-lists. Let’s say I want to filter all prefixes that fall within the 10.0.0.0 range and that have a subnet mask between /24 and /28'
  },
  {
    id: 3004,
    configName: 'Window 10 Installation',
    type: 'Installation',
    details: 'Disc image (ISO file) that can be used to install or reinstall Windows 10.'
  },
  {
    id: 3005,
    configName: 'Office Installation 2023',
    type: 'Installation',
    details: 'Set Up and Install Microsoft Office on Windows, Serial Number, Error '
  }
]
