import { ISparepart } from "../model/sparepart.model";

export const DBSparepart: ISparepart[] = [
  {
    id: 2001,
    sparepartName : "Wincor stacker",
    quantity: 0,
    type: "ATM",
    locationId: 1,
    modelNumber: "1750058042",
    manufacturer: "Wincor Nixdorf",
    currentStatus: "Empty"
  },
  {
    id: 2002,
    sparepartName : "NCR Casette",
    quantity: 2,
    type: "Disk",
    locationId: 2,
    modelNumber: "445-0728451",
    manufacturer: "NCR",
    currentStatus: "< 3"
  },
  {
    id: 2003,
    sparepartName : "DDR3 1600 4GB Desktop",
    quantity: 10,
    type: "Memory",
    locationId: 1,
    modelNumber: "445-0728451",
    manufacturer: "OEM or Digital Legend",
    currentStatus: "Sufficient"
  },
  {
    id: 2004,
    sparepartName : "B85 Motherboard ",
    quantity: 10,
    type: "Mainboard",
    locationId: 1,
    modelNumber: "8gpus Motherboard",
    manufacturer: "Digital Legend",
    currentStatus: "Sufficient"
  },
  {
    id: 2005,
    sparepartName : "Module 26t Gear",
    quantity: 10,
    type: "ATM",
    locationId: 1,
    modelNumber: "1750041952",
    manufacturer: "Wincor",
    currentStatus: "Sufficient"
  },
  {
    id: 2006,
    sparepartName : "AMD Rx580 8GB",
    quantity: 5,
    type: "Graphic Card",
    locationId: 1,
    modelNumber: "RX 580",
    manufacturer: "AMD",
    currentStatus: "Sufficient"
  },
  {
    id: 2007,
    sparepartName : "Sapphire Graphic Card 580 8GB",
    quantity: 7,
    type: "Graphic Card",
    locationId: 1,
    modelNumber: "Sapphire 580 Graphic Car",
    manufacturer: "NVIDIA",
    currentStatus: "Sufficient"
  }
]
