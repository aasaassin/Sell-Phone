import Iphone10 from '../static/image/iphone 10.png';
import Iphone11 from '../static/image/iphone 10.png';
import Iphone12 from '../static/image/iphone 10.png';
import Iphone13 from '../static/image/iphone 10.png';
import Iphone14 from '../static/image/iphone 10.png';

export interface IMobileDetails {
  id: number;
  name: string;
  img: string;
  cost: string;
  description: string;
}

export const mobileDetails: IMobileDetails[] = [
  {
    id: 1,
    name: "Iphone 10",
    img: Iphone10,
    cost: "$110",
    description: ""
  },
  {
    id: 2,
    name: "Iphone 11",
    img: Iphone11,
    cost: "$180",
    description: ""
  },
  {
    id: 3,
    name: "Iphone 12",
    img: Iphone12,
    cost: "$120",
    description: ""
  },
  {
    id: 4,
    name: "Iphone 13",
    img: Iphone13,
    cost: "$160",
    description: ""
  },
  {
    id: 5,
    name: "Iphone 14",
    img: Iphone14,
    cost: "$180",
    description: "",
  }
];