import d1 from '../images/d1.jpg';
import d2 from '../images/d2.jpg';
import d3 from '../images/d3.jpg';
import d4 from '../images/d4.jpg';
import d5 from '../images/d5.jpg';
import d6 from '../images/d6.jpg';
import d7 from '../images/d7.jpg';
import d8 from '../images/d8.jpg';
import d9 from '../images/d9.jpg';
import d10 from '../images/d10.jpg';
import d11 from '../images/d11.jpg';
import d12 from '../images/d12.jpg';
import { StaticImageData } from 'next/image';

interface Data{
  id: string;
  name: String;
  work: string;
  image: StaticImageData
}


let Data: Data[] =[
  {
    id: '1',
    name:'حسن حسنی',
    work:'فیزیوتراپی',
    image: d1
  },  

    {
      id: '2',
      name:'حسن حسنی',
      work:'فیزیوتراپی',
      image: d2
    },
    {
      id: '3',
      name:'رها رهایی',
      work:'پزشک عمومی',
      image: d3
    },
    {
      id: '4',
      name:'سحر سحری',
      work:'متخصص کودکان',
      image: d4,
    },
    {
      id: '5',
      name:'عباس عباسی',
      work:'متخصص زنان زایمان',
      image: d5,
    },
    {
      id: '6',
      name:'اکبر اکبری',
      work:'دندانپزشک',
      image: d6,
    },
    {
      id: '7',
      name:'سیروس سیروسی',
      work:'پزشک عمومی',
      image: d7,
    },
    {
      id: '8',
      name:'ترانه رسولی',
      work:'روانشناس',
      image: d8,
    },
    {
      id: '9',
      name:'بهرام بهرامی',
      work:'اورولوژی',
      image: d9,
    },
    {
      id: '10',
      name:'تینا احدی',
      work:'پزشک عمومی',
      image: d10
    },
    {
      id: '11',
      name:'شهناز شهیادی',
      work:'دندانپزشک',
      image: d11,
    },
    {
      id: '12',
      name:'ندا رسولی',
      work:'متخصص قلب',
      image: d12,
    },
  
  
]

  export default Data;