import { Audiotrack, Description } from "@material-ui/icons";
import { FactCheck, PlayCircle } from "@mui/icons-material";

const Subjects = [
    {
        id: 1,
        subjectName: 'Agriculture',
        subItems: [
            {
                id: 1.1,
                icon: <Description style={{color: '#0B6E4F'}} />,
                title: 'Notes',
                subtitle: 'Lorem ipsum dolor sit asit amet consectetur',
                heading: 'Food Technology : Agriculture machinery',
                data: `ntrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lore`
            },
            {
                id: 1.2,
                icon: <Audiotrack style={{color: '#0B6E4F'}} />,
                title: 'Audio',
                subtitle: 'Lorem ipsum dolor sit asit amet consectetur',
                heading: 'Agriculture Audio',
                data: 'paparapara'
            },
            {
                id: 1.3,
                icon: <PlayCircle style={{color: '#0B6E4F'}} />,
                title: 'Video',
                subtitle: 'Lorem ipsum dolor sit asit amet consectetur',
                heading: 'Agriculture Video',
                data: 'paparapara'
            },
            {
                id: 1.4,
                icon: <FactCheck style={{color: '#0B6E4F'}} />,
                title: 'Sectional Test 1',
                subtitle: '',
                heading: 'Agriculture Quiz',
                data: 'paparapara'
            },

        ]  
    },
    {
        id: 2,
        subjectName: 'Mass Transfer',
        subItems: [
            {
                id: 2.1,
                icon: <Description style={{color: '#0B6E4F'}} />,
                title: 'Notes',
                subtitle: 'Lorem ipsum dolor sit asit amet consectetur',
                heading: 'Mass Transfer',
                data: 'paparapara'
            },
            {
                id: 2.2,
                icon: <Audiotrack style={{color: '#0B6E4F'}} />,
                title: 'Audio',
                subtitle: 'Lorem ipsum dolor sit asit amet consectetur',
                heading: 'Mass Transfer',
                data: 'paparapara'
            },
            {
                id: 2.3,
                icon: <PlayCircle style={{color: '#0B6E4F'}} />,
                title: 'Video',
                subtitle: 'Lorem ipsum dolor sit asit amet consectetur',
                heading: 'Mass Transfer',
                data: 'paparapara'
            },
            {
                id: 2.4,
                icon: <FactCheck style={{color: '#0B6E4F'}} />,
                title: 'Sectional Test 1',
                subtitle: '',
                heading: 'Mass Transfer',
                data: 'paparapara'
            },

        ]  
    },
    {
        id: 3,
        subjectName: 'Statistics',
        subItems: [
            {
                id: 3.1,
                icon: <Description style={{color: '#0B6E4F'}} />,
                title: 'Notes',
                subtitle: 'Lorem ipsum dolor sit asit amet consectetur',
                heading: 'Statistics',
                data: 'paparapara'
            },
            {
                id: 3.2,
                icon: <Audiotrack style={{color: '#0B6E4F'}} />,
                title: 'Audio',
                subtitle: 'Lorem ipsum dolor sit asit amet consectetur',
                heading: 'Statistics',
                data: 'paparapara'
            },
            {
                id: 3.3,
                icon: <PlayCircle style={{color: '#0B6E4F'}} />,
                title: 'Video',
                subtitle: 'Lorem ipsum dolor sit asit amet consectetur',
                heading: 'Statistics',
                data: 'paparapara'
            },
            {
                id: 3.4,
                icon: <FactCheck style={{color: '#0B6E4F'}} />,
                title: 'Sectional Test 1',
                subtitle: '',
                heading: 'Statistics',
                data: 'paparapara'
            },

        ]     
    },
    {
        id: 4,
        subjectName: 'Arithmetics',
        subItems: [
            {
                id: 4.1,
                icon: <Description style={{color: '#0B6E4F'}} />,
                title: 'Notes',
                subtitle: 'Lorem ipsum dolor sit asit amet consectetur',
                heading: 'Arithmetics',
                data: 'paparapara'
            },
            {
                id: 4.2,
                icon: <Audiotrack style={{color: '#0B6E4F'}} />,
                title: 'Audio',
                subtitle: 'Lorem ipsum dolor sit asit amet consectetur',
                heading: 'Arithmetics',
                data: 'paparapara'
            },
            {
                id: 4.3,
                icon: <PlayCircle style={{color: '#0B6E4F'}} />,
                title: 'Video',
                subtitle: 'Lorem ipsum dolor sit asit amet consectetur',
                heading: 'Arithmetics',
                data: 'paparapara'
            },
            {
                id: 4.4,
                icon: <FactCheck style={{color: '#0B6E4F'}} />,
                title: 'Sectional Test 1',
                subtitle: '',
                heading: 'Arithmetics',
                data: 'paparapara'
            },

        ]  
    },
]

export default Subjects;