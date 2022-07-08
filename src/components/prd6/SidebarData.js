import React from 'react';
//import * as FaIcons from 'react-icons/fa';
//import * as AiIcons from 'react-icons/ai';
//import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { Audiotrack, Description } from "@material-ui/icons";
import { FactCheck, PlayCircle } from "@mui/icons-material";

export const SidebarData = [
  {
    title: 'Agriculture',
    path: '/reports',

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Notes:',
        path: '/reports/reports1',
        subtitle: 'Lorem ipsum dolor sit asit amet consectetur',       
        icon: <Description style={{color: '#0B6E4F'}} />
      },
      {
        title: 'Audio:',
        path: '/reports/reports2',
        subtitle: 'Lorem ipsum dolor sit asit amet consectetur',
               
        icon: <Audiotrack style={{color: '#0B6E4F'}} />
      },
      {
        title: 'Video:',
        path: '/reports/reports3',
        subtitle: 'Lorem ipsum dolor sit asit amet consectetur',
        icon: <PlayCircle style={{color: '#0B6E4F'}} />
      },
      {
        title: 'Sectional test 1',
        path: '/reports/reports4',
        icon: <FactCheck style={{color: '#0B6E4F'}} />
      }
      
    ]
  },
  {
    title: 'Mass Transfer',
    path: '/reports',

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Notes:',
        path: '/reports/reports11',
        subtitle: 'Lorem ipsum dolor sit asit amet consectetur',
               
        icon: <Description style={{color: '#0B6E4F'}} />
      },
      {
        title: 'Audio:',
        path: '/reports/reports21',
        subtitle: 'Lorem ipsum dolor sit asit amet consectetur',
               
        icon: <Audiotrack style={{color: '#0B6E4F'}} />
      },
      {
        title: 'Video:',
        path: '/reports/reports31',
        subtitle: 'Lorem ipsum dolor sit asit amet consectetur',
        icon: <PlayCircle style={{color: '#0B6E4F'}} />
      },
      {
        title: 'Sectional test 1',
        path: '/reports/reports41',
        icon: <FactCheck style={{color: '#0B6E4F'}} />
      }
      
    ]
  },
  {
    title: 'Statistics',
    path: '/reports',

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Notes:',
        path: '/reports/reports11',
        subtitle: 'Lorem ipsum dolor sit asit amet consectetur',
               
        icon: <Description style={{color: '#0B6E4F'}} />
      },
      {
        title: 'Audio:',
        path: '/reports/reports21',
        subtitle: 'Lorem ipsum dolor sit asit amet consectetur',
               
        icon: <Audiotrack style={{color: '#0B6E4F'}} />
      },
      {
        title: 'Video:',
        path: '/reports/reports31',
        subtitle: 'Lorem ipsum dolor sit asit amet consectetur',
        icon: <PlayCircle style={{color: '#0B6E4F'}} />
      },
      {
        title: 'Sectional test 1',
        path: '/reports/reports41',
        icon: <FactCheck style={{color: '#0B6E4F'}} />
      }
      
    ]
  },
  {
    title: 'Arithmetics',
    path: '/reports',

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Notes:',
        path: '/reports/reports11',
        subtitle: 'Lorem ipsum dolor sit asit amet consectetur',
               
        icon: <Description style={{color: '#0B6E4F'}} />
      },
      {
        title: 'Audio:',
        path: '/reports/reports21',
        subtitle: 'Lorem ipsum dolor sit asit amet consectetur',
               
        icon: <Audiotrack style={{color: '#0B6E4F'}} />
      },
      {
        title: 'Video:',
        path: '/reports/reports3',
        subtitle: 'Lorem ipsum dolor sit asit amet consectetur',
        icon: <PlayCircle style={{color: '#0B6E4F'}} />
      },
      {
        title: 'Sectional test 1',
        path: '/reports/reports41',
        icon: <FactCheck style={{color: '#0B6E4F'}} />
      }
      
    ]
  },
];
